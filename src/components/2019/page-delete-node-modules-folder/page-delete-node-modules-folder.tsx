import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import Prism from "prismjs"
import 'prismjs/components/prism-bash.min.js';

import { BlogData } from '../../../services/blog-data';



@Component({
    tag: 'page-delete-node-modules-folder-on-windows',
})
export class PageDeleteNodeModulesFolder {

    title = 'How to delete the node_modules folder on Windows';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageDeleteNodeModulesFolder.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + SITENAME;
        if(this.header.teaser) {
            document.getElementById("meta-desc").setAttribute("content", this.header.teaser);
        }
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

                            <p><img class="alignleft" style={{marginBottom: `8px`, maxWidth: `100px`}} src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/logo-npm.svg" /> If you attempt to delete the node_modules folder on Windows, you may have trouble for a variety of reasons.
                                In some cases, for example, the folder nesting within the directory creates folder names that are too long.
                                You might also get the annoying Folder Access Denied message stating, &quot;You'll need to provide administrator permission to delete this folder&quot; (shown below).</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2019/12/folder-access-denied-dialog.jpg" /></p>

                            <p>The solution I use is to install <a href="https://github.com/isaacs/rimraf" rel="nofollow">RimRaf</a> globally with npm and then use it to delete the folder. RimRaf is an implementation of the UNIX/LINUX command <code>rm -rf</code> for Node, which removes directories and their contents recursively. First, enter this command to install RimRaf from npm:</p>

                            <pre><code class="language-bash">{`npm install rimraf -g`}</code></pre>

                            <p>Once it is installed, you can use the following command from within the project directory that contains the node_modules folder...</p>

                            <pre><code class="language-bash">{`rimraf node_modules`}</code></pre>

                            <p>That's it! It works and it's easy to remember and execute.</p>

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