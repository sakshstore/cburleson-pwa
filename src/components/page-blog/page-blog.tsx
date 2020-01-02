import { Config } from '@ionic/core';
import { Component, Element, h, Listen, Prop } from '@stencil/core';
import { BlogData } from '../../services/blog-data';
import { get, set } from '../../services/storage';

import { EnvironmentConfigService } from '../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

const EXCLUDE_TOPICS = 'excludeTopics';

@Component({
  tag: 'page-blog',
  styleUrl: 'page-blog.css'
})
export class PageBlog {

  title = 'Blog';
  excludeTopics: any = [];

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

    let excludeTopics = await get(EXCLUDE_TOPICS)
      .then(function (result) {
        // console.log('In promise, got: %o', result);
        return result;
      })
      .catch(function (err) {
        if (debug) {
          console.log('< PageBlog.componentWillLoad < No exclude topics saved; returning empty array. [%o]', err);
        }
        // do nothing
        return [];
      });

    if (excludeTopics) {
      this.excludeTopics = excludeTopics;
      this.updateContentList();
    }

  }

  @Listen('ionModalDidDismiss', { target: 'body' })
  modalDidDismiss(event: CustomEvent) {
    if(debug){
      console.log('> PageBlog.modalDidDismiss > event.detail.data: %o',event.detail.data);
    }
    if (event && typeof event.detail.data !== 'undefined') {
      this.excludeTopics = event.detail.data;
      // Set the excluded topics in local storage
      set(EXCLUDE_TOPICS, event.detail.data);
      this.updateContentList();
    }
  }

  async updateContentList() {

    if (debug) {
      console.log('> PageBlog.updateContentList');
    }

    await BlogData.getContent(this.excludeTopics);
    // this.shownSessions = data.shownSessions;
    // this.groups = data.groups;

    this.el.forceUpdate();
  }

  async presentFilter() {
    if (debug) {
      console.log('>> PageBlog.presentFilter');
    }

    const modal = await this.modalCtrl.create({
      component: 'app-blog-filter',
      componentProps: {
        excludedTopics: this.excludeTopics,
      }
    });
    await modal.present();
  }

  createTopicList(item: any) {
    let topicString = item.topics[0];
    for (var i = 1; i < item.topics.length; i++) {
      topicString = topicString + ", " + item.topics[i];
    }
    return topicString;
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
          </ion-buttons>
        </ion-toolbar>
        {/* 
        <ion-toolbar color="primary" class="search-form">
        <script async src='https://cse.google.com/cse.js?cx=partner-pub-7370676338719207:9067256876'></script><div class="gcse-searchbox-only"></div>
        </ion-toolbar>
        */}
      </ion-header>,
    
      <ion-content class="ion-padding">

            <p>Click the control at top-right to filter by topics.</p>

            <ion-list>
              {this.data.content.map((item) =>
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
              )}
            </ion-list>

          </ion-content>
          ];
        }
      }
