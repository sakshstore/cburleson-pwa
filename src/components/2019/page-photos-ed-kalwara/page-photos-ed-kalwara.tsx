import { Component, Element, h } from '@stencil/core';
import { extractIdFromDocumentPath, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-photos-ed-kalwara'
})
export class PagePhotosEdKalwara {

    @Element() el: any;

    header: any;

    data: any = {
        "imagesURL": "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/vietnam-ed-kalwara/",
        "photos": [
            {
                "id": "Photo0",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo1",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo2",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo3",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo4",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo5",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo6",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo7",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo8",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo9",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo10",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo11",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo12",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo13",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo14",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo15",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo16",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo17",
                "subtitle": "",
                "content": "Staff Sergeant John Malloy"
            },
            {
                "id": "Photo18",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo19",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo20",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo21",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo22",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo23",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo24",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo25",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo26",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo27",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo28",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo29",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo30",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo31",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo32",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo33",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo34",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo35",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo36",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo37",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo38",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo39",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo40",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo41",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo42",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo43",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo44",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo45",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo46",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo47",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo48",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo49",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo50",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo51",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo52",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo53",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo54",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo55",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo56",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo57",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo58",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo59",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo60",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo61",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo62",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo63",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo64",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo65",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo66",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo67",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo68",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo69",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo70",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo71",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo72",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo73",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo74",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo75",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "Photo76",
                "subtitle": "",
                "content": ""
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

                <p>A collection of photographs from Ed Kalwara (Charlie Company, 1st Battalion, 3rd Marines) taken during his tour of duty in the Vietnam War.</p>
                
                <p><em>Photographs &copy; 1966-2019 Ed Kalwara; published with permission as compliments to <a href="/cage">The Cage</a>, an in-progress book project.</em></p>
                
                <app-entry-meta header={this.data} />

                <app-photo-grid photos={this.data.photos} image-path={this.data.imagesURL} />

            </ion-content>,

        ];
    }
}