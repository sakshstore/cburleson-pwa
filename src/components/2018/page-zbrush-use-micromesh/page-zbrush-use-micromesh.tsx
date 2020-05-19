import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-use-micromesh-in-zbrush',
})
export class PageZbrushUseMicromesh {

    header: any;

    async componentWillLoad() {
        let id = extractIdFromDocumentPath();
        this.header = BlogData.getPostHeaderById(id);

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

                            <p>A quick procedure for using MicroMesh in ZBrush. I’m sorry for the sloppiness of these notes, but this procedure is just intended to be a quick and simple reminder on how to use the feature.</p>
                            <p>You have to <a href="http://pixologic.com/zclassroom/lesson/micromesh-hood-part-2" rel="nofollow">watch the video</a> first. But I want to turn this into a recipe.</p>
                            <ul>
                                <li>Create a PolyMesh 3D plane: In the Tool palette, select PolyMesh3D &gt; Plane 3D</li>
                                <li>Tool palette &gt; Initialize &gt; Set both HDivide and VDivide to 5</li>
                                <li>Tool palette &gt; Click Make PolyMesh 3D</li>
                                <li>Press CTRL + SHIFT and drag to create a square in the center across the 4 center quads, then hold ALT to turn the selection area red and release. This hides the center, leaving only the outer quads.</li>
                                <li>Tool palette &gt; Geometry &gt; Modify Topology &gt; Delete Hidden</li>
                                <li>Transform palette &gt; Activate Symmetry; make sure both X and Y are both turned on</li>
                                <li>B + M + V to select Move Brush</li>
                                <li>Move the inner top verts up a bit, and the inner side verts out a bit (making a circular shape with the inside)</li>
                                <li>File &gt; Save As &quot;Micromesh1.zpr&quot;</li>
                            </ul>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/image2018-6-3_10-42-30.png" alt="" /></p>
                            <p>Now clear the canvas and draw a sphere and make into into a PolyMesh3D object</p>
                            <p>Tool &gt; Geometry &gt; Modify Topology &gt; Click Micro Mesh and select the micro mesh object you previously made.</p>
                            <p>Render &gt; Render Properties &gt; Turn on Draw MicroMesh (You’ll only get a bunch of dots for the preview)</p>
                            <p>SHIFT + R to render BPR; you should see the micromesh</p>
                            <p>If you want, you can divide the mesh if you want more deatil (shrinking the size of each of the Micro Mesh instances that get patterned out on the object)</p>
                            <p>If you want to turn the BPR into actual geometry, duplicate the subtool (for a backup) and then go Geometry &gt; Convert BPR to Geo.</p>
                            <p>Now suppose you want to add some thickness.</p>
                            <p>If we click Divide now, you’ll get little holes because when we converted BPR to Geo the process doesn’t actually weld the micromeshes. So to do an extrude, we need to weld the surface.</p>
                            <p>Export the subtool as an OBJ; Tool &gt; Export (as .obj)</p>
                            <p>Now, with the subtool still selected in the subtool palette, go down to the Import tab (not the Import button)</p>
                            <p>Under Import, change Weld to .001</p>
                            <p>Click import and select the OBJ file you created. This imports it back into the subtool that you are on, but applies the weld.</p>
                            <p>Now if you go to geometry and click Divide, you won’t see the little holes that were being made because the mesh is welded now. Undo the Divide operation; this was only to verify.</p>
                            <p>Subtool &gt; Extract (Set Smooth to 0, and turn off TBorder); Turn thickness to say .01 and click Extract.</p>
                            <p>This will give you a preview. If you like it, click Accept.</p>

                            <h2>References</h2>
                            <p><a href="http://pixologic.com/zclassroom/lesson/micromesh-hood-part-2" rel="nofollow">http://pixologic.com/zclassroom/lesson/micromesh-hood-part-2</a></p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                            
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>



        ];
    }
}