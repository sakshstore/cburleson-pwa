// import { Config } from '@ionic/core';
import { Component, Element, State , h } from '@stencil/core';

import { BlogData } from '../../services/blog-data';

@Component({
  tag: 'page-blog-filter',
  styleUrl: 'page-blog-filter.css',
})
export class PageBlogFilter {
  
  @Element() el: any;


  @State() topics: {name: string, isChecked: boolean}[];

    /*
  @Prop({ context: 'config' }) config: Config;

  @Prop() excludedTracks: string[] = [];
  */


  async componentWillLoad() {
    console.log('> PageBlogFilter > componentWillLoad()')
    // passed in array of track names that should be excluded (unchecked)
    // TODO = this.navParams.data.excludedTracks;
    // const excludedTrackNames = this.excludedTracks;

    const topicItems = await BlogData.getTopics();
    this.topics = topicItems.map(topicItem => ({
      name: topicItem.label,
      isChecked: true
      //isChecked: (excludedTrackNames.indexOf(trackName) === -1)
    }));
  }
 

  dismiss(data?: any) {
    console.log('> PageBlogFilter > dismiss()');
    // dismiss this modal and pass back data
    (this.el.closest('ion-modal') as any).dismiss(data);
  }

  
  applyFilters() {
    console.log('PageBlogFilter > applyFilters()');
    // Pass back a new array of track names to exclude
    // const excludedTrackNames = this.tracks.filter(c => !c.isChecked).map(c => c.name);
    // this.dismiss(excludedTrackNames);
  }

  // reset all of the toggles to be checked
  resetFilters() {
    this.topics.forEach(topic => {
      topic.isChecked = true;
    });
    this.el.forceUpdate();
  }
  

  /*


  @Listen('ionChange')
  onToggleChanged(ev: CustomEvent) {
    const track = this.tracks.find(({ name }) => name === (ev.target as any).name);
    track.isChecked = (ev.target as any).checked;
  }
  */

  /*
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="primary">
            <ion-button onClick={() => this.dismiss()}>Cancel</ion-button>
          </ion-buttons>

          <ion-title>
            Filter Sessions
          </ion-title>

          <ion-buttons slot="end">
            <ion-button onClick={() => this.applyFilters()} strong>Done</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="outer-content">
        <ion-list>
          <ion-list-header>Tracks</ion-list-header>

          {this.tracks.map(track =>
            <ion-item class={{ [`item-track-${track.name.toLowerCase()}`]: true, 'item-track': true }}>
              <span slot="start" class="dot"></span>
              <ion-label>{track.name}</ion-label>
              <ion-toggle checked={track.isChecked} color="success" name={track.name}></ion-toggle>
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
  */

    render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="primary">
            <ion-button onClick={() => this.dismiss()}>Cancel</ion-button>
          </ion-buttons>

          <ion-title>
            Filter Topics
          </ion-title>

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
