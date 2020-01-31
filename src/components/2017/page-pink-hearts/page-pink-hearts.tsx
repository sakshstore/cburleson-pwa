import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-pink-hearts',
})
export class PagePinkHearts {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PagePinkHearts.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + SITENAME;
        if (this.header.teaser) {
            document.getElementById("meta-desc").setAttribute("content", this.header.teaser);
        }
    }

    render() {
        return [
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-buttons slot="start">
                        <ion-back-button defaultHref="/" />
                    </ion-buttons>
                    <ion-title>Blog</ion-title>
                </ion-toolbar>
            </ion-header>,

            <ion-content class="ion-padding">

                <ion-grid>
                    <ion-row>
                        <ion-col size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="7">
                            <h1>{this.header.title}</h1>
                            <app-entry-meta header={this.header} />

                            <p>My sister tried to kill herself. Or, at least, I think she did.</p>
                            <p>I was eleven years old. I don’t remember much about it; it was a long time ago – kind of a blur at this point. The thing that sticks out is all the little pink hearts – speed pills. She’d swallowed a shit-load, then sprayed them all over the upholstery of the car with her vomit.</p>
                            <p>Mom rolled down the windows. The stench was bad.</p>
                            <p>I watched those little pills drip off the top of the car as we raced to the hospital to have her stomach pumped.</p>
                            <p>She was thirteen years old.</p>
                            <p>She survived it.</p>
                            <p>To this day, I don’t know why she did that.</p>
                            <p>I was too young to understand much, but it makes me wonder now.</p>
                            <p>What could have been so troublesome for her at that age? I don’t even recall her having a boyfriend at the time. She never did drugs before then. It’s not like we lived on skid row or anything – we were at my sweet grandmother’s house for Christ’s sake. Where in the hell does a thirteen year old girl find a bunch of speed?</p>
                            <p>Maybe they were just caffeine pills. Maybe it was just a ploy for attention or a cry for help. Maybe not.</p>
                            <p>I’ll never know.</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">

                            <gls-adsense-ad />

                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>


        ];
    }
}