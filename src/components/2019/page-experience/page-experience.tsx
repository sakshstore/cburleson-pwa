import { Component, Element, h } from '@stencil/core';
import { extractIdFromDocumentPath, isLocal, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-experience',
})
export class PageExperience {

    @Element() el: HTMLElement;

    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('>> PageExperience.componentWillLoad');
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
                        <ion-back-button defaultHref="/about" />
                    </ion-buttons>
                    <ion-title>About</ion-title>
                    <ion-buttons slot="end">
                        <ion-button onClick={() => this.toggleSearch()}>
                            <ion-icon slot="icon-only" name="search-outline"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                </ion-toolbar>
                <gls-gcse-searchbox-only id="searchbar" class="hidden" />
            </ion-header>,

            <ion-content class="ion-padding">

                <ion-grid>
                    <ion-row>
                        <ion-col size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="7">

                            <h1>{this.header.title}</h1>
                            <app-entry-meta header={this.header} />

                            <p>My career history...</p>

                            <ion-list>

                                <ion-item lines="full">
                                    <ion-label text-wrap>
                                        Self-employed
                                        <p>Writer</p>
                                        <p><em>Jun 2019 - present</em></p>
                                    </ion-label>
                                </ion-item>

                                <ion-item lines="full">
                                    <ion-label text-wrap>
                                        Base22
                                        <p>Founder and Solutions Architect</p>
                                        <p><em>Sep 1, 2007 to Jun 1, 2019 - 12 years</em></p>
                                    </ion-label>
                                </ion-item>

                                <ion-item lines="full">
                                    <ion-label text-wrap>
                                        IBM
                                        <p>Senior Managing Consultant</p>
                                        <p><em>2002 to Jul 1, 2007 - 5 years</em></p>
                                    </ion-label>
                                </ion-item>

                                <ion-item lines="full">
                                    <ion-label text-wrap>
                                        PricewaterhouseCoopers Consulting
                                        <p>Web User Experience Consultant, Portals and Content Management</p>
                                        <p><em>2000 to 2002 - 2 years</em></p>
                                    </ion-label>
                                </ion-item>

                                <ion-item lines="full">
                                    <ion-label text-wrap>
                                        Studio Interactive
                                        <p>Creative Director</p>
                                        <p><em>1997 to 2000 - 3 years</em></p>
                                    </ion-label>
                                </ion-item>

                                <ion-item lines="full">
                                    <ion-label text-wrap>
                                        Scenic Wonders
                                        <p>Founder, Scenic Designer / Set Builder / Prop Builder</p>
                                        <p><em>1995 to 1997 - 2 years</em></p>
                                    </ion-label>
                                </ion-item>

                                <ion-item lines="full">
                                    <ion-label text-wrap>
                                        Dallas Film and Video Industry
                                        <p>Freelancer - Production Assistant, Property Master / Set Decorator</p>
                                        <p><em>1992 to 1995 - 3 years</em></p>
                                    </ion-label>
                                </ion-item>

                            </ion-list>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}