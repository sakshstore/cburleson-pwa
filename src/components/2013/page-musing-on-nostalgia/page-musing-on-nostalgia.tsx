import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import Prism from "prismjs"

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-musing-on-nostalgia',
})
export class PageMusingOnNostalgia {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageMusingOnNostalgia.componentWillLoad');
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

    componentDidLoad() {
        setTimeout(() => Prism.highlightAll(), 0)
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

                            <p><img class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/musing-on-nostalgia-1.png" alt="" />So, I just stumbled onto this butt-ugly JavaDoc page, which reminds me of the early nineties and I have to say, it gave me a strange, warm-fuzzy kind of feeling. The last time I saw a JavaDoc like this, applets were actually cool. Coolio’s Gangsta’s Paradise comes to mind. Michael Jackson is still alive (<em>perhaps also still cool</em>). Spielberg’s Jurassic Park is the shiznit. Internet Explorer wasn’t even born yet (<em>the good old days</em>). This is what they call <em>nostalgia. </em>Look at this beautiful monstrosity…</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/musing-on-nostalgia-2.png" alt="" /></p>

                            <p>At the time of this writing, Wikipedia describes nostalgia as…</p>

                            <blockquote><p>a sentimentality for the past, typically for a period or place with happy personal associations.</p></blockquote>

                            <p>For me nothing…<em>nothing</em> brings it back like the Commodore 64.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/Commodore64.png" alt="" /></p>

                            <p>Look at those big, puffy keys and that red LED that just screams &quot;I'm on!&quot; She's a real beauty, isn't she? She was my second obsession (after the VIC 20); I was eleven or twelve years old when I got her. There was also, of course, the Atari 2600, but that’s a whole other story.</p>

                            <p><img class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/C64_magazine.png" alt="" style={{ maxWidth: `200px` }} />Anyway, I remember sitting for hours and hours with a copy of Commodore Magazine, typing in about twenty pages of BASIC code found in the middle pages. I had no freagin’ clue what the hell I was typing. All I knew was that if I got it right, my computer might do something awesome – play a song, render an 8-bit game like the Towers of Hanoi, or use my name in a story. I never got one of those programs to work. Not a one.</p>

                            <p>I do remember the very first working program I wrote though. It went something like this:</p>

                            <pre class="clear"><code class="language-">{`10 PRINT "WHAT IS YOUR NAME"; INPUT A$
20 PRINT "HI, " + A$
30 PRINT "IT IS NICE TO MEET YOU"`}</code></pre>

                            <p>I wanted to make the characters type across the screen like they did on that green CRT in the movie War Games. Remember that one? With Mathew Broderick? “SHALL WE PLAY A GAME?” I couldn’t figure it out, but my teacher in middle school later showed me how to do it with a <em>for loop</em> on a TRS-80 (a.k.a Trash-80).</p>

                            <p>I’m not <em>all</em> nerd. Of course there are other things that give me that nostalgic feeling. Star Wars figures, for example. The original motion picture soundtrack by John Williams on 8-track tape. OK, still nerdy. But how about Beaches with Bette Midler? Just you <em>try</em> and watch that again without sobbing like a baby. Flashdance. Footloose. Fangoria Magazine.</p>

                            <p>Do you get this warm-fuzzy with certain things? Things that bring you back to a time and a place when the worst of your worries was a pissed off mom or dad? Or whether or not you’d get the guts enough to kiss someone? Or never mind LOST, how about the original tropical island suspense featuring Gilligan, Maryann, and the Skipper?</p>

                            <p>Nostalgia; I love it, don’t you?</p>

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