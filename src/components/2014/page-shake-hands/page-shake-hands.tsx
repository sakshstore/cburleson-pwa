import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-how-to-shake-hands',
})
export class PageShakeHands {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageShakeHands.componentWillLoad');
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

                            <p>I’m not sure if this is a particularly Southern thing, but where I was raised, shaking hands was kind of a big deal. So, I have to admit that I’m often surprised (and sometimes a little disconcerted) when people seem to lack the knowledge of "a proper" handshake. I'm guessing that it must be irrelevant in some cultures. Heck, maybe it’s even an insult in some. But here in the United States, and especially down South, there’s a lot meaning conveyed in this simple act. So, for those who care to know, I'm going to tell as it was taught to me…</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/handshake.png" alt="" /></p>

                            <h2>Be quick to offer, be quick to respond</h2>

                            <p>First of all, if somebody offers their hand, be quick to respond with your own. The very nature of the ritual is about assurance and trust. If you hesitate, it sends the wrong message and it makes the other person uncomfortable. You know what it means when someone extends their hand for a shake, so get yours out there to meet it. Better yet, offer yours first.</p>

                            <h2>Have a firm, but not bionic, grip</h2>

                            <p>Don’t shake with just your fingertips and a limp wrist. Wrap your hand firmly around the other and give it a subtle once-up / once-down. You don’t want it to feel like you have a wet noodle in your hand. Of course, you can actually hurt someone or cause discomfort if you overdo it, so be conscious of your grip as well as of the other person's stature.</p>

                            <h2>Make eye contact</h2>

                            <p>Nothing is worse about a bad handshake than not making eye contact! If you don’t make eye contact when you shake hands then the assurance and trust becomes a lie, which is worse than no handshake at all. In my opinion, this is absolutely the most important thing about a good handshake. If I'm shaking hands and the other person doesn't look at me, or even worse – looks away, I totally get a bad feeling about the whole affair. <em>Squirrelly</em> is the best word I can find for the opinion I get about the other person.</p>

                            <h2>Bonus touch</h2>

                            <p>Sometimes, you may shake normally with your right hand (as is customary), yet also embrace the shake with your other hand to show a little added touch. If you do this, just don't be creepy; make it relatively quick, accompanied with a smile, and perhaps a positive word or two.</p>

                            <h2>Shaking a woman's hand (for men)</h2>

                            <p>Nobody ever told me this one, but in my opinion, if you are a man, you should not shake hands differently with a woman than you would with another man. Don't try some kind of old fashioned curtsy thing where you barely grab the hand with your fingertips, or where you bend the lady's hand sideways as if you were going to kiss it. You can be slightly more gentle with your grip, but don't do anything that could possibly be misinterpereted; keep it strictly professional.</p>

                            <h2>Exceptions</h2>

                            <p>I think it's OK to avoid shaking hands when it is actually an act of respect as long as you clearly say so. For example, you could say, "Normally, I would shake your hand, but I'm just getting over a cold, so I don't want to chance passing it on." Considering the possible consequences, I think the other person can honor and respect such a refusal.</p>

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