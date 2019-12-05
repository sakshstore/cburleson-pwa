import { Component, h } from '@stencil/core';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-unity-preferences-your-built-in-keyboard-cheat-sheet',
})
export class PageUnityPreferencesYourBuiltInKeyboardCheatSheet {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageTemplatePage.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + EnvironmentConfigService.getInstance().get('siteName');
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

                <h1>{this.header.title}</h1>

                <p class="entry-meta">Posted on <time>{new Date(this.header.datePublished).toDateString()}</time> (last modified <time>{new Date(this.header.dateModified).toDateString()}</time>)</p>

                <p>Learning keyboard commands in the Unity game development tool is essential to working fast and efficiently. To find them, you don’t have to search the Web for a cheat sheet; you can simply open Unity’s Preferences. From the menu bar, select Unity &gt; Preferences…</p>
                <p><img class="img-fluid" title="Keyboard Commands in Unity Preferences" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2012/11/UnityKeysInPreferences.png" alt="Keyboard Commands in Unity Preferences" /></p>
                <p>Once the Unity Preferences view appears, select Keys and then choose from the list of Actions. The keyboard commands for the selected action are then shown.</p>
                <p>We recommend that you avoid changing the keyboard action settings if you’re new to Unity because the default settings may be referenced in the documentation and tutorials that you’ll be learning from.</p>

            </ion-content>

        ];
    }
}