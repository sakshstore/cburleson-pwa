import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';



@Component({
    tag: 'page-the-ia-files-005-navigation-breadth-and-depth',
})
export class PageIAFiles1 {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageIAFiles1.componentWillLoad');
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

                            <p><img class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/George_A_Miller_APS_convention_1989.png" alt="" width="150" height="150" />In my <a href="the-ia-files-004-taxonomies">previous post of the IA Files</a>, I promised I would begin to share best practices for building effective website navigation systems. One “rule of thumb” at the top of my list relates to <em>Navigation Breadth and Depth</em>. The first part of this rule says that static navigation menus should not exceed 7 (plus or minus 2) items. The second rule says that the depth of static navigation systems should not exceed three levels. I propose that a 7/3 breadth/depth ratio provides a healthy set of parameters for IA’s to design navigation systems within.</p>

                            <h2>Navigation Breadth</h2>

                            <h3>Miller’s Magical Number Seven, Plus or Minus Two</h3>

                            <p>So, there’s all kinds of stuff you can read about this Harvard professor dude named George Miller.  Some might say that he kicked off the whole field of cognitive psychology. He won the American Psychological Foundation’s Life Achievement Award in 1990 and the National Medal of Science in 1991. Definitely the kind of guy you’d want to meet (supposing, say, you had a DeLorean with a flux capacitor; he died in 2012 at age 92).</p>

                            <p>He did a bunch of studies, which demonstrated that most people could only retain about seven “chunks” of information in short term memory at any given time (words, numbers, names, etc). The actual numbers were about seven for numbers, six for letters and five for words. In the case of words,  he also found that the amount that could be retained was a function of whether the words were known by the listener. The rules, he found, are different for long-term memory, however, where storage capacity seems to be less limited. Though he published a lot of books and papers in his career, he’s probably best known for his paper, “<a href="http://www.musanim.com/miller1956/" rel="nofollow">The Magical Number Seven, Plus or Minus Two</a>,” published in The Psychological Review in 1956.</p>

                            <p><img class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/magicSeven.png" alt="" width="250" height="342" />George Miller called the number “magical” because of its mysterious prevalence in so many things. For example:</p>

                            <ul>
                                <li>the seven wonders of the world</li>
                                <li>the seven seas</li>
                                <li>the seven deadly sins</li>
                                <li>the seven daughters of Atlas in the Pleiades</li>
                                <li>the seven ages of man</li>
                                <li>the seven levels of hell</li>
                                <li>the seven primary colors</li>
                                <li>the seven notes of the musical scale</li>
                                <li>the seven days of the week</li>
                            </ul>

                            <p>Perhaps, there is really nothing magical about the number at all, but rather, it simply represents a numerical sweet spot in human cognition. Though George was hesitant to assert it firmly, his research seems to have made the implication.</p>

                            <p>Thus it is this cognitive numerical limit that gives us the rule of thumb for navigation breadth:</p>

                            <blockquote><p>Static navigation menus should not exceed 7 (plus or minus 2) items.</p></blockquote>

                            <p>‘Static’ navigation refers to the kind of anchored navigation, which does not change regularly – the navigation structures you hope your users will learn through frequent use. This is opposed to dynamic menus and lists of links like “Related Links”. One could logically argue that too many items, even in a dynamic list, will likely create a lot of visual noise and contribute to information overload. Long lists of links are rarely, but sometimes necessary; a paging “News Archive,” for example.</p>

                            <h2>Navigation Depth</h2>

                            <blockquote><p>The depth of static navigation systems should not exceed 3 levels.</p></blockquote>

                            <p>At my company, Base22, we’ve found through our own experience and usability testing that a good limit for the depth of static navigation is no more than three levels. In fact, we’ve even hard-coded this limit into the widgets we use to render static navigation. If stakeholders feel the need to publish content at deeper levels, we believe the IA is flawed and needs to be revised or the business stakeholders need to come to a better understanding of the IA strategy.</p>

                            <p>The concepts in a navigation structure are, after all, abstractions designed to collect and represent things that are related. Having a numerical limit to navigation depth forces us to complete the process of abstraction and classification to a certain standard. In this case, that standard is loosely based on factors pertaining to web usability (total number of clicks and what-not).</p>

                            <p>Depth allows us to limit breadth and thus reduce the overall choices the user has to make at higher levels. But if concepts are too abstract, the navigation labels may not be discreet enough to support reliable decision making. So, depth provides progressive levels of detail below those higher level “chunks” that are more easily scanned and digested. This aids the foraging process through which users pick up and follow “information scent” – getting an increasing or decreasing sense of confirmation as they explore, and discovering new things along the way.</p>

                            <p>But what about breadth versus depth? Which is better? Research tends to suggests that one should favor breadth over depth for web sites, but it’s always a balancing act. Information Architects have a lot to think about in this balancing act. What are the content and services that are currently available and how should they be classified and organized? What are the kinds of content and services that do not presently exist, but that are likely to come? Who are the users and how do they think? Do we want to influence their thinking and, if so, how?</p>

                            <p>A basic 7/3 breadth/depth ratio provides a healthy set of parameters to work with. You won’t go to IA hell for stepping outside of those bounds, but you can at least be sure that it’s a good framework. It’s supported by scientific research and it has proven to work well in our experience. Using this as a general “rule of thumb” for navigation breadth and depth will give you a solid starting point so that you can focus on the fun stuff – classification and organization, abstraction and concretization, etc.</p>

                            <p><ion-button color="primary" routerDirection="back" href="/the-ia-files-004-taxonomies">&lt;&lt; Previous: Part 4</ion-button></p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">

                            <ion-card>
                                <ion-card-header>
                                    <ion-card-subtitle>The IA Files</ion-card-subtitle>
                                    <ion-card-title>Series content</ion-card-title>
                                </ion-card-header>
                                <ion-card-content>
                                    <ion-list>
                                        <ion-item href="/the-ia-files-001-into-the-fire">
                                            <ion-label>Part 1 - Into the Fire</ion-label>
                                        </ion-item>
                                        <ion-item href="/the-ia-files-002-concepts-crows-camels-and-the-cognitive-divide">
                                            <ion-label>Part 2 - Concepts, crows, camels, and the cognitive divide</ion-label>
                                        </ion-item>
                                        <ion-item href="/the-ia-files-003-definitions-defined">
                                            <ion-label>Part 3 - Definitions, defined</ion-label>
                                        </ion-item>
                                        <ion-item href="/the-ia-files-004-taxonomies">
                                            <ion-label>Part 4 - Taxonomies</ion-label>
                                        </ion-item>
                                        <ion-item href="/the-ia-files-005-navigation-breadth-and-depth">
                                            <ion-icon name="chevron-forward-outline" slot="start"></ion-icon>
                                            <ion-label>Part 5 - Navigation breadth and depth</ion-label>
                                        </ion-item>
                                    </ion-list>
                                </ion-card-content>
                            </ion-card>

                            <gls-adsense-ad />
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}