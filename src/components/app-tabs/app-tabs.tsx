import { Component, h } from '@stencil/core';
import { menuController } from '@ionic/core';
import { isLocal } from '../../helpers/utils';
import { PageData } from '../../services/page-data';

@Component({
  tag: 'app-tabs',
  styleUrl: 'app-tabs.css',
})
export class AppTabs {

  //@Prop({ connect: 'ion-menu-controller' }) menuCtrl: HTMLIonMenuControllerElement;

  data: any;
  menuCtlr: any = menuController;

  async componentWillLoad() {
    if (isLocal()) {
      console.log('> AppTabs.componentWillLoad');
    }
    this.data = await PageData.load();
  }

  async componentDidLoad() {
    if (isLocal()) {
      console.log('> PageTabs.componentDidLoad');
    }

    //this.menuCtlr = await (this.menuCtlr as any).componentOnReady();
    this.menuCtlr.enable(true);
  }

  render() {

    const tabs = [];
    const tabButtons = [];

    this.data.pages.map((item) => {
      if(item.isTab) {
        tabs.push( <ion-tab tab={'tab-' + item.slug}><ion-nav></ion-nav></ion-tab>);
        tabButtons.push(  <ion-tab-button tab={'tab-' + item.slug}><ion-icon name={item.icon}></ion-icon><ion-label>{item.title}</ion-label></ion-tab-button> );
      }
    });

    return [
      <ion-tabs>
        {tabs}
        <ion-tab-bar slot="bottom">
          {tabButtons}
        </ion-tab-bar>
      </ion-tabs>
    ];
  }
}
