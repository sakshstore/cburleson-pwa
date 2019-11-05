import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-about',
  styleUrl: 'page-about.css',
})
export class PageAbout {

  title = 'About';

  componentWillLoad() {
      document.title = this.title;
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
        <img class="alignleft responsive" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cody-burleson-portrait-225x300.jpg" alt="Cody Burleson Portrait" width="225" height="300"></img>
        </div>
        <p>Hi, I’m Cody Burleson and this is my home base on the web - an online notebook, portfolio, and experimental lab.</p>
        <p>Here, you’ll find a bunch of aging technical notes and tutorials that I posted during my days in the software business. I’m not posting much of the technical stuff anymore; I’ve recently retired from 23 years in software to focus full-time on writing.</p>
        <p>Currently, I’m working on a book about the special landing force of 1st Battalion, 3rd Marines in the Vietnam War. My dad was a rocket man in a weapons platoon attached to Delta Company. The working title of the book is <em>The Cage</em>, which refers to Operation Beaver Cage – a key event in the story. I hope to complete and publish it by May, 2021.</p>
        <p>For news about the project, you can sign up for the mailing list or find more information and companion resources here:</p>
        <p><a href="https://codyburleson.com/cage/"><strong>Work-in-Progress Project: The Cage</strong></a></p>
        <p>I occasionally share things that I learn about the art of story-telling and the craft of writing. I also post an occasional piece of creative writing or <a href="https://codyburleson.com/tag/memoire/">mémoire</a>.</p>
        <p>Thanks for visiting! I’m glad you stopped by.</p>
      </ion-content>
    ];
  }
}
