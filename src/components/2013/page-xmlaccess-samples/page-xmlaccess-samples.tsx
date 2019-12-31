import { Component, h } from '@stencil/core';

import Prism from "prismjs"
import 'prismjs/components/prism-bash.min.js';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-xmlaccess-samples',
})
export class PageXmlaccessSamples {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageXmlaccessSamples.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + EnvironmentConfigService.getInstance().get('siteName');
    }

    componentDidLoad() {
        setTimeout(() => Prism.highlightAll(), 0)
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

                            <p><img class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/logo-websphere.png" alt="WebSphere Portal Logo" width="154" />XMLAccess is a command-line utility for exporting and importing various portal configuration settings in an XML format. The utility takes an XML file as input and produces an XML file, which is the results of the input. It’s a very common way of moving configuration settings from one environment to another. On the portal file system, there are number of useful samples, which can be used as-is or a basis for creating your own scripts. Following is a list of the available XMLAccess samples. I wanted to list these on my blog because it’s often more convenient to check them here than on the actual server file system.</p>

                            <h2>XMLAccess samples</h2>

                            <p>Found in&nbsp;<code>&lt;PortalServer-root&gt;/doc/xml-samples.</code><br />
                                (<em>list made from samples found in IBM WebSphere Portal version 8</em>)</p>


                            <ion-grid>
                                <ion-row>
                                    <ion-col>
                                        ActivatePortlet.xml<br />
                                        CleanSystemSlots.xml<br />
                                        CleanupUsers.xml<br />
                                        ClonePortlet.xml<br />
                                        CopyPage.xml<br />
                                        CreateAnalyticsTags.xml<br />
                                        CreateApplicationFolder.xml<br />
                                        CreateCsaPage.xml<br />
                                        CreateFilter.xml<br />
                                        CreateLanguage.xml<br />
                                        CreateLegacyPage.xml<br />
                                        CreatePage.xml<br />
                                        CreatePageFromTemplate.xml<br />
                                        CreatePageFromZip.xml<br />
                                        CreateTagsAndRatings.xml<br />
                                        CreateTemplateFolder.xml<br />
                                        CreateUrl.xml<br />
                                        CreateUser.xml<br />
                                        CreateWSRPProducer.xml<br />
                                        DeleteAnalyticsTags.xml<br />
                                        DeleteFilter.xml<br />
                                        DeletePage.xml<br />
                                        DeletePortlet.xml<br />
                                        DeleteTagsAndRatings.xml<br />
                                        DeleteUser.xml<br />
                                        DeployPortlet.xml<br />
                                        DeployTheme.xml<br />
                                        DeployThemeFromWebModule.xml<br />
                                        Export.xml<br />
                                        ExportAllPolicyNodes.xml<br />
                                        ExportAllPortlets.xml</ion-col>
                                    <ion-col>
                                        ExportAllUsers.xml<br />
                                        ExportAnalyticsTags.xml<br />
                                        ExportIncludingOrphanedData.xml<br />
                                        ExportManagedPagesRelease.xml<br />
                                        ExportPage.xml<br />
                                        ExportPageResult.xml<br />
                                        ExportPortletAndPage.xml<br />
                                        ExportPortletAndStaticPage.xml<br />
                                        ExportRelease.xml<br />
                                        ExportStaticPage.xml<br />
                                        ExportSubTree.xml<br />
                                        ExportTagsAndRatings.xml<br />
                                        ExportTasks.xml<br />
                                        ExportThemesAndSkins.xml<br />
                                        ExportUserResource.xml<br />
                                        ExportWSRPCustomizedPortletInstances.xml<br />
                                        ExportWSRPProducer.xml<br />
                                        ExportWSRPProducersAndPortlets.xml<br />
                                        FederationDeletion.xml<br />
                                        FederationImport.xml<br />
                                        IntegrateRemotePortlet.xml<br />
                                        ModifyPortlet.xml<br />
                                        MovePage.xml<br />
                                        RegisterPreDeployedEAR.xml<br />
                                        Task.xml<br />
                                        Transaction.xml<br />
                                        UpdateAccesscontrol.xml<br />
                                        UpdateFilter.xml<br />
                                        UpdatePortlet.xml<br />
                                        UpdateVault.xml</ion-col>
                                </ion-row>
                            </ion-grid>

                            <h2>Example: export all themes and skins</h2>

                            <p>Following is an example of how one of these scripts might be executed on a UNIX system:</p>

                            <pre><code class="language-bash">{`/usr/IBM/WebSphere/PortalServer/bin/xmlaccess.sh -user wpsadmin -password <password> -url http://<host>:<port>/wps/config -in /usr/IBM/WebSphere/PortalServer/doc/xml-samples/ExportThemesAndSkins.xml -out /home/<user-home>/ExportThemesAndSkins_result.xml`}</code></pre>

                            <p><em>In the command above, you should modify the paths if they differ on your server and you must also replace &lt;password&gt;, &lt;host&gt;, &lt;port&gt;, and &lt;user-home&gt; with values appropriate to your own environment.</em></p>



                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">

                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>




        ];
    }
}