import { Component, h, Prop } from '@stencil/core';

import { BlogData } from '../../services/blog-data';

@Component({
  tag: 'page-blog',
  styleUrl: 'page-blog.css'
})
export class PageBlog {

  title = 'Blog';

  @Prop({ connect: 'ion-modal-controller' }) modalCtrl: HTMLIonModalControllerElement;

  data: any;

  async componentWillLoad() {
    console.log('>> PageBlog.componentWillLoad()');
    this.data = await BlogData.load();
    document.title = this.title;
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
    console.log('PageBlog > presentFilter()');
      const modal = await this.modalCtrl.create({
      component: 'page-blog-filter',
      componentProps: {
        // excludedTracks: this.excludeTracks,
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
            <ion-item href={'/' + item.id + '/'}>
              <ion-thumbnail slot="start">
                <img src={item.thumbnail}/>
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
