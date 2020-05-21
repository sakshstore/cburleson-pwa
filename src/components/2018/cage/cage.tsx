import { Component, Element, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
  tag: 'page-cage',
  styleUrl: 'cage.css'
})
export class PageCage {

  @Element() el: HTMLElement;

  header: any;
  
  documentItems: Array<any>;
  photoItems: Array<any>;
  videoItems: Array<any>;
  referenceItems: Array<any>;

  async componentWillLoad() {
    let id = extractIdFromDocumentPath();
    this.header = BlogData.getPostHeaderById(id);

    this.documentItems = await BlogData.getPostsByMenu('cage-documents');
    this.photoItems = await BlogData.getPostsByMenu('cage-photos');
    this.videoItems = await BlogData.getPostsByMenu('cage-videos'); 
    this.referenceItems = await BlogData.getPostsByMenu('cage-ref-resources'); 
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

              <h1>{this.header.title}</h1>
              <app-entry-meta header={this.header} />

              <p><strong>The Cage</strong> is a temporary working title for my work-in-progess book about the 1st Battalion, 3rd Marines in the Vietnam War (Special Landing Force Alpha). &quot;The Cage&quot; refers to Operation Beaver Cage, a key event in the story. </p>

              <h2>Companion Resources</h2>

              <p>This page provides access to declassified documents, photographs shared by Marine veterans, and other resources discovered during my research. These resources will remain online as companions to the forthcoming book.</p>

              <h3>Documents</h3>

              <app-list-menu items={this.documentItems} lines="none"/>

              <h3>Photos</h3>

              <app-list-menu items={this.photoItems} lines="none"/>

              <h3>Videos</h3>

              <app-list-menu items={this.videoItems} lines="none"/>

              <h3>Reference Resources</h3>

              <app-list-menu items={this.referenceItems} lines="none"/>

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