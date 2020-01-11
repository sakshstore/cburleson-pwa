import { Component, Element, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../helpers/utils';

@Component({
  tag: 'page-ray-kelley-silver-star'
})
export class PageRayKelleySilverStar {

  @Element() el: HTMLElement;

  title = 'Silver Star Ceremony Honoring L/Cpl. Raymond Kelley - Vietnam War';

  componentWillLoad() {
    if (isLocal()) {
      console.log('> PageRayKelleySilverStar.componentWillLoad');
    }
    document.title = this.title + ' | ' + SITENAME;
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
            <ion-back-button defaultHref="/cage" />
          </ion-buttons>
          <ion-title>The Cage - Vietnam</ion-title>
          <ion-buttons slot="end">
            <ion-button onClick={() => this.toggleSearch()}>
              <ion-icon slot="icon-only" name="ios-search"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
        <gls-gcse-searchbox-only id="searchbar"class="hidden"/>
      </ion-header>,

      <ion-content class="ion-padding">

        <h1>{this.title}</h1>
        <p class="entry-meta">Posted on <time>Nov 9, 2019</time> (last modified <time>Nov 9, 2019</time>)</p>

        <p>Ray &quot;Machine Gun&quot; Kelley received the Silver Star for his actions in combat during the Vietnam War. This video is of the ceremony during which he was presented with the Silver Star Medal at the National Museum of the Marine Corps in Triangle, Virginia on May 18, 2018. The video concludes with a news radio interview of Ray. The Silver Star Medal is the United States Armed Forces' third-highest personal decoration for valor in combat.</p>

        <p>Published with permission as compliments to <a href="/cage">The Cage</a>, an in-progress book project.</p>

        <div class="video-container">
          <iframe class="video" src="https://www.youtube.com/embed/BTOOJotDnCE" frameborder="0" data-allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        <p>Video contents:</p>

        <ul>
          <li>00:00 - Introduction by Ken Hicks (Delta Co. 1st Battalion / 3rd Marines)</li>
          <li>02:37 - Singer, Kim, sings God Bless America</li>
          <li>05:20 - Religious Invocation and Prayer</li>
          <li>11:55 - Ken Hicks introduces Capt. Spear (Ray’s platoon commander during the Vietnam War)</li>
          <li>13:20 - Captain Winfield Spear (U.S. Marine Corps retired) Speaks about Ray and his Silver Star
            Medal</li>
          <li>20:10 - Ken Hicks reads Silver Star Medal citation</li>
          <li>23:13 - Capt Spear presents the Silver Star Medal earned by Ray</li>
          <li>25:45 - Ray Kelley speaks</li>
          <li>34:19 - Capt Spear tells funny story of when he first met Ray in Vietnam</li>
          <li>38:05 - Discussion of brick to be planted at the National Museum of the Marine Corps in Ray’s
            honor</li>
          <li>39:35 - Closing prayer with Ray’s pastor from Florida</li>
          <li>43:46 - Another pastor gives blessing for meal and fellowship</li>
          <li>45:37 - Closing remarks from Ken Hicks</li>
          <li>47:03 - “SUCH GOOD MEN” from “These Good Men” by Michael Norman</li>
          <li>48:16 - Ray Kelley Interview with Jordan Levy, WTAG News Radio</li>
        </ul>

      </ion-content>
    ];
  }
}
