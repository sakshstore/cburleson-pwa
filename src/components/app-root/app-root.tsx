import { Component, h, Listen } from '@stencil/core';
import { BlogData } from '../../services/blog-data';

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

  appPages = [
    {
      title: 'Blog',
      url: '/blog',
      icon: 'ios-megaphone'
    },
    {
      title: 'Books',
      url: '/books',
      icon: 'ios-book'
    },
    {
      title: 'Art',
      url: '/art',
      icon: 'ios-easel'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'ios-information-circle'
    }
  ];

  // See: How To Properly Add Google Analytics Tracking to Your Angular Web App...
  // https://medium.com/@PurpleGreenLemon/how-to-properly-add-google-analytics-tracking-to-your-angular-web-app-bc7750713c9e
  @Listen('ionRouteDidChange')
  routeDidChangeHandler(event: CustomEvent) {
    if (debug) {
      console.log('> AppRoot.routeDidChangeHandler > event.detail: %o', event.detail);
    }

    // Fix for Issue #5 - Switching main menu pages doesn't change page titles when clicking already loaded main page
    if(event.detail.to == '/blog') {
      document.title = 'Blog | ' + siteName;
    } else if(event.detail.to == '/books') {
      document.title = 'Books | ' + siteName;
    } else if(event.detail.to == '/art') {
      document.title = 'Art | ' + siteName;
    } else if(event.detail.to == '/about') {
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
    this.data = await BlogData.load();
  }

  // @Listen('body:ionRouteDidChange')

  renderRouter() {

    const blogPostRoutes = [];

    this.data.content.map((item) => {
      if(item.type) {
        if(item.type == 'component') {
          blogPostRoutes.push(<ion-route url={'/' + item.id + '/'} component="tab-blog" ><ion-route component={'page-' + item.id}></ion-route></ion-route>) 
        } else if (item.type == 'json-file') {
          blogPostRoutes.push(<ion-route url="/" component="tab-blog"><ion-route url="/:name" component="page-blog-post"></ion-route></ion-route>)
        } else {
          console.error('- AppRoot.renderRouter > Required attribute "type" unrecognized for item: %o', item);
        }
      } else {
        console.error('- AppRoot.renderRouter > Required attribute "type" not defined for item: %o', item);
      }
    });

    return (
      <ion-router useHash={false}>
        <ion-route-redirect from="/" to='/blog' />
        <ion-route component="page-tabs">
          <ion-route url="/blog" component="tab-blog">
            <ion-route component="page-blog"></ion-route>
          </ion-route>

          <ion-route url="/books" component="tab-books">
            <ion-route component="page-books"></ion-route>
          </ion-route>
          <ion-route url="/art" component="tab-art">
            <ion-route component="page-art"></ion-route>
          </ion-route>
          <ion-route url="/about" component="tab-about">
            <ion-route component="page-about"></ion-route>
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
            <ion-route url="/:name" component="page-photos"></ion-route>
          </ion-route>
          <ion-route url="/vietnam-1967-amphibious-combat" component="tab-books">
            <ion-route component="page-vietnam-1967-amphibious-combat"></ion-route>
          </ion-route>

          {blogPostRoutes}

        </ion-route>

      </ion-router>
    );
  }

  render() {
    return (
      <ion-app>
        {this.renderRouter()}
        <ion-split-pane content-id="menu-content">
          <ion-menu content-id="menu-content">
            <ion-header>
              <ion-toolbar>
                <ion-title>Menu</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content forceOverscroll={false}>
              <ion-list>
                <ion-list-header>Browse</ion-list-header>

                {this.appPages.map((p) => (
                  <ion-menu-toggle autoHide={false}>
                    <ion-item href={p.url}>
                      <ion-icon slot="start" name={p.icon}></ion-icon>
                      <ion-label>{p.title}</ion-label>
                    </ion-item>
                  </ion-menu-toggle>
                ))}

              </ion-list>
            </ion-content>
          </ion-menu>

          <ion-router-outlet animated={false} id="menu-content"></ion-router-outlet>
        </ion-split-pane>
      </ion-app>

    );
  }
}
