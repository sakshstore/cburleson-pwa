import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-create-clothing-in-zbrush-extruding-masked-area',
})
export class PageZbrushCreateClothingExtrudingMask {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageZbrushCreateClothingExtrudingMask.componentWillLoad');
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

                            <p>This tutorial demonstrates a quick and simple way to create clothing in ZBrush by extruding a polygroup out from a Subtool.</p>

                            <p>Mask an area on the SubTool by holding down CTRL and painting on the Subtool.</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-cloth-extrude-1.png" alt="" /></p>
                            <p>In the Polygroups palette, click &gt; Group Masked</p>
                            <p>Press CTRL + SHIFT and click the new polygroup to select it.</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-cloth-extrude-2.png" alt="" /></p>
                            <p>Under Geometry, make sure you have no subdivisions; the panel loop feature will not work on models with subdivisions. Remove subdivisions if it has them.</p>
                            <p>In the Geometry palette, expand the EdgeLoop section.</p>
                            <p>Click the Append button, which is just to the right of the Panel Loops button. This will create a back-face for your mesh so that you can separate it off and your mesh can have thickness without cutting a hole into the body underneath.</p>
                            <p>Increase thickness slightly with the Thickness slider.&nbsp;Try 0.02 for thickness, for example.</p>
                            <p>Click the Panel Loops button to see what you get.</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-cloth-extrude-3.png" alt="" /></p>
                            <p>CTRL + Z to undo an unwanted result and keep adjusting your thickness to what’s desired.</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-cloth-extrude-4.png" alt="" /></p>
                            <p>Now, if you turn on Polyframe mode, you’ll notice that the clothing item is its own new group with another polygroup at the edge(s).</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-cloth-extrude-5.png" alt="" /></p>
                            <p>If you want to get rid of the extra polygroup on the edge(s), you can go to Polygroups palette and click the Auto Groups button.</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-cloth-extrude-6.png" alt="" /></p>
                            <p>You can now CTRL + SHIFT + click on the new polygroup in order to isolate it.</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-cloth-extrude-7.png" alt="" /></p>
                            <p>Go to Subtools palette, expand the Split section, and click the Split Hidden button.</p>
                            <p>Now the item and the body from which you started are now two separate objects (two separate Subtools)</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-cloth-extrude-8.png" alt="" /></p>

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