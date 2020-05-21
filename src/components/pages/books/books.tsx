import { Component, Element, h } from '@stencil/core';
import { BlogData } from '../../../services/blog-data';
import { extractIdFromDocumentPath } from '../../../helpers/utils';

@Component({
  tag: 'page-books'
})
export class PageBooks {

  @Element() el: HTMLElement;

  title = 'Books';

  header: any;

  writingItems: Array<any>;
  reviewedItems: Array<any>;

  async componentWillLoad() {
    let id = extractIdFromDocumentPath();
    this.header = BlogData.getPageHeaderById(id);

    this.writingItems = await BlogData.getPostsByMenu("books-i-am-writing");
    this.reviewedItems = await BlogData.getPostsByTopic("Book Reviews");
  }

  toggleSearch() {
    if (this.el.querySelector("#searchbar").classList.contains(`hidden`)) {
      this.el.querySelector("#searchbar").classList.remove('hidden');
    } else {
      this.el.querySelector("#searchbar").classList.add('hidden');
    }
  }

  renderReviewItem(item: any) {
    // NOTE: Duplicate code to what page-blog uses!
    // Except without: Tagged {this.createTopicList(item)}

    let itemHref = '/' + item.id + '/';
    if (item.parent) {
      itemHref = '/' + item.parent + itemHref;
    }

    return (
      <ion-item href={itemHref} hidden={item.hide} lines="full">
        <ion-thumbnail slot="start">
          <ion-img src={item.thumbnail} />
        </ion-thumbnail>
        <ion-label text-wrap>
          {item.title}
          <p innerHTML={item.teaser}></p>
          <p><em>Posted {new Date(item.datePublished).toDateString()}</em></p>
        </ion-label>
      </ion-item>
    )
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>{this.header.title}</ion-title>
          <ion-buttons slot="end">
            <ion-button onClick={() => this.toggleSearch()}>
              <ion-icon slot="icon-only" name="search-outline"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
        <gls-gcse-searchbox-only id="searchbar" class="hidden" />
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
            this.renderReviewItem(item)
          )}
        </ion-list>

      </ion-content>
    ];
  }
}
