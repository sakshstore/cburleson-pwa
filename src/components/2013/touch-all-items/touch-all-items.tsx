import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-touch-all-items-in-a-wcm-library',
})
export class PageTouchAllItems {

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

                            <p><img class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/logo-websphere.png" alt="WebSphere Portal Logo" width="150" height="150" />Occasionally, you may find yourself with the need to “touch” (force a SAVE operation) on every item in a given WCM library. For example, we recently had some environmental issues that left us with a pretty large sum of taxonomy categories that did not syndicate. After recreating the syndicator/subscriber pair, we could get individual categories to syndicate by “touching” them on the source server. But there were far too many to touch by hand. Before you go running towards the API to build a custom utility for such a task, consider first, the RefreshAllItems module.</p>

                            <p>The RefreshAllItems module was introduced in&nbsp;<a href="http://www-01.ibm.com/support/docview.wss?uid=swg1PK31637" rel="nofollow">APAR PK31637</a>, which goes all the way back to IBM WebSphere Portal and IBM Web Content Manager 6.0.0.1. Once it is configured for use, it is invoked by hitting a specific URL that tells the WCM servlet to fire the module on a given library. The URL looks like this:</p>

                            <p><code>http://&lt;serverName&gt;:&lt;serverPort&gt;/wps/wcm/connect?MOD=RefreshAllItems[&#038;library=&lt;libName&gt;][&#038;preserve_dates=true]</code></p>

                            <p>In addition to forcing many items to syndicate because they’ve been touched, this module can help fix referential integrity issues (which are less and less common as you migrate up from WebSphere Portal 6 into successive versions, by the way). At one point in time, for example, IBM released a fix that stores WCM content in a new, performance-enhanced format. Legacy content is only converted to the new format when it is saved. So, this module provides a way to sweep an entire library and “upgrade” the legacy content.</p>

                            <p>Learn how to configure and execute the module:</p>

                            <p><a href="http://www-01.ibm.com/support/docview.wss?uid=swg1PK31637" rel="nofollow">PK31637: REFERENTIAL INTEGRITY ISSUES</a></p>

                            <p>The module is also noted briefly in the WCM 7 documentation on&nbsp;<a href="http://www-10.lotus.com/ldd/portalwiki.nsf/xpDocViewer.xsp?lookupName=IBM+Web+Content+Manager+7+Product+Documentation#action=openDocument&amp;res_title=Web_Content_Management_configuration_services_wcm7&amp;content=pdcontent&amp;sa=true" rel="nofollow">this page</a>, and in WCM 8 on&nbsp;<a href="http://www-10.lotus.com/ldd/portalwiki.nsf/xpDocViewer.xsp?lookupName=IBM+Web+Content+Manager+8+Product+Documentation#action=openDocument&amp;res_title=Web_Content_Manager_configuration_services_wcm8&amp;content=pdcontent&amp;sa=true" rel="nofollow">this page</a>.</p>

                            <p>Now, I know I don’t have to tell you not to execute a utility like this in a production system during peak hours. By nature, it’s going to use up some CPU and then, consequently, fill up quite a bit of syndication bandwidth (depending on your library size).</p>

                            <p>Until next time, enjoy your work and evolve the Web!</p>


                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                            
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}