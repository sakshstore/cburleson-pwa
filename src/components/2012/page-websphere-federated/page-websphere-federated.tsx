import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-websphere-federated-repository-lesson-learned',
})
export class PageWebsphereFederated {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageWebsphereFederated.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
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

                            <p><img class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/DManager150x150.png" alt="" width="150" height="150" />When configuring WebSphere Portal to use the federated repository for non-prod environments, you have the option to leave the wasadmin and wpsadmin users in the defaultWIMFileBasedRealm. With this configuration, you should be able to login to the deployment manager and WebSphere Portal even if your federated user repository is down. I learned today, however, that it’s not enough to simply leave the administrative users there. There’s also a very important configuration option that must be checked or the whole plan is kaput.</p>

                            <p>In the WebSphere Integrated Solutions Console (WAS admin interface, deployment manager), under Security, click Global Security as indicated below…</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/WASGlobalSecurity.png" alt="" /></p>

                            <p>Next, click the ‘Configure…’ button for the Federated repositories realm definition…</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/ConfigureFederatedRepositories.png" alt="" /></p>

                            <p>Check the checkbox to Allow operations if some of the repositories are down as shown below. If you don’t do that then everything’s dead after one of your repositories fail, so it wouldn’t even matter that your administrative users are still in the defaultWIMFIleBasedRealm.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/AllowOperationsIfRepositoriesAreDown.png" alt="" /></p>

                            <p>Recently we changed our Active Directory (AD) server configuration and I needed to access my Deployment Manager to change the AD host, but I could not login to the Deployment Manager because I’d overlooked this setting. Both me and one of my colleagues burned some valuable time getting around this. So, if you’re counting on this strategy to save you too, perhaps you should double-check this setting now – <em>before</em> you have to actually rely on it.</p>

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