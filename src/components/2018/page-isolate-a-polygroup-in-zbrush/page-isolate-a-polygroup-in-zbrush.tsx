import { Component, h } from '@stencil/core';
// Use this if using source code blocks to be formatted by prism.js...
// import Prism from "prismjs"

// And any, but ONLY the languages you need to use with prism...

// import 'prismjs/components/prism-typescript.min';
// import 'prismjs/components/prism-json.min';
// import 'prismjs/components/prism-yaml.min';
// These two both for SPARQL:
// import '/assets/prismjs/prism-turtle.min.js';
// import '/assets/prismjs/prism-sparql.min.js';

import { BlogData } from '../../../services/blog-data';


import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-isolate-a-polygroup-in-zbrush',
})
export class PageTemplatePage {

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

    // Use this if using source code blocks to be formatted by prism.js...
    // componentDidLoad() {
    // setTimeout(() => Prism.highlightAll(), 0)
    // }

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

                <p>When you isolate a polygroup in ZBrush, you can then work with it independently.&nbsp;After isolating one or more polygroups, for example, you might want to delete those that are hidden, which you could then do with Tool &gt; Geometry &gt; Modify Topology &gt; Del Hidden.</p>

                <p>First, you&#8217;ll want to be in Draw Polyframe mode, so that you can see all all the polygroups. You can toggle this mode with <kbd>SHIFT</kbd> + <kbd>F</kbd> as shown below.</p>

                <figure class="wp-block-image"><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/05/zbrush-draw-polyframe.jpg" alt="Toggle polyframe mode with SHIFT + F" class="wp-image-1418" /></figure>


                <p>Hold&nbsp;<kbd>CTRL</kbd> + <kbd>SHIFT</kbd>&nbsp;and click on a given polygroup to isolate it, hiding all the others.</p>

                <figure class="wp-block-image"><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/05/isolate-polygroup-1.png" alt="" class="wp-image-552" /></figure>

                <p>Hold&nbsp;<kbd>CTRL</kbd> + <kbd>SHIFT</kbd>&nbsp;and click on an empty place in the canvas to return all polygroups to view.</p>

                <p>If the Select Rect brush is your active brush, you can&nbsp;<kbd>SHIFT</kbd> + <kbd>CLICK</kbd>&nbsp;and drag a rectangle on an empty place in the canvas to invert the visible polygroups.</p>

                <figure class="wp-block-image"><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/05/isolate-polygroup-2.png" alt="" class="wp-image-553" /></figure>

                <h2>Selecting more than one polygroup</h2>

                <p>Here&#8217;s the procedure for selecting more than one polygroup as described in the <a href="http://docs.pixologic.com/user-guide/3d-modeling/modeling-basics/polygroups/" rel="nofollow">ZBrush documentation for polygroups</a>:</p>

                <ol><li>Press <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> and click on the mesh where one group is</li><li>Invert that selection: press <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> then click and drag outside of the mesh</li><li>Press <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> and click on the other groups you want to select</li><li>Invert this selection: press <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> then click and drag outside the model</li></ol>

            </ion-content>

        ];
    }
}
