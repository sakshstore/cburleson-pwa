import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';
// Use this if using source code blocks to be formatted by prism.js...
// import Prism from "prismjs"

// And any, but ONLY the languages you need to use with prism...

// import 'prismjs/components/prism-javascript.min.js';
// import 'prismjs/components/prism-typescript.min';
// import 'prismjs/components/prism-json.min';
// import 'prismjs/components/prism-yaml.min';
// import 'prismjs/components/prism-java.min';
// These two both for SPARQL:
// import 'prismjs/components/prism-turtle.min.js';
// import 'prismjs/components/prism-sparql.min.js';
// import 'prismjs/components/prism-bash.min.js';

import { BlogData } from '../../../services/blog-data';



@Component({
    tag: 'page-new-web-developer-toolkit-for-ibm-digital-experience',
})
export class PageNewWebDeveloperToolkit {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageNewWebDeveloperToolkit.componentWillLoad');
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

    // Use this if using source code blocks to be formatted by prism.js...
    // componentDidLoad() {
    // setTimeout(() => Prism.highlightAll(), 0)
    // }

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

                            <p>With the new Web Developer Toolkit for IBM Digital Experience you can automatically download all the components and presentation templates in a WCM library where you can access them quickly and easily in your favorite editor. You can also push updated files back onto the server with the click of a button or even watch for changes and have them pushed back to the server automatically. The tool also offer features for syncing theme and script portlet files.</p>

                            <p>We tried the tool today on a couple of WCM libraries and seems to work pretty great.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/web-Developer-Toolkit-For-IBM-DX1.png" alt="" /></p>


                            <p>You can download it from GitHub here:</p>

                            <p><a href="https://github.com/OpenNTF/WebDevToolkitForDx/blob/master/README.md" rel="nofollow">Download Web Developer Toolkit for IBM Digital Experience</a>.</p>

                            <p>This toolkit is available as unsupported open source. IBM expects to enhance and expand this toolkit over the next months with additional features.</p>

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