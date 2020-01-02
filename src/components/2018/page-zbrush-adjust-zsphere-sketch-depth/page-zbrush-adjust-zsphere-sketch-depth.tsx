import { Component, h } from '@stencil/core';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-how-to-adjust-zsphere-sketch-depth-in-zbrush',
})
export class PageZBrushAdjustZsphereSketchDepth {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageZBrushAdjustZsphereSketchDepth.componentWillLoad');
        }

        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

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

                <ion-grid>
                    <ion-row>
                        <ion-col size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="7">
                            <h1>{this.header.title}</h1>
                            <app-entry-meta header={this.header} />

                            <p>You can adjust the depth that ZSphere will draw onto a surface in the brushes palette under Depth. There, you can adjust the Imbed slider or click the sphere symbol just to the left of the slider and drag it up and down.</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zsphere-sketch-depth-1.png" alt="" /></p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zsphere-sketch-depth-2.png" alt="" /></p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zsphere-sketch-depth-3.png" alt="" /></p>
                            <h2>References</h2>
                            <ul>
                                <li><a class="external-link" href="http://pixologic.com/zclassroom/lesson/sketch-brush" rel="nofollow">SKETCH BRUSH</a></li>
                            </ul>

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