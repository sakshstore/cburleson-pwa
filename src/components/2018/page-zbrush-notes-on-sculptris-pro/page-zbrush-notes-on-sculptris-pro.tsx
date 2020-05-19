import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, isLocal, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-notes-on-zbrush-sculptris-pro',
})
export class PageZbrushNotesOnSculptrisPro {

    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('>> PageZbrushNotesOnSculptrisPro.componentWillLoad');
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


                            <p>My study notes on the Sculptris Pro features in ZBrush&#8230;</p>

                            <p>The main controls of Sculptris Pro can be found in the Stroke palette&#8230;</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/zbrush-sculptris-pro.png" alt="" /></p>

                            <ul>
                                <li>When Sculptris Pro is on, the brush icon is purple.</li>
                                <li>When Sculptris Pro is off, the brush icon is red.</li>
                                <li>Most brushes within ZBrush can be used in Sculptris Pro mode, but not all. If Scluptris Pro cannot be turned on, you may have an incompatible brush selected.</li>
                                <li>Press <kbd>SHIFT</kbd> + <kbd>F</kbd> to toggle polyframe view; this can help you see how Sculptris Pro is working.</li>
                                <li>Sculptris Pro allows you to sculpt with <em>more polygons</em> (or tessellation) in a specific area on a mesh.</li>
                                <li>Changing the brush size to smaller, creates more density (detail of polygons) in the stroke. So, the tessellation that is being added is being controlled by the draw size.
<ul>
                                        <li>The Adaptive Size button controls this. If you turn Adaptive Size off, you will not get the same amount of tessellation detail in a brush stroke.</li>
                                    </ul>
                                </li>
                                <li>The SubDivide Size controls how much tessellation happens.</li>
                                <li>The UnDivide Ratio controls how much decimation happens.</li>
                                <li>You can turn OFF Adaptive Size and then manually control the tessellation by adjusting SubDivide Size without changing the draw size.</li>
                                <li>When you smooth, you decimate (reduce polygons); that&#8217;s what the UnDivide Ratio controls.</li>
                                <li>If you turn off Combined and then smooth, you decimate without tessellating (you only remove polygons to smooth). So, combined allows tessellation and decimation together.</li>
                                <li>Sculptris Pro works with PolyPaint too! So&#8230; you can paint and tesselate at the same time in order to achieve sharper paint strokes.</li>
                                <li>You cannot use Sculptris Pro mode on a mesh that is partially hidden.</li>
                            </ul>

                            <p><strong>Custom Brushes</strong></p>

                            <p>You will also find a Sculptris Pro menu in the Brush palette for every brush. In that menu, each brush that works with Sculptris Pro will have Enable and Use Global selected. Use Global means that it uses what&#8217;s defined in the Sculptris Pro Stroke palette, which is global settings. You can uncheck Use Global here (in the brush palette).</p>

                            <p>This is useful for setting tessellation / decimation settings for Sculptris Pro and then Save As to save your brush as a custom brush.</p>

                            <p>For the brush, if you turn off Enable, it will not add tessellation or decimation in Sculptris Pro mode; it will just be used as a normal sculpting brush.</p>

                            <p><strong>Decimation Master</strong></p>

                            <p>Reduce polygon count, while not losing detail, when using Sculpris Pro.</p>

                            <p>ZPlugin &gt; Decimation Master</p>

                            <p>Click on the presets to decimate and change poly count. Decimation is the process of reducing polygon count and vertex points while trying not to lose sculptural detail.</p>

                            <p>So, this is great for optimizing the model as you use Sculptris Pro &#8211; decimating (in general), then adding detail (tessellation) where you need it.</p>

                            <h2>References</h2>

                            <ul>
                                <li><a href="http://pixologic.com/zclassroom/workshop/getting-started-with-sculptris-pro" rel="nofollow">GETTING STARTED WITH SCULPTRIS PRO</a></li>
                                <li><a href="http://pixologic.com/zclassroom/lesson/creating-custom-brushes-for-sculptris-pro" rel="nofollow">CREATING CUSTOM BRUSHES FOR SCULPTRIS PRO</a></li>
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