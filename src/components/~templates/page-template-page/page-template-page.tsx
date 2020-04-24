import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';
// Use this if using source code blocks to be formatted by prism.js...
// import Prism from "prismjs"

// And any, but ONLY the languages you need to use with prism...

// import 'prismjs/components/prism-javascript.min.js';
// import 'prismjs/components/prism-typescript.min';
// import 'prismjs/components/prism-json.min';
// import 'prismjs/components/prism-yaml.min';
// import 'prismjs/components/prism-java.min';
// These two both for SPARQL:
// import 'prismjs/components/prism-turtle.min.js';
// import 'prismjs/components/prism-sparql.min.js';
// import 'prismjs/components/prism-bash.min.js';
// import 'prismjs/components/prism-properties.min.js';

import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-template-page',
})
export class PageTemplatePage {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageTemplatePage.componentWillLoad');
        }

        let id = document.location.pathname.substring( document.location.pathname.lastIndexOf('/') + 1 );
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + SITENAME;

        if (this.header.teaser) {
            document.getElementById("meta-desc").setAttribute("content", this.header.teaser);
        }
    }

    // Use this if using source code blocks to be formatted by prism.js...
    // componentDidLoad() {
    // setTimeout(() => Prism.highlightAll(), 0)
    // }

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