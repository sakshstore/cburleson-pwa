import { Component, h } from '@stencil/core';

import { EnvironmentConfigService } from '../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');
const siteVersion: string = EnvironmentConfigService.getInstance().get('siteVersion');

@Component({
  tag: 'page-about',
  styleUrl: 'page-about.css'
})
export class PageAbout {

  title = 'About';

  async componentWillLoad() {
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
          <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cody-burleson-portrait-225x300.jpg" alt="Cody Burleson Portrait" width="225" height="300"></img>
        </div>

        <p>Hi, I’m Cody Burleson and this is my home base on the web - my blog, online notebook, sketchbook, scrapbook and mad software science lab.</p>

        <p>I love writing, game arts, visual effects, software development, and the great outdoors. I often share what I discover and learn, so if you're interested in any of these things, you might find something you like here.</p>

        <h2>What I'm doing now</h2>

        <p>I recently &quot;retired&quot; from 23 years in software to pursue my lifelong dream of being a writer and I am currently writing a nonfiction book about the 1st Battalion, 3rd Marines in the Vietnam War. It goes by the working title, The Cage, which refers to Operation Beaver Cage, a key event in the story. For more information about the work, or to join the project mailing list, see:</p>

        <p><strong><ion-router-link href="/cage" routerDirection="forward">The Cage</ion-router-link></strong> (work-in-progress book)</p>

        {/*
        <h3 class="clear">Follow me</h3>

        <p>I'm not very active on social media, but, for what it's worth, I can also be found here:</p>

        <ion-list>
          <ion-item href="http://www.youtube.com/c/CodyBurleson22">
            <ion-label>On YouTube</ion-label>
            <ion-icon name="logo-youtube" slot="start"></ion-icon>
          </ion-item>
          <ion-item href="https://twitter.com/@cody_d_burleson">
            <ion-label>On Twitter</ion-label>
            <ion-icon name="logo-twitter" slot="start"></ion-icon>
          </ion-item>
          <ion-item href="https://www.instagram.com/cody_burleson/">
            <ion-label>On Instagram</ion-label>
            <ion-icon name="logo-instagram" slot="start"></ion-icon>
          </ion-item>
          <ion-item href=" https://www.pinterest.com/codyburleso7161/">
            <ion-label>On Pinterest</ion-label>
            <ion-icon name="logo-pinterest" slot="start"></ion-icon>
          </ion-item>
          <ion-item href="https://www.facebook.com/cody.burleson.22">
            <ion-label>On Facebook</ion-label>
            <ion-icon name="logo-facebook" slot="start"></ion-icon>
          </ion-item>
          <ion-item href="https://www.linkedin.com/in/cody-burleson/">
            <ion-label>On LinkedIn</ion-label>
            <ion-icon name="logo-linkedin" slot="start"></ion-icon>
          </ion-item>
          <ion-item href="https://github.com/codyburleson">
            <ion-label>On Github</ion-label>
            <ion-icon name="logo-github" slot="start"></ion-icon>
          </ion-item>
        </ion-list>

        */}

        <h2>About this site (technology)</h2>

        <p>This site was developed using the <a href="https://ionicframework.com/" rel="nofollow">Ionic Framework</a> and <a href="https://stenciljs.com/" rel="nofollow">Stencil.js</a>. While the site also uses some helper libraries like <a href="https://prismjs.com/" rel="nofollow">Prismjs (for code syntax highlighting)</a>, it does not use a big JavaScript framework like Angular, React, or Vue. My goal was to see what could be accomplished without using one of the &quot;fad&quot; JavaScript frameworks. What you see here is the result; I've used only pure, W3C standards-compliant web components. For now, everything is just coded by hand, but in the future, I hope to write some Node.js scripts that help facilitate maintenance. Want to see the actual code? You can find the <a href="https://github.com/codyburleson/cburleson-pwa" rel="nofollow">source code here</a> on GitHub.</p>

        <p>Site version: {siteVersion}; for history of changes, see the <a href="https://github.com/codyburleson/cburleson-pwa/blob/master/changelog.md" rel="nofollow">changelog</a> on GitHub.</p>

        <h2>Etc...</h2>

        <ul>
          <li><strong><ion-router-link href="/about/life-events" routerDirection="forward">Life Events</ion-router-link></strong> - similar to the Facebook About page Life Events, here is my own.</li>
        </ul>

      </ion-content>
    ];
  }
}
