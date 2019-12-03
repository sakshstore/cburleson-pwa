import { Component, h } from '@stencil/core';

import { BlogData } from '../../services/blog-data';


import { EnvironmentConfigService } from '../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'app-404-page-not-found',
})
export class App404PageNotFound {

    title = 'Page not found';

    header: any;

    async componentWillLoad() {
        if(debug) {
            console.log('> App404PageNotFound.componentWillLoad');
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
                    <ion-title>Page not found</ion-title>
                </ion-toolbar>
            </ion-header>,

            <ion-content class="ion-padding">
                
                <h1>{this.header.title}</h1>
                
                {/*
                <p class="entry-meta">Posted on <time>{new Date(this.header.datePublished).toDateString()}</time> (last modified <time>{new Date(this.header.dateModified).toDateString()}</time>)</p>
                */}

            </ion-content>

        ];
    }
}