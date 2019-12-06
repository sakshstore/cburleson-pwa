import { Component, h } from '@stencil/core';
// Use this if using source code blocks to be formatted by prism.js...
// import Prism from "prismjs"

// And any, but ONLY the languages you need to use with prism...

// import 'prismjs/components/prism-javascript.min.js';
// import 'prismjs/components/prism-typescript.min';
// import 'prismjs/components/prism-json.min';
// import 'prismjs/components/prism-yaml.min';
// import 'prismjs/components/prism-java.min';
// These two both for SPARQL:
// import '/assets/prismjs/prism-turtle.min.js';
// import '/assets/prismjs/prism-sparql.min.js';

import { BlogData } from '../../../services/blog-data';


import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-how-to-use-live-boolean-in-zbrush',
})
export class PageHowToUseLiveBooleanInZbrush {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageHowToUseLiveBooleanInZbrush.componentWillLoad');
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

                <p>Live Boolean allows you to perform real-time boolean operations with subtools in ZBrush.</p>
                <p>Click the button to enable “Live Boolean”.</p>
                <p>The object you boolean needs to be a polymesh 3d.</p>
                <p>In the subtools palette, click “Append” to add a new subtool and choose a primitive such as a sphere.</p>
                <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/04/zbrush-live-boolean-1.png" alt="" /></p>
                <p>At first, the new subtool will have the same bounding box, so, you may not be able to see it. You can click move and move the subtool (transform it), until you can see it…</p>
                <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/04/zbrush-live-boolean-2.png" alt="" /></p>
                <p>Now you can use the options for cutting into or intersection…</p>
                <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/04/zbrush-live-boolean-3.png" alt="" /></p>
                <p>Cut into…</p>
                <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/04/zbrush-live-boolean-4.png" alt="" /></p>
                <p>Intersect…</p>
                <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/04/zbrush-live-boolean-5.png" alt="" /></p>
                <p>You can “bake” the result by going to Boolean in the Subtools palette and click “Make Boolean Mesh”. This bakes the boolean operation and puts the baked tool into the Tools palette (which you could Append as a new subtool into the subtools palette if you want to).</p>
                <h2>References</h2>
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=yKhIk3_PEbc" rel="nofollow">Zbrush 4R8: Live Booleans, YouTube Video</a></li>
                </ul>

            </ion-content>

        ];
    }
}