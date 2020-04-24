import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-im-not-bored-im-thinking',
})
export class PageImNotBored {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageImNotBored.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substring( document.location.pathname.lastIndexOf('/') + 1 );
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

                            <p>Last night, I did something I haven&#8217;t done in a long time. I went to bed without my laptop or smart phone. Once in the bed, I did not so much as peek at either screen. I didn&#8217;t even set an audiobook or podcast to playing as usual. I just laid there in the dark with nothing but silence and my very own thoughts. Not even a traditional printed book.</p>

                            <p>As I laid there, for what seemed like forever, I was reminded of a conversation I often have with my son, which goes something like this.</p>

                            <p>&#8220;Caden,&#8221; I say, &#8220;You&#8217;re not getting enough sleep.&#8221;</p>

                            <p>&#8220;I <em>can&#8217;t</em> sleep,&#8221; he says.</p>

                            <p>I look at the unshaven hair on his chin and neck. It itches me.</p>

                            <p>&#8220;You know you need at least seven or eight hours of sleep per night,&#8221; I say. &#8220;How much sleep have you been getting?&#8221;</p>

                            <p>&#8220;I don&#8217;t know. About four hours?&#8221;</p>

                            <p>&#8220;If you&#8217;d stop going to bed so late, you wouldn&#8217;t be so exhausted and then, when you <em>are </em>awake, you would be more effective. Your mind will be clear. Your brain will work better. You won&#8217;t be so stressed.&#8221;</p>

                            <p>&#8220;Yeah,&#8221; he says. &#8220;I tried that. It doesn&#8217;t work. I just lie there and I can&#8217;t fall asleep.&#8221;</p>

                            <p>&#8220;So, just keep lying there until you do!&#8221;</p>

                            <p>&#8220;It doesn&#8217;t work! I just lie there with my monkey mind, thinking about all sorts of things, and I never fall asleep.&#8221;</p>

                            <p>And then he gets frustrated. I bark at him about shaving, or his unkempt hair, or his absences at school, unfinished business, or whatever. I&#8217;m always dispensing advice &#8211; like annoying drips of water on his forehead. I might as well be thumping him there with my finger. I can see from the way he diverts his eyes that it feels like that &#8211; endless criticism, not guidance.</p>

                            <p>Anyway, so I&#8217;m lying there thinking about this. Thinking about that. Thinking about all sorts of things. <em>Monkey mind</em>, as my son said. And just like him, I can&#8217;t sleep.</p>

                            <p>Still, I resist the swelling urge to grab my smart phone.</p>

                            <p>And then it occurs to me. That monkey mind, all that noise in my head, is <em>me</em>. I&#8217;m am with myself, in myself, of myself. Even if my thoughts are in the past, or the future, I am experiencing them fully.</p>

                            <p>I remembered that, as a boy, I once enjoyed this time before sleep. It was my chance to make movies in my mind. I would close my eyes, the lights in the theater would dim, and I would project my stories up there on the back of my eyelids. And I would enjoy them as much, if not more, than the real movies. I would work on them for nights in a row &#8211; changing up the scenes, introducing new characters and situations. And then, in the days, I would write or draw or tell stories and people would often ask &#8220;Where in hell do you come up with this stuff?&#8221;</p>

                            <p>So, I try it again.</p>

                            <p>Instead of just letting my mind jump around like a broken time machine, I direct my thoughts. I try to hold them on a single idea or question.</p>

                            <p>At first, it&#8217;s very clear that I&#8217;m out of practice. Every little thing that comes to mind reminds me of something else &#8211; like an inbox full of spam. But, I concentrate. I heave my mind back out of the muck and return it to the idea. Back and forth it goes like this until alas, I&#8217;m thinking.</p>

                            <p><em>I&#8217;m thinking!</em></p>

                            <p><em>I&#8217;m not bored, I&#8217;m thinking.</em></p>

                            <p><em>Since when did thinking become boredom?</em></p>

                            <p><em>I like thinking!</em></p>

                            <p><em>I like this place of thought. I like this spot here in the dark, in the bed &#8211; this perfect place for quiet contemplation. I like the silence. I can hear myself. I&#8217;m in good company.</em></p>

                            <p>And then, maybe thirty minutes later, maybe an hour, maybe more, I fell asleep.</p>

                            <p>I woke early, feeling fully rested &#8211; energized, but remarkably peaceful. I made a cup of hot tea. The house was quiet. I watched a hummingbird drink from the feeder just outside the window.</p>

                            <p>I opened my laptop. I didn&#8217;t jump straight into the email. I didn&#8217;t open Skype. No Facebook. No Twitter. Not even the daily news. Just a blank page and a blinking cursor.</p>

                            <p>I wrote.</p>

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