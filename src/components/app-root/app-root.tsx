import { Component, h, Listen } from '@stencil/core';
import { BlogData } from '../../services/blog-data';
import { PageData } from '../../services/page-data';

import { EnvironmentConfigService } from '../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');
const recordAnalytics: boolean = EnvironmentConfigService.getInstance().get('recordAnalytics');
const siteName: string = EnvironmentConfigService.getInstance().get('siteName');
declare let gtag: Function;

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  data: any;

  unfoundRoute: any;

  pageData: any = [];

  // See: How To Properly Add Google Analytics Tracking to Your Angular Web App...
  // https://medium.com/@PurpleGreenLemon/how-to-properly-add-google-analytics-tracking-to-your-angular-web-app-bc7750713c9e
  @Listen('ionRouteDidChange')
  routeDidChangeHandler(event: CustomEvent) {
    if (debug) {
      console.log('> AppRoot.routeDidChangeHandler > event.detail: %o', event.detail);
    }

    // Fix for Issue #5 - Switching main menu pages doesn't change page titles when clicking already loaded main page
    if (event.detail.to == '/home') {
      document.title = 'Home | ' + siteName;
    } else if (event.detail.to == '/blog') {
      document.title = 'Blog | ' + siteName;
    } else if (event.detail.to == '/books') {
      document.title = 'Books | ' + siteName;
    } else if (event.detail.to == '/about') {
      document.title = 'About | ' + siteName;
    }

    if (recordAnalytics) {
      if (event.detail.redirectedFrom !== null) {
        ;
        // We want to track what the user actually entered or clicked to get to the destination, not necessarily 
        // where they got redirected to (mainly '/' instead of 'blog'). If a redirection exists, take the redirectedFrom...
        gtag('config', 'UA-21819432-1', { 'page_path': event.detail.redirectedFrom });
      } else {
        // otherwise, take the to...
        gtag('config', 'UA-21819432-1', { 'page_path': event.detail.to });
      }
    }
  }

  async componentWillLoad() {
    if (debug) {
      console.log('> AppRoot.componentWillLoad');
    }

    this.pageData = await PageData.load();

    // This helps handle undefined routes ("page not found" cases)
    this.data = await BlogData.load();
    let routeId = window.location.pathname.substring(1);
    let header = BlogData.getPostHeaderById(routeId);
    // If there is no header returned, the slug does not exist in the blog posts
    if (!header) {
      // We also need to bypass any parametrized routes that we've defined...
      switch (routeId) {
        case 'photos/curt-bruce':
          break;
        case 'photos/ed-kalwara':
          break;
        case 'photos/gary-culp':
          break;
        case 'photos/jack-depope':
          break;
        case 'photos/james-haight':
          break;
        case 'photos/jim-shipp':
          break;
        case 'photos/ray-kelley':
          break;
        case 'photos/stanley-hall':
          break;
        default:
          // ...and finally we dynamically add the undefined route to the router and point it to Page Not Found.
          this.unfoundRoute = (<ion-route url={'/' + routeId + '/'} component="app-404-page-not-found" />);
      }

    }
  }

  renderRouter() {

    const blogPostRoutes = [];

    this.data.content.map((item) => {
      blogPostRoutes.push(<ion-route url={'/' + item.id} component="tab-blog" ><ion-route component={'page-' + item.id}></ion-route></ion-route>)
    });

    return (
      <ion-router useHash={false}>
        <ion-route-redirect from="/" to='/blog' />
        <ion-route component="app-tabs">
        <ion-route url="/home" component="tab-home">
            <ion-route component="page-home"></ion-route>
          </ion-route>
          <ion-route url="/blog" component="tab-blog">
            <ion-route component="page-blog"></ion-route>
          </ion-route>
          <ion-route url="/books" component="tab-books">
            <ion-route component="page-books"></ion-route>
          </ion-route>
          <ion-route url="/about" component="tab-about">
            <ion-route component="page-about"></ion-route>
          </ion-route>
          <ion-route url="/about" component="tab-about">
            <ion-route url="/life-events" component="page-life-events"></ion-route>
          </ion-route>
          <ion-route url="/beaver-cage-command-chron" component="tab-books">
            <ion-route component="page-cmd-chron-beaver-cage"></ion-route>
          </ion-route>
          <ion-route url="/cage" component="tab-books">
            <ion-route component="page-cage"></ion-route>
          </ion-route>
          <ion-route url="/d-1-3-weapons-platoon" component="tab-books">
            <ion-route component="page-photos-weapons-platoon"></ion-route>
          </ion-route>
          <ion-route url="/ray-kelley-silver-star" component="tab-books">
            <ion-route component="page-ray-kelley-silver-star"></ion-route>
          </ion-route>
          <ion-route url="/photos" component="tab-books">
            <ion-route url="/:name" component="app-photos"></ion-route>
          </ion-route>
          <ion-route url="/vietnam-1967-amphibious-combat" component="tab-books">
            <ion-route component="page-vietnam-1967-amphibious-combat"></ion-route>
          </ion-route>

          {blogPostRoutes}

        </ion-route>
        {this.unfoundRoute}

      </ion-router>
    );
  }

  renderMenu() {
    const pages = [];

    this.pageData.pages.map((item) => {
      if(item.isMenu) {
       pages.push(
        <ion-menu-toggle autoHide={false}>
          <ion-item href={'/' + item.slug}>
            <ion-icon slot="start" name={item.icon}></ion-icon>
            <ion-label>{item.title}</ion-label>
          </ion-item>
        </ion-menu-toggle>
       );
      }
    });

    return (
      <ion-menu content-id="menu-content">
            <ion-header>
              <ion-toolbar>
                <ion-title>Menu</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content forceOverscroll={false}>
              <ion-list>
                <ion-list-header>Browse</ion-list-header>
                {pages}
              </ion-list>
            </ion-content>
          </ion-menu>
    );
  }

  render() {

    return (
      <ion-app>
        {this.renderRouter()}
        <ion-split-pane content-id="menu-content">
          {this.renderMenu()}
          <ion-router-outlet animated={false} id="menu-content"></ion-router-outlet>
        </ion-split-pane>
      </ion-app>

    );
  }
}
