import { Component, Prop, h } from '@stencil/core';

import { EnvironmentConfigService } from '../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
  tag: 'app-tabs',
  styleUrl: 'app-tabs.css',
})
export class AppTabs {

  @Prop({ connect: 'ion-menu-controller' }) menuCtrl: HTMLIonMenuControllerElement;

  async componentDidLoad() {
    if (debug) {
      console.log('> PageTabs.componentDidLoad');
    }

    const menuCtlr: HTMLIonMenuControllerElement = await (this.menuCtrl as any).componentOnReady();
    menuCtlr.enable(true);
  }
  render() {
    return [
      <ion-tabs>
        <ion-tab tab="tab-home">
          <ion-nav></ion-nav>
        </ion-tab>
        <ion-tab tab="tab-story">
          <ion-nav></ion-nav>
        </ion-tab>
        <ion-tab tab="tab-books">
          <ion-nav></ion-nav>
        </ion-tab>
        <ion-tab tab="tab-art">
          <ion-nav></ion-nav>
        </ion-tab>
        <ion-tab tab="tab-about">
          <ion-nav></ion-nav>
        </ion-tab>

        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab-home">
            <ion-icon name="ios-home"></ion-icon>
            <ion-label>Home</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="tab-story">
            <ion-icon name="ios-book"></ion-icon>
            <ion-label>Story</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="tab-books">
            <ion-icon name="ios-book"></ion-icon>
            <ion-label>Books</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="tab-art">
            <ion-icon name="ios-easel"></ion-icon>
            <ion-label>Art</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="tab-about">
            <ion-icon name="ios-information-circle"></ion-icon>
            <ion-label>About</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    ];
  }
}
