import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-convert-zbrush-polygroups-into-subtools',
})
export class PageZbrushConvertPolygroupsIntoSubtools {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageZbrushConvertPolygroupsIntoSubtools.componentWillLoad');
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

                            <p>Normally, polygroups display sections of a single mesh. If you want to convert polygroups into SubTools you can do the following.</p>
                            <p>If your model has different elements go to Tool &gt; Polygroups and select Auto Groups. You can then go to SubTools &gt; Split and click Groups Split. Groups Split will be disabled unless all polygroups are visible on the canvas (<em>press <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> and click an empty area of the canvas to display all polygroups</em>).</p>
                            <p>When you want to merge all the stuff again just make each SubTool visible and pick&nbsp;SubTool &gt; Merge &gt; Merge Visible. ZBrush will create a&nbsp;<em>new</em>&nbsp;tool with all the former SubTools together again. Note that&nbsp;in merge visible you have an option for weld verts.</p>
                            <p><em>Warning: When you merge visible SubTools you will lose sublevels and the merged new tool is created with every SubTool at the current level.</em></p>

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