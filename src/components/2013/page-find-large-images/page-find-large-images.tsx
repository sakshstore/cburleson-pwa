import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, isLocal, SITENAME } from '../../../helpers/utils';




import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-how-to-find-large-images-and-files-in-ibm-wcm',
})
export class PageFindLargeImages {

    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('>> PageFindLargeImages.componentWillLoad');
        }
        
        
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

                            <p><img class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/logo-websphere.png" alt="WebSphere Portal Logo" />Even though you can limit the maximum size of the resources that can be uploaded in WCM, you may still wish to perform an occasional audit for large files. The FindLargeResources module, developed for APAR PK75187 (going back to Portal 6.1.0.4), was created for such a task.</p>

                            <h2>WHY?</h2>

                            <p>Users can experience poor performance when viewing large resources that have been uploaded into Image, File, and Rich Text Components (including the Ephox EditLive!). You may wish to periodically review large items in an effort to improve user experience. For example, you may have a content author who is uploading unnecessarily high-res images that needs to be identified and educated.</p>

                            <p>You could use the WCM API to determine the size of images for Image and File Components, but that would be very slow because each item would have to be retrieved individually. Furthermore, there is no API tool to find the size of embedded images in Rich Text fields. So, the FindLargeResources module fills these gaps.</p>

                            <h2>HOW?</h2>

                            <p>The following lines should be added to the WCMConfigService.properties file in &lt;Portal directory&gt;/wcm/shared/app/config/wcmservices</p>

                            <deckgo-highlight-code language="properties"><code slot="code">{`connect.businesslogic.module.findlargeresources.class=com.ibm.workplace.wcm.services.statistics.FindLargeResourcesModule
connect.businesslogic.module.findlargeresources.remoteaccess=true
connect.businesslogic.module.findlargeresources.autoload=false`}</code></deckgo-highlight-code>

                            <p>Also, append findlargeresources to this key: ‘connect.businesslogic.module’</p>

                            <p>For example:</p>

                            <deckgo-highlight-code language="properties"><code slot="code">{`connect.businesslogic.module=template,multi_template,web,mail,form,aggregator,default,ajpe,federatedproxy,ajpecatselect,memberfixer,versioningenablement,workflowenablement,itemdispatcher,plutouploadfile,plutodownloadfile,ensureusermanagement,pdmproxy,synd,subs,syndication,refreshallitems,unlocklibrary,findlargeresources,custom`}</code></deckgo-highlight-code>

                            <p>Restart the server for the changes to take effect. You should then be able to execute the module by entering a URL in your browser, similar to the following:</p>

                            <p><code>http://&lt;serverName&gt;:/wps/wcm/connect?MOD=FindLargeResources[&#038;min_size=]</code></p>

                            <p>The module will find all Image File and Rich Text Component’s resources that are greater than the minimum size specified by the “min_size” parameter (in bytes). If no size is specified, it will look by default for resources greater then 1 Mb. For Rich Text Components, it will not find resources that are less than 2 Mbs.</p>

                            <p>The result will output each resource item’s name, path, type and size.</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}