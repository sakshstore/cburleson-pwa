import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-books',
  styleUrl: 'page-books.css',
})
export class PageBooks {

  title = 'Books';

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
          <ion-title>Books</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <h1>What I'm Writing</h1>
        
        <ion-card>
          <img src="https://gallery.mailchimp.com/085bae426fecfc73c590d0ba3/images/c404108a-8afb-4905-ad08-5b763905dce8.jpg" />
          <ion-card-header>
            <ion-card-subtitle>1967-1968, Vietnam</ion-card-subtitle>
            <ion-card-title>The Cage</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>This is the epic true story of the Special Landing Force of 1st Batallion, 3rd Marines in the Vietnam War.</p>
            <ion-button color="primary" href="/books/cage">Read more...</ion-button>
          </ion-card-content>
        </ion-card>

        <h1>What I'm Reading</h1>
        <h1>What I Want to Read</h1>
        <h1>What I've Read</h1>

      </ion-content>
    ];
  }
}
