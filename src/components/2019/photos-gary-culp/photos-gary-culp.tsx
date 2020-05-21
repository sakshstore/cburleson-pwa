import { Component, Element, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-photos-gary-culp'
})
export class PagePhotosGaryCulp {

    @Element() el: any;

    header: any;

    data: any = {
        "imagesURL": "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/vietnam-gary-culp/",
        "photos": [
            {
                "id": "culp100",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "culp104",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "culp122",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "culp101",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "culp119",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "culp110",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "culp124",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "culp108",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "culp109",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "culp114",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "culp147v2",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "culp114v2",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "culp118",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "culp117",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "culp115",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "culp106",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "culp144",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "culp121",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "culp102",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "culp123",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "culp107",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "culp128",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "culp131",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "culp143",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "culp120",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "culp112",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "culp108",
                "subtitle": "",
                "content": ""
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

                <p>A collection of photographs from Gary Culp (Delta Company, 1st Battalion, 3rd Marines) taken during his tour of duty in the Vietnam War.</p>
                
                <p class="text-muted"><em>Photographs &copy; 1965-2019 Gary Culp; published with permission as compliments to <a href="/cage">The Cage</a>, an in-progress book project.</em></p>

                <app-entry-meta header={this.data} />

                <app-photo-grid photos={this.data.photos} image-path={this.data.imagesURL} />

            </ion-content>,

        ];
    }
}