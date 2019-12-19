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
        if(debug) {
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
                
                <h1>{this.title}</h1>
                
                <p class="entry-meta">Posted on <time>{new Date(this.datePublished).toDateString()}</time></p>

                <p>One of the reasons why I maintain this site is so that I can manage and share information in one central place, 
                    rather than across various social media sites. Since Facebook provides a place on the user About page for 
                    life events, I thought I'd replicate that concept here. It's mainly for my own reference, but, in case you care 
                    to know, here are some key events from my life.</p>

                <ul>
                    <li>
                        <strong>1989</strong> - 18 years old.<br/>
                        Graduated from C.F. Brewer High School in White Settlement, Texas.<br/>
                        Met my real father, Alan Burleson, and lived with him for three months in Madiera Beach, Florida.
                    </li>
                    <li><strong>1994</strong> - Married Karlisa McKenney.</li>
                    <li><strong>1995</strong> - Son, Caden Burleson born. Mother, Donna Nobles died.</li>
                    <li><strong>1997</strong> - Daughter, Bailey Burleson born.</li>
                    <li><strong>2001</strong> - Stepfather, William Charles Nobles died.</li>
                    <li><strong>2004</strong> - Grandmother, Mary &quot;Mom&quot; Williams died.</li>
                    <li><strong>2007</strong> - Started company, Base22 (originally as Burleson Technology Group).</li>
                    <li><strong>2019</strong> - Left Base22 to become a writer. Granddaughter, Harlyn Faith Born.</li>
                </ul>

            </ion-content>

        ];
    }
}