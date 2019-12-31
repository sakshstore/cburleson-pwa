import { Component, h } from '@stencil/core';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-memories-of-momma-1',
})
export class PageMemoriesOfMomma1 {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageMemoriesOfMomma1.componentWillLoad');
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

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2019/05/memories-of-momma.jpg" alt="Photos of my mother, Donna Nobles." /></p>

                            <p>It’s been 23 years since my mom died. Seems like a lifetime ago. A whole different life. It seems like a whole different life in a whole different world. </p>

                            <p>It was so long ago, in fact, I can hardly picture exactly what she looked like without referencing a photograph. And I only have a few of those. When I was just a boy, she was beautiful - I do remember that. She was the kind of beautiful that made men look. She had long, silky blonde hair, which caught the indoor light in shiny streaks. In sunlight, it lit up with a golden glow like the aura of an angel.</p>

                            <p>She was thin in those younger years. Not sickly thin like a supermodel. Not bony and starved like those girls in the Victoria Secrets catalogs. At the time, I was far too young to know why all the men smiled and looked at her the way they did. I had to ask her once, why the men were whistling at &quot;us&quot;.</p>

                            <p>Once, when she had no babysitter, she took me to work to spend the day with her in the office. I sat on a sofa and watched as she put on her makeup. She painted her lips with a red stick and then dabbed off the excess with a napkin. When she brushed the shadow on her eyelids, her eyes seemed to turn blue, like magic. She blushed her cheeks with a little color and paused to smile when she saw me watching - when she saw that I was mezmerized at how she could make her beautiful even more.</p>

                            <p>Nowadays, when parents want to occupy children through a number of confined hours they give them a smart phone or a tablet. I had blank stationary, a handful of blunt Crayons, and a comic book. In the back of the comic book was a mail order catalog full of the coolest things a kid could ever want.</p>

                            <p>For just a dollar, plus twenty-five cents in shipping and handling, you could have amazing x-ray sight! You could, “apparently” see through cloth, bones, skin, etc.  The ad had a picture of a woman in black panties under a see-through dress. “Is that really her body you ‘see’ under her clothes?” Imagine that - looking right through some lady’s dress to see what’s underneath! I did wonder. I had tried to find out once, but Momma, embarrassed, had jerked me out from underneath the mannequin before I got a good look.</p>

                            <p>Another ad promised the secrets of oriental fighting. Kung Few, it was called.</p>

                            <p>&quot;Foo,&quot; Momma said. &quot;It's kung foo.&quot;</p>

                            <p>&quot;Your hands and feet become more powerful than clubs, knives, or brute strength,&quot; I read. &quot;Wow.&quot;</p>

                            <p>Enter the wonderful world of amazing live sea monkeys. You could own a bowlful of happiness - instant pets. Just add water! There was a whole family of them - a mother, father, and two kids. They had big happy smiles on their little sea-monkey faces. “So eager to please they can even be trained.” Wow. Wow. Wow!</p>

                            <p>X-ray vision, Kung Fu, Sea-Monkeys, automatic hypnotizer, pocket spy telescope. Oh, the choices! They even had 12 Ivory Elephants in a Bean. How’s that possible?</p>

                            <p>Mom was smart. She promised that I could pick any one thing under five dollars, so I had to think long and hard about what was best. That kept me busy for most of the day and then all that joy was licked and stamped and put aside. Now what?</p>

                            <p>&quot;You wanna do more?&quot; Momma asked.</p>

                            <p>&quot;Yes!&quot;</p>

                            <p>Next thing you know, I was licking and stamping envelopes for the rest of the day and thoroughly convinced that it was fun. I went home with paper cuts all over my tongue and a mouth full of glue.</p>

                            <p>So, yeah - Momma was pretty, but also pretty smart.</p>

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