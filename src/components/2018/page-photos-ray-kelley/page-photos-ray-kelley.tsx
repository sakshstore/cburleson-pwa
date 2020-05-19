import { Component, Element, h } from '@stencil/core';
import { extractIdFromDocumentPath, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-photos-ray-kelley'
})
export class PagePhotosRayKelley {

    @Element() el: any;

    header: any;

    data: any = {
        "imagesURL": "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/vietnam-ray-kelley/",
        "photos": [
            {
                "id": "d-13-marines-v2",
                "subtitle": "Delta Company, 1/3 Marines",
                "content": "From Left to Right: Martin Cavazos, Robert (Bob) LeBarge, Ron Marinucci, Bob Gallo, Dennis Mannion"
            },
            {
                "id": "jim-shipp",
                "subtitle": "Jim Shipp",
                "content": ""
            },
            {
                "id": "don-hollingsworth",
                "subtitle": "PFC Don Ray Hollingsworth",
                "content": "Casualty was on May 4, 1967 during Operation Beaver Cage.<br/><a href=\"http://thewall-usa.com/info.asp?recid=23790\">Panel 19E - Line 37</a>"
            },
            {
                "id": "martin-cavazos",
                "subtitle": "CPL Martin Cavazos",
                "content": "Casualty was on May 5, 1967 during Operation Beaver Cage.<br/><a href=\"http://thewall-usa.com/info.asp?recid=8505\">Panel 19E - Line 42"
            },
            {
                "id": "frank-cuozzo",
                "subtitle": "PFC Frank Xavier Cuozzo",
                "content": "Casualty was on May 10, 1967 during Operation Beaver Cage.<br/><a href=\"http://thewall-usa.com/info.asp?recid=11516\">Panel 19E - Line 79</a>"
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

                <p>A collection of photographs from Ray Kelley (Delta Company, 1st Battalion, 3rd Marines) taken during his tour of duty in the Vietnam War.</p>
                
                <p><em>Photographs &copy; 1967-2019 Raymond Kelley; published with permission as compliments to <a href="/cage">The Cage</a>, an in-progress book project.</em></p>

                <app-entry-meta header={this.data} />

                <app-photo-grid photos={this.data.photos} image-path={this.data.imagesURL} />

            </ion-content>,

        ];
    }
}