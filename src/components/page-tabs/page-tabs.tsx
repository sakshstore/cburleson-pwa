import { Component, Prop, h } from '@stencil/core';

import { EnvironmentConfigService } from '../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
  tag: 'page-tabs',
  styleUrl: 'page-tabs.css',
})
export class PageTabs {

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
        <ion-tab tab="tab-blog">
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
          <ion-tab-button tab="tab-blog">
            <ion-icon name="ios-megaphone"></ion-icon>
            <ion-label>Blog</ion-label>
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
