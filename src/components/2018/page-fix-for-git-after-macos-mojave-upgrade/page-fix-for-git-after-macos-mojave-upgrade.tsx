import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, isLocal, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-fix-for-git-after-macos-mojave-upgrade',
})
export class PageFixForGitAfterMacosMojaveUpgrade {

    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('>> PageFixForGitAfterMacosMojaveUpgrade.componentWillLoad');
        }
        
        let id = extractIdFromDocumentPath();
        this.header = BlogData.getPostHeaderById(id);

 
        document.title = this.header.title + ' | ' + SITENAME;
        if(this.header.teaser) {
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

                            <p>Recently, I upgraded my macOS to Mojave and ran into the following error after running the <code>git init</code> command.</p>

<deckgo-highlight-code language="bash"><code slot="code">{`xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), 
    missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun`}</code></deckgo-highlight-code>

                            <p>I was able to fix this by running the following command in a terminal…</p>


<deckgo-highlight-code language="bash"><code slot="code">{`xcode-select --install`}</code></deckgo-highlight-code>

                            <p>Accept the license and install xcode-select when the associated install prompt window appears. You should then be back in business (at least, I was).</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}