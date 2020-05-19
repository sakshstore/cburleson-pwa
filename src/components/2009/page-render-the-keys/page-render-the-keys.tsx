import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
    tag: 'page-render-the-keys-and-values-from-a-map-in-freemarker',
})
export class PageRenderTheKeys {

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

                            <h2>Render the values of a Map</h2>

                            <p>The following code snippet shows how to get the values of a Map (e.g. HashMap) from within a Freemarker template.</p>

                            <deckgo-highlight-code><code slot="code">{`<#assign m = myMap>
<#assign values = m?values>
         
<ul>
     <#list values as myObject>
     <li>$\{myObject.myPropery\}</li>
     </#list>
</ul>`}</code></deckgo-highlight-code>

                            <h2>Render the keys of a Map</h2>

                            <p>You can do a similar thing with the keys of a map as shown below.</p>

                            <deckgo-highlight-code><code slot="code">{`<#assign m = myMap>
<#assign keys = m?keys>
         
<ul>
     <#list keys as key>
     <li>$\{key\}</li>
     </#list>
</ul>`}</code></deckgo-highlight-code>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}