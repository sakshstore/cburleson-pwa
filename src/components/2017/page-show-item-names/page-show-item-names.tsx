import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-show-item-namesin-ibm-wcm-authoring',
})
export class PageShowItemNames {

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


                            <p>By default, the Display title, rather than the Name is displayed for items in the authoring UI for IBM Web Content Manager (WCM). It may be desirable to see the name instead. This can give authors the ability to use special naming conventions, acronyms, or codes in item names while still keeping a user friendly Display name for end-users and the search engine. If you’d like to switch the default configuration for your authors, here’s how…</p>
                            <ul>
                                <li>In the WebSphere Integrated Solutions Console (the WAS or deployment manager console), navigate to Resources &gt; Resource Environment Providers &gt; WCM WCMConfigService.</li>
                                <li>Under Additional Properties, click on the link to go to the Custom properties.</li>
                                <li>Click New… to add a new property to the list.</li>
                                <li>For the Name of the property, enter <code>wcm.authoringui.use.name.as.browser.display.value</code> and for the value <code>enter true</code>. The type of the property should remain set on java.lang.String.<br /><br />
                                    <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/resourceEnvEntryWCMName.png" alt="" /></li>
                                <li>Click OK.</li>
                                <li>In the message that says you can Save or Review changes, click the link to Review changes before saving or discarding. This will allow you to select to Synchronize changes with Nodes in one step rather than saving the changes and then later synchronizing.</li>
                                <li>Click the check box to Synchronize changes with Nodes and click the Save button.</li>
                                <li>You’ll need to restart the servers for the change to take effect. In a clustered environment, you can do this from the Deployment Manager by navigating to Servers &gt; Clusters &gt; WebSphere application server clusters, select the PortalCluster and then click the Ripplestart button. Ripplestart stops and then starts each server in the cluster in turn, which can help ensure that one member of the cluster stays up for use at all times.</li>
                            </ul>

                            <p>If your authors prefer it, now you know! At Base22, we like to say that one happy author makes a thousand happy users. To help ensure a positive end-user experience, pay careful attention to the author experience.</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                            
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}