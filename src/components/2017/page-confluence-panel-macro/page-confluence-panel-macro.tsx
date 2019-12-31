import { Component, h } from '@stencil/core';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-confluence-panel-macro',
})
export class PageConfluencePanelMacro {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageConfluencePanelMacro.componentWillLoad');
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

                <ion-grid>
                    <ion-row>
                        <ion-col size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="7">
                            <h1>{this.header.title}</h1>
                            <app-entry-meta header={this.header} />

                            <p>A macro plugin I made for Atlassian Confluence that mimics a <a href="http://getbootstrap.com/components/#panels" rel="nofollow">Bootstrap 3 Panel</a>.</p>

                            <h2>Overview</h2>

                            <p>This is a simple macro I developed that mimics the&nbsp;<a href="http://getbootstrap.com/components/#panels" rel="nofollow">Bootstrap 3 Panel</a>. The macro takes an optional Title, an optional Style, and a rich text macro body. It renders results as shown in the examples section below.</p>
                            <p>I did this as a learning exercise in preparation to do a more sophisticated plugin for Confluence. You might find the code useful if your doing something similar. You can find the source code in the following public repository on GitHub:</p>
                            <p><a href="https://github.com/codyburleson/confluence-panel-macro" rel="nofollow">https://github.com/codyburleson/confluence-panel-macro</a></p>
                            <p>Tested on:</p>
                            <ul>
                                <li>Atlassian Confluence 6.0.5</li>
                                <li>Google Chrome Version 57.0.2987.98 (64-bit) on Mac OS</li>
                            </ul>
                            <p><em>If you find any issues, please open an issue on GitHub.</em></p>
                            <h2>Examples</h2>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/confluence-panel-macro-examples.jpg" alt="Confluence Panel Macro Examples" /></p>
                            <h2>Download</h2>
                            <p>The current version of the macro can be downloaded from the link below. If you want to try it out, you can upload the jar through Manage add-ons in the Confluence admin area.</p>
                            <p><strong><a href="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/panelMacro-1.0.0-SNAPSHOT.jar">panelMacro-1.0.0-SNAPSHOT.jar</a></strong></p>

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