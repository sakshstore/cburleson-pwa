// import { Config } from '@ionic/core';
import { Component, Element, h } from '@stencil/core';
import { modalController } from '@ionic/core';
import { BlogData } from '../../services/blog-data';
import { get, set } from '../../services/storage';

import { isLocal, SITENAME } from '../../helpers/utils';

const EXCLUDE_TOPICS = 'excludeTopics';

@Component({
  tag: 'app-blog',
  styleUrl: 'app-blog.css'
})
export class AppBlog {

  title = 'Blog';
  excludeTopics: any = [];

  @Element() el: any;

  // @Prop({ context: 'config' }) config: Config;

  //@Prop({ connect: 'ion-modal-controller' }) modalCtrl: HTMLIonModalControllerElement;
  modalCtrl: any = modalController;

  data: any;

  async componentWillLoad() {
    if (isLocal()) {
      console.log('> AppBlog.componentWillLoad');
    }
    document.title = this.title + ' | ' + SITENAME;

    this.data = await BlogData.load();

    let excludeTopics = await get(EXCLUDE_TOPICS)
      .then(function (result) {
        // console.log('In promise, got: %o', result);
        return result;
      })
      .catch(function (err) {
        if (isLocal()) {
          console.log('< AppBlog.componentWillLoad < No exclude topics saved; returning empty array. [%o]', err);
        }
        // do nothing
        return [];
      });

    if (excludeTopics) {
      this.excludeTopics = excludeTopics;
      this.updateContentList();
    }

  }

  async updateContentList() {

    if (isLocal()) {
      console.log('> AppBlog.updateContentList');
    }

    await BlogData.getContent(this.excludeTopics);
    // this.shownSessions = data.shownSessions;
    // this.groups = data.groups;

    this.el.forceUpdate();
  }

  async presentFilter() {
    if (isLocal()) {
      console.log('>> AppBlog.presentFilter');
    }

    const modal = await this.modalCtrl.create({
      component: 'app-blog-filter',
      componentProps: {
        excludedTopics: this.excludeTopics,
      }
    });

    // Lesson learned: it is better to listen for onDismiss directly on the instantiated modal 
    // like I am doing below, rather than using a function with this listener annotion like this:
    //  @Listen('ionModalDidDismiss', { target: 'body' })
    // In this way, we are listening to and responding ONLY to THIS modal. I had an issue where
    // I was accidentally listening to a whole other modal somewhere else in the app on accident
    // because I was using the @Listen annotation' it was causing me to listen to ANY modal!
    modal.onDidDismiss()
    .then((data) => {
        //const user = data['data']; // Here's your selected user!
        console.log("-- PageLifetime.presentModal > modal.onDidDismiss() > data['data']: %o", data['data']);
        // When the modal is dismissed, we get back data and set properties local to this 
        // class (tyhe formProps) with what comes back from the modal form...
        this.excludeTopics = data['data'];
        // Set the excluded topics in local storage
        set(EXCLUDE_TOPICS, data['data']);
        this.updateContentList();

    });

    return await modal.present();
  }

  /*
  @Listen('ionModalDidDismiss', { target: 'body' })
  modalDidDismiss(event: CustomEvent) {
    if (isLocal()) {
      console.log('> AppBlog.modalDidDismiss > event.detail.data: %o', event.detail.data);
    }
    if (event && typeof event.detail.data !== 'undefined') {
      this.excludeTopics = event.detail.data;
      // Set the excluded topics in local storage
      set(EXCLUDE_TOPICS, event.detail.data);
      this.updateContentList();
    }
  }
 */

  createTopicList(item: any) {
    let topicString = item.topics[0];
    for (var i = 1; i < item.topics.length; i++) {
      topicString = topicString + ", " + item.topics[i];
    }
    return topicString;
  }

  toggleSearch() {
    if (this.el.querySelector("#searchbar").classList.contains(`hidden`)) {
      this.el.querySelector("#searchbar").classList.remove('hidden');
    } else {
      this.el.querySelector("#searchbar").classList.add('hidden');
    }
  }

  renderItem(item: any) {
    if (! item.hideFromMenus) {
      return (
        <ion-item href={'/' + item.id + '/'} hidden={item.hide} lines="full">
          <ion-thumbnail slot="start">
            <ion-img src={item.thumbnail} />
          </ion-thumbnail>
          <ion-label text-wrap>
            {item.title}
            <p innerHTML={item.teaser}></p>
            <p><em>Posted {new Date(item.datePublished).toDateString()}, Tagged {this.createTopicList(item)}
            </em></p>
          </ion-label>
        </ion-item>
      )
    } else {
      return
    }
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>{this.title}</ion-title>
          <ion-buttons slot="end">
            <ion-button onClick={() => this.presentFilter()}>
              <ion-icon slot="icon-only" name="options"></ion-icon>
            </ion-button>
            <ion-button onClick={() => this.toggleSearch()}>
              <ion-icon slot="icon-only" name="search-outline"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
        <gls-gcse-searchbox-only id="searchbar" class="hidden" />
      </ion-header>,


      <ion-content class="ion-padding">

        <ion-grid fixed>
          <ion-row>
            <ion-col size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="7">
              <p>Click the control at top-right to filter by topics.</p>

              <ion-list>
                {this.data.content.map((item) =>
                  this.renderItem(item)
                )}
              </ion-list>

            </ion-col>
            <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
              <gls-adsense-ad />
            </ion-col>
          </ion-row>
        </ion-grid>

      </ion-content>

    ];
  }
}
