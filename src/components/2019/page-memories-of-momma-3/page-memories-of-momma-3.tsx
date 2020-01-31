import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-memories-of-momma-3',
})
export class PageMemoriesOfMomma3 {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageMemoriesOfMomma3.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + SITENAME;
        if(this.header.teaser) {
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

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2019/05/memories-of-momma.jpg" alt="Photos of my mother, Donna Nobles." /></p>

<p>Being Texan, Momma was trained in the ways of a Southern Belle. She carried herself with the grace and manners of a lady. Exceptin’ for the sight of me (the half-naked, snot nosed little dirt bag at her side), you might've never known we were poor. But deep down, she was a country girl with a cowgirl's grit.</p>

<p>She gave me a basket once and sent me into the backyard chicken coop to fetch eggs. A monumental task, it turns out, for a little squat like me. No instructions. No formal training.</p>

<p>&quot;Go get the eggs.&quot; That’s all she said.</p>

<p>And so, I found myself cornered in the roost by an evil bird that had absolute control and authority over the place.</p><p> "Bok, bok, bok." With his little rooster bark, he dared me to move a muscle. </p>

<p>A blood-red bag of skin swung below his razor sharp beak, which I was sure he could've used to punch a hole through my belly if he wanted to. I side-stepped slowly towards the chicken sitting on her eggs - watching me from up high with an orange-yellow eye. She was obstacle number three. Obstacle number two was the climb up there. Obstacle number four would be the rooster... again. The task was way above my pay grade.</p>

<p>About a half an hour later, I made it out of that god-forsaken shit box. I sprinted from the coop to the back porch with that rooster on my tail the whole way and a mouth full of little feathers that must've flown in there whilst a was screamin’ like the little sissy that I was.</p>

<p>I had four eggs in that basket though, dammit. They were all cracked, but still.</p>

<p>That same week, sometime during the night, something braver than me chanced that rooster for an even bigger prize. Whatever it was, it took the female bird, our little egg machine, away from us.</p><p> Momma, assessed our predicament with her fists on her hips.</p>

<p>&quot;We can't afford another chicken,&quot; she said, &quot;Much less the gas to get one.&quot;</p>

<p>So, what'd we do? What did she do?</p>

<p>She snatched that rooster up with his ugly little head in her hand and spun him in wild circles until it snapped clean off. Then, I shit you not, that rooster's headless body ran a full wide circle around the whole back yard until it finally toppled over.</p>

<p> I just stood there frozen. Eyes as wide as fried eggs. It was, as we say in Texas, the darnedest thing you ever saw.</p>

<p> That night, Mamma made fried chicken. I reckon that Hank Williams was right. Country folks CAN survive.</p>

<p><ion-button color="primary" routerDirection="back" href="/memories-of-momma-2">&lt;&lt; Previous: Part 2</ion-button> <ion-button color="primary" routerDirection="forward" href="/memories-of-momma-4">Next: Part 4 &gt;&gt;</ion-button></p>

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