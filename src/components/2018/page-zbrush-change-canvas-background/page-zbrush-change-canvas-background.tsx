import { Component, h } from '@stencil/core';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-change-canvas-background-color-in-zbrush',
})
export class PageZbrushChangeCanvasBackground {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageChangeCanvasBackgroundColorInZbrush.componentWillLoad');
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

                <p>Here&#8217;s a quick note on how to change the canvas background color in ZBrush.</p>
                
                <p>In the Document palette, click on the Back button (as shown below). Continue to hold the left mouse button down and drag over any color within the app to select that color. If using a pen, continue to apply pressure while dragging out of the Back button region onto a color in any other region on the screen.</p>
                
                <p><img  src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/10/zbrush-change-background-color-2-352x1024.jpg" alt="" /></p>

            </ion-content>

        ];
    }
}