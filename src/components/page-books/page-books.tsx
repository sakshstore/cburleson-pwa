import { Component, h } from '@stencil/core';

import { EnvironmentConfigService } from '../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
  tag: 'page-books',
  styleUrl: 'page-books.css',
})
export class PageBooks {

  title = 'Books';

  writingItems = [
    {
      id: "/cage",
      title: "The Cage",
      teaser: "An epic true story of the Special Landing Force of 1st Batallion, 3rd Marines in the Vietnam War.",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/books/cage-book-thumb.jpg",
      datePublished: "",
      dateModified: "Oct 21, 2019"
    }
  ]

  componentWillLoad() {
    if (debug) {
      console.log('> PageBooks.componentWillLoad');
    }
    document.title = this.title + ' | ' + EnvironmentConfigService.getInstance().get('siteName');
  }
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Books</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <h2>What I'm Writing</h2>
        <ion-list>
          {this.writingItems.map((item) =>
            <ion-item href={item.id}>
              <ion-thumbnail slot="start">
                <img src={item.thumbnail} />
              </ion-thumbnail>
              <ion-label text-wrap>
                {item.title}
                <p innerHTML={item.teaser}></p>
              </ion-label>
            </ion-item>
          )}
        </ion-list>

      </ion-content>
    ];
  }
}
