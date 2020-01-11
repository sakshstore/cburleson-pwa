import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-eclipse-tip-format-source-code-on-save',
})
export class PageEclipseFormatSource {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageEclipseFormatSource.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + SITENAME;
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

                            <p><img class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/logo-eclipse.svg" width="100"/>Pressing <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>F</kbd> in the Eclipse editor will automatically format source code according to the default or specific formatter preference settings. However, if team members do not format consistently before committing code, relevant changes can become difficult to identify amongst code style changes. One way to alleviate this problem is to force Eclipse (or any Eclipse-based IDE) to format source code automatically on Save. Here’s how…</p>

                            <p class="clear">You can set this behavior globally or on a per-project basis. I would recommend that you enforce it at the project level since you can’t be sure that other developers will keep the global setting turned on. This will work in Eclipse or any Eclipse-based IDE such as Rational Application Developer or the Spring Tools Suite.</p>

                            <h2>Project specific settings</h2>

                            <ol>
                                <li>Right-click on any project in the workspace and select Properties.</li>
                                <li>In the Project Properties dialog, expand Java Editor and then click Save Actions.</li>
                                <li>Check Enable project specific settings.</li>
                                <li>Check Format source code and Organize imports.</li>
                                <li>Click Apply and OK.</li>
                            </ol>

                            <h2>Global settings</h2>

                            <ol>
                                <li>Select Window &gt; Preferences in the application menu.</li>
                                <li>In the Preferences dialog, expand Java &gt; Editor and then click on Save Actions.</li>
                                <li>Check Perform the selected actions on save.</li>
                                <li>Check Format source code and Organize imports.</li>
                                <li>Click Apply and OK.</li>
                            </ol>

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