import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-how-to-sketch-with-zspheres-in-zbrush',
})
export class PageZbrushHowToSketchWithZspheres {

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

                            <p>To start a&nbsp;<strong>ZSphere</strong>&nbsp;model, select the zsphere tool from the Tool palette (the two-toned red ball) – and draw it on the canvas.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/sketch-zspheres-1.png" alt="" /></p>
                            <p>Enter Edit mode by pressing&nbsp;<strong>T</strong>&nbsp;on the keyboard.</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/sketch-zspheres-2.png" alt="" /></p>
                            <p>Press&nbsp;<strong>SHIFT + A</strong>&nbsp;to enter sketch mode. You’ll then see the two tones of the ZSphere turn to a solid color…</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/sketch-zspheres-3.png" alt="" /></p>
                            <p>When sketching with ZSpheres, you can use any material. But notice that there are a few sketch materials in the materials palette.</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/sketch-zspheres-4.png" alt="" /></p>
                            <p>I’ll choose the SketchGummyShine.</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/sketch-zspheres-5.png" alt="" /></p>
                            <p>Because we’re in sketch mode, all we need to do is click and draw on the model to add more ZSpheres. We can hold the&nbsp;<strong>SHIFT</strong>&nbsp;key and draw to smooth things back. Remember that you can hit the&nbsp;<strong>X</strong>&nbsp;key to toggle symmetry mode.</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/sketch-zspheres-6.png" alt="" /></p>
                            <p>You can always move ZSphere around by pressing&nbsp;<strong>W</strong>&nbsp;to activate Move (or press the Move button in the top bar).</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/sketch-zspheres-7.png" alt="" /></p>
                            <p>Once you’re done moving ZSpheres, you can click back on Draw.</p>
                            <p>You can hold down the&nbsp;<strong>ALT</strong>&nbsp;key and click on ZSpheres to delete them.</p>
                            <p>Press A to generate an adaptive preview. If you like it, you can go to Subtools palette &gt; Remesh and click ReMesh All.</p>
                            <p>You might also want to go to Geometry ZRemesher and click the ZRemesher button to lay down a cleaner topology.</p>

                            <h2>References</h2>
                            <ul>
                                <li><a href="http://pixologic.com/zclassroom/lesson/intro" rel="nofollow">ZSPHERES INTRO</a></li>
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