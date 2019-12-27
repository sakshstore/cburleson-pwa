import { Component, h } from '@stencil/core';

import { BlogData } from '../../../services/blog-data';


import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-use-spotlight-to-display-reference-images-in-zbrush',
})
export class PageZbrushUseSpotlight {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageZbrushUseSpotlight.componentWillLoad');
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

                <p>Here is a procedure for using Spotlight to display reference images in ZBrush.</p>

                <ul>
                    <li>Import a reference image using Texture &gt; Import.</li>
                    <li>Once you&#8217;ve imported the image, you should see a thumbnail for the image in the Texture palette. Click the image thumbnail to select it.</li>
                    <li>In the Texture palette, now click the plus/minus icon to add the selected image to Spotlight. The icon looks like this:<br />
                        <img  src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/zbrush-add-to-spotlight-button.jpg" alt="" /></li>
                    <li>Press the comma key (<kbd>,</kbd>) to get rid of Lightbox if that pops up. You will see the image imported into the ZBrush workspace. You will also see the Lightbox Dial or wheel with all sorts of options and tools such as scale and opacity.</li>
                    <li>You can click and drag the image to place it where you want and you can use the Spotlight dial&#8217;s tools to set things like scale and opacity.
                        <ul>
                            <li>Tip: ZBrush treats all totally black areas of your image as transparent. You can use this to your advantage to isolate your reference image so that the background (if pure black) falls away.</li>
                        </ul>
                    </li>
                    <li>Go into the Brush palette &gt; Samples and click the button to turn off Spotlight Projection.</li>
                    <li>Tip: Use <kbd>SHIFT</kbd> + <kbd>Z</kbd> to show and hide Spotlight. Once Spotlight is shown, press <kbd>Z</kbd> to display/hide the Spotlight wheel. Display the spotlight wheel, for example, to move or scale the image, then press <kbd>Z</kbd> again to hide the Spotlight dial and drop the image on the canvas, so you can go back to sculpting.</li>
                </ul>
                <h2>Save and Load Spotlight configuration</h2>
                <p>If you close your project and reopen it, you will not find all the reference images that you formerly setup in spotlight. In other words, saving a ZBrush project file does not also save the Spotlight configuration.</p>
                <ul>
                    <li>To save the Spotlight configuration, choose Save Spotlight in the Texture menu / palette.</li>
                    <li>To load the Spotlight configuration, choose Load Spotlight in the Texture menu / palette.</li>
                </ul>

                <h2>References:</h2>
                
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=LvpL7PKfbxU">Working with Reference images in ZBrush</a> &#8211; YouTube</li>
                </ul>

            </ion-content>

        ];
    }
}