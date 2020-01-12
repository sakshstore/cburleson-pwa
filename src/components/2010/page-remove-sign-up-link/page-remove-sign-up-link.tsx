import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-remove-sign-up-link-on-wps-login-page',
})
export class PageRemoveSignUpLink {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageRemoveSignUpLink.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + SITENAME;
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

                            <p>The Login form on the login page comes from a portlet. The sign-up link that appears on the login page comes from this portlet. In many cases, anonymous access to the portal is not given or the sign-up capability is not desired. Here&#8217;s how to remove the sign-up link from the portlet (it is a configurable parameter):</p>

                            <ul>
                                <li>In Portal Admin, navigate to Portlets (under Portlet Management).<br />
                                    Find the &#8220;Login&#8221; portlet and click on the wrench icon (Configure portlet).</li>
                                <li>One of the parameters on the portlet is &#8220;ShowSignupLink&#8221;, which can be given the value &#8220;yes&#8221; or &#8220;no&#8221;.</li>
                                <li>Simply change the value as appropriate and commit the changes by pressing what ever logical &#8220;OK&#8221; or &#8220;Apply&#8221; buttons that follow.</li>
                            </ul>

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