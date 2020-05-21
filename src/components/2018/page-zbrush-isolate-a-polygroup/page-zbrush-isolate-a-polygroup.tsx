import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-isolate-a-polygroup-in-zbrush',
})
export class PageZbrushIsolateAPolygroup {

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

                            <p>When you isolate a polygroup in ZBrush, you can then work with it independently.&nbsp;After isolating one or more polygroups, for example, you might want to delete those that are hidden, which you could then do with Tool &gt; Geometry &gt; Modify Topology &gt; Del Hidden.</p>

                            <p>First, you&#8217;ll want to be in Draw Polyframe mode, so that you can see all all the polygroups. You can toggle this mode with <kbd>SHIFT</kbd> + <kbd>F</kbd> as shown below.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/05/zbrush-draw-polyframe.jpg" alt="Toggle polyframe mode with SHIFT + F" /></p>

                            <p>Hold&nbsp;<kbd>CTRL</kbd> + <kbd>SHIFT</kbd>&nbsp;and click on a given polygroup to isolate it, hiding all the others.</p>

                            <figure class="wp-block-image"><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/05/isolate-polygroup-1.png" alt="" /></figure>

                            <p>Hold&nbsp;<kbd>CTRL</kbd> + <kbd>SHIFT</kbd>&nbsp;and click on an empty place in the canvas to return all polygroups to view.</p>

                            <p>If the Select Rect brush is your active brush, you can&nbsp;<kbd>SHIFT</kbd> + <kbd>CLICK</kbd>&nbsp;and drag a rectangle on an empty place in the canvas to invert the visible polygroups.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/05/isolate-polygroup-2.png" alt="" class="wp-image-553" /></p>

                            <h2>Selecting more than one polygroup</h2>

                            <p>Here&#8217;s the procedure for selecting more than one polygroup as described in the <a href="http://docs.pixologic.com/user-guide/3d-modeling/modeling-basics/polygroups/" rel="nofollow">ZBrush documentation for polygroups</a>:</p>

                            <ol><li>Press <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> and click on the mesh where one group is</li><li>Invert that selection: press <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> then click and drag outside of the mesh</li><li>Press <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> and click on the other groups you want to select</li><li>Invert this selection: press <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> then click and drag outside the model</li></ol>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                            
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>



        ];
    }
}
