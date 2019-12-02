import { Component, h } from '@stencil/core';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-convert-zbrush-polygroups-into-subtools',
})
export class PageConvertZbrushPolygroupsIntoSubtools {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageConvertZbrushPolygroupsIntoSubtools.componentWillLoad');
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

                <p>Normally, polygroups display sections of a single mesh. If you want to convert polygroups into SubTools you can do the following.</p>
                <p>If your model has different elements go to Tool &gt; Polygroups and select Auto Groups. You can then go to SubTools &gt; Split and click Groups Split. Groups Split will be disabled unless all polygroups are visible on the canvas (<em>press <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> and click an empty area of the canvas to display all polygroups</em>).</p>
                <p>When you want to merge all the stuff again just make each SubTool visible and pick&nbsp;SubTool &gt; Merge &gt; Merge Visible. ZBrush will create a&nbsp;<em>new</em>&nbsp;tool with all the former SubTools together again. Note that&nbsp;in merge visible you have an option for weld verts.</p>
                <p><em>Warning: When you merge visible SubTools you will lose sublevels and the merged new tool is created with every SubTool at the current level.</em></p>

            </ion-content>

        ];
    }
}