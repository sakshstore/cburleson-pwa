import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import Prism from "prismjs"
import 'prismjs/components/prism-java.min';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-logging-through-websphere-portal-from-java-and-jsps',
})
export class PageLoggingThroughWebsphere {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageLoggingThroughWebsphere.componentWillLoad');
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

                            <p>Recently, I wanted to tap into the WebSphere Portal logging system so that administrators can toggle tracing for my application classes at runtime by using the Enable Tracing feature in the WebSphere Portal Admin UI.</p>

                            <p>I was attempting the typical java.util.logging business like this:</p>

                            <p><strong>Imports</strong></p>

                            <pre><code class="language-java">{`import java.util.logging.Level;
import java.util.logging.Logger;`}</code></pre>

                            <p><strong>Declare the Logger</strong></p>

                            <pre><code class="language-java">{`public static final Logger LOG = Logger.getLogger(PDFUtils.class.getName());`}</code></pre>

                            <p><strong>Use the Logger (well, attempt to&#8230;)</strong></p>

                            <pre><code class="language-java">{`if(LOG.isLoggable(Level.FINEST)) {
    LOG.finest("HELLO WORLD!");
}`}</code></pre>

                            <h2>Problem</h2>

                            <p>I would then navigate to Portal Admin &gt; Enable Tracing and add com.base22.*=finest, but none of my statements ever spit out to my console in Rational Software Architect or to WebSphere Portal&#8217;s SystemOut.log file. As it turns out, &#8220;log entries lower than WsLevel.DETAIL are never stored in the SystemOut.log file&#8221;. After much searching, I finally learned this from a post found online called <a href="http://www.webagesolutions.com/knowledgebase/waskb/waskb026/index.html" rel="nofollow">LOGGING AND TRACING FROM A WEBSPHERE BASED J2EE APPLICATION</a>.</p>

                            <h2>Solution</h2>

                            <p>My final solution was to include an import for the WebSphere specific levels like so&#8230;</p>

                            <pre><code class="language-java">{`import com.ibm.websphere.logging.WsLevel;`}</code></pre>

                            <p>.. and then modify my logging statements to key off of WsLevel.DETAIL, which FINE, FINER, and FINEST roll up into; like this:</p>

                            <pre><code class="language-java">{`if (LOG.isLoggable(WsLevel.DETAIL)) {
    LOG.log(WsLevel.DETAIL,">> writePDFFromContentToOutputStream()");
}`}</code></pre>


                            <p>Hopefully this will save you the time it took me to whittle trough it.</p>

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