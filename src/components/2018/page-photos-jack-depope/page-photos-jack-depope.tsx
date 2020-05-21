import { Component, Element, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-photos-jack-depope'
})
export class PagePhotosJackDepope {

    @Element() el: any;

    header: any;

    data: any = {
        "imagesURL": "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/vietnam-jack-depope/",
        "photos": [
            {
                "id": "jack-depope-2",
                "subtitle": "Jack &quot;Doc&quot; DePope",
                "content": "<p>2nd Platoon, Delta Company, 1st Battalion, 3rd Marines (1/3)</p>"
            },
            {
                "id": "ch34-stirring-up-dust",
                "subtitle": "CH34 Stirring up dust",
                "content": ""
            },
            {
                "id": "d-13-3rd-platoon",
                "subtitle": "3rd Platoon, Delta 1/3",
                "content": "<p>According to John McCauley, the 3rd Platoon Commander is Lt. Templeton, a Mustang officer. John's squad walked into a frontal ambush and Lt. Templeton shot himself in the foot (or so John was told) directing fire in support of them. Lt. Templeton was a tough guy and John liked him because he led from the front and wasn’t scared of anything.</p>"
            },
            {
                "id": "delta-co-13-corpsman-name-unknown",
                "subtitle": "Delta Company 1/3 Corpsman",
                "content": "<p>Name unknown</p>"
            },
            {
                "id": "d-13-3rd-plt-commander",
                "subtitle": "3rd Platoon Commander",
                "content": "<p>Delta 1/3</p>"
            },
            {
                "id": "doc-charlie-johns-2nd-plt-delta-13",
                "subtitle": "Doc Charlie Johns",
                "content": "<p>2nd Platoon, Delta 1/3</p>"
            },
            {
                "id": "doc-davidson-3rd-plt-delta-13",
                "subtitle": "Doc Davidson",
                "content": "<p>3rd Platoon, Delta 1/3</p>"
            },
            {
                "id": "007",
                "subtitle": "A Corpsman",
                "content": "<p>Name Unknown</p>"
            },
            {
                "id": "kelly-plus-others",
                "subtitle": "Ray Kelley and others",
                "content": "<p>Raymond &quot;Machine Gun&quot; Kelley at far right.</p>"
            },
            {
                "id": "lt-spear-2nd-plt-commander-d-13",
                "subtitle": "Lieutenant Spear",
                "content": "<p>2nd Platoon Commander, Delta 1/3</p>"
            },
            {
                "id": "delta-13-gunny-kekahuna",
                "subtitle": "Gunny Kekahuna",
                "content": "<p>Delta 1/3</p>"
            },
            {
                "id": "ch46-landing",
                "subtitle": "CH46 Landing",
                "content": "<p></p>"
            }
        ]
    }

    async componentWillLoad() {
        let id = extractIdFromDocumentPath();
        this.header = BlogData.getPostHeaderById(id);
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

                <p>A collection of photographs from Jack &quot;Doc&quot; DePope (a Corpsman in Delta Company, 1st Battalion, 3rd Marines) taken during his 1966-1967 tour of duty in the Vietnam War.</p>
                
                <p class="text-muted"><em>Photographs &copy; 1966-2019 Jack DePope; published with permission as compliments to <a href="/cage">The Cage</a>, an in-progress book project.</em></p>

                <app-entry-meta header={this.data} />

                <app-photo-grid photos={this.data.photos} image-path={this.data.imagesURL} />

            </ion-content>,

        ];
    }
}