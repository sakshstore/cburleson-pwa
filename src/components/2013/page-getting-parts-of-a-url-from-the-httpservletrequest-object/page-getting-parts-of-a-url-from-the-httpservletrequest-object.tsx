import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import Prism from "prismjs"
import 'prismjs/components/prism-bash.min.js';
import 'prismjs/components/prism-java.min';

import { BlogData } from '../../../services/blog-data';


const CODE_1 = `@RequestMapping(value="/root/**", method = RequestMethod.POST)
public void handlePost(Model model,HttpServletRequest request, HttpServletResponse response) {
 
    StringBuilder sb = new StringBuilder();
    sb.append(" [");
    sb.append("\\n\\t ContextPath: ").append(request.getContextPath());
    sb.append("\\n\\t LocalAddr: ").append(request.getLocalAddr());
    sb.append("\\n\\t LocalName: ").append(request.getLocalName());
    sb.append("\\n\\t LocalPort: ").append(request.getLocalPort());
    sb.append("\\n\\t PathInfo: ").append(request.getPathInfo());
    sb.append("\\n\\t PathTranslated: ").append(request.getPathTranslated());
    sb.append("\\n\\t Protocol: ").append(request.getProtocol());
    sb.append("\\n\\t RemoteAddr: ").append(request.getRemoteAddr());
    sb.append("\\n\\t RemoteHost: ").append(request.getRemoteHost());
    sb.append("\\n\\t RemotePort: ").append(request.getRemotePort());
    sb.append("\\n\\t RequestURI: ").append(request.getRequestURI());
    sb.append("\\n\\t RequestURL: ").append(request.getRequestURL());
    sb.append("\\n\\t Scheme: " ).append(request.getScheme());
    sb.append("\\n\\t ServerName: ").append(request.getServerName());
    sb.append("\\n\\t ServerPort: ").append(request.getServerPort());
    sb.append("\\n\\t ServletPath: ").append(request.getServletPath());
    sb.append("\\n]");
 
    LOG.trace("-- handlePost() > interesting URL and URI related stuff from request object: " + sb.toString());
 
}`;

const CODE_2 = `1:07:18.650 [http-bio-8080-exec-3] TRACE c.b.c.controllers.LdpRestController - -- handlePost() > interesting URL and URI related stuff from request object: [
    ContextPath: /myapp
    LocalAddr: 0:0:0:0:0:0:0:1
    LocalName: 0:0:0:0:0:0:0:1
    LocalPort: 8080
    PathInfo: /root/hello/world.jsp
    PathTranslated: C:\workspace-c\.metadata\.plugins\org.eclipse.wst.server.core\tmp0\wtpwebapps\myapp\root\hello\world.jsp
    Protocol: HTTP/1.1
    RemoteAddr: 0:0:0:0:0:0:0:1
    RemoteHost: 0:0:0:0:0:0:0:1
    RemotePort: 49278
    RequestURI: /myapp/abc/root/hello/world.jsp
    RequestURL: http://localhost:8080/myapp/abc/root/hello/world.jsp
    Scheme: http
    ServerName: localhost
    ServerPort: 8080
    ServletPath: /abc
]`;


@Component({
    tag: 'page-getting-parts-of-a-url-from-the-httpservletrequest-object',
})
export class PageGettingPartsUrl {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageGettingPartsUrl.componentWillLoad');
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

    // Use this if using source code blocks to be formatted by prism.js...
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

                            <p>When I’m not quite sure how to get exactly what I need out of the request URL, I write some stanza that spits out the value of just about every relevant getter method on the javax.servlet.http.HttpServletRequest object. I’ve done this more than once. To be honest… more than twice – probably three or more times. I feel really bad about it, honestly. You know what I’m talking about? It looks something like this:</p>

                            <pre><code class="language-java">{CODE_1}</code></pre>

                            <p>C’mon. You know you’ve done it more than once too, so just stop it with the smug smile.</p>
                            <p>I’m ashamed and sick of it, so this time, I’m dropping a breadcrumb for my future self by posting the output, which will give me a clue in some future date when my brain is wore to the core like it is tonight. As God is my witness, I will never, ever write this code stanza again. Here’s the output…</p>

                            <pre><code class="language-bash">{CODE_2}</code></pre>

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