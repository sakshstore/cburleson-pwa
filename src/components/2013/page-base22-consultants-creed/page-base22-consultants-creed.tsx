import { Component, h } from '@stencil/core';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-base22-consultants-creed',
})
export class PageBase22ConsultantsCreed {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageBase22ConsultantsCreed.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + EnvironmentConfigService.getInstance().get('siteName');
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

                            <p>At Base22, we have a channel on Skype that we use to exchange key information such as when we’re bouncing a server or when we’re polling the staff for ideas to resolve some issue. Of course, there’s also a bit of lighthearted play that goes on. For example, here’s some content from today’s Skype chatter that I thought was amusing. Team pride – HOOYA!</p>

                            <h2>The Pep Talk for New Recruits</h2>

                            <p>Today, you people are no longer maggots. Today, you are Base22 consultants. You’re part of a brotherhood. From now on until the day you die, wherever you are, every Base22 consultant is your brother. Most of you will go to client sites. Some of you will not come back. But always remember this: Base22 consultants die for our clients. That’s what we’re here for. But Base22 lives forever. And that means YOU live forever.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/Base22CreedFlag.png" alt="" /></p>

                            <h2>The Creed</h2>

                            <p>This is my laptop. There are many others like it, but this one is mine. My laptop is my best friend. It is my life. I must master it as I must master my life. Without me, my laptop is useless. Without my laptop, I am useless. I must evolve the enterprise. I must evolve the Web. I must design better than my competition, who is trying to beat me. I must out-code him before he out-codes me. I will. Before God I swear this creed: my laptop and myself are defenders of my company, we are the masters of our platform, we are the saviors of my life. So be it, until there are no defects, but peace and delight amongst all end-users. Amen.</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">

                            <gls-adsense-ads />

                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}