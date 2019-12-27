import { Component, h } from '@stencil/core';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-create-new-subtool-from-masked-area-in-zbrush',
})
export class PageZbrushCreateNewSubtoolFromMaskedArea {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageZbrushCreateNewSubtoolFromMaskedArea.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + EnvironmentConfigService.getInstance().get('siteName');
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

                <h1>{this.header.title}</h1>

                <app-entry-meta header={this.header} />

                <p>Mask an area on the model&#8230;</p>

                <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/05/zbrush-subtool-from-mask-1.png" alt=""  /></p>

                <p>In the subtool palette, under Extract, set the thickness and options.</p>

                <p>Click Extract button, then Accept.</p>

                <p>A new subtool is generated from the extracted mask&#8230;</p>

                <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/05/zbrush-subtool-from-mask-2.png" alt=""  /></p>

                <p>It&#8217;s usually a good idea to use ZRemesher on the new subtool afterwards.</p>

            </ion-content>

        ];
    }
}