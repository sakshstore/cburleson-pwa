import { Component, h } from '@stencil/core';

@Component({
    tag: 'page-template-page',
})
export class AppTemplatePage {

    title = 'Page Template Page';

    componentWillLoad() {
        document.title = this.title;
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

            <ion-content>
                <ion-grid fixed>
                    <ion-row>
                        <ion-col size-xs="12" size-sm="12" size-md="12" size-lg="12" size-xl="12">

                            <h1>{this.title}</h1>
                            <p class="entry-meta"><em>Posted on July 4, 2018 (last modified July 17, 2019)</em></p>

                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-content>

        ];
    }
}