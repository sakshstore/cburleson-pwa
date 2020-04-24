import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../helpers/utils';

@Component({
    tag: 'app-search',
})
export class AppSearch {

    title = 'Search';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> AppSearch.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        //let id = document.location.pathname.substring( document.location.pathname.lastIndexOf('/') + 1 );
        //this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.title + ' | ' + SITENAME;
    }

    render() {
        return [
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-buttons slot="start">
                        <ion-back-button />
                    </ion-buttons>
                    <ion-title>Search</ion-title>
                </ion-toolbar>
            </ion-header>,

            <ion-content class="ion-padding">

                <ion-grid>
                    <ion-row>
                        <ion-col size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="7">

                            <div><script async src="https://cse.google.com/cse.js?cx=partner-pub-7370676338719207:9067256876"></script>
<div class="gcse-searchresults-only"></div></div>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}