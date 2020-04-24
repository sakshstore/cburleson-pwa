import { Component, h } from '@stencil/core';
import { menuController } from '@ionic/core';
import { BlogData } from '../../services/blog-data';

@Component({
  tag: 'app-tabs',
  styleUrl: 'app-tabs.css',
})
export class AppTabs {

  data: any;
  menuCtlr: any = menuController;

  async componentWillLoad() {
    this.data = await BlogData.load();
  }

  async componentDidLoad() {
    this.menuCtlr.enable(true);
  }

  render() {

    const tabs = [];
    const tabButtons = [];

    this.data.pages.map((item) => {
      if(item.isTab) {
        tabs.push( <ion-tab tab={'tab-' + item.id}><ion-nav></ion-nav></ion-tab>);
        tabButtons.push(  <ion-tab-button tab={'tab-' + item.id}><ion-icon name={item.icon}></ion-icon><ion-label>{item.title}</ion-label></ion-tab-button> );
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
