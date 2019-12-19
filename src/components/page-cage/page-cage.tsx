import { Component, h } from '@stencil/core';

import { EnvironmentConfigService } from '../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
  tag: 'page-cage',
  styleUrl: 'page-cage.css'
})
export class PageCage {

  title = 'The Cage';

  recordItems = [
    {
      id: "/beaver-cage-command-chron",
      title: "Operation Beaver Cage - Command Chronology",
      teaser: "Declassified record of the Vietnam War chronicling Apr 1 to May 13, 1967.",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/beaver-cage-cmd-chron-thumb.jpg",
      datePublished: "",
      dateModified: "February 6, 2019"
    }
  ]

  photoItems = [
    {
      id: "/d-1-3-weapons-platoon",
      title: "Weapons Platoon - D 1/3 Marines, Vietnam",
      teaser: "Photograph of Delta Co Weapons Platoon with most individuals identified.",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/delta-weapons-plt-thumb.jpg",
      datePublished: "",
      dateModified: ""
    },
    {
      id: "/photos/curt-bruce",
      title: "Tour of Duty Photos from Curt Bruce",
      teaser: "Photographs from Curt Bruce (Delta Co) taken during his 1965 – 1966 tour of duty.",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/photos-curt-bruce-thumb.jpg",
      datePublished: "",
      dateModified: "July 6, 2019"
    },
    {
      id: "/photos/ed-kalwara",
      title: "Tour of Duty Photos from Ed Kalwara",
      teaser: "Photographs from Ed Kalwara taken during his tour of duty.",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/photos-ed-kalwara-thumb.jpg",
      datePublished: "",
      dateModified: "Dec 11, 2019"
    },
    {
      id: "/photos/gary-culp",
      title: "Tour of Duty Photos from Gary Culp",
      teaser: "Photographs from Gary Culp (Delta Co) taken during his tour of duty.",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/photos-gary-culp-thumb.jpg",
      datePublished: "",
      dateModified: "Oct 3, 2019"
    },
    {
      id: "/photos/jack-depope",
      title: "Tour of Duty Photos from Jack DePope",
      teaser: "Photographs from Jack &quot;Doc&quot; DePope (a Corpsman in Delta Co) taken during his 1966 – 1967 tour of duty.",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/photos-jack-depope-thumb.jpg",
      datePublished: "",
      dateModified: "July 31, 2019"
    },
    {
      id: "/photos/james-haight",
      title: "Tour of Duty Photos from James Haight",
      teaser: "Photographs from James Haight (Delta Co) taken during his tour of duty.",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/photos-james-haight-thumb.jpg",
      datePublished: "",
      dateModified: ""
    },
    {
      id: "/photos/jim-shipp",
      title: "Tour of Duty Photos from Jim Shipp",
      teaser: "Photograph from Jim Shipp (Delta Co) taken during his tour of duty.",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/photos-jim-shipp-thumb.jpg",
      datePublished: "",
      dateModified: "Oct 7, 2019"
    },
    /*
    {
      id: "/photos/ken-hicks",
      title: "Tour of Duty Photos from Ken Hicks",
      teaser: "Photographs from Ken Hicks (Delta Co) taken during his tour of duty.",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/photos-ken-hicks-thumb.jpg",
      datePublished: "",
      dateModified: "July 6, 2019"
    },
    */
    {
      id: "/photos/kevin-brooks",
      title: "Tour of Duty Photos from Kevin Brooks",
      teaser: "Photographs from Kevin Brooks (Charlie Co) taken during his tour of duty.",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/photos-kevin-brooks-thumb.jpg",
      datePublished: "",
      dateModified: "Oct 21, 2019"
    },
    {
      id: "/photos/ray-kelley",
      title: "Tour of Duty Photos from Ray Kelley",
      teaser: "Photographs from Ray &quot;Machine Gun&quot; Kelley (a Machine Gunner in Delta Co) taken during his tour of duty.",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/photos-ray-kelley-thumb.jpg",
      datePublished: "",
      dateModified: "Dec 18, 2018"
    },
    {
      id: "/photos/stanley-hall",
      title: "Tour of Duty Photos from Stanley Hall",
      teaser: "Photographs from Stanley &quot;Doc&quot; Hall (a Corpsman in Delta Co) taken during his tour of duty (around April 1967).",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/photos-stanley-hall-thumb.jpg",
      datePublished: "",
      dateModified: "Dec 18, 2018"
    },
  ]

  videoItems = [
    {
      id: "/ray-kelley-silver-star",
      title: "Silver Star Ceremony Honoring L/Cpl. Raymond Kelley - Vietnam War",
      teaser: "Silver Star Medal presentation ceremony for Ray (&quot;Machine Gun&quot;) Kelley.",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/ray-kelley-silver-star-thumb.jpg",
      datePublished: "Nov 9, 2019",
      dateModified: "Nov 9, 2019"
    },
    {
      id: "/vietnam-1967-amphibious-combat",
      title: "Vietnam, 1967 - Amphibious Combat",
      teaser: "A documentary about Amphibious Warfare in Vietnam, I-Corps, 1967 by  Donald F. Teal, M.D.",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/vietnam-1967-amphibious-combat-thumb.jpg",
      datePublished: "Nov 9, 2019",
      dateModified: "Nov 9, 2019"
    }
  ]

  componentWillLoad() {
    if (debug) {
      console.log('> PageCage.componentWillLoad');
    }
    document.title = this.title + ' | ' + EnvironmentConfigService.getInstance().get('siteName');
  }


  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/books"></ion-back-button>
          </ion-buttons>
          <ion-title>The Cage - Vietnam</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-grid fixed>
          <ion-row>
            <ion-col size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="8">
              <h1>{this.title}</h1>

              <p><strong>The Cage</strong> is a temporary working title for my work-in-progess book about the 1st Battalion, 3rd Marines in the Vietnam War (Special Landing Force Alpha). &quot;The Cage&quot; refers to Operation Beaver Cage, a key event in the story. This page provides access to declassified documents, photographs shared by Marine veterans, and other resources discovered during my research. These resources will remain online as companions to the forthcoming book.</p>

              <h2>Companion Resources</h2>

              <ion-list>
                {this.recordItems.map((item) =>
                  <ion-item href={item.id}>
                    <ion-thumbnail slot="start">
                      <img src={item.thumbnail} />
                    </ion-thumbnail>
                    <ion-label text-wrap>
                      {item.title}
                      <p innerHTML={item.teaser}></p>
                    </ion-label>
                  </ion-item>
                )}
              </ion-list>

              <h3>Photos</h3>

              <ion-list>
                {this.photoItems.map((item) =>
                  <ion-item href={item.id}>
                    <ion-thumbnail slot="start">
                      <img src={item.thumbnail} />
                    </ion-thumbnail>
                    <ion-label text-wrap>
                      {item.title}
                      <p innerHTML={item.teaser}></p>
                    </ion-label>
                  </ion-item>
                )}
              </ion-list>

              <h3>Videos</h3>

              <ion-list>
                {this.videoItems.map((item) =>
                  <ion-item href={item.id}>
                    <ion-thumbnail slot="start">
                      <img src={item.thumbnail} />
                    </ion-thumbnail>
                    <ion-label text-wrap>
                      {item.title}
                      <p innerHTML={item.teaser}></p>
                    </ion-label>
                  </ion-item>
                )}
              </ion-list>

              <h3>Vietnam War Reference Resources</h3>

            </ion-col>

            <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="4">

            <ion-card>
              <ion-card-header>
                <ion-card-title>Join mailing list</ion-card-title>
              </ion-card-header>

              <ion-card-content>
              <div id="mc_embed_signup">
                <form id="mc-embedded-subscribe-form" class="validate" action="https://codybburleson.us19.list-manage.com/subscribe/post?u=085bae426fecfc73c590d0ba3&amp;id=a8c24e6482" method="post" name="mc-embedded-subscribe-form" novalidate="" target="_blank">
                  <div id="mc_embed_signup_scroll">
                    <p>Join my mailing list to receive occasional news about the project. I will never share your info with anyone. You can view all previous messages in the <a href="https://us19.campaign-archive.com/home/?u=085bae426fecfc73c590d0ba3&amp;id=a8c24e6482">Email&nbsp;Archive</a>.</p>
                    <div>
                      {/*
                      <label>Email Address <span class="requiredFieldText">* required</span></label><br /><br />
                      <input id="mce-EMAIL" name="EMAIL" type="email" value="" />
                      */}
                      <ion-item>
                        <ion-label position="floating">Email Address <span class="requiredFieldText">(required)</span></ion-label>
                        <ion-input id="mce-EMAIL" name="EMAIL" type="email" inputmode="email" required></ion-input>
                      </ion-item>
                    </div>
                    <div>
                      {/*
                      <label>First Name </label><br />
                      <input id="mce-FNAME" name="FNAME" type="text" value="" />
                      */}
                      <ion-item>
                        <ion-label position="floating">First Name <span class="optionalFieldText">(optional)</span></ion-label>
                        <ion-input id="mce-FNAME" name="FNAME" inputmode="text"></ion-input>
                      </ion-item>
                    </div>
                    <div>
                      {/*
                      <label>Last Name </label><br />
                      <input id="mce-LNAME" name="LNAME" type="text" value="" />
                      */}
                      <ion-item>
                        <ion-label position="floating">Last Name <span class="optionalFieldText">(optional)</span></ion-label>
                        <ion-input id="mce-LNAME" name="LNAME" inputmode="text"></ion-input>
                      </ion-item>
                    </div>
                    <div id="mce-responses" class="clear">
                      <div id="mce-error-response" style={{ display: `none` }}>&nbsp;</div>
                      <div id="mce-success-response" style={{ display: `none` }}>&nbsp;</div>
                    </div>
                    <p><br /></p>
                    <div class="mailchimpHidden" aria-hidden="true"><input tabindex="-1" name="b_085bae426fecfc73c590d0ba3_a8c24e6482" type="text" value="" /></div>
                    <div class="clear">
                      {/*
                      <input id="mc-embedded-subscribe" name="subscribe" type="submit" value="Subscribe" />
                      */}
                      <ion-button id="mc-embedded-subscribe" type="submit">Join</ion-button>
                    </div>
                  </div>
                </form>
              </div>
              </ion-card-content>
            </ion-card>
              
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>

    ];
  }
}