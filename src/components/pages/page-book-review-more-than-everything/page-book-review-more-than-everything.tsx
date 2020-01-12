import { Component, Element, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

@Component({
  tag: 'page-book-review-more-than-everything',
})
export class PageBookReviewMoreThanEverything {

  @Element() el: HTMLElement;

  title = 'Book review - More Than Everything by Vanessa Foster';

  header = {
    id: "/book-review-more-than-everything-by-vanessa-foster",
    title: "Book review - More Than Everything by Vanessa Foster",
    teaser: "Lost, Broken, and on the Run From the FBI; a gripping memoir of resilience and liberation.",
    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51nmetTIJRL.jpg",
    datePublished: "2017-07-20"
  };

  componentWillLoad() {
    if (isLocal()) {
      console.log('> PageCage.componentWillLoad');
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
            <ion-back-button defaultHref="/books" />
          </ion-buttons>
          <ion-title>Books</ion-title>
          <ion-buttons slot="end">
            <ion-button onClick={() => this.toggleSearch()}>
              <ion-icon slot="icon-only" name="ios-search"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
        <gls-gcse-searchbox-only id="searchbar"class="hidden"/>
      </ion-header>,

      <ion-content class="ion-padding">

        <ion-grid>
          <ion-row>
            <ion-col size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="7">
              <h1>{this.header.title}</h1>
              <app-entry-meta header={this.header} />

              <p><a target="_blank"  href="https://www.amazon.com/gp/product/B00BJMV23M/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00BJMV23M&linkCode=as2&tag=burtecgrollc-20&linkId=aa3ce7b2ab207d2e31ef02ef533a1054"><img class="alignleft" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00BJMV23M&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=burtecgrollc-20" /></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=burtecgrollc-20&l=am2&o=1&a=B00BJMV23M" width="1" height="1" alt="" />Vanessa Foster&#8217;s account of a misguided youth, fleeing the FBI from Texas all the way to Alaska, is everything a great memoir should be. It&#8217;s a love-crazed and drug-twisted adventure where one mishap after another unravels her world until little remains, but a helpless wish for grace and a humbled reliance on the aid of culinary angels. It&#8217;s also a poetic search through the colorful, but frayed and fading pieces of a once hopeful reality. She gropes desperately for a thread of meaning while fumbling with her exhilarating lover in his schizophrenic downward spiral. With all hopes, dreams, family, and innocence seemingly lost, she is finally relented with a gift of grace, illuminated with spiritual truth, and crowned a woman. In losing almost everything, she gains something that is more.</p>

              <p>Vanessa Foster delivers all the things we seek from a good story &#8211; escape, adventure, entertainment, spiritual retreat and self-discovery. And it&#8217;s all true.</p>

              <p>As a wanna-be writer, I have to envy her. The book reminded me of <a target="_blank" href="https://www.amazon.com/gp/product/0307387895/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0307387895&linkCode=as2&tag=burtecgrollc-20&linkId=f01b8288279b70d6edeb18d8b097172f">The Road</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=burtecgrollc-20&l=am2&o=1&a=0307387895" width="1" height="1" alt="" /> by Cormac McCarthy. It&#8217;s not a similar story, but she&#8217;s similar in her ability to break all the rules of writing in eloquent service of honesty and poetic truth. Like McCarthy, she dismisses quotation marks from dialog in a way that makes the words of others somehow also her own &#8211; a technically challenging feat that paints every external scene with vivid emotions from her own mind &#8211; her own experience of each moment. In this, she enables us to feel what she felt and to see things as she saw them. We become her. We become who she was, and then we become <em>with</em> her as she changes into something new. Ultimately, we are left with the memory of an experience that might as well have been our own &#8211; complete with its hard-earned rewards, and yet all under the safety of our bedside reading lamp.</p>

              <p>Today, finding a good book, much less a great one, is a difficult task; they are few and far between. But if you&#8217;re anything like me, I think you&#8217;ll find that Vanessa Foster&#8217;s <em>More Than Everything</em> is at least more than many.</p>

            </ion-col>
            <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">

            <iframe title=" More Than Everything by Vanessa Foster" style={{width: `120px`, height: `240px`}} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=burtecgrollc-20&marketplace=amazon&region=US&placement=0615780873&asins=0615780873&linkId=a8b77a2c7c69ed9cab112ba6d16dd9d9&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"></iframe>

            </ion-col>
          </ion-row>
        </ion-grid>

      </ion-content>

    ];
  }
}