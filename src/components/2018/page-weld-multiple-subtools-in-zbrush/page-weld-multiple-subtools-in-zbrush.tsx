import { Component, h } from '@stencil/core';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-weld-multiple-subtools-in-zbrush',
})
export class PageWeldMultipleSubtoolsInZbrush {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageWeldMultipleSubtoolsInZbrush.componentWillLoad');
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

                <p>If you want to weld multiple subtools together to create one seamless mesh, here’s how…</p>
                <p>Supposing that you have two subtools in the Subtool palette.</p>
                <p>Turn on Live Boolean (click the Live Boolean button to activate Live Boolean).</p>
                <p>Then navigate to Subtool &gt; Boolean and click Make Boolean Mesh.</p>
                <p>This will scan through all the subtools in the Subtool pallet, weld them together, and create a new Tool that can now be found in the Tool palette.</p>
                <p>This is different than merging subtools in the Subtool palette (using Subtool &gt; Merge &gt; MergeDown, for example). That technique combines the subtools, but does not literally weld the geometry together. If you’ve already got the subtools merged together in this way and you want to weld the geometry together, you can try this approach:</p>
                <ul>
                    <li>Duplicate detailed subtool</li>
                    <li>Dynamesh the duplicate to combine meshes into one seamless mesh</li>
                    <li>Zremesh the new merged mesh to get a clean, lower poly flow</li>
                    <li>Subdivide the new mesh a few times so it can “hold” the details</li>
                    <li>Project the initial detailed mesh onto the new clean mesh</li>
                </ul>

            </ion-content>

        ];
    }
}