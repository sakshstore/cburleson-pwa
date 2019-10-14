import { Component, h } from '@stencil/core';

@Component({
    tag: 'page-cage',
    styleUrl: 'page-cage.css',
})
export class PageCage {

    title = 'The Cage';

    items = [
        {
          id: "/books/cage/beaver-cage-command-chron",
          title: "Operation Beaver Cage - Command Chronology",
          teaser: "A declassified record of the Vietnam War chronicling Operation Beaver Cage (Apr 1 to May 13, 1967).",
          thumbnail: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
          datePublished: "",
          dateModified: "February 6, 2019"
        },
        {
          id: "/books/cage/d-1-3-weapons-platoon",
          title: "Weapons Platoon - D 1/3 Marines, Vietnam",
          teaser: "A photograph of Delta Company Weapons Platoon (1st Battalion, 3rd Marines) with most individuals identified by name.",
          thumbnail: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
          datePublished: "",
          dateModified: ""
        },
        {
          id: "/story/curt-bruce-photos",
          title: "Tour of Duty Photos from Curt Bruce",
          teaser: "A collection of photographs from Curt Bruce (Delta Company, 1st Battalion, 3rd Marines) taken during his 1965 - 1966 tour of duty in the Vietnam War.",
          thumbnail: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
          datePublished: "",
          dateModified: "July 6, 2019"
        },
        {
          id: "/story/gary-culp-photos",
          title: "Tour of Duty Photos from Gary Culp",
          teaser: "A collection of photographs Gary Culp (Delta Company, 1st Battalion, 3rd Marines) taken during his tour of duty in the Vietnam War.",
          thumbnail: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
          datePublished: "",
          dateModified: "Oct 3, 2019"
        },
        {
          id: "/story/jack-depope-photos",
          title: "Tour of Duty Photos from Jack DePope",
          teaser: "A collection of photographs from Jack 'Doc' DePope (a Corpsman in Delta Company, 1st Battalion, 3rd Marines) taken during his 1966 – 1967 tour of duty in the Vietnam War.",
          thumbnail: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
          datePublished: "",
          dateModified: "July 6, 2019"
        },
        {
          id: "/story/james-haight-photos",
          title: "Tour of Duty Photos from James Haight",
          teaser: "A collection of photographs from James Haight (Delta Company, 1st Battalion, 3rd Marines) taken during his tour of duty in the Vietnam War.",
          thumbnail: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
          datePublished: "",
          dateModified: ""
        },
        {
          id: "/story/jim-shipp-photos",
          title: "Tour of Duty Photos from Jim Shipp",
          teaser: "A photograph from Jim Shipp (Delta Company, 1st Battalion, 3rd Marines) taken during his tour of duty in the Vietnam War.",
          thumbnail: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
          datePublished: "",
          dateModified: "Oct 7, 2019"
        },
        {
          id: "/story/ken-hicks-photos",
          title: "Tour of Duty Photos from Ken Hicks",
          teaser: "A collection of photographs from Ken Hicks of Delta Company, 1st Battalion / 3rd Marines, taken during his tour of duty in the Vietnam War.",
          thumbnail: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
          datePublished: "",
          dateModified: "July 6, 2019"
        },
        {
          id: "/story/ray-kelley-photos",
          title: "Tour of Duty Photos from Ray Kelley",
          teaser: "A collection of photographs from Ray 'Machine Gun' Kelley (a Machine Gunner in Delta Company, 1st Battalion, 3rd Marines) taken during his tour of duty in the Vietnam War.",
          thumbnail: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
          datePublished: "",
          dateModified: "July 6, 2019"
        },
        {
          id: "/story/stanley-hall-photos",
          title: "Tour of Duty Photos from Stanley Hall",
          teaser: "A collection of photographs from Stanley “Doc” Hall (a Corpsman in Delta Company, 1st Battalion, 3rd Marines) taken during his tour of duty in the Vietnam War (around April 1967).",
          thumbnail: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
          datePublished: "",
          dateModified: "July 6, 2019"
        },
    ]

    componentWillLoad() {
        document.title = this.title;
    }

    render() {
        return [
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-buttons slot="start">
                        <ion-back-button defaultHref="/books"></ion-back-button>
                    </ion-buttons>
                    <ion-title>The Cage</ion-title>
                </ion-toolbar>
            </ion-header>,

            <ion-content>
                <ion-grid fixed>
                    <ion-row>
                        <ion-col size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="8">
                            <h1>{this.title}</h1>
                            <p><strong>The Cage</strong> is a temporary working title for a book I’m writing, which is about the 1st Battalion, 3rd Marines in the Vietnam War. “The Cage” refers to Operation Beaver Cage, a notable operation that 1/3 engaged in and a key event in the story. This area provides access to various resources that I have been using for research, that may remain online as companions to the book, and that I hope will be a useful to others.</p>
                            <h2>Companion Resources</h2>

                            <ion-list>
                            {this.items.map((item) =>
                                <ion-item href={item.id}>
                                  <ion-thumbnail slot="start">
                                    <img src={item.thumbnail}/>
                                  </ion-thumbnail>
                                  <ion-label text-wrap>
                                  {item.title}
                                  <p>{item.teaser}</p>
                                  </ion-label>
                                </ion-item>
                            )}
                            </ion-list>
                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="4">
                        
                        
                        <h3>Subscribe to the mailing list</h3>
                        <div id="mc_embed_signup">
                          <form id="mc-embedded-subscribe-form" class="validate" action="https://codybburleson.us19.list-manage.com/subscribe/post?u=085bae426fecfc73c590d0ba3&amp;id=a8c24e6482" method="post" name="mc-embedded-subscribe-form" novalidate="" target="_blank">
                            <div id="mc_embed_signup_scroll">
                              <p>Subscribe to the mailing list and I'll send you occasional news about the project. Don't worry; I will never share your info with anyone. You can view all messages in the <a href="https://us19.campaign-archive.com/home/?u=085bae426fecfc73c590d0ba3&amp;id=a8c24e6482">Email&nbsp;Archive</a>.</p>
                              <div>
                                <label>Email Address <span class="requiredFieldText">* required</span></label><br/><br/>
                                <input id="mce-EMAIL" name="EMAIL" type="email" value=""/>
                              </div>
                              <div>
                                <label>First Name </label><br/>
                                <input id="mce-FNAME" name="FNAME" type="text" value=""/>
                              </div>
                              <div><label>Last Name </label><br/>
                                <input id="mce-LNAME" name="LNAME" type="text" value=""/>
                              </div>
                              <div id="mce-responses" class="clear">
                                <div id="mce-error-response" style={{display: `none`}}>&nbsp;</div>
                                <div id="mce-success-response" style={{display: `none`}}>&nbsp;</div>
                              </div>
                              <p><br/></p>
                              <div class="mailchimpHidden" aria-hidden="true"><input tabindex="-1" name="b_085bae426fecfc73c590d0ba3_a8c24e6482" type="text" value=""/></div>
                              <div class="clear">
                                <input id="mc-embedded-subscribe" name="subscribe" type="submit" value="Subscribe"/>
                                <p><br/></p>
                              </div>
                            </div>
                          </form>
                        </div>





                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-content>

        ];
    }
}