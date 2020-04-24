import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-user-impersonation-in-websphere-portal-video-demo',
})
export class PageUserImpersonation {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageUserImpersonation.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substring( document.location.pathname.lastIndexOf('/') + 1 );
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
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

                            <p><img class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/UserImpersonationGraphic.png" alt="" width="270" height="179" />User Impersonation is a feature in WebSphere Portal that allows select administrative users to take on the profile of other users without having to know their login credentials. This allows the administrative user to evaluate the user experience from the impersonated user’s perspective. It can be quite handy for portals where security and personalization play a heavy role or where help-desk and support staff really need to see exactly what the end-user sees. I created this screencast that demonstrates how it works and even though it may be a little old, it’s still relevant…</p>

                            <div class="video-container">
                                <iframe class="video" title="User Impersonation in WebSphere Portal - Demonstration" src="https://www.youtube.com/embed/bq9IoodVtOU" frameborder="0" allowFullScreen></iframe>
                            </div>

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