import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
    tag: 'page-copy-assets-from-node-modules-in-stencil-js',
})
export class PageCopyAssetsFromNodeModulesInStencilJs {

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

                            <p>In this post I describe how to copy assets from the <code>node_modules</code> directory using the <code>copy</code> config in the <code>stencil.config.ts</code> file for Stencil.js.</p>
                            <p>My Stencil project has a dependency on Bootstrap, so in the pages that use my components, I needed to include the following files:</p>
                            <ul>
                                <li>bootstrap.min.css</li>
                                <li>bootstrap.min.js</li>
                                <li>jquery.slim.min.js</li>
                                <li>popper.min.js</li>
                            </ul>
                            <p>First, I added these as dev dependencies using npm. For one example:</p>
                            <p><code>npm install boostrap --save-dev</code></p>
                            <p>The next goal was to make sure that these assets were copied to the <code>www/assets</code> directory during the build process. Copying resources from one location to another can be achieved with the <code>copy</code> config specified with <code>src</code> and <code>dest</code> in the <code>stencil.config.ts</code> file as shown below.</p>
                            <deckgo-highlight-code><code slot="code">{`copy: [
    { src: '../node_modules/bootstrap/dist/css/bootstrap.min.css', dest: 'assets/css/bootstrap.min.css'},
    { src: '../node_modules/bootstrap/dist/js/bootstrap.min.js', dest: 'assets/js/bootstrap.min.js'},
    { src: '../node_modules/jquery/dist/jquery.slim.min.js', dest: 'assets/js/jquery.slim.min.js'},
    { src: '../node_modules/popper.js/dist/popper.min.js', dest: 'assets/js/popper.min.js'}
]`}</code></deckgo-highlight-code>
                            <p>With that configuration, Stencil.js copies the resources to the specified locations within <code>www/assets</code> whenever the build is executed (such as when running <code>npm start</code>.</p>
                            <p>For more information see: <a href="https://stenciljs.com/docs/config/#copy">Stencil Config &#8211; copy</a></p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                            
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}