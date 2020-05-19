import { Component, Element, h } from '@stencil/core';
import { isLocal } from '../../helpers/utils';

@Component({
    tag: 'app-404-page-not-found',
    styleUrl: 'app-404-page-not-found.css'
})
export class App404PageNotFound {

    @Element() el: HTMLElement;

    title = 'Page not found';
    pathname: string;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('>> App404PageNotFound.componentWillLoad');
        }

        this.pathname = window.location.pathname;
        document.title = this.title + ' : ' + this.pathname;
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
                <ion-toolbar color="danger">
                    <ion-title >PAGE NOT FOUND</ion-title>
                    <ion-buttons slot="end">
                        <ion-button onClick={() => this.toggleSearch()}>
                            <ion-icon slot="icon-only" name="search-outline"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                </ion-toolbar>
                <gls-gcse-searchbox-only id="searchbar" class="hidden" />
            </ion-header>,

            <ion-content class="ion-padding">

                <div class="alert alert-warning center" role="alert">
                    <div class="hugeText">OOPS!</div>
                    <span class="bigText">We can't seem to find the page you're looking for.</span>
                </div>

                <div class="center">
                    <ion-button color="primary" href="/">Go to Homepage</ion-button>
                </div>

            </ion-content>

        ];
    }
}