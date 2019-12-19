import { Component, h } from '@stencil/core';

// import { BlogData } from '../../services/blog-data';

import { EnvironmentConfigService } from '../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-home',
})
export class PageHome {

    title = 'Home';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> AppHome.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        //let id = document.location.pathname.substr(1);
        //this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.title + ' | ' + EnvironmentConfigService.getInstance().get('siteName');
    }

    render() {
        return [
            <ion-header>
            <ion-toolbar color="primary">
              <ion-buttons slot="start">
                <ion-menu-button></ion-menu-button>
              </ion-buttons>
              <ion-title>{this.title}</ion-title>
            </ion-toolbar>
          </ion-header>,

            <ion-content class="ion-padding">

                <ion-grid>
                    <ion-row>
                        <ion-col size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="7">
                            <h1>{this.title}</h1>
                            <app-entry-meta header={this.header} />

                            <p>Here is some test Home content.</p>



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





                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">

                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}