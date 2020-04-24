import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-how-to-start-a-simple-http-server-from-any-folder-on-a-mac',
})
export class PageStartSimpleHttpServer {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageStartSimpleHttpServer.componentWillLoad');
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

                            <p>Here’s a simple command that will startup an HTTP server from any given folder on a Mac. Open Terminal, cd to change to the directory you wish to serve files from, and then execute the following command.</p>

                            <p><code>python -m SimpleHTTPServer 8000</code></p>

                            <p>This can be very handy for web development on a Mac; especially when using the Google Chrome web browser, which doesn’t allow you to run JavaScript from your filesystem. Even if you bypass Chrome’s restriction by starting it with the –allow-file-access-from-files parameter, there can be cases where a web server is still desired. For example, when using Cross-Origin Resource Sharing (CORS) for cross-domain Ajax, the browser needs to report its origin with an HTTP request. When served by the web server, Origin will report <code>http://localhost:8000</code> rather than <code>null</code> or <code>file://</code>.</p>

                            <h2>Python 3.x+ releases</h2>

                            <p>If you’re a Mac Python user who has installed or updated to Python 3, then you&#8217;ll find the traditional command string from the prior Python versions does not work to initiate the web server in new Python 3.x+ releases. For Python 3.x+, use the following instead:</p>

                            <p><code>python -m http.server</code></p>

                            <p>OR (depending on how Python 3.x is installed and named):</p>

                            <p><code>python3 -m http.server</code></p>

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