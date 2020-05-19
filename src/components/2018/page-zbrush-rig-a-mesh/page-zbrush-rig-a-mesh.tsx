import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-rig-a-mesh-with-zspheres-in-zbrush',
})
export class PageZBrushRigAMesh {

    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('>> PageZBrushRigAMesh.componentWillLoad');
        }
        
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

                            <p>You can rig an existing mesh with a ZSphere armature, allowing you to pose the mesh by manipulated the underlying armature.</p>

                            <p>To demonstrate, I’m starting with the Julie tool. You can find this model by pressing the comma key <kbd>,</kbd>, selecting the Tools item in the file browser, and choosing <code>Julie.ZTL</code>.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-rig-mesh-1.png" alt="" /></p>

                            <p>When you draw Julie onto the canvas, you can see that she has more than one SubTool. You must have more than one subtool to use this method because the Transpose Master plugin will only work when you have more than one subtool active. But, that’s what it’s good for; it enables you to have posing across all of your subtools.</p>

                            <ul>
                                <li>Go to Zplugin &gt; Transpose Master.</li>
                                <li>Click the ZSphere Rig button.</li>
                                <li>Click TPoseMesh.</li>
                            </ul>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-rig-mesh-2.png" alt="" /></p>

                            <p>This creates a single unified mesh out of all of the subtools. It creates it in x-ray view and it also adds a ZSPhere…</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-rig-mesh-3.png" alt="" /></p>

                            <p>Make sure that symmetry is on (press <kbd>X</kbd>). Use the draw, scale, move, and rotate functions (hotkeys <kbd>Q</kbd>, <kbd>W</kbd>, <kbd>E</kbd>, and <kbd>R</kbd>). You can create new ZSpheres by activating the draw function <kbd>Q</kbd> and you use these functions to draw out an armature inside the mesh.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-rig-mesh-4.png" alt="" /></p>

                            <p>Once you have your armature built, you go to Tool &gt; Rigging and click Bind Mesh…</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-rig-mesh-5.png" alt="" /></p>

                            <p>You can now click the rotate function <kbd>R</kbd> and rotate ZSpheres to bend the model. You can click on Bind Mesh to go back into the mode to continue editing the armature. You can toggle back and forth between editing the armature and binding the mesh to get it right. Use Move and Rotate on the ZSpheres to more and rotate portions of the armature when bound. Press <kbd>X</kbd> to toggle symmetry if you want to move only portions without affecting the mirrored side.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-rig-mesh-6.png" alt="" /></p>

                            <p>When you’re done posing the model, you can go back to the ZPlugin palette and go to the Transpose Master subpalette and click TPose &gt; SubT. Note that you may want to save your project first as a separate project that you could come back to for continued armature work if you don’t like the results.</p>

                            <p><img src="https://codyburleson.com/wp-content/uploads/2018/07/zbrush-rig-mesh-7.png" alt="" /></p>

                            <p>The mesh is transformed and you get back to all your subtools. Here, for example, I set Julie’s legs a little further apart…</p>

                            <p><img src="https://codyburleson.com/wp-content/uploads/2018/07/zbrush-rig-mesh-8.png" alt="" /></p>

                            <p>For more, watch the video,&nbsp;<a href="https://www.youtube.com/watch?v=s6THhnv0m6g" rel="nofollow">Posing Characters in Zbrush using a Zsphere Rig</a>, by Andrew Klein, on YouTube.</p>

                            <h2>Reference</h2>
                            <ul>
                                <li><a href="https://www.youtube.com/watch?v=s6THhnv0m6g" rel="nofollow">Posing Characters in Zbrush using a Zsphere Rig</a>, Andrew Klein, YouTube</li>
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