import { Component, h } from '@stencil/core';

import Prism from "prismjs"
import 'prismjs/components/prism-bash.min.js';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-fix-for-git-after-macos-mojave-upgrade',
})
export class PageFixForGitAfterMacosMojaveUpgrade {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageFixForGitAfterMacosMojaveUpgrade.componentWillLoad');
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

                            <p>Recently, I upgraded my macOS to Mojave and ran into the following error after running the <code>git init</code> command.</p>

                            <pre><code class="language-bash">{`xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), 
    missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun`}</code></pre>

                            <p>I was able to fix this by running the following command in a terminal…</p>
                            <p><code>xcode-select --install</code></p>
                            <p>Accept the license and install xcode-select when the associated install prompt window appears. You should then be back in business (at least, I was).</p>


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