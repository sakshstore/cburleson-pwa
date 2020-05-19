import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, isLocal, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-notes-on-zbrush-slicecurve-brush',
})
export class PageZbrushNotesOnSlicecurveBrush {

    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('>> PageZbrushNotesOnSlicecurveBrush.componentWillLoad');
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


                            <p>My study notes on use of the ZBrush SliceCurve brush&#8230;</p>

                            <p>The SliceCurve brush allows you to slice to define new polygroups by drawing a line with bezier curves.</p>

                            <p>The SliceCurve brush, once selected, is enabled as the active selection tool when you press&nbsp;<strong>CTRL + SHIFT</strong>.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/zbrush-slicecurve-brush.png" alt="ZBrush Slice Curve Brush" /></p>

                            <p>When working with this brush, we&#8217;re creating polygroups. So, to be able to see the polygroups, it&#8217;s best to be to turn on polygroups before using the brush (<kbd>SHIFT</kbd> + <kbd>F</kbd>).</p>

                            <p>You probably also want to ensure that Perspective is turned off.</p>

                            <p>If your mesh is a 3D-Primitive, you&#8217;ll need to convert it to a PolyMesh3D by pressing the &#8216;Make PolyMesh3D&#8217; button in the Tool palette.</p>

                            <p>Press the sequence B, S, I to quickly select the SliceCurve brush.</p>

                            <p>As you&#8217;re drawing,&nbsp;<strong>tap the ALT key</strong>&nbsp;to lay a bezier point, which allows you to curve the slice.</p>

                            <p>If you&nbsp;<strong>double-tap the ALT key</strong>, it will lay down a sharp point, which allows you to put a hard angle on the slice.</p>

                            <p>You can&nbsp;<strong>press and hold the SPACE bar to move</strong>&nbsp;the entire slice line as a whole.</p>

                            <p>This brush doesn&#8217;t use standard symmetry and can’t be used on a mesh with multiple subdivision levels. If you wish to maintain your subdivisions, first use the Freeze Subdivision Levels option located in the Tool &gt; Geometry menu.&nbsp;When you&#8217;re done doing your slicing, you can then click Freeze SubDivision Levels again to turn it back off and get your subdivisions back with the new polygroups still on the model. You can&nbsp;establish symmetry by using Mirror and Weld in that same menu.</p>

                            <p>Polygroup Tips:</p>

                            <p>Press&nbsp;<strong>CTRL + SHIFT</strong>&nbsp;and click on a polygroup to isolate the polygroup, hiding all the others.<br /><strong>CTRL + SHIFT</strong>&nbsp;click on an empty area in the canvas to make all the polygroups visible again.</p>

                            <h2>References</h2>
                            <ul>
                                <li><a href="http://docs.pixologic.com/user-guide/3d-modeling/modeling-basics/polygroups/slice-curve/" rel="nofollow">Slice brushes</a>, ZBrush Docs</li>
                                <li><a href="http://pixologic.com/zclassroom/lesson/polish-by-features" rel="nofollow">POLISH BY FEATURES</a>, ZClassroom</li>
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