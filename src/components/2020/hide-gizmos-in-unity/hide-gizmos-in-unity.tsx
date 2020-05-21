import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
  tag: 'page-hide-gizmos-in-unity'
})
export class PageHideGizmosInUnity {

  header: any;

  async componentWillLoad() {
    let id = extractIdFromDocumentPath();
    this.header = BlogData.getPostHeaderById(id);
  }

  render() {
    return ([
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>Blog</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">

        <ion-grid>
          <ion-row>
            <ion-col size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="7">
              
              <h1>{this.header.title}</h1>
              <app-entry-meta header={this.header} />

              <p>A short demonstration of how to quickly hide gizmos in the Scene View of the Unity Editor.</p>

              <div class="video-container">
                <iframe title="How to Hide Gizmos in Unity Scene View" class="video" src="https://www.youtube.com/embed/fxRFiORPGw8" frameborder="0" data-allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>

            </ion-col>
            <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
            </ion-col>
          </ion-row>
        </ion-grid>

      </ion-content>
    ]);
  }

}
