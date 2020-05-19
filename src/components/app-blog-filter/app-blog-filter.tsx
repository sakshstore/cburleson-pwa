import { Config } from '@ionic/core';
import { Component, Element, forceUpdate, h, Listen, Prop, State } from '@stencil/core';
import { isLocal } from '../../helpers/utils';
import { BlogData } from '../../services/blog-data';

@Component({
  tag: 'app-blog-filter',
  styleUrl: 'app-blog-filter.css',
})
export class AppBlogFilter {
  @Element() el: any;

  @State() topics: { name: string, isChecked: boolean }[];

  @Prop({ context: 'config' }) config: Config;

  @Prop() excludedTopics: string[] = [];

  async componentWillLoad() {

    if (isLocal()) {
      console.log('>> AppBlogFilter.componentWillLoad');
    }

    // passed in array of topic names that should be excluded (unchecked)
    // TODO = this.navParams.data.excludedTopics;
    const excludedTopicNames = this.excludedTopics;

    const topicNames = await BlogData.getTopics();
    this.topics = topicNames.map(topicName => ({
      name: topicName,
      isChecked: (excludedTopicNames.indexOf(topicName) === -1)
    }));
  }

  dismiss(data?: any) {
    if (isLocal()) {
      console.log('>> AppBlogFilter.dismiss > data: %o', data);
    }
    // dismiss this modal and pass back data
    // This is captured, with the passed back data in page-blog.tsx under this annotation...
    // @Listen('ionModalDidDismiss', { target: 'body' })
    (this.el.closest('ion-modal') as any).dismiss(data);
  }

  applyFilters() {
    if (isLocal()) {
      console.log('>> AppBlogFilter.applyFilters');
    }
    // Pass back a new array of topic names to exclude
    const excludedTopicNames = this.topics.filter(c => !c.isChecked).map(c => c.name);
    this.dismiss(excludedTopicNames);
  }

  // reset all of the toggles to be checked
  resetFilters() {
    if (isLocal()) {
      console.log('>> AppBlogFilter.resetFilters');
    }
    this.topics.forEach(topic => {
      topic.isChecked = true;
    });
    forceUpdate(this.el);
  }

  @Listen('ionChange')
  onToggleChanged(ev: CustomEvent) {
    if (isLocal()) {
      console.log('- AppBlogFilter.onToggleChanged');
    }
    const topic = this.topics.find(({ name }) => name === (ev.target as any).name);
    topic.isChecked = (ev.target as any).checked;
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="primary">
            <ion-button onClick={() => this.dismiss()}>Cancel</ion-button>
          </ion-buttons>

          <ion-title>Filter Topics</ion-title>

          <ion-buttons slot="end">
            <ion-button onClick={() => this.applyFilters()} strong>Done</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="outer-content">
        <ion-list>
          <ion-list-header>Topics</ion-list-header>

          {this.topics.map(topic =>
            <ion-item class={{ [`item-topic-${topic.name.toLowerCase()}`]: true, 'item-topic': true }}>
              <span slot="start" class="dot"></span>
              <ion-label>{topic.name}</ion-label>
              <ion-toggle checked={topic.isChecked} color="success" name={topic.name}></ion-toggle>
            </ion-item>
          )}
        </ion-list>

        <ion-list>
          <ion-item onClick={() => this.resetFilters()} detail-none>
            <ion-label color="danger">
              Reset All Filters
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    ];
  }
}
