import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-trim-fat-from-your-content',
})
export class PageTrimFat {

    title = 'Blog';

    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageTrimFat.componentWillLoad');
        }

        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        document.title = this.header.title + ' | ' + SITENAME;
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


                            <p>Fat makes your Web content ugly. <del>Face it, friends – it’s a fact. So, I’m going to get straight to the point and leave you with the</del> Here’s the big tip now: <strong>Make <em>REDUCTION</em> a conscious part of your <del>Web authoring</del> writing process</strong>. Teach this to your <del>colleagues</del> friends. Have competitions in your office to <del>see who can</del> destroy <del>the most</del> useless words. <del>There is too much shit on the Web already and we just don’t need any more, dammit. Add value, be crisp, be succinct, or get off the pot.</del></p>

                            <p>I’m reading the book, <a target="_blank" href="https://www.amazon.com/gp/product/158297358X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=158297358X&linkCode=as2&tag=burtecgrollc-20&linkId=aa477f4e06d188ad813949dac0264801">Getting the Words Right: 39 Ways to Improve Your Writing</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=burtecgrollc-20&l=am2&o=1&a=158297358X" width="1" height="1" alt="" />, <del>in which Theodore Cheney provides 39 ways to improve your writing.</del> , by Theodore Cheney. He starts with <del>a section on <em>reduction</em> with</del> these key tips:</p>

                            <ul>
                                <li>Shorten or remove whole chapters, sections, and paragraphs</li>
                                <li>Shorten or remove superfluous, ineffective, or redundant sentences and words</li>
                                <li>Replace longer words with shorter ones</li>
                            </ul>

                            <p><del>Whether you’re writing a novel, an essay, an article, or an email, <em>reduction</em> should be first and foremost in your revision process.</del> With so many channels to choose from, and with so much traffic and noise online, trimming the fat from your content is more important now than ever. <del>In fact,</del> Studies suggest that <a href="http://web.archive.org/web/20120130184936/http://www.useit.com/alertbox/whyscanning.html" rel="nofollow">79 percent of Web users scan rather than read</a> <del>. It’s not just some bull-shit from somebody trying to be famous, either.</del> I’ve witnessed it first-hand during formal Web usability evaluations. <del>As someone who loves to both read and write, I have been shocked…horrified…at witnessing this. But the scientist in me cannot ignore the evidence of my senses. It’s simple:</del></p>

                            <p>Users don’t like to read a lot of crap, so cut it.</p>

                            <p>&nbsp;</p>

                            <iframe style={{ width: `120px`, height: `240px` }} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=burtecgrollc-20&marketplace=amazon&region=US&placement=158297358X&asins=158297358X&linkId=47addfaa3ec52b0b347a22898de11b29&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"></iframe>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">


                            <gls-adsense-ad />

                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}