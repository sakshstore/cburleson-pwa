import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-about-zsphere-smoothing-brushes',
})
export class PageZbrushAboutZsphereSmoothingBrushes {

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

                            <p>When you press <kbd>SHIFT</kbd> in ZSketch mode to smooth out the sketch, the default brush is Smooth 1.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-zsphere-smoothing-brushes-1.png" alt="" /></p>

                            <p>When you get to the ends of a chain of ZSpheres, Smooth 1 will embed and resize the ends, conforming the ends to the underlying model. You can see this demonstrated in the image below.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-zsphere-smoothing-brushes-2.png" alt="" /></p>

                            <p>If we want to resize the ends of a ZSphere chain without also embedding and conforming them to the underlying form, we can use Smooth 2.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-zsphere-smoothing-brushes-3.png" alt="" /></p>

                            <p>With Smooth 2, the ends of the ZSphere chain are resized, but not embedded&#8230;</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-zsphere-smoothing-brushes-4.png" alt="" /></p>

                            <p>Smooth 3 will simply smooth the chain, but it will not embed or resize the ends.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-zsphere-smoothing-brushes-5.png" alt="" /></p>

                            <p>Smooth 4 is really good for things like muscles.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-zsphere-smoothing-brushes-6.png" alt="" /></p>

                            <p>Smooth 4 embeds and resizes the ends of the ZSphere chain, but it also uses a stronger pitch along the length of the ZSphere chain so that you end up with a strong bow towards the center of the chain as shown below.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-zsphere-smoothing-brushes-7.png" alt="" /></p>

                            <p>In little time, you can flesh out an armature. It&#8217;s really fun!</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-zsphere-smoothing-brushes-8.png" alt="" /></p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">

                            

                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}