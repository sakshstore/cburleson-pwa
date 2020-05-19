import { Component, Element, h } from '@stencil/core';
import { extractIdFromDocumentPath, isLocal, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-vietnam-1967-amphibious-combat'
})
export class PageVietnam1967AmphibiousCombat {

    @Element() el: HTMLElement;

    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('>> PageVietnam1967AmphibiousCombat.componentWillLoad');
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

                <h3>1st Battalion, 3rd Marines and United States Naval Amphibious Forces</h3>
                <p>This movie is a documentary about Amphibious Warfare in Vietnam, I-Corps, 1967. Filmed in Vietnam in 1967 by Donald F. Teal, M.D., formerly Lieutenant, Medical Corps, United States Navy, while on deployment with United States Marines and Sailors of the First Battalion, Third Marine Regiment, Third Marine Division attached to Amphibious Ready Group Alpha and Special Landing Force Alpha as Medical Officer In Charge of Casualty Care. This movie was created and produced by Dr Teal in January 2011.</p>
                <p><em>Video &copy; 2011 Donald F. Teal (except music soundtrack); published with permission as compliments to <a
                    href="/cage/">The Cage</a>, an in-progress book project.</em></p>


                <h2>Chapter 1 of 3</h2>

                <div class="video-container">
                    <iframe title="Vietnam, 1967 - Amphibious Combat - Chapter 1 of 3" class="video" src="https://www.youtube.com/embed/2BTHe705_uE" frameborder="0" data-allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

                <h2>Chapter 2 of 3</h2>

                <div class="video-container">
                    <iframe title="Vietnam, 1967 - Amphibious Combat - Chapter 2 of 3" class="video" src="https://www.youtube.com/embed/dXwng8gvHJg" frameborder="0" data-allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

                <h2>Chapter 3 of 3</h2>

                <div class="video-container">
                    <iframe title="Vietnam, 1967 - Amphibious Combat - Chapter 3 of 3" class="video" src="https://www.youtube.com/embed/XXFmUyYXjDo" frameborder="0" data-allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

            </ion-content>
        ];
    }
}
