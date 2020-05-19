import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-free-zbrush-asset-gamblers-hat',
})
export class PageZbrushFreeAsset {

    header: any;

    async componentWillLoad() {
        let id = extractIdFromDocumentPath();
        this.header = BlogData.getPostHeaderById(id);

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

                            <p>Here&#8217;s a gambler&#8217;s hat ZBrush tool that I made; free to <a href="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/gamblers-hat-001.ZTL_.zip">download</a> and use&#8230;</p>

                            <p>Created April 22, 2018 by Cody Burleson using ZBrush 2018.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/gamblers-hat.jpg" alt="" /></p>

                            <p>Download: <a href="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/gamblers-hat-001.ZTL_.zip">gamblers-hat-001.ZTL</a></p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                            
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}