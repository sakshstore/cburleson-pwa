import { Component, h } from '@stencil/core';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-create-polygroup-from-mask-in-zbrush',
})
export class PageZbrushCreatePolygroupFromMask {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageZbrushCreatePolygroupFromMask.componentWillLoad');
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

                <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/05/zbrush-polygroup-from-mask-featured.jpg" /></p>
                <p>To create a new polygroup of any masked area, press <kbd>CTRL</kbd> + <kbd>W</kbd>. Any masked area will be turned into a new polygroup.</p>
                <p>Take the following masked object, for example.</p>
                <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/05/polygroup-from-mask-1.jpg" alt="" /></p>
                <p>Pressing <kbd>SHIFT</kbd> + <kbd>F</kbd> puts us in polyframe mode and we can see only one color (one polygroup) with the darker masked area still represented.</p>
                <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/05/polygroup-from-mask-2.jpg" alt="" />After pressing <kbd>CTRL</kbd> + <kbd>W</kbd>, we can see that what was formerly the masked area has now become a new polygroup. This is evidenced by the fact that the new polygroup is now its own new color in the polyframe mode.</p>
                <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/05/polygroup-from-mask-3.jpg" alt="" /></p>
                <p>Note: Pressing <kbd>CTRL</kbd> + <kbd>W</kbd> is the same as using Tool &gt; Polygroups &gt; Group Masked Clear Mask</p>
                <p>There is another technique I’ve witnessed, which is to mask an area and then select Geometry &gt; EdgeLoop &gt; Edgeloop Masked Border, or press <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>E</kbd>. I think this method attempts to create an edge around the mask perimeter based on the EdgeLoop setting.</p>

            </ion-content>

        ];
    }
}