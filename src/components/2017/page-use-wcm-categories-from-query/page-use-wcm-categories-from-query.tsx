import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-how-to-use-wcm-categories-from-query-parameter-for-pzn',
})
export class PageUseWcmCategoriesFromQuery {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageUseWcmCategoriesFromQuery.componentWillLoad');
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

                            <p><img class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/logo-websphere.png" alt="WebSphere Portal Logo" /> Here&#8217;s how to use query parameters from the HTPP request (or from the URL) in a personalization component. This page came from my raw notes and hasn&#8217;t yet been rewritten for the broader audience; sorry. Posting it anyway for those who won&#8217;t mind a little sloppiness.</p>

                            <p>The personalization component must be rendered by the WCM servlet (the URL of which you can get from Previewing the component &#8211; DONT FORGET TO REMOVE NO CACHE PARAMS IN PROD). If you access it as rendered within the Web Content Viewer, the rule will not have access to the Request and won&#8217;t be able to get the request parameters.</p>

                            <p>Assuming the following taxonomy and categories&#8230;</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/wcm-pzn-query-parms-1.png" alt="" /></p>

                            <p>And assuming the following content&#8230;</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/wcm-pzn-query-parms-2.png" alt="" /></p>

                            <p>We&#8217;re going to create the following PZN rule&#8230;</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/wcm-pzn-query-parms-3.png" alt="" /></p>

                            <p>We created 3 request parameters so that we can enforce a rule that insists that all 3 must be on the content (AND). With this, we can add the following to the URL:</p>

                            <p>&amp;cat1=testcat1&amp;cat2=testcat2&amp;cat3=testcat3</p>

                            <p>We could alternatively have only 1 request param and do something like this:</p>

                            <p>&amp;cats=testcat1,testcat2,testcat3</p>

                            <p>The problem with that is that it will only enforce an OR evaluation. If any content is tagged with any one of the given categories, it will show up.</p>

                            <p>Because we need to ensure that only content tagged with all 3 categories shows up, we create 3 separate request params. This allows us to use the PZN rule to enforce the AND condition.</p>

                            <p>Here&#8217;s how you make establish the request parameters and make them available in the pzn rule.</p>

                            <p>Step one: Click the value slot&#8230;</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/wcm-pzn-query-parms-4.png" alt="" /></p>

                            <p>Step two: Navigate to Manage Properties&#8230; under the Request item&#8230;</p>

                            <p>When you&#8217;re just starting, you list may be empty (mine has some examples in it already).</p>

                            <p><img src="/wp-content/uploads/2018/07/wcm-pzn-query-parms-5.png" alt="" /></p>

                            <p>Step Three: Click Add Dynamic Property&#8230;</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/wcm-pzn-query-parms-6.png" alt="" /></p>

                            <p>Step four: Fill out as follows&#8230;for example&#8230;</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/wcm-pzn-query-parms-7.png" alt="" /></p>

                            <p>Click SAVE.</p>

                            <p>Click DONE.</p>

                            <p>Your new item should show in the list under Request&#8230;</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/wcm-pzn-query-parms-8.png" alt="" /></p>

                            <p>Preview the PZN Component. Remove the unecessary params (like no chache) from the URL for PROD. Add your parameters and category names to the URL. For example:</p>

                            <p>http://local.base22.com:10039/wps/wcm/myconnect/web%20content/articles?source=library&amp;srv=cmpnt&amp;cmpntid=0d99a109-b8c7-4f38-a9ae-8d48faf37e32&amp;cat1=testcat1&amp;cat2=testcat2&amp;cat3=testcat3</p>

                            <p>And you get:</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/wcm-pzn-query-parms-9.png" alt="" /></p>

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