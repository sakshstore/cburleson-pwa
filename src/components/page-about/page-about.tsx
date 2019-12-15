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
          <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cody-burleson-portrait-225x300.jpg" alt="Cody Burleson Portrait" width="225" height="300"></img>
        </div>

        <p>Hi, I’m Cody Burleson and this is my home base on the web - an online notebook, sketchbook, scrapbook and mad software science lab.</p>

        <p>I love writing, game development, software development, and the great outdoors. As I study, practice, and play, I often share what I discover and learn, so if you're interested in any of these things, you might find something you like here.</p>

        <p>My current work in progress is a nonfiction book about the Special Landing Force of 1st Battalion, 3rd Marines in the Vietnam War. It goes by the working title, The Cage, which refers to Operation Beaver Cage, a key event in the story. I hope to complete and publish the book by May of 2021, but...<em>no promises</em>. For more information about the work, or to join the project mailing list, see:</p>

        <p><strong><ion-router-link href="/cage" routerDirection="forward">The Cage</ion-router-link></strong> (work-in-progress book)</p>

        <p>Statistically, writers don't earn much money. I'm new to that craft and I have a mortgage to pay, so I still work to maintain software development skills for &quot;side-hustle&quot; purposes. I've become increasingly fascinated with the state of game art (including game development), so I've also been staying abreast of that field. I'm especially interested in how the lines between game arts, visual effects, virtual reality and motion pictures are all blurring and how digital technology is empowering the independent storyteller. When I'm not writing, creating game stuff, or programming, I'm usually out somewhere in the Colorado Rockies with my Jeep, Oscar Mike, my wife, Karlisa, and my dog, Buddy.</p>

        <p>Thanks for visiting! I’m glad you stopped by.</p>

        <h2>About this site</h2>

        <p>This site has a section for each of my passions...</p>

        <ion-grid>
          <ion-row>
            <ion-col>


              <ion-card>
                <ion-card-header>
                  <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                  <ion-card-title>Writing</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                  ...
            </ion-card-content>
              </ion-card>


            </ion-col>
            <ion-col>

              <ion-card>
                <ion-card-header>
                  <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                  <ion-card-title>Game Arts</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                  ...
            </ion-card-content>
              </ion-card>

            </ion-col>
            <ion-col>


              <ion-card>
                <ion-card-header>
                  <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                  <ion-card-title>Software Dev</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                  ...
            </ion-card-content>
              </ion-card>


            </ion-col>
            <ion-col>

              <ion-card>
                <ion-card-header>
                  <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                  <ion-card-title>Colorado Adventures</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                  ...
            </ion-card-content>
              </ion-card>

            </ion-col>
          </ion-row>
        </ion-grid>

        <h3>Site technology</h3>

        <p>This site was developed using the <a href="https://ionicframework.com/" rel="nofollow">Ionic Framework</a> and <a href="https://stenciljs.com/" rel="nofollow">Stencil.js</a>. While the site also uses some helper libraries like <a href="https://prismjs.com/" rel="nofollow">Prismjs (for code syntax highlighting)</a>, it does not use a big JavaScript framework like Angular, React, or Vue. My goal was to see what could be accomplished without using one of the &quot;fad&quot; JavaScript frameworks. What you see here is the result; I've used only pure, W3C standards-compliant web components. Want to see the actual code? You can find it <a href="" rel="nofollow">here on GitHub</a>.</p>

        <p>When I commit site changes to GitHub, the code is automatically built and deployed where it is hosted on <a href="" rel="nofollow">Netlify</a>.</p>

        <h3>Follow me</h3>

        <ul>
          <li>On LinkedIn</li>
          <li>On Twitter</li>
          <li>On YouTube</li>
        </ul>

        <h3>Contact me</h3>

        <h2>Etc...</h2>

        <ul>
          <li><strong><ion-router-link href="/about/life-events" routerDirection="forward">Life Events</ion-router-link></strong> - similar to the Facebook About page Life Events, here is my own.</li>
        </ul>

      </ion-content>
    ];
  }
}
