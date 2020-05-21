import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-how-to-use-live-boolean-in-zbrush',
})
export class PageZbrushUseLiveBoolean {

    header: any;

    async componentWillLoad() {
        let id = extractIdFromDocumentPath();
        this.header = BlogData.getPostHeaderById(id);
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

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                            
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>



        ];
    }
}