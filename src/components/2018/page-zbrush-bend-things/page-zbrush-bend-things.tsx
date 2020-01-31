import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-bend-things-in-zbrush-with-the-bend-curve-modifier',
})
export class PageZbrushBendThings {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageZbrushBendThings.componentWillLoad');
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

                            <p>Here’s a quick note on how to bend things in ZBrush using the Bend Curve modifier. This as essential technique that you will likely use a lot in your sculpting.</p>
                            <p>Take the following cylinder for example…</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/10/zbrush-bend-curve-1-1024x285.jpg" alt="" /></p>
                            <p>Let’s bend it!</p>
                            <p>Press either <kbd>W</kbd>, <kbd>E</kbd>, or <kbd>R</kbd> for Move, Scale, or Rotate. You can also press the Move, Scale, or Rotate icons in the top toolbar. This brings up the transform gizmo as shown below.</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/10/zbrush-bend-curve-2-1024x646.jpg" alt="" /></p>
                            <p>Press the gear icon, which brings up the Transform Type modal…</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/10/zbrush-bend-curve-3-1024x353.jpg" alt="" /></p>
                            <p>In the Transform Type modal, click the Bend Curve modifier button indicated by the red arrow above. At this point, you may get a message that the mesh is a 3D-Primitive. If so, you’ll need to click the Make PolyMesh3D button in the Tool palette to convert it.</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/10/zbrush-bend-curve-4-1024x297.jpg" alt="" /></p>
                            <p>Drag on the indicated axis cone to change the axis that you wish to bend on. We’ll pull it out one stop to position 2, which is the Y axis. You will see the yellow bend points change.</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/10/zbrush-bend-curve-5-1024x300.jpg" alt="" /></p>
                            <p>Drag the indicated cone to change the number of bend points if you want. Then just drag on the bend points to bend the PolyMesh as desired.</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/10/zbrush-bend-curve-6.jpg" alt="" /></p>
                            <p>Notice that you can also drag on the indicated scale or twist cones to scale and/or twist at the selected bend point.</p>
                            <p>When you’re done bending the PloyMesh to your liking, click the gear icon again and then the Accept button to apply the changes.</p>
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