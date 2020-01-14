import { Component, h, Listen } from '@stencil/core';
import { isLocal, SITENAME } from '../../helpers/utils';
import { BlogData } from '../../services/blog-data';
import { PageData } from '../../services/page-data';

declare let gtag: Function;

declare global {
  interface Window {
      disqus_config: any;
      DISQUS: any;
      disqusLoaded: boolean;
  }
}

@Component({
  tag: 'app-root'
})
export class AppRoot {

  data: any;

  unfoundRoute: any;

  pageData: any = [];

  disqus_config: any;

  // See: How To Properly Add Google Analytics Tracking to Your Angular Web App...
  // https://medium.com/@PurpleGreenLemon/how-to-properly-add-google-analytics-tracking-to-your-angular-web-app-bc7750713c9e
  @Listen('ionRouteDidChange')
  routeDidChangeHandler(event: CustomEvent) {
    if (isLocal()) {
      console.log('> AppRoot.routeDidChangeHandler > event.detail: %o', event.detail);
    }

    // Fix for Issue #5 - Switching main menu pages doesn't change page titles when clicking already loaded main page
    if (event.detail.to == '/home') {
      document.title = 'Home | ' + SITENAME;
    } else if (event.detail.to == '/blog') {
      document.title = 'Blog | ' + SITENAME;
    } else if (event.detail.to == '/books') {
      document.title = 'Books | ' + SITENAME;
    } else if (event.detail.to == '/about') {
      document.title = 'About | ' + SITENAME;
    }

    if ( ! isLocal() ) {
      if (event.detail.redirectedFrom !== null) {
        // We want to track what the user actually entered or clicked to get to the destination, not necessarily 
        // where they got redirected to (mainly '/' instead of 'blog'). If a redirection exists, take the redirectedFrom...
        gtag('config', 'UA-21819432-1', { 'page_path': event.detail.redirectedFrom });
      } else {
        // otherwise, take the to...
        gtag('config', 'UA-21819432-1', { 'page_path': event.detail.to });

        let id = event.detail.to.substr(1);
        this.disqus_config = function disqus_config() {
          this.page.identifier = id
          this.page.url = 'https://codyburleson.com/' + id;
        }
        window.DISQUS.reset({
          reload: true
        });

      }
    }

  }

  async componentWillLoad() {
    if (isLocal()) {
      console.log('> AppRoot.componentWillLoad');
    }

    this.pageData = await PageData.load();

    // This helps handle undefined routes ("page not found" cases)
    this.data = await BlogData.load();

    // DISQUS STUFF...
    let id = document.location.pathname.substr(1);
    this.disqus_config = function disqus_config() {
      this.page.identifier = id
      this.page.url = 'https://codyburleson.com/' + id;
    }
    this.disqus_config = window.disqus_config || {};
    //window.disqus_config = this.disqus_config;
  }

  renderRouter() {

    const blogPostRoutes = [];

    this.data.content.map((item) => {
      blogPostRoutes.push(<ion-route url={'/' + item.id} component="tab-blog" ><ion-route component={'page-' + item.id}></ion-route></ion-route>)
    });

    return (
      <ion-router useHash={false}>
        <ion-route-redirect from="/" to='/blog' />

        <ion-route-redirect from="/display/blog/2013/01/05/How+to+Shrink+a+Windows+VM+on+VMWare+Fusion+for+Mac" to='/shrink-windows-vm-on-vmware-fusion-for-mac' />
        <ion-route-redirect from="/2013/07/20/mapping-to-a-view-in-spring-with-no-controller" to='/mapping-to-a-view-in-spring-when-no-controller-logic-is-required' />

        <ion-route-redirect from="/how-to-rig-a-mesh-with-zspheres-in-zbrush/" to='/rig-a-mesh-with-zspheres-in-zbrush' />
        <ion-route-redirect from="/display/ZN/Mirror+polygroup+on+a+subtool" to='/mirror-polygroup-on-subtool-in-zbrush' />

        <ion-route component="app-tabs">
          <ion-route url="/home" component="tab-home">
            <ion-route component="page-home"></ion-route>
          </ion-route>
          <ion-route url="/blog" component="tab-blog">
            <ion-route component="app-blog"></ion-route>
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
          <ion-route url="/beaver-cage-union-memorial" component="tab-books">
            <ion-route component="page-beaver-cage-union-memorial"></ion-route>
          </ion-route>
          <ion-route url="/cage" component="tab-books">
            <ion-route component="page-cage"></ion-route>
          </ion-route>
          <ion-route url="/book-review-more-than-everything-by-vanessa-foster" component="tab-books">
            <ion-route component="page-book-review-more-than-everything"></ion-route>
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
          <ion-route url="/photos" component="tab-books">
            <ion-route url="/:name/:any" component="app-404-page-not-found"></ion-route>
          </ion-route>
          <ion-route url="/vietnam-1967-amphibious-combat" component="tab-books">
            <ion-route component="page-vietnam-1967-amphibious-combat"></ion-route>
          </ion-route>

          {blogPostRoutes}

        </ion-route>

        <ion-route url="/search" component="app-search"/>
        <ion-route url=":any" component="app-404-page-not-found"/>

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
      <ion-menu content-id="menu-content" menu-id="primaryNav">
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
