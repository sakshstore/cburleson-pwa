import { Component, h } from '@stencil/core';
import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-7-quintessential-brushes-for-zbrush-beginners'
})
export class PageZBrush7QuintessentialBrushes {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageZBrush7QuintessentialBrushes.componentWillLoad');
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

                <div class="jumbotron">
                    <p class="lead">Here are seven of the most important ZBrush brushes you’ll ever use. Begin your practice with these.</p>
                </div>

                <ion-card>
                    <ion-item>
                        <ion-thumbnail slot="start">
                            <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/07/zbrush-brush-standard.jpg" alt="" />
                        </ion-thumbnail>
                        <ion-label>Standard Brush</ion-label>
                    </ion-item>
                    <ion-card-content>
                        <p>Often overlooked and really great for things like the detail in an ear. This brush is kind of like inflating an area and it is topology dependent. This is very good in its ALT or ZSub form for defining relatively soft inset detail (like shaping around the nostrils of a nose).</p>
                    </ion-card-content>
                </ion-card>

                <ion-card>
                    <ion-item>
                        <ion-thumbnail slot="start">
                            <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/07/zbrush-brush-smooth.jpg" alt="" />
                        </ion-thumbnail>
                        <ion-label>Smooth Brush</ion-label>
                    </ion-item>
                    <ion-card-content>
                        <p>Don’t use early in the process (because it’s pointless). Start with a “design” phase and block-out form with clay-build up, other heavy tools, and move. Then instead of smooth, consider clay brush filling in or adding on rather than digging into the mesh with smooth.</p>
                    </ion-card-content>
                </ion-card>

                <ion-card>
                    <ion-item>
                        <ion-thumbnail slot="start">
                            <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/07/zbrush-brush-move.jpg" alt="" />
                        </ion-thumbnail>
                        <ion-label>Move Brush</ion-label>
                    </ion-item>
                    <ion-card-content>
                        <p>Move surface areas (push and pull) to make quick and dramatic changes to the form. A typical sculpting workflow often begins with using the Move brush to create a basic form from sphere or base mesh.</p>
                        <p>Tip: If you’ve increased your subdivision level, it can help to step back down in the subdivision level to use the Move brush and then step it back up after the move. This ensures that the Move is making a more global change and is done in Tool &gt; SubTool &gt; Geometry (Divide and SDiv slider).</p>
                        <p>Tips:</p>
                        <ul>
                            <li>Try changing the Focal Shift (slider at the top of the UI) when using the Move Brush. A negative focal shift will make the surface that’s moved more bulbous and rounded. A positive focal shift will make the moved surface pointy.</li>
                            <li>Hold down the <kbd>ALT</kbd> key while dragging to move along normals.</li>
                            <li>Click, then hold down the <kbd>SHIFT</kbd> key while dragging and the move try to follow the surface.</li>
                        </ul>

                    </ion-card-content>
                </ion-card>

                <ion-card>
                    <ion-item>
                        <ion-thumbnail slot="start">
                            <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/07/zbrush-brush-clay.jpg" alt="" />
                        </ion-thumbnail>
                        <ion-label>Clay Brush</ion-label>
                    </ion-item>
                    <ion-card-content>
                        <p>Add volume (but doesn’t build up a lot of height). This can be used for additive smoothing without removing detail from existing mesh.</p>
                    </ion-card-content>
                </ion-card>

                <ion-card>
                    <ion-item>
                        <ion-thumbnail slot="start">
                            <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/07/zbrush-brush-claybuildup.jpg" alt="" />
                        </ion-thumbnail>
                        <ion-label>ClayBuildup Brush</ion-label>
                    </ion-item>
                    <ion-card-content>
                        <p>Add volume and can build upwards in height. (Try turning Alpha off for a big build-up that doesn’t have as crisp an edge; it’s the alpha that gives the ClayBuild up brush its square edge.) This brush is topology independent.</p>
                    </ion-card-content>
                </ion-card>

                <ion-card>
                    <ion-item>
                        <ion-thumbnail slot="start">
                            <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/07/zbrush-brush-trimdynamic.jpg" alt="" />
                        </ion-thumbnail>
                        <ion-label>TrimDynamic Brush</ion-label>
                    </ion-item>
                    <ion-card-content>
                        <p>Trim off the model in a planar sort of way; great for simplifying model while keeping key shape (makes it planar). It’s really easy in ZBrush to get too detailed too soon!</p>
                    </ion-card-content>
                </ion-card>

                <ion-card>
                    <ion-item>
                        <ion-thumbnail slot="start">
                            <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/07/zbrush-brush-damstd.jpg" alt="" />
                        </ion-thumbnail>
                        <ion-label>Dam_Standard Brush</ion-label>
                    </ion-item>
                    <ion-card-content>
                        <p>For carving in details (like wrinkles); press alt for relatively sharp ridges. This brush often gives greater results for details because it’s a kind of pinch brush, which pulls geometry towards it as you dig in – resulting in cleaner topology around the area worked. This is not the case for something like the Standard brush. Often, however, if you’re not getting the clean detail you need, you may simply need to increase polygons using Tool &gt; SubTool &gt; Geometry &gt; Divide.</p>
                    </ion-card-content>
                </ion-card>

                <h3>Reference Resources</h3>
                <p>I derived this list of brushes by watching the following tutorial and listening to what the two commentators from FlippedNormals had to say about them as they worked.</p>
                <p><a href="https://www.youtube.com/watch?v=lCYcxG6LYNA">Zbrush Sculpting Tutorial – White Walker from Game of Thrones HD</a></p>
                
                <div class="video-container">
                <iframe class="video" src="https://www.youtube.com/embed/lCYcxG6LYNA" frameborder="0" data-allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

            </ion-content>

        ];
    }
}