import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-unity-preferences-your-built-in-keyboard-cheat-sheet',
})
export class PageUnityPreferencesYourBuiltInKeyboardCheatSheet {

    header: any;

    async componentWillLoad() {
        let id = extractIdFromDocumentPath();
        this.header = BlogData.getPostHeaderById(id);

 
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

                            <p>Learning keyboard commands in the Unity game development tool is essential to working fast and efficiently. To find them, you don’t have to search the Web for a cheat sheet; you can simply open Unity’s Preferences. From the menu bar, select Unity &gt; Preferences…</p>
                            <p><img title="Keyboard Commands in Unity Preferences" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2012/11/UnityKeysInPreferences.png" alt="Keyboard Commands in Unity Preferences" /></p>
                            <p>Once the Unity Preferences view appears, select Keys and then choose from the list of Actions. The keyboard commands for the selected action are then shown.</p>
                            <p>We recommend that you avoid changing the keyboard action settings if you’re new to Unity because the default settings may be referenced in the documentation and tutorials that you’ll be learning from.</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">

                            

                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>


        ];
    }
}