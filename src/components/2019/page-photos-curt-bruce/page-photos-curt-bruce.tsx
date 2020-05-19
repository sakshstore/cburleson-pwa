import { Component, Element, h } from '@stencil/core';
import { extractIdFromDocumentPath, isLocal, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-photos-curt-bruce'
})
export class PagePhotosCurtBruce {

    @Element() el: any;

    header: any;

    data: any = {
        "imagesURL": "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/vietnam-curt-bruce/",
        "photos": [
            {
                "id": "bruce-0152",
                "subtitle": "GySgt Dan Miserany",
                "content": "GySgt Dan Miserany D/1/3 Sep 1966 Fort Le My, Cu De river.  Dan subsequently was a Sgt Maj.  Now deceased.  Great Marine.  He was the company gunny at the time."
            },
            {
                "id": "bruce-0153",
                "subtitle": "Cu De River",
                "content": "View of Cu De River from Fort Le My, Indian country across the river."
            },
            {
                "id": "bruce-0154",
                "subtitle": "SSgt John Cox and Capt. Billy M. Summerlin",
                "content": "SSgt John Cox and Capt. Billy M. Summerlin Fort Le My Sep 1966 D/1/3 (Looking west as I recall.  Ba Na is on the mountain in the background.  John Cox was a platoon sgt. and a real character. Capt. Summerlin was CO of Co. D; another great Marine.  A tobacco chewer from North Carolina."
            },
            {
                "id": "bruce-0155",
                "subtitle": "Fort Le My D/1/3 position Oct '66",
                "content": "This was a bunker that the French had built when they were in VN.  Three of the 1/3 company positions; B,C,and D were on former French positions, complete with concrete bunkers of various types."
            },
            {
                "id": "bruce-0156",
                "subtitle": "Capt. Billy Summerlin CO D/1/3"
            }
        ]
    }

    async componentWillLoad() {
        if (isLocal()) {
            console.log('>> PagePhotosCurtBruce.componentWillLoad');
        }
        
        let id = extractIdFromDocumentPath();
        this.header = BlogData.getPostHeaderById(id);

 
        document.title = this.header.title + ' | ' + SITENAME;
        if (this.header.teaser) {
            document.getElementById("meta-desc").setAttribute("content", this.header.teaser);
        }
    }

    toggleSearch() {
        if (this.el.querySelector("#searchbar").classList.contains(`hidden`)) {
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
                            <ion-icon slot="icon-only" name="search-outline"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                </ion-toolbar>
                <gls-gcse-searchbox-only id="searchbar" class="hidden" />
            </ion-header>,

            <ion-content class="ion-padding">

                <h1>{this.header.title}</h1>
                <app-entry-meta header={this.header} />

                <p>A collection of photographs from Curt Bruce (Delta Company, 1st Battalion, 3rd Marines) taken during his 1965 - 1966 tour of duty in the Vietnam War.</p>

                <p class="text-muted"><em>Photographs &copy; 1965-2019 Curt Bruce; published with permission as compliments to <a href="/cage">The Cage</a>, an in-progress book project.</em></p>

                <app-entry-meta header={this.data} />

                <app-photo-grid photos={this.data.photos} image-path={this.data.imagesURL} />

            </ion-content>,

        ];
    }
}