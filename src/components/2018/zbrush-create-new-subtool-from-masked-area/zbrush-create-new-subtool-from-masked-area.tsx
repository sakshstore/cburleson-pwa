import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-create-new-subtool-from-masked-area-in-zbrush',
})
export class PageZbrushCreateNewSubtoolFromMaskedArea {

    header: any;

    async componentWillLoad() {
        let id = extractIdFromDocumentPath();
        this.header = BlogData.getPostHeaderById(id);
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

                            <p>Mask an area on the model&#8230;</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/05/zbrush-subtool-from-mask-1.png" alt="" /></p>

                            <p>In the subtool palette, under Extract, set the thickness and options.</p>

                            <p>Click Extract button, then Accept.</p>

                            <p>A new subtool is generated from the extracted mask&#8230;</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/05/zbrush-subtool-from-mask-2.png" alt="" /></p>

                            <p>It&#8217;s usually a good idea to use ZRemesher on the new subtool afterwards.</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">

                            

                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>


        ];
    }
}