import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-change-canvas-background-color-in-zbrush',
})
export class PageZbrushChangeCanvasBackground {

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
                            <p>Here&#8217;s a quick note on how to change the canvas background color in ZBrush.</p>

                            <p>In the Document palette, click on the Back button (as shown below). Continue to hold the left mouse button down and drag over any color within the app to select that color. You can drag over the variety of colors in the color picker that is to the left of the canvas, for example. If using a pen, continue to apply pressure while dragging out of the Back button region onto a color in any other region on the screen.</p>

                            <p><img style={{ width: `50%` }} src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/10/zbrush-change-background-color-2-352x1024.jpg" alt="" /></p>


                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                            
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}