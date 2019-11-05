import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

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

  renderRouter() {
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
          <ion-route url="/photos" component="tab-books">
            <ion-route url="/:name" component="page-photos"></ion-route>
          </ion-route>

          <ion-route url="/killing-kittens/" component="tab-blog">
            <ion-route component="page-killing-kittens"></ion-route>
          </ion-route>
          <ion-route url="/zbrush-keyboard-shortcuts/" component="tab-blog">
            <ion-route component="page-zbrush-shortcuts"></ion-route>
          </ion-route>
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
