import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-improve-your-rational-or-eclipse-based-ides-spelling-dictionary',
})
export class PageImproveYourRational {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageImproveYourRational.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
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

                            <p>I was the guy in middle school who raised his hand in class just to point out a spot on the chalkboard missed by the teacher’s eraser. Little things like that don’t bother most people, but for me, they stand out like a turd in a punch bowl. If I’m writing in ink and I scratch out just one word in my notebook, I want to rip out the whole damn page. You know what I mean? Then you probably feel the same about those squiggly red lines in the editor of your Rational or Eclipse-based IDE. They’re supposed to indicate misspelled words, which is totally useful, but when they flag words that are actually spelled correctly, it annoys me to all hell. For those who share this compulsive dread, I’ve found a cure…</p>

                            <h3>How to add a user defined dictionary for your IDE’s spelling checker</h3>

                            <ol>
                                <li>Prepare a simple text file with one word on each line. Here are two properly spelled words that Eclipse is unaware of in the English (United States) platform dictionary, for example: interoperability and utilitarian.</li>
                                <li>Select menu, Window &gt; Preferences</li>
                                <li>Within the options tree of the Preferences dialog, expand and select General &gt; Editors &gt; Text Editors &gt; Spelling</li>
                                <li>You should see the view that follows. Click Browse… and navigate to find the text file you’ve prepared.</li>
                                <li>Click Apply and then OK to dismiss the preferences dialog. You may have to re-open editors to initialize newly added words, or in some cases, restart the IDE.</li>
                            </ol>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/EclipseUserDefinedDictionary.png" alt="" /></p>

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