import { Component, Prop , h } from '@stencil/core';

@Component({
  tag: 'page-tabs',
  styleUrl: 'page-tabs.css',
})
export class PageTabs {

  @Prop({ connect: 'ion-menu-controller' }) menuCtrl: HTMLIonMenuControllerElement;

  async componentDidLoad() {
    const menuCtlr: HTMLIonMenuControllerElement = await (this.menuCtrl as any).componentOnReady();
    menuCtlr.enable(true);
  }
  render() {
    return [
      <ion-tabs>
        <ion-tab tab="tab-home">
          <ion-nav></ion-nav>
        </ion-tab>
        <ion-tab tab="tab-books">
          <ion-nav></ion-nav>
        </ion-tab>
        <ion-tab tab="tab-art" component="page-art"></ion-tab>
        <ion-tab tab="tab-technology" component="page-technology"></ion-tab>
        <ion-tab tab="tab-about" component="page-about"></ion-tab>

        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab-home">
            <ion-icon name="calendar"></ion-icon>
            <ion-label>Home</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="tab-books">
            <ion-icon name="map"></ion-icon>
            <ion-label>Books</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="tab-art">
            <ion-icon name="map"></ion-icon>
            <ion-label>Art</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="tab-technology">
            <ion-icon name="map"></ion-icon>
            <ion-label>Technology</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="tab-about">
            <ion-icon name="information-circle"></ion-icon>
            <ion-label>About</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    ];
  }
}
