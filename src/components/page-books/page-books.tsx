import { Component, Element, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../helpers/utils';

@Component({
  tag: 'page-books'
})
export class PageBooks {

  @Element() el: HTMLElement;

  title = 'Books';

  writingItems = [
    {
      id: "/cage",
      title: "The Cage",
      teaser: "The true story of the Special Landing Force of 1st Batallion, 3rd Marines in the Vietnam War.",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/books/cage-book-thumb.jpg",
      datePublished: "",
      dateModified: "Oct 21, 2019"
    }]

  reviewedItems = [{
    id: "/book-review-more-than-everything-by-vanessa-foster",
    title: "Book review - More Than Everything by Vanessa Foster",
    teaser: "Lost, Broken, and on the Run From the FBI; a gripping memoir of resilience and liberation.",
    thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/07/book-more-than-everything-thumb.jpg",
    datePublished: "Jul 20, 2017"
  }]

  componentWillLoad() {
    if (isLocal()) {
      console.log('> PageProjects.componentWillLoad');
    }
    document.title = this.title + ' | ' + SITENAME;
  }

  toggleSearch(){
    if(this.el.querySelector("#searchbar").classList.contains(`hidden`)) {
       this.el.querySelector("#searchbar").classList.remove('hidden');
    } else {
      this.el.querySelector("#searchbar").classList.add('hidden');
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
            <ion-button onClick={() => this.toggleSearch()}>
              <ion-icon slot="icon-only" name="ios-search"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
        <gls-gcse-searchbox-only id="searchbar"class="hidden"/>
      </ion-header>,

      <ion-content class="ion-padding">

        <h2>What I'm writing now</h2>

        <ion-list>
          {this.writingItems.map((item) =>
            <ion-item href={item.id} lines="none">
              <ion-thumbnail slot="start">
                <ion-img src={item.thumbnail} />
              </ion-thumbnail>
              <ion-label text-wrap>
                {item.title}
                <p innerHTML={item.teaser}></p>
              </ion-label>
            </ion-item>
          )}
        </ion-list>

        <h2>Book reviews</h2>

        <ion-list>
          {this.reviewedItems.map((item) =>
            <ion-item href={item.id} lines="none">
              <ion-thumbnail slot="start">
                <ion-img src={item.thumbnail} />
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
