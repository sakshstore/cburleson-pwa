import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'calendar'
    },
    {
      title: 'Books',
      url: '/books',
      icon: 'contacts'
    },
    {
      title: 'Art',
      url: '/art',
      icon: 'technology'
    },
    {
      title: 'Technology',
      url: '/technology',
      icon: 'technology'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'information-circle'
    }
  ];

  renderRouter() {
    return (
      <ion-router useHash={false}>
        <ion-route-redirect from="/" to='/home' />
        <ion-route component="page-tabs">
          <ion-route url="/home" component="tab-home">
            <ion-route component="page-home"></ion-route>
          </ion-route>
          <ion-route url="/books" component="tab-books">
            <ion-route component="page-books"></ion-route>
          </ion-route>
          <ion-route url="/art" component="tab-art"></ion-route>
          <ion-route url="/technology" component="tab-technology"></ion-route>
          <ion-route url="/about" component="tab-about"></ion-route>
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
