import { Component, h } from '@stencil/core';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-how-to-apply-texture-in-zbrush',
})
export class PageHowToApplyTextureInZbrush {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PostHowToApplyTextureInZbrush.componentWillLoad');
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

                <p class="entry-meta">Posted on <time>{new Date(this.header.datePublished).toDateString()}</time> (last modified <time>{new Date(this.header.dateModified).toDateString()}</time>)</p>

                <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/zbrush-apply-texture-featured.jpg" class="img-fluid" alt="" />

                <p>A quick tutorial of how to apply a texture to an object in ZBrush.</p>

                <p>For this tutorial, we’ll work with a simple sphere object.</p>

                <p>Start by drawing a Sphere3D onto the canvas and press the <kbd>T</kbd> key to go immediately into edit mode.</p>

                <p><img class="img-fluid" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/zbrush-sphere3d-300x276.jpg" alt="" /></p>

                <p>In the Tool palette, click Make PolyMesh3D.</p>

                <p>In the Tool palette &gt; Texture Map, click the empty texture box (slot).</p>

                <p><img class="img-fluid" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/zbrush-tool-palette-texture-map-180x300.jpg" alt="" /></p>

                <p>In the resulting dialog, click Import to find your texture map image, which I’m told must be either PhotoShop PSD, JPEG, or TIFF. You should then see your texture map loaded into the slot and the Texture On button should be selected (on), as shown below.</p>

                <p><img class="img-fluid" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/zbrush-tool-palette-texture-map-loaded-181x300.jpg" alt="" /></p>

                <p>If you had a dark matcap on the object you will see the texture projected onto that base color, as shown below, which is not really what we want.</p>

                <p><img class="img-fluid" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/zbrush-texture-on-matcap-300x283.jpg" alt="" /></p>

                <p>To fix this, click the matcap slot…</p>

                <p><img class="img-fluid" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/zbrush-change-matcap.jpg" alt="" /></p>

                <p>Pick something whiter; I find that SkinShade4 works well.</p>

                <p><img class="img-fluid" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/zbrush-texture-on-skinshade4.jpg" alt="" /></p>

                <p>Now, the only problem is that the texture is distorted on the object because of the UV mapping. We can adjust this in the Tool palette &gt; UV Map section. In this case, we need only click the Uvb button to apply Uv Box.</p>

                <p><img class="img-fluid" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/zbrush-uv-map.jpg" alt="" /></p>

                <p>You could do various other UV adjustments here depending on your need. Try clicking the Morph UV button to unwrap the selected SubTool into the UV layout; this is a very cool way to see how the UV is actaully laid out on the mesh.</p>

                <p>As you can see below, simply applying the Uv Box was sufficient for this case.</p>

                <p><img class="img-fluid" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/zbrush-uvbox-applied.jpg" alt="" /></p>

            </ion-content>

        ];
    }
}