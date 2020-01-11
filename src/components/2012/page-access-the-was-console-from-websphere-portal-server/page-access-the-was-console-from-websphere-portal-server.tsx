import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import Prism from "prismjs"

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-access-the-was-console-from-websphere-portal-server',
})
export class PageAccessTheWasConsoleFromWebspherePortalServer {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageAccessTheWasConsoleFromWebspherePortalServer.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + SITENAME;
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

                            <p><img class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/logo-websphere.png" alt="WebSphere Portal Logo" />Up to WebSphere Portal version 5.1, you could not access the WebSphere Application Server administration console from WebSphere Portal. You had to have your WAS server running separately. Now, you no longer have to have WAS running separately and you can access the WAS console directly from WebSphere Portal Server. Following is a URL you can try, which might work:</p>
                            <p><code>https://&lt;host&gt;:10032/ibm/console</code></p>
                            <p class="clear">In some installations, ports may differ. To find your WAS admin console port, you can check your <code>serverindex.xml</code> file.</p>
                            <p>On my local development environment, that file is located at: <code>C:\IBM\WebSphere\wp_profile\config\cells\node1\nodes\node1</code>.</p>
                            <p>In that file, you might try looking for <code>endPointName=&#8221;WC_adminhost&#8221;</code> or <code>endPointName=&#8221;WC_adminhost_secure&#8221;</code>&gt;. For example, in one of my development environments, I found the following, which confirms port 10032, but in your environment, you may find a different value there to use:</p>
                            
<pre><code class="language-xml">{`<specialEndpoints xmi:id="NamedEndPoint_1282247807415" endPointName="WC_adminhost_secure">
    <endPoint xmi:id="EndPoint_1282247807415" host="*" port="10032"/>`}</code></pre>

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