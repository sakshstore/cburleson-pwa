import { Component, Element, h } from '@stencil/core';
import { extractIdFromDocumentPath, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-photos-dennis-mannion'
})
export class PagePhotosDennisMannion {

    @Element() el: any;

    header: any;

    data: any = {
        "imagesURL": "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/vietnam-dennis-mannion/",
        "photos": [
            {
                "id": "Mannion_Dennis_JDOB_1948-1",
                "subtitle": "",
                "content": "",
                "skipHiRes": true
            },
            {
                "id": "Mannion-Dennis-John",
                "subtitle": "",
                "content": "",
                "skipHiRes": true
            },
            {
                "id": "32248_MANNION-D-J-001",
                "subtitle": "",
                "content": "Original photograph from which this cropping was taken can be found <a href=\"http://dlagrza.com/PhotoCoDPersU.htm\">here</a>.",
                "skipHiRes": true
            },
            {
                "id": "dennis_mannion_001",
                "subtitle": "",
                "content": "Assumed to have been taken at or near Camp Schwab in Okinawa."
            },
            {
                "id": "dennis_mannion_002",
                "subtitle": "",
                "content": "Assumed to have been taken at or near Camp Schwab in Okinawa."
            },
            {
                "id": "dennis_mannion_003",
                "subtitle": "",
                "content": "Assumed to have been taken at or near Camp Schwab in Okinawa.",
                "skipHiRes": true
            },
            {
                "id": "dennis_mannion_004",
                "subtitle": "",
                "content": "Assumed to have been taken at or near Camp Schwab in Okinawa."
            }
        ]
    }

    async componentWillLoad() {
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

                <p>A collection of photographs of PFC Dennis J. Mannion (Delta Company, 1st Battalion, 3rd Marines) taken near and during his tour of duty in the Vietnam War. Dennis died on <abbr title="Dennis Mannion's death is reflected by some sources as May 5 because that is when his body was recovered, however eye-witnesses and after-action reports confirm that the actual date of his death was May 4.">May 4, 1967</abbr> in an ambush on Delta Company during Operation Beaver Cage. His name is on panel 19E, line 43 of The Wall.</p>
                
                <p><em>Photographs published with family permission as compliments to <a href="/cage">The Cage</a>, an in-progress book project.</em></p>

                <app-entry-meta header={this.data} />

                <app-photo-grid photos={this.data.photos} image-path={this.data.imagesURL} />

            </ion-content>,

        ];
    }
}