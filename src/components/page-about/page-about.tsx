import { Component, h } from '@stencil/core';

import { EnvironmentConfigService } from '../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
  tag: 'page-about',
  styleUrl: 'page-about.css'
})
export class PageAbout {

  title = 'About';

  componentWillLoad() {
    if (debug) {
      console.log('> PageAbout.componentWillLoad');
    }
    document.title = this.title + ' | ' + EnvironmentConfigService.getInstance().get('siteName');
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>About</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <div class="leftImageContainer">
          <img  src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cody-burleson-portrait-225x300.jpg" alt="Cody Burleson Portrait" width="225" height="300"></img>
        </div>
        <p>Hi, I’m Cody Burleson and this is my home base on the web - an online notebook, sketchbook, scrapbook and mad software science lab.</p>
        <p>Recently, I &quot;retired&quot; from 23 years in software to pursue my life-long dream of being a writer.</p>
        <p>Currently, I’m working on a nonfiction book about the Special Landing Force of 1st Battalion, 3rd Marines in the Vietnam War. The working title of the book is <em>The Cage</em>, which refers to Operation Beaver Cage – a key event in the story. I hope to complete and publish it by May, 2021. For more information about the project, or to join the mailing list, see:</p>
        <p><strong>Work in progress: <ion-router-link href="/cage" routerDirection="forward">The Cage</ion-router-link></strong></p>
        <p>I occasionally share things that I learn about the art of story-telling and the craft of writing. I also post an occasional piece of creative writing or memoir.</p>
        <p>Thanks for visiting! I’m glad you stopped by.</p>
        
        <h2>Life Events</h2>
        <ul>
          <li>1989 - Graduated from C.F. Brewer High School in White Settlement, Texas.</li>
          <li>1994 - Married Karlisa McKenney.</li>
          <li>1995 - Son, Caden Burleson born. Mother, Donna Nobles died.</li>
          <li>1997 - Daughter, Bailey Burleson born.</li>
          <li>2001 - Stepfather, William Charles Nobles died.</li>
          <li>2004 - Grandmother, Mary &quot;Mom&quot; Williams died.</li>
          <li>2007 - Started company, Base22 (originally as Burleson Technology Group).</li>
          <li>2019 - Left Base22 to pursue lifelong dream of being a writer. Granddaughter, Harlyn Faith Born.</li>
        </ul>
      </ion-content>
    ];
  }
}
