import { Component, Element, h } from '@stencil/core';
import { SITEVERSION } from '../../../helpers/utils';

@Component({
  tag: 'page-about',
  styleUrl: 'about.css'
})
export class PageAbout {

  @Element() el: HTMLElement;
  
  title = 'About';

  async componentWillLoad() {
    // document.title = this.title + ' | ' + SITENAME;
  }

  toggleSearch(){
    if(this.el.querySelector("#searchbar").classList.contains(`hidden`)) {
       this.el.querySelector("#searchbar").classList.remove('hidden');
    } else {
      this.el.querySelector("#searchbar").classList.add('hidden');
    }
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>About</ion-title>
          <ion-buttons slot="end">
            <ion-button onClick={() => this.toggleSearch()}>
              <ion-icon slot="icon-only" name="search-outline"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
        <gls-gcse-searchbox-only id="searchbar"class="hidden"/>
      </ion-header>,

      <ion-content class="ion-padding">

        <div class="leftImageContainer">
          <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cody-burleson-portrait-225x300.jpg" alt="Cody Burleson Portrait" width="225" height="300"></img>
        </div>

        <p>Hi, I’m Cody Burleson and this is my home base on the web - a blog, online notebook, sketchbook, scrapbook and mad software science lab.</p>

        <p>These days, I'm into writing, computer game development, and the great outdoors. I often share what I discover and learn, so if you're interested in any of these things, you might find something you like here.</p>

        <h2>What I'm doing now</h2>

        <p>I am now spending a lot of my time writing a nonfiction book about the 1st Battalion, 3rd Marines in the Vietnam War. It goes by the working title, <em>The Cage</em>, which refers to Operation Beaver Cage, a key event in the story. For more information about the work, or to join the project mailing list, see:</p>

        <p><strong><ion-router-link href="/cage" routerDirection="forward">The Cage</ion-router-link></strong> (work-in-progress book)</p>

        <h2 class="clear">About this site (technology)</h2>

        <p>This site was developed using the Ionic Framework and Stencil.js. While the site also uses some 3rd-party components like <a href="https://github.com/deckgo/deckdeckgo/tree/master/webcomponents/highlight-code">DeckDeckGo's Highlight Code component</a> (for code syntax highlighting), it does not use a big JavaScript framework like Angular, React, or Vue. My goal was to see what could be accomplished without using one of the popular JavaScript frameworks. What you see here is the result; I've used only pure, W3C standards-compliant web components. For now, everything is just coded by hand, but in the future, I hope to write some Node.js scripts that help facilitate maintenance. Want to see the actual code? You can find the <a href="https://github.com/codyburleson/cburleson-pwa" rel="nofollow">source code here</a> on GitHub.</p>

        <p>Site version: {SITEVERSION}; for history of changes, see the <a href="https://github.com/codyburleson/cburleson-pwa/blob/master/changelog.md" rel="nofollow">changelog</a> on GitHub.</p>

        <h2>Etc...</h2>

        <ion-list>

          <ion-item lines="full" href="/about/experience" routerDirection="forward">
              <ion-label text-wrap>
              Experience
              <p>My career history.</p>
              </ion-label>
          </ion-item>

          <ion-item lines="full" href="/about/life-events" routerDirection="forward">
              <ion-label text-wrap>
              Life Events
              <p>Similar to the Facebook About page's Life Events, here are some key life events of my own.</p>
              </ion-label>
          </ion-item>

        </ion-list>

      </ion-content>
    ];
  }
}
