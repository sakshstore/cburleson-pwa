import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-book-review-the-goldfinch',
})
export class PageBookReviewTheGoldfinch {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageBookReviewTheGoldfinch.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + SITENAME;
        if(this.header.teaser) {
            document.getElementById("meta-desc").setAttribute("content", this.header.teaser);
        }
    }

    render() {
        return [
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-buttons slot="start">
                        <ion-back-button defaultHref="/" />
                    </ion-buttons>
                    <ion-title>Blog</ion-title>
                </ion-toolbar>
            </ion-header>,

            <ion-content class="ion-padding">

                <ion-grid>
                    <ion-row>
                        <ion-col size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="7">
                            
                            <h1>{this.header.title}</h1>

                            <app-entry-meta header={this.header} />

                            <p><a target="_blank"  href="https://www.amazon.com/gp/product/0316055441/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0316055441&linkCode=as2&tag=burtecgrollc-20&linkId=44c0d508a6b8b1e675867b973a449108"><img class="alignleft" src="https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0316055441&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=burtecgrollc-20" /></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=burtecgrollc-20&l=am2&o=1&a=0316055441" width="1" height="1" alt="" style={{border:`none !important`, margin:`0px !important`}} />I have a kind of love-hate relationship with this book. It won the Pulitzer Prize. It’s a national bestseller. The Washington Post called it &quot;a soaring masterpiece&quot; and Steven King said it was &quot;a triump.&quot; Now, as a wanna-be writer myself, I can say that any book of eight-hundred-plus pages is a triumph. But Steven King also advises writers that you must be willing to &quot;kill your darlings&quot;. This book has such poetic, eloquent, and visceral writing within it that I found myself compelled to complete it, but it was a little like an archeological dig. Sometimes, it felt like work and I found myself skimming a lot.</p>

                            <p>I am of the school that says that every single little thing in the story needs to serve a purpose to the plot. To me, the level of detail and the amount of scenes in this book are questionable to that end. Too much, at times, I felt. So much, in fact, that I could honestly often ask, &quot;what is the central promise of this story? What’s it really about?&quot; I expect the high-stakes and high-conflict that makes for good drama. This story has that in it’s bones, but it also has a lot of fat.</p>

                            <p>Now, all that being said, I just know this is the kind of book that others will love as a lifetime favorite. I purposely took the reading as an exercise in the healthy practice of immersion (something better and more attentive to do other than social media). But I kept asking myself, &quot;Am I just spoiled by instant gratification now? Do I lack patience?&quot; Maybe. Or maybe 25% of this book could have been removed with nothing essential lost.</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5" style={{textAlign:`center`}}>
                        <p><em>As an Amazon Associate<br/> I earn from <br/>qualifying purchases.</em></p>
                        <iframe  style={{width: `120px`, height: `240px`}} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=burtecgrollc-20&marketplace=amazon&region=US&placement=0316055441&asins=0316055441&linkId=86ff5a4aca1bc07bd4ae6a198e236ca1&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"></iframe>
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}