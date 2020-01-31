import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-introduction-to-the-semantic-web-vision-and-technologies',
})
export class PageIntroductionToSemanticWeb {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageIntroductionToSemanticWeb.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
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


                            <p>A presentation I gave in March, 2006 at the IBM Technical Leadership Exchange.</p>

<p><iframe title="Introduction to the Semantic Web - Vision and Technologies" style={{border:`1px solid #CCC`, marginBottom: `5px`, maxWidth: `100%`}} src="//www.slideshare.net/slideshow/embed_code/key/4tGuGb2jgjTlIa" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowFullScreen> </iframe></p>

<div style={{marginBottom: `5px`}}><strong> <a title="Introduction to the Semantic Web - Vision and Technologies" href="//www.slideshare.net/CodyBurleson/introduction-to-the-semantic-web-vision-and-technologies" target="_blank" rel="noopener noreferrer">Introduction to the Semantic Web &#8211; Vision and Technologies</a> </strong> from <strong><a href="https://www.slideshare.net/CodyBurleson" target="_blank" rel="noopener noreferrer">Cody Burleson</a></strong></div>

		
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