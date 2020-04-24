import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-the-ia-files-004-taxonomies',
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

                            <p><img class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/paperTaxonomy.png" alt="" width="150" height="150" />In my <a href="the-ia-files-003-definitions-defined">previous post in the IA Files</a>, we took a look at <em>definitions – </em>those things you typically find in dictionaries or, perhaps more commonly today, when you type ‘define &lt;<em>word&gt;</em>‘ in a Google search.</p>

                            <blockquote><p><em>A definition states the meaning of a concept and distinguishes it from all others, thus preserving the logical order of a concept’s hierarchical interdependence.</em> [1]</p></blockquote>

                            <p>Such a hierarchy can be expressed in a model that Information Architects like to call a <em>taxonomy</em>. Taxonomies are quintessential to information architecture and very well worth a pause for deeper reflection. So, before we go flingin’ the term around like we know what we’re doing, let’s take that pause now…</p>

                            <h2>What is a taxonomy?</h2>

                            <p><img class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/240px-Carl_von_L-150x150.jpg" alt="" width="150" /></p>

                            <p class="caption-text">Carl Linnaeus, the father of modern taxonomy.</p>

                            <p>The term <em>taxonomy</em> is ancient Greek for “<em>arrangement method</em>“. In the strictest sense, taxonomy refers to the conception, naming, and classification of biological organisms. In this sense, the term is heavily associated with Carl Linnaeus, the father of modern taxonomy, and the dude who originally came up with the formal system of naming species using the two-part Latin word scheme known as binomial nomenclature (e.g. <em>Psittacus alexandri, Turdus migratorius, Tradescantia virginiana</em>). Information Architects tend to use the term in a more general sense to refer to just about any kind of hierarchical ordering of items into groups based on similarities and/or differences.</p>

                            <p>Some IA’s use the term to describe the navigational structure of a website, although I prefer to call that <em>site architecture</em>. One case where I do often use the word <em>taxonomy</em> is when referring to a controlled vocabulary of terms used for describing content. In IBM’s Web Content Manager, for example, taxonomies are used to represent hierarchical collections of terms called <em>categories</em>. Content authors can apply these categories as a way to describe the subject and nature of their content. Menus and search components are then used to retrieve and display content based on the categories applied to the content items. This allows us to do cool things like render dynamic lists of hyperlinks that are relevant and related to the content item being viewed.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/WCM_Taxonomy_Categories.png" alt="" /></p>

                            <p class="wp-caption-text">Taxonomy Categories in IBM Web Content Manager</p>

                            <h2>Formal versus informal taxonomies</h2>

                            <p>Understanding the difference between <em>formal</em> and <em>informal</em> taxonomies is essential. A formal taxonomy is one in which the associations between the taxons or categories are formally defined.</p>

                            <p>A common formal classification scheme expresses the “is a (type of)” relationship. In such a scheme, the child concepts under a given parent are said to be a type of the parent. A simple test for following the rule is to use the concepts in a sentence where the child is the subject, “is a” or “is a type of” is used as the predicate, and the parent as the object.</p>


                            <table class="table table-bordered" role="grid">
                                <thead>
                                    <tr role="row">
                                        <th>Subject</th>
                                        <th>Predicate</th>
                                        <th>Object</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr role="row">
                                        <td>DOG</td>
                                        <td>IS A</td>
                                        <td>MAMMAL</td>
                                    </tr>
                                    <tr role="row">
                                        <td>MOZARRELLA</td>
                                        <td>IS A</td>
                                        <td>CHEESE TOPPING</td>
                                    </tr>
                                </tbody>
                            </table>

                            <p>Because these sentences logically evaluate to TRUE, we can rest assured that we have not broken the rule, which makes our taxonomy formal.</p>

                            <p>This is important because a taxonomy that is intended to be formal should be formal throughout. Otherwise, it will not serve its purpose effectively. If most of the taxonomy adheres to the rule of formality, but some of it does not, then this can cause confusion amongst users.</p>

                            <h3>Best Practice</h3>

                            <blockquote><p>The defined relationship between concepts in a formal taxonomy should be uniformly applied throughout the entire taxonomy.</p></blockquote>

                            <p>Now, I am not saying that all taxonomies must be formal. I am just saying that when they are intended to be formal, their <em>rule of relation</em> must be explicitly defined and adhered to. Otherwise, they are not formal or they are simply incorrect.</p>

                            <p>Most navigation systems on websites and portals are informal. They typically always express increasing levels of specificity as one goes deeper into the structure, but <em>specificity</em> is not a rule of relationship between concepts. It is a general characteristic of all taxonomies. As we go down into the branches of a taxonomy tree, we find increasing levels of detail. As we move up towards the trunk, we’re moving through increasing levels of abstraction. That’s a fundamental principal of the function and purpose of taxonomy as a classification tool, but it is not itself the <em>classification scheme</em>.</p>

                            <p>Which brings us to an interesting question…</p>

                            <blockquote><p>If there are no “rules” for an informal taxonomy such as a website navigation system, then how do we go about building one properly – one that we can say is good?</p></blockquote>

                            <p>Rest assured, there <em>are</em> best practices and “rules of thumb” for building effective website navigation systems and in the next installment of the IA Files, I’ll begin to share some things my colleagues and I have learned from our experiences, so please stay tuned.</p>

                            <p><ion-button color="primary" routerDirection="back" href="/the-ia-files-003-definitions-defined">&lt;&lt; Previous: Part 3</ion-button> <ion-button color="primary" routerDirection="forward" href="/the-ia-files-005-navigation-breadth-and-depth">Next: Part 5 &gt;&gt;</ion-button></p>

                            <p>Notes:</p>
                            <ol>
                                <li>Rand, Ayn. <a href="http://www.amazon.com/gp/product/0452010306/ref=as_li_tf_tl?ie=UTF8&amp;tag=burtecgrollc-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=0452010306" rel="nofollow">Introduction to Objectivist Epistemology: Expanded Second Edition</a><img class="confluence-embedded-image confluence-external-resource" src="http://www.assoc-amazon.com/e/ir?t=burtecgrollc-20&amp;l=as2&amp;o=1&amp;a=0452010306" width="1" height="1" data-image-src="http://www.assoc-amazon.com/e/ir?t=burtecgrollc-20&amp;l=as2&amp;o=1&amp;a=0452010306" />, ‘Definitions’, page 40.</li>
                            </ol>

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
                                            <ion-icon name="chevron-forward-outline" slot="start"></ion-icon>
                                            <ion-label>Part 4 - Taxonomies</ion-label>
                                        </ion-item>
                                        <ion-item href="/the-ia-files-005-navigation-breadth-and-depth">
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