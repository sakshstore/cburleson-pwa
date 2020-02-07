import { Component, Element, h } from '@stencil/core';
import { BlogData } from '../../../services/blog-data';
import { isLocal, SITENAME } from '../../../helpers/utils';

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

  /*
  reviewedItems = [{
    id: "/book-review-more-than-everything-by-vanessa-foster",
    title: "Book review - More Than Everything by Vanessa Foster",
    teaser: "Lost, Broken, and on the Run From the FBI; a gripping memoir of resilience and liberation.",
    thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/07/book-more-than-everything-thumb.jpg",
    datePublished: "Jul 20, 2017"
  }]
  */
  
 reviewedItems: Array<any> = [];

  async componentWillLoad() {
    if (isLocal()) {
      console.log('> PageProjects.componentWillLoad');
    }
    document.title = this.title + ' | ' + SITENAME;

    this.reviewedItems = await BlogData.getPostsByTopic("Book Reviews");
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
              <ion-icon slot="icon-only" name="search-outline"></ion-icon>
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

        <h2>What I'm reading now</h2>

        <ion-list>
            <ion-item href="https://www.amazon.com/gp/product/0470876417/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0470876417&linkCode=as2&tag=burtecgrollc-20&linkId=51c55c7c2a01f1a42f28ef993b86f3f3" lines="none">
              <ion-thumbnail slot="start">
                <ion-img src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0470876417&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=burtecgrollc-20" />
              </ion-thumbnail>
              <ion-label text-wrap>
                Business Model Generation<img src="//ir-na.amazon-adsystem.com/e/ir?t=burtecgrollc-20&l=am2&o=1&a=0470876417" width="1" height="1" alt="" style={{border:`none !important;`, margin:`0px !important;`}} />
                <p>A Handbook for Visionaries, Game Changers, and Challengers</p>
              </ion-label>
            </ion-item>

            <ion-item href="https://www.amazon.com/gp/product/0307887898/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0307887898&linkCode=as2&tag=burtecgrollc-20&linkId=c836769d37b349d4f25805d6845b53b7" lines="none">
              <ion-thumbnail slot="start">
                <ion-img src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0307887898&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=burtecgrollc-20" />
              </ion-thumbnail>
              <ion-label text-wrap>
              The Lean Startup<img src="//ir-na.amazon-adsystem.com/e/ir?t=burtecgrollc-20&l=am2&o=1&a=0307887898" width="1" height="1" alt="" style={{border:`none !important;`, margin:`0px !important;`}} />
                <p>How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses</p>
              </ion-label>
            </ion-item>

        </ion-list>

      </ion-content>
    ];
  }
}
