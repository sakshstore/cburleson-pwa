import { Component, Element, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-marine-platoon-156-san-diego-1966',
})
export class PageMarinePlatoon156SanDiego1966 {

    @Element() el: HTMLElement;

    header: any;

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

                <p>This is a photograph of the graduating platoon of Cpl Martin Cavazos, who was killed during Operation Beaver Cage of the Vietnam War on May 5, 1967. The photograph is from the collection of his younger brother, Daniel Cavazos, and is published in Martin's honor.</p>

                <a href="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/marine-platoon-156_san-diego_1966.jpg"><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/cage/marine-platoon-156_san-diego_1966.jpg" alt="U.S. Marine Corps Platoon 156 - San Diego, 1966" /></a>

            </ion-content>

        ];
    }
}