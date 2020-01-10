import { Component, h } from '@stencil/core';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-the-ia-files-002-concepts-crows-camels-and-the-cognitive-divide',
})
export class PageIAFiles1 {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageIAFiles1.componentWillLoad');
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

                            <p><img class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/concepts.png" alt="" style={{ minWidth: `150px` }} />We are all information architects. It’s just what we do. It’s what makes us human.</p>

                            <p>Our ability to organize and classify information, to conceptualize and abstract – they’re what differentiate us from all other animals on the planet. It’s no wonder that information architecture is so fascinating; it goes to the very heart of our humanity. It’s not only interesting to think about – it is itself what makes thinking possible!</p>

                            <p>And since one of the chief aims of a professional IA is to communicate and to influence behavior, it’s surprisingly useful for one to consider the very foundation of that: <em>concepts</em> – what they are, how we form them, name them, classify and organize them, and ultimately how we use them in language, thought, web campaigns, as content categories, and in site architecture and navigation.</p>

                            <h2>Crow Epistemology and the Cognitive Divide</h2>

                            <p><img class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/crowInATree.png" alt="" width="129" /></p>

                            <p>Our story begins at a clearing in the woods where a flock of hungry crows had gathered to forage for food. The crows were unaware of the human observer who watched quietly from aside. The observer had prepared an experiment that he could not have known at the time would make a lasting mark on cognitive science – an experiment designed to explore the ability of birds to deal with numbers. Here’s how it went…</p>

                            <h3>The ‘Counting Crows’ Experiment</h3>

                            <p>A man walked through the clearing and into the forest. The startled crows fled into the tree tops where they waited in hiding until the man returned and left the way he came. Then three men walked across the clearing and on into the woods. Again, the crows scattered up into the tree tops. This time, however, only two of the men returned from the forest to leave the way they came.</p>

                            <p>See, crows are actually pretty smart. They knew that whenever people entered those woods they always came out. So, the crows waited for that third dude and when he finally showed up and left the way he came, the crows knew the coast was clear. They came out of the trees and back down to the clearing.</p>

                            <p>But here’s the kicker. When five guys went in and only four returned, the crows came out of hiding. Evidently, they couldn’t discriminate beyond the level of three units and their perceptual-mathematical ability consisted of a sequence such as one-two-three-<em>many</em>. [1]</p>

                            <p>Whether this particular experiment is accurate or not is beside the point. What’s relevant is the principle it illustrates, which is that an animal’s ability to discriminate by purely perceptual means is very limited. By ‘purely perceptual’, I mean through sight or sound and without using numbers to count. Now, you might think that a man’s perceptual ability is greater than that of a crow, but as it turns out, it’s not by much: we may hold five or six units at most.</p>
                            <p>This fact demonstrates the role that concepts play in our cognitive abilities. I hope to impress upon you that this principle, when well understood, is one of the most profitable instruments an Information Architect can have in her repertoire. But, let’s not get ahead of ourselves (<em><a href="http://www.johndcook.com/blog/2008/03/30/god-is-in-the-details/" rel="nofollow">God is in the details</a></em>); We need to have a shared understanding of what I mean when I use the term.</p>

                            <h3>What is a Concept?</h3>

                            <p>Starting simply, we could say that a concept is just a word – a label. Those taxonomy categories you use to tag content in your CMS are concepts. Your website navigation labels represent concepts. The headers of the widgets on your web page are concepts. Concepts are very often just the best words that happen to come to mind when we need to classify and organize a set of things. Most all words, in fact, represent concepts.</p>

                            <p>Words are, in other words, the things that transform concepts into mental entities. And even though most words are abstractions, they ultimately represent concretes in reality – the things we perceive directly with our senses: <em>percepts</em>. It can thus be argued that our ability to use a single word (or concept) to represent more things than we’re able to hold in our perception at any given moment is the key to that great cognitive divide that separates man from all other species.</p>

                            <p>I’ve found that the most useful definition of the word ‘concept’, in the context of information architecture, is that which was written by Ayn Rand in her work on Objectivist Epistemology. She wrote:</p>

                            <blockquote><p>A concept is a mental integration of two or more units possessing the same distinguishing characteristic(s), with their particular measurements omitted.</p></blockquote>

                            <p>The <em>units </em>that she refers to may be any aspect of reality, whether they be perceptual concretes or other earlier-formed concepts. The units are isolated in a process of selective mental focus that separates a particular attribute from all others. Or in other words, a <em>differentiation</em> is made, which separates the units from all others in a given context. Take a view of a camel caravan in the Sahara desert, for example.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/SaharaCaravan.png" alt="" /></p>

                            <p>Conceptualizing this view begins with differentiating one thing from another.The sky is obviously different than the ground. There are tufts of grass on the ground and they are different than the backdrop of sand upon which we see them. The camels are clearly different than both the sky and the ground. And then there are two men who are different than the camels. These are the units, which are such because they can be differentiated from other aspects of the scene. The rocks and even the shadows on the sand are also units.</p>

                            <p>The next step of the process involves <em>integration, </em>wherein we blend similar units into a single new mental entity based on something or several things similar about them. Those camels for example. Even though their different from a lot of things in the scene, they are very much like one another. So, even though there are several of them, we can now use them as a single unit of thought. And it doesn’t matter that one may be larger than another or a different shade of color; it still doesn’t make it something other than a camel. The measurements of the particular attributes that make them camels can be omitted. The size of a camel doesn’t take the camelness out of the camel.</p>

                            <p>And then there is the fact that we’ve seen these creatures before. We’ve heard about them in stories. We know they’ve been around for a long time and will likely be around for decades more. There has been, there are now, and there will be numerous camels. The differentiations and the integrations that we’ve made in this scene extend far beyond it in all directions of our mind. How do we hold all of that in our mind, given that our perceptual-mathematical ability is not much greater than that of a crow? That’s the magic of the <em>concept</em> (and quite possibly of the cognitive divide).</p>

                            <h3>The Function of Language</h3>

                            <p>Finally, we replace the concept with a single, specific, <em>perceptual</em> concrete – a placeholder that differentiates it from all other concretes and all other concepts: a word. This is the function of language.</p>

                            <blockquote><p>Language is a code of visual-auditory symbols that serves the psycho-epistemological function of converting concepts into the mental equivalent of concretes. Language is the exclusive domain of concepts. Every word we use (with the exception of proper names) is a symbol that denotes a concept, i.e., that stands for an unlimited number of concretes of a certain kind. (Rand, ITOE, Ch.2)</p></blockquote>

                            <p>This is the perfect place for me to conclude today’s file with a tie-back to IA and a hint at where we’re going. Wikipedia says that &#8220;<em>information</em>, in its most restricted technical sense, is a sequence of symbols that can be interpreted as a message.” The characters of the text you’re reading now form the words – the <em>message</em>. The words represent concepts – the <em>meaning. </em>And now that we have a shared understanding of what I mean when I use the word <em>concept</em>, we can begin to explore how they might be <em>architected</em>. That is to say, how they might be <em>formally </em>classified and organized, because of their meaning, or <em>informally</em>, to create new meaning or to influence interpretation (e.g. to influence employee culture and behavior through a strategic arrangement and use of them).</p>

                            <p>Next: <a href="/the-ia-files-003-definitions-defined/">The IA Files 003 &#8211; Definitions, Defined</a></p>

                            <p>Notes:</p>
                            <ol>
                                <li>Rand, Ayn. <a href="http://www.amazon.com/gp/product/0452010306/ref=as_li_tf_tl?ie=UTF8&amp;tag=burtecgrollc-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=0452010306" rel="nofollow">Introduction to Objectivist Epistemology: Expanded Second Edition</a><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="http://www.assoc-amazon.com/e/ir?t=burtecgrollc-20&amp;l=as2&amp;o=1&amp;a=0452010306" width="1" height="1" data-image-src="http://www.assoc-amazon.com/e/ir?t=burtecgrollc-20&amp;l=as2&amp;o=1&amp;a=0452010306" /></span>, Chapter 7 – The story of the crows was said by Ayn Rand to have been originally told by a university classroom professor of psychology.</li>
                            </ol>

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