import { Component, h } from '@stencil/core';

import Prism from "prismjs"
import 'prismjs/components/prism-yaml.min';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-copy-assets-from-node-modules-in-stencil-js',
})
export class PageCopyAssetsFromNodeModulesInStencilJs {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageCopyAssetsFromNodeModulesInStencilJs.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + EnvironmentConfigService.getInstance().get('siteName');
    }

    componentDidLoad() {
        setTimeout(() => Prism.highlightAll(), 0)
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
                <pre><code class="language-yaml">{`copy: [
    { src: '../node_modules/bootstrap/dist/css/bootstrap.min.css', dest: 'assets/css/bootstrap.min.css'},
    { src: '../node_modules/bootstrap/dist/js/bootstrap.min.js', dest: 'assets/js/bootstrap.min.js'},
    { src: '../node_modules/jquery/dist/jquery.slim.min.js', dest: 'assets/js/jquery.slim.min.js'},
    { src: '../node_modules/popper.js/dist/popper.min.js', dest: 'assets/js/popper.min.js'}
]`}</code></pre>
                <p>With that configuration, Stencil.js copies the resources to the specified locations within <code>www/assets</code> whenever the build is executed (such as when running <code>npm start</code>.</p>
                <p>For more information see: <a href="https://stenciljs.com/docs/config/#copy">Stencil Config &#8211; copy</a></p>

            </ion-content>

        ];
    }
}