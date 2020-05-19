import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-how-to-optimize-a-zsphere-sketch-in-zbrush',
})
export class PageZbrushOptimizeZsphereSketch {

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

                            <p>As you sketch, you&#8217;re going to be adding more and more ZSpheres to your canvas. You can see just how many ZSpheres you&#8217;ve added so far by looking at the Active Points in the top right of the ZSphere interface.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zsketch-optimize-1.png" alt="" /></p>

                            <p>According to that, I&#8217;ve got 58 ZSpheres in my drawing.</p>

                            <p>While you&#8217;re sketching, you&#8217;re actually hiding some of the ZSpheres with new strokes. The ones that are completely hidden can be removed to optimize your canvas. To do this, go to the Tool palette, click the ZSketch pull-down, and click the Optimize button.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zsketch-optimize-2.png" alt="" /></p>

                            <p>Then, take a look at the ActivePoints count in the top right of the interface again. If you had completely hidden ZSpheres, they should be removed and you should see a reduction in the count.</p>

                            <h2>References</h2>

                            <ul>
                                <li><a href="http://pixologic.com/zclassroom/lesson/optimize" rel="nofollow">OPTIMIZE</a></li>
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