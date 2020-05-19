import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-the-ia-files-001-into-the-fire',
})
export class PageIAFiles1 {

    header: any;

    async componentWillLoad() {
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

                            <p><img class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/TheRedPill.png" alt="" style={{ MINwIDTH: `150PX` }} />Those who practice user-centered design might say that Information Architecture (IA) is all about organizing information in a way that is most useful and meaningful to end-users. Indeed that’s a big part of it, but certainly not <em>all.</em> If that were really all there was to it, we could just call it Information <em>Organization.</em></p>

                            <p>But <em>Architecture</em> implies more; it implies both art and science, both process <em>and</em> product. It implies planning, design, and construction. It implies a number of different components and systems integrated to create one cohesive whole. It’s a multi-faceted thing wherein we find multiple forces pushing and pulling on one another. What’s needed by the business and what’s viable? What’s wanted by the users? What are the capabilities and constraints of the technology platform? Of the organization? Its teams and individuals? A great IA must consider and balance all of these forces.</p>

                            <p>I did my first job as an IA on a project to build a new employee portal for a package distribution company. The Project Manager at IBM said I’d be filling a role called “Information Architect”. Now, this was a very large and complex project with multiple C-level stakeholders and very ambitious goals. And it was a very big company – a global company. 400,000 souls – 90,000 of which would certainly be registered just after go-live.</p>

                            <p>I remember thinking, <em>Geeze, how many people is that, really</em>? If you stacked 90,000 employees feet on shoulders, they’d extend at least 85 miles or more. That’s Mount Everest… 15 times. And then I thought about the lifetime of the portal and how many more people might interact with it over the years to come. I thought to myself, “Self, where do you even start with something like this?” And then it occurred to me to start by seeking an answer to the secret question that was weighing heavy on my mind…</p>
                            <p><em>What the hell is an Information Architect, anyway?</em></p>
                            <p>Nine years, several projects, countless sleepless nights, a few death marches, and at least ten thousand Google searches later, I’m still chewing on that question. My quest has taken me through library and information science, business strategy, governance, creative design, usability, graph and network theory, brain science, game theory, software engineering, philosophy, and even down into the nucleus of a cell where all those little A’s, G’s, C’s and T’s form the source code for life itself.</p>
                            <p><em>What is an Information Architect? What is Information Architecture? What is Information?</em></p>

                            <p>It’s like a Zen Kōan. The more I grasp for the answer, the more it seems to squeeze through my fingers like water. The more questions I answer, the more questions arise. It’s mind bending, but maybe it’s not supposed to be. Maybe it’s just supposed to be a title on a business card for a guy that can help you build a website. And sure – it has been that for me, but it’s been much more. And sure, it’s been a long while since I was thrown into the fire of my first portal project and branded an IA. Yet every day still brings a new lesson. Every day – a new question.</p>

                            <p><em>What is an Information Architect?</em></p>

                            <p>I’m not sure I have a good answer yet, but I have some interesting stories to tell and I figure I bess get to tellin’ because maybe… just maybe… there’s someone out there who just got thrown into the fire and is typing the same question into Google now.</p>

                            <p>Howdy friend. These are the IA Files.</p>

                            <p><ion-button color="primary" href="/the-ia-files-002-concepts-crows-camels-and-the-cognitive-divide">Next: Part 2 &gt;&gt;</ion-button></p>

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
                                            <ion-icon name="chevron-forward-outline" slot="start"></ion-icon>
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