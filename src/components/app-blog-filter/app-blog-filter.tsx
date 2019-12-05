import { Config } from '@ionic/core';
import { Component, Element, h, Listen, Prop, State } from '@stencil/core';
import { BlogData } from '../../services/blog-data';

import { EnvironmentConfigService } from '../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
  tag: 'app-blog-filter',
  styleUrl: 'app-blog-filter.css',
})
export class AppBlogFilter {
  @Element() el: any;

  @State() tracks: { name: string, isChecked: boolean }[];

  @Prop({ context: 'config' }) config: Config;

  @Prop() excludedTracks: string[] = [];

  async componentWillLoad() {

    if (debug) {
      console.log('> AppBlogFilter.componentWillLoad');
    }

    // passed in array of track names that should be excluded (unchecked)
    // TODO = this.navParams.data.excludedTracks;
    const excludedTrackNames = this.excludedTracks;

    const trackNames = await BlogData.getTracks();
    this.tracks = trackNames.map(trackName => ({
      name: trackName,
      isChecked: (excludedTrackNames.indexOf(trackName) === -1)
    }));
  }

  dismiss(data?: any) {
    if (debug) {
      console.log('> AppBlogFilter.dismiss > data: %o', data);
    }
    // dismiss this modal and pass back data
    // This is captured, with the passed back data in page-blog.tsx under this annotation...
    // @Listen('ionModalDidDismiss', { target: 'body' })
    (this.el.closest('ion-modal') as any).dismiss(data);
  }

  applyFilters() {
    if (debug) {
      console.log('> AppBlogFilter.applyFilters');
    }
    // Pass back a new array of track names to exclude
    const excludedTrackNames = this.tracks.filter(c => !c.isChecked).map(c => c.name);
    this.dismiss(excludedTrackNames);
  }

  // reset all of the toggles to be checked
  resetFilters() {
    if (debug) {
      console.log('> AppBlogFilter.resetFilters');
    }
    this.tracks.forEach(track => {
      track.isChecked = true;
    });
    this.el.forceUpdate();
  }

  @Listen('ionChange')
  onToggleChanged(ev: CustomEvent) {
    if (debug) {
      console.log('- AppBlogFilter.onToggleChanged');
    }
    const track = this.tracks.find(({ name }) => name === (ev.target as any).name);
    track.isChecked = (ev.target as any).checked;
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
}
