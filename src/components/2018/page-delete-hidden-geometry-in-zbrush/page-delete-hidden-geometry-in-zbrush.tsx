import { Component, h } from '@stencil/core';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-delete-hidden-geometry-in-zbrush',
})
export class PagedDleteHiddenGeometryInZbrush {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PagedDleteHiddenGeometryInZbrush.componentWillLoad');
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

                <app-entry-meta header={this.header} />

                <ul>
                    <li><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> and drag out a selection to select geometry to hide. Press <kbd>ALT</kbd> before releasing.</li>
                    <li>In Tools &gt; Geometry &gt; Modify Topology, click Del Hidden.</li>
                    <li>Optionally, in the same panel, you may click Close Holes to cap open holes.</li>
                </ul>

            </ion-content>

        ];
    }
}