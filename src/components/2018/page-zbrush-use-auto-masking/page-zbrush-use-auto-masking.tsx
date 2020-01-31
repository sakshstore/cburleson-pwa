import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-use-auto-masking-by-polygroups-in-zbrush',
})
export class PageZbrushUseAutoMasking {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageZbrushUseAutoMasking.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + SITENAME;
        if (this.header.teaser) {
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

                            <p>In the brush palette, you can go to Auto Masking and set Mask By Polygroups to 100. This will setup an automatic masking so that when you use a brush, it will only affect the polygroup.</p>
                            <p>To try this, press CTRL and paint a mask on an object.</p>
                            <p>Press CTRL + W to turn the masked area into a polygroup.</p>
                            <p>Select the Move brush ( B + M + V )</p>
                            <p>In the Brush palette, under Auto Masking, set Mask By Polygroups to 100</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-automask.png" alt="" /></p>
                            <p>Now, when you use the move brush, it will only move the polygroup because everything else is auto-masked.</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">

                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}