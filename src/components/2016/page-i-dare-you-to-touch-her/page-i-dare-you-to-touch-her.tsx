import { Component, h } from '@stencil/core';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-i-dare-you-to-touch-her',
})
export class PageIDareYouToTouchHer {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageIDareYouToTouchHer.componentWillLoad');
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

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/aBoysWonder.jpg" alt="" /></p>
                            <p>I don't think I was older than seven when I saw a dead body for the first time, but they'd been common in my imagination up to that day.</p>

                            <p>I saw them mostly around water – on the banks of creeks, half buried in mud, and with all the color drowned from their eyes. I saw them in piles of garbage – a severed part protruding accidentally from a suspicious trash bag. If they’d been sitting out long enough, they most certainly were surrounded by flies. Sometimes, they even had determined columns of ants lapping up the last of the salty water from the edges of their eyelids or from the corners of the their gaping mouths. This was all my big sister’s fault.</p>

                            <p>Fishing off a dock, in the long hours of a lazy summer day, she’d suddenly break the silence. &quot;What if we saw a dead body over there?&quot;</p>

                            <p>&quot;Or what if you saw something kind of pale and whitish just sort of floating up from the bottom of the lake right here under our feet?&quot; I'd say. &quot;And as it got closer and closer, you suddenly realized it was a dead body?&quot;</p>

                            <p>&quot;Of a lady,&quot; she'd add. &quot;A naked lady.&quot;</p>

                            <p>Then there would be silence again as we both imagined this gruesome scene. And on the way home, or the next day, and generally on just about every other day she’d point to a shack, or toward the dark shadows of an alley, or to a gutter, or just about any place that made a good frame for the dead and she’d ask it again, &quot;What if…&quot;.</p>
                            
                            <p>One long summer of this game had left me with a strange desire to see one for real. So, when my mother invited us to see our aunt, Debbie, before they closed her coffin, we accepted.</p>

                            <p>&quot;I dare you to touch her,&quot; my sister said.</p>
                            
                            <p>Why not? She was nothing like what I’d imagined. Her eyes and mouth were closed. No ants. No flies. No maggots. I was relieved. I reached over and I touched her on the nose and then jerked my hand back in a shock. My sister’s eyes got wide as she waited eagerly for my report.</p>

                            <p>&quot;She's cold,&quot; I said, &quot;and hard. She doesn’t feel real.&quot;</p>

                            <p>My aunt’s body wasn’t warm. It didn’t seem soft anymore. Her mouth was rigid. They’d dolled her up with colors and dressed her for church. She didn’t feel right and I couldn’t shake the eery draft that seemed to be washing down my skin like dirty gray dishwater. There it was finally – my first dead body.</p>

                            <p>In the days that followed, we didn’t play the game so much any more. We imagined them from time to time – but the fascination had gone. We didn’t share what we imagined anymore. We’d began to fathom something new about our own mortality.</p>

                            <p>Fishing off the dock again, in the long hours at the end of that summer, I looked at my sister’s reflection in the water beside my own. I watched as the first cool breeze of the coming fall broke the glass beneath our feet and quietly wondered.</p>

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