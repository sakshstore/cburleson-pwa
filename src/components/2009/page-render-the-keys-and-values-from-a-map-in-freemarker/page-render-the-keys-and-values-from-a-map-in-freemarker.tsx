import { Component, h } from '@stencil/core';

import Prism from "prismjs"

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-render-the-keys-and-values-from-a-map-in-freemarker',
})
export class PageRenderTheKeysAndValuesFromAMapInFreemarker {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageRenderTheKeysAndValuesFromAMapInFreemarker.componentWillLoad');
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

                <h2>Render the values of a Map</h2>

                <p>The following code snippet shows how to get the values of a Map (e.g. HashMap) from within a Freemarker template.</p>

                <pre><code class="language-xml">{`<#assign m = myMap>
<#assign values = m?values>
         
<ul>
     <#list values as myObject>
     <li>$\{myObject.myPropery\}</li>
     </#list>
</ul>`}</code></pre>

                <h2>Render the keys of a Map</h2>

                <p>You can do a similar thing with the keys of a map as shown below.</p>

                <pre><code class="language-xml">{`<#assign m = myMap>
<#assign keys = m?keys>
         
<ul>
     <#list keys as key>
     <li>$\{key\}</li>
     </#list>
</ul>`}</code></pre>

            </ion-content>

        ];
    }
}