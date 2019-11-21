import { Component, h } from '@stencil/core';

import { EnvironmentConfigService } from '../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
  tag: 'page-art',
  styleUrl: 'page-art.css'
})
export class PageArt {

  title = 'Art';

  componentWillLoad() {
    if (debug) {
      console.log('> PageArt.componentWillLoad');
    }
    document.title = this.title + ' - ' + EnvironmentConfigService.getInstance().get('siteName');
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
        <p>In addition to writing, I like to create visual art. I'm not saying I'm any good at it, but I am practicing.
          Here, you can view my work in progress, studies, sketches, doodles, and photographs. I'm not good enough yet
          to call anything &quot;portfolio quality&quot;, so this is really just my online sketchbook.</p>
      </ion-content>
    ];
  }
}
