import { Component, h } from '@stencil/core';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-zbrush-resources-online',
})
export class PageZbrushResourcesOnline {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageZbrushResourcesOnline.componentWillLoad');
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

                <ion-grid>
                    <ion-row>
                        <ion-col size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="7">
                            <h1>{this.header.title}</h1>
                            <app-entry-meta header={this.header} />

                            <p>A list of online resources related to ZBrush; updated from time-to-time, whenever I discover something new and useful…</p>
                            <p><strong><a href="http://webneel.com/zbrush-tutorial" rel="nofollow">30 Best Zbrush Tutorials and Training Videos for Beginners</a></strong></p>
                            <p>An article that aggregates several good tutorials, the sum of which cover a very broad scope over ZBrush features, functionality, and techniques.</p>
                            <p><strong><a href="http://www.badking.com.au/" rel="nofollow">BadKing</a></strong></p>
                            <p>BadKing is a free ZBrush resource site specialising in tutorials, 3D modeling, insert multi mesh brushes, alpha maps, concept art and more.</p>
                            <p><strong><a href="https://pixologic.com/zclassroom/lesson/creating-a-custom-insert-brush" rel="nofollow">CREATING A CUSTOM INSERT BRUSH</a></strong></p>
                            <p>Video, ZBrush Classroom</p>
                            <p><strong><a href="https://pixologic.com/zbrush/downloadcenter/alpha/" rel="nofollow">Pixologic’s Alpha Library</a></strong></p>
                            <p>Pixologic has created a library full of amazing Alpha materials from ZBrush artists who wish to share their work with the ZBrush community. This library gives you one unique location to view, download, and begin sculpting using any of the alphas found in this library. See what ZBrush can do with your alphas. Enjoy the search.</p>
                            <p><strong><a href="https://pixologic.com/zbrush/downloadcenter/grid/" rel="nofollow">Pixologic’s Grid Library</a></strong></p>
                            <p>These images are meant for use with the Grid enhancements in ZBrush 4R4, where they can be applied for use as reference during sculpting. After downloading the files to your computer, simply click the Draw &gt;&gt; Open button in ZBrush 4R4. More information regarding this feature may be found in the ZBrush 4_R4_whats_new.pdf, found in your Documentation folder.</p>
                            <p><strong><a href="https://pixologic.com/zbrush/downloadcenter/library/" rel="nofollow">Pixologic’s Matcap Library</a></strong></p>
                            <p>Pixologic has created a library full of amazing MatCap materials from ZBrush artists who wish to share their work with the ZBrush community. This library gives you one unique location to view, download, and begin sculpting with that unique MatCap look that only ZBrush can give you. Enjoy the search.</p>
                            <p><strong><a href="https://pixologic.com/zbrush/downloadcenter/texture/" rel="nofollow">Pixologic’s Texture Library</a></strong></p>
                            <p>Pixologic has created a library full of amazing Texture maps from ZBrush artists who wish to share their work with the ZBrush community. This library gives you one unique location to view, download, and add textures to your creations. See what ZBrush can do with your textures. Enjoy the search.</p>
                            <p><strong><a href="https://vimeo.com/42717865" rel="nofollow">Sculpting the Face with Ryan Kingslien – Faceware Webinar Series</a></strong></p>
                            <p>Video, Vimeo</p>
                            <p><a href="https://www.youtube.com/channel/UCniZ7Qzbv17NvoCypCzB4Ow" rel="nofollow"><strong>Travis Davids</strong></a>, Educational Materials and Resources, YouTube</p>
                            <p>Good stuff on rigging and posing your&nbsp;3D models.</p>
                            <p><strong><a href="http://www.zbrushcentral.com/" rel="nofollow">ZBrushCentral</a></strong></p>
                            <p>Community forum hosted by Pixologic.</p>
                            <p><strong><a href="http://zbrushguides.com/" rel="nofollow">ZBrushGuides.com</a></strong></p>
                            <p>Tutorials, guides, videos, and resources from&nbsp;Pablo Munoz, a digital artist based in Melbourne, Australia.</p>
                            <p><strong><a href="http://zbrushtuts.com/" rel="nofollow">zbrushtuts</a></strong></p>
                            <p>Zbrush Tutorials, Art and Breakdowns</p>


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