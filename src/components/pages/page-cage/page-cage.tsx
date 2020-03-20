import { Component, Element, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

@Component({
  tag: 'page-cage',
  styleUrl: 'page-cage.css'
})
export class PageCage {

  @Element() el: HTMLElement;

  title = 'The Cage';

  recordItems = [
    {
      id: "/beaver-cage-command-chron",
      title: "Operation Beaver Cage - Command Chronology",
      teaser: "Declassified record of the Vietnam War chronicling Apr 1 to May 13, 1967.",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/beaver-cage-cmd-chron-thumb.jpg",
      datePublished: "",
      dateModified: "February 6, 2019"
    },
    {
      id: "/beaver-cage-union-memorial",
      title: "Beaver Cage/Union memorial service program",
      teaser: "A program (booklet) for the memorial service held aboard the USS Okinawa on May 16, 1967, after the operations.",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/beaver-cage-union-memorial-thumb.jpg",
      datePublished: "1/8/2020"
    },
    {
      id: "/sea-tiger-newspapers",
      title: "Sea Tiger Newspapers",
      teaser: "Digitized issues of the &quot;Sea Tiger&quot;, a weekly newspaper published by III MAF (Marine Amphibious Force) between 1965 and 1971.",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/files/sea-tiger/1968-04-19_sea-tiger_thumb.jpg",
      datePublished: "2/11/2020"
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
      id: "/marine-platoon-156-san-diego-1966",
      title: "U.S. Marine Corps Platoon 156 - San Diego, 1966",
      teaser: "Marine Platoon 156, San Diego, 1966 (platoon of Martin Cavazos, Delta Co.)",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/marine-platoon-156_san-diego_1966_thumb.jpg",
      datePublished: "3/12/2020",
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
    {
      id: "/photos/cavazos-center",
      title: "Vietnam War Photographs from the Martin Cavazos Center",
      teaser: "A collection of photos presented in honor of Martin Cavazos (Delta Co., 1st Batallion / 3rd Marines; KIA May 5, 1967); originally from the Martin Cavazos Center in Sebastian, Texas.",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/cavazos-center_thumb.jpg",
      datePublished: "Mar 13, 2020",
      dateModified: ""
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
    if (isLocal()) {
      console.log('> PageCage.componentWillLoad');
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
            <ion-back-button defaultHref="/books"></ion-back-button>
          </ion-buttons>
          <ion-title>The Cage - Vietnam</ion-title>
          <ion-buttons slot="end">
            <ion-button onClick={() => this.toggleSearch()}>
              <ion-icon slot="icon-only" name="search-outline"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
        <gls-gcse-searchbox-only id="searchbar"class="hidden"/>
      </ion-header>,

      <ion-content class="ion-padding">

        <ion-grid>
          <ion-row>
            <ion-col size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="7">

              <h1>{this.title}</h1>

              <p><strong>The Cage</strong> is a temporary working title for my work-in-progess book about the 1st Battalion, 3rd Marines in the Vietnam War (Special Landing Force Alpha). &quot;The Cage&quot; refers to Operation Beaver Cage, a key event in the story. </p>

              <h2>Companion Resources</h2>

              <p>This page provides access to declassified documents, photographs shared by Marine veterans, and other resources discovered during my research. These resources will remain online as companions to the forthcoming book.</p>

              <h3>Documents</h3>

              <ion-list>
                {this.recordItems.map((item) =>
                  <ion-item href={item.id} lines="none">
                    <ion-thumbnail slot="start">
                      <ion-img src={item.thumbnail} />
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
                  <ion-item href={item.id} lines="full">
                    <ion-thumbnail slot="start">
                      <ion-img src={item.thumbnail} />
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
                  <ion-item href={item.id} lines="full">
                    <ion-thumbnail slot="start">
                      <ion-img src={item.thumbnail} />
                    </ion-thumbnail>
                    <ion-label text-wrap>
                      {item.title}
                      <p innerHTML={item.teaser}></p>
                    </ion-label>
                  </ion-item>
                )}
              </ion-list>

            </ion-col>

            <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">

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
                          <ion-item>
                            <ion-label position="floating">Email Address <span class="requiredFieldText">(required)</span></ion-label>
                            <ion-input id="mce-EMAIL" name="EMAIL" type="email" inputmode="email" required></ion-input>
                          </ion-item>
                        </div>
                        <div>
                          <ion-item>
                            <ion-label position="floating">First Name <span class="optionalFieldText">(optional)</span></ion-label>
                            <ion-input id="mce-FNAME" name="FNAME" inputmode="text"></ion-input>
                          </ion-item>
                        </div>
                        <div>
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