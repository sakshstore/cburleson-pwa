import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-the-ia-files-003-definitions-defined',
})
export class PageIAFiles1 {

    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('>> PageIAFiles1.componentWillLoad');
        }
        
        
                let id = extractIdFromDocumentPath();
        this.header = BlogData.getPostHeaderById(id);

 
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

                            <p><img class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/thumb_definition.gif" alt="" /></p>

                            <p>In my <a href="/the-ia-files-002-concepts-crows-camels-and-the-cognitive-divide/">previous post in the IA Files</a>, I introduced the role of <em>concepts </em>in human cognition and language. I wrote about how concepts are formed in a process that involves both differentiation and integration. Being conscious of that process can help you become a better Information Architect (IA).</p>

                            <p>Today we continue building on this foundation with a look at&nbsp;<em>definitions</em>. A definition states the meaning of a concept and distinguishes it from all others. It preserves the logical order of a concept’s hierarchical interdependence in the great big tree of knowledge.</p>

                            <p>As an IA, you can use definitions as an important tool in your craft. So, you should understand very precisely what a definition is, the purpose it serves, and the rules of a correct definition. And then, of course, you have to know how to put this knowledge into practice, which we’re leading up to, but… first things first…</p>

                            <h2>What is a definition?</h2>

                            <p>At the time of this writing, Wikipedia describes a definition as “a statement that explains the meaning of a term (a word, phrase, or other set of symbols)”. Other trustworthy sources pretty much agree that it is:</p>

                            <p><em>A statement of the exact meaning of a word, especially in a dictionary.</em></p>

                            <p>This statement of meaning should identify the nature of the units subsumed under the concept as concisely as possibly – describing only what is essential. So, how do we arrive upon the nature of the concept and identify what is essential? We use a process that includes both differentiation and integration.</p>

                            <h2>Differentiation and integration – the rules of a correct definition</h2>

                            <p>Remember the picture of the camel caravan in the <a href="/the-ia-files-002-concepts-crows-camels-and-the-cognitive-divide/">previous post from the The IA Files</a>? We identified various units in the picture by differentiating them based on their distinguishing characteristics. We then used a process of integration by blending the similar units into a single new mental entity – a concept, a classification, or in Java-speak, a class. The rules of a correct definition are derived from this same general process of forming concepts, so a good definition:</p>

                            <ul><li>Specifies the distinguishing characteristic(s) of the units. (<em>differentia</em>)</li><li>Indicates the category of existents from which they were differentiated (<em>genus</em>)</li></ul>

                            <p>The&nbsp;<em>differentia</em> isolates the units of a concept from all others and the <em>genus</em>&nbsp;indicates its connection to a wider group.</p>

                            <h2>Why are definitions important to information architecture?</h2>

                            <p>As an IA, you will use definitions as a tool to aid in the proper classification and organization of information. You won’t really be using written definitions, although you can when that is helpful for your own clarification. What I am trying to point out is what’s behind a definition so you can understand how to properly define a concept in your own mind or properly hold the definition in your mind. Knowing what’s behind a definition helps you think about concepts in a simple way. As you do the work of classification and organization, for example, you can ask questions that relate to the two rules, such as:</p>

                            <ul><li>What makes this unit different than the others? Anything significant?</li><li>Are there units with differences significant enough to set them apart? And do we have enough of them to justify a new category?</li><li>Is the term we’re using to describe this set of units the best term? Is it too narrow? Too broad?</li><li>Forgetting any formal definition, how does this user community actually think of this concept in this context and in this particular culture?</li></ul>

                            <h2>Putting it to practice</h2>

                            <p>We now have a framework for answering the kinds of questions that are useful to classification and organization.</p>

                            <p>In short, we can use the rules of a correct definition,&nbsp;<em>differentia</em>&nbsp;and&nbsp;<em>genus</em>.</p>

                            <p>Of course, we might also leverage this knowledge in order to break the rules effectively. I know you, don’t I?&nbsp;<em>You rebel, you.</em></p>

                            <p>Next:&nbsp;<a href="/the-ia-files-004-taxonomies">The IA Files 004 - Taxonomies</a></p>

                            <p><ion-button color="primary" href="/the-ia-files-002-concepts-crows-camels-and-the-cognitive-divide">&lt;&lt; Previous: Part 2</ion-button> <ion-button color="primary" href="/the-ia-files-004-taxonomies">Next: Part 4 &gt;&gt;</ion-button></p>


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
                                            <ion-icon name="chevron-forward-outline" slot="start"></ion-icon>
                                            <ion-label>Part 3 - Definitions, defined</ion-label>
                                        </ion-item>
                                        <ion-item href="/the-ia-files-004-taxonomies">
                                            <ion-label>Part 4 - Taxonomies</ion-label>
                                        </ion-item>
                                        <ion-item href="/the-ia-files-005-navigation-breadth-and-depth">
                                            <ion-label>Part 5 - Navigation breadth and depth</ion-label>
                                        </ion-item>
                                    </ion-list>
                                </ion-card-content>
                            </ion-card>

                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}