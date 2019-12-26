import { Component, h } from '@stencil/core';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

declare global {
    interface Window { adsbygoogle: any; }
}

@Component({
    tag: 'page-memories-of-momma-2',
})
export class PageMemoriesOfMomma2 {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    adsbygoogle: any

    async componentWillLoad() {
        if (debug) {
            console.log('> PageMemoriesOfMomma2.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + EnvironmentConfigService.getInstance().get('siteName');
    }

    componentDidRender() {
        (this.adsbygoogle = window.adsbygoogle || []).push({});
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

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2019/05/memories-of-momma.jpg" alt="Photos of my mother, Donna Nobles." /></p>

                            <p>One weekend Momma had opened all the windows in our apartment to let a fresh spring breeze flow through. It carried the scent of those towering trees from which our complex, The Pines Apartments, had been named.</p>

                            <p>Sunlight filled the dining room where my sister Dawn and I had been presented with two stacks of hot buttered pancakes. Dawn rubbed crusty sleep from her eyes as I reached across the table to lift a heavy bottle of syrup with both hands. The bottle was made of glass and shaped like somebody's aunt named Jemima. I poured enough syrup out of her head to cover my stack entirely. When it soaked into the spongy bread, I poured more and then, seeing that my plate was about to overflow, my bigger sister snatched the bottle from my hands.</p>

                            <p>Momma put a record on the turntable and danced around the living room to Stevie Nicks as she cleaned.</p>

                            <p>“Rock on gold dust woman<br /> Take your silver spoon<br /> Dig your grave”</p>

                            <p>At the time, of course, I had no idea what the words of that song were about, but I was sure it must have been about happy things. My sister and I smiled at each other like little mice with stuffed cheeks, and then Momma took me up into her arms and spun me with the music. All was good in the world and we were happy. </p>

                            <p>What I wouldn't give for just one minute more, if only in a dream, to be spinning around in that woman's arms again.</p>

                            <p>The happy one - in that happy time. Long before the downward spiral. Before Momma stopped opening the windows, or the curtains, or even the door to her bedroom. Long before I ever put a thing called "gold dust" up my nose, stole something, touched myself, or even said a dirty word. Long before my sister ever put a needle in her arm.</p><p> Long before all those things, my mother, Donna Carol Baker, was a maker of happiness.</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">

                            <ins class="adsbygoogle"
                                style={{ display: `block` }}
                                data-ad-client="ca-pub-7370676338719207"
                                data-ad-slot="5178955087"
                                data-ad-format="auto"
                                data-full-width-responsive="true"></ins>

                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}