import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-art',
  styleUrl: 'page-art.css'
})
export class PageArt {

  title = 'Art';

  componentWillLoad() {
      document.title = this.title;
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Art</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <p>
          This is the Art page.
        </p>

      </ion-content>
    ];
  }
}
