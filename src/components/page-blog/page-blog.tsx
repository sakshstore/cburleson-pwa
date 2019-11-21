import { Config } from '@ionic/core';
import { Component, Element, h, Listen, Prop } from '@stencil/core';
import { BlogData } from '../../services/blog-data';
import { get, remove, set } from '../../services/storage';

import { EnvironmentConfigService } from '../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

const EXCLUDE_TRACKS = 'excludeTracks';

@Component({
  tag: 'page-blog',
  styleUrl: 'page-blog.css'
})
export class PageBlog {

  title = 'Blog';
  excludeTracks: any = [];

  @Element() el: any;

  @Prop({ context: 'config' }) config: Config;

  @Prop({ connect: 'ion-modal-controller' }) modalCtrl: HTMLIonModalControllerElement;

  data: any;

  async componentWillLoad() {
    if (debug) {
      console.log('> PageBlog.componentWillLoad');
    }
    document.title = this.title + ' | ' + EnvironmentConfigService.getInstance().get('siteName');

    this.data = await BlogData.load();


    let excludeTracks = await get(EXCLUDE_TRACKS)
      .then(function (result) {
        // console.log('In promise, got: %o', result);
        return result;
      })
      .catch(function (err) {
        // do nothing
        // console.log('In promise, got ERROR: %o', err);
        return [];
      });

    if (excludeTracks) {
      this.excludeTracks = excludeTracks;
      this.updateContentList();
    }

  }

  @Listen('ionModalDidDismiss', { target: 'body' })
  modalDidDismiss(event: CustomEvent) {
    if (event) {
      this.excludeTracks = event.detail.data;
      // Set the excluded tracks in local storage
      set(EXCLUDE_TRACKS, event.detail.data);
      this.updateContentList();
    }
  }

  async updateContentList() {

    if (debug) {
      console.log('> PageBlog.updateContentList');
    }

    const data = await BlogData.getContent(this.excludeTracks);
    // this.shownSessions = data.shownSessions;
    // this.groups = data.groups;

    this.el.forceUpdate();
  }


  /*
  componentWillRender() {
    console.log('>> PageBlog.componentWillRender');
  }
  componentWillUpdate() {
    console.log('>> PageBlog.componentWillUpdate');
  }
  componentDidLoad() {
    console.log('>> PageBlog.componentDidLoad');
  }
  */

  async presentFilter() {
    if (debug) {
      console.log('>> PageBlog.presentFilter');
    }

    const modal = await this.modalCtrl.create({
      component: 'page-blog-filter',
      componentProps: {
        excludedTracks: this.excludeTracks,
      }
    });
    await modal.present();
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Blog</ion-title>
          <ion-buttons slot="end">
            <ion-button onClick={() => this.presentFilter()}>
              <ion-icon slot="icon-only" name="options"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <p>
          Click the control at top-right to filter by topics.
        </p>


        <ion-list>
          {this.data.content.map((item) =>
            <ion-item href={'/' + item.id + '/'} hidden={item.hide}>
              <ion-thumbnail slot="start">
                <img src={item.thumbnail} />
              </ion-thumbnail>
              <ion-label text-wrap>
                {item.title}
                <p innerHTML={item.teaser}></p>
                <p><em>{new Date(item.datePublished).toDateString()}</em></p>
              </ion-label>
            </ion-item>
          )}
        </ion-list>

      </ion-content>
    ];
  }
}
