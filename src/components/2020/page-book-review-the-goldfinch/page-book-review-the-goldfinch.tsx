import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-book-review-the-goldfinch',
})
export class PageBookReviewTheGoldfinch {

    header: any;

    async componentWillLoad() {

        if (isLocal()) {
            console.log('>> PageBookReviewTheGoldfinch.componentWillLoad');
        }

        let id = extractIdFromDocumentPath();
        this.header = BlogData.getPostHeaderById(id);

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
                        <ion-back-button defaultHref="/books" />
                    </ion-buttons>
                    <ion-title>Books</ion-title>
                </ion-toolbar>
            </ion-header>,

            <ion-content class="ion-padding">

                <ion-grid>
                    <ion-row>
                        <ion-col size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="7">
                            
                            <h1>{this.header.title}</h1>

                            <app-entry-meta header={this.header} />

                            <p><a target="_blank"  href="https://www.amazon.com/gp/product/0316055441/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0316055441&linkCode=as2&tag=burtecgrollc-20&linkId=44c0d508a6b8b1e675867b973a449108"><img class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/books/book_goldfinch_thumb.jpg" /></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=burtecgrollc-20&l=am2&o=1&a=0316055441" width="1" height="1" alt="" style={{border:`none !important`, margin:`0px !important`}} />I have a kind of love-hate relationship with this book. It won the Pulitzer Prize. It’s a national bestseller. The Washington Post called it &quot;a soaring masterpiece&quot; and Steven King said it was &quot;a triump.&quot; Now, as a wanna-be writer myself, I can say that any book of eight-hundred-plus pages is a triumph. But Steven King also advises writers that you must be willing to &quot;kill your darlings&quot;. This book has such poetic, eloquent, and visceral writing within it that I found myself compelled to complete it, but it was a little like an archeological dig. Sometimes, it felt like work and I found myself skimming a lot.</p>

                            <p>I am of the school that says that every single little thing in the story needs to serve a purpose to the plot. To me, the level of detail and the amount of scenes in this book are questionable to that end. Too much, at times, I felt. So much, in fact, that I could honestly often ask, &quot;what is the central promise of this story? What’s it really about?&quot; I expect the high-stakes and high-conflict that makes for good drama. This story has that in it’s bones, but it also has a lot of fat.</p>

                            <p>Now, all that being said, I just know this is the kind of book that others will love as a lifetime favorite. I purposely took the reading as an exercise in the healthy practice of immersion (something better and more attentive to do other than social media). But I kept asking myself, &quot;Am I just spoiled by instant gratification now? Do I lack patience?&quot; Maybe. Or maybe 25% of this book could have been removed with nothing essential lost.</p>

                            <p>Shop now: <a href="https://www.amazon.com/gp/product/0316055441/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0316055441&linkCode=as2&tag=burtecgrollc-20&linkId=44c0d508a6b8b1e675867b973a449108">The Goldfinch | Amazon</a></p>
                            
                            <p><em>As an Amazon Associate I earn from qualifying purchases.</em></p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5" style={{textAlign:`center`}}>
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}