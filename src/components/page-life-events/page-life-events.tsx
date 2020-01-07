import { Component, h } from '@stencil/core';

import { EnvironmentConfigService } from '../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-life-events',
})
export class PageLifeEvents {

    title = 'Life Events';
    datePublished = '2019/12/11';

    async componentWillLoad() {
        if (debug) {
            console.log('> PageTemplatePage.componentWillLoad');
        }

        // set document title for browser / tab / bookmark
        document.title = this.title + ' | ' + EnvironmentConfigService.getInstance().get('siteName');
    }

    render() {
        return [
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-buttons slot="start">
                        <ion-back-button defaultHref="/about" />
                    </ion-buttons>
                    <ion-title>About</ion-title>
                </ion-toolbar>
            </ion-header>,

            <ion-content class="ion-padding">

                <ion-grid>
                    <ion-row>
                        <ion-col size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="7">

                            <h1>{this.title}</h1>

                            <p class="entry-meta">Posted on <time>{new Date(this.datePublished).toDateString()}</time></p>

                            <p>One of the reasons why I maintain this site is so that I can manage and share information in one central place,
                                rather than across various social media sites. Since Facebook provides a place on the user About page for
                                life events, I thought I'd replicate that concept here. It's mainly for my own reference, but, in case you care
                    to know, here are some key events from my life.</p>

                            <ul>
                                <li>
                                    <strong>1989</strong>
                                    <ul>
                                        <li>18 years old</li>
                                        <li>Graduated from C.F. Brewer High School in White Settlement, Texas.</li>
                                        <li>Met my real father, Alan Burleson, and lived with him for three months in Madiera Beach, Florida.</li>
                                    </ul>
                                </li>
                                <li><strong>1992</strong>
                                    <ul>
                                        <li>Started working as a freelance Production Assistant (PA) in the Dallas film &amp; video industry (after about 2 years as a PA, I transitioned to the Art Department and started a company called Scenic Wonders, doing Scenic Design and Set Decoration).</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>1994</strong>
                                    <ul>
                                        <li>Married Karlisa McKenney.</li>
                                    </ul>
                                </li>
                                <li><strong>1995</strong>
                                    <ul>
                                        <li>Jan 7 - Mother, Donna Nobles died at age 46.</li>
                                        <li>Mar 25 - Son, Caden Burleson born.</li>
                                    </ul></li>
                                <li>
                                    <strong>1997</strong>
                                    <ul>
                                        <li>Started working as Creative Director at Studio Interactive, in Dallas, TX.</li>
                                        <li>Nov 29 - Daughter, Bailey Burleson born.</li>
                                    </ul>
                                </li>
                                <li><strong>2000</strong>
                                    <ul>
                                        <li>Started working as a Web User Experience Consultant in Portals and Content Management at PricewaterhouseCoopers Consulting (my former company, Studio Interactive was acquired by PwC).</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>2001</strong>
                                    <ul>
                                        <li>Oct 17 - Stepfather, William Charles Nobles died.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>2002</strong>
                                    <ul>
                                        <li>Started working as a Senior Managing Consultant for IBM (my former company, PwC Consulting was acquired by IBM).</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>2004</strong>
                                    <ul>
                                        <li>Grandmother, Mary &quot;Mom&quot; Williams died.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>2007</strong>
                                    <ul>
                                        <li>Left IBM to start the company, Base22 (originally as Burleson Technology Group).</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>2012</strong>
                                    <ul>
                                        <li>Jan 6 - Mother-in-law, Lula Belle McKinney died at age 74.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>2019</strong>
                                    <ul>
                                        <li>Left Base22 to start working as a Writer.</li>
                                        <li>Granddaughter, Harlyn Faith Born.</li>
                                    </ul>
                                </li>
                            </ul>

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