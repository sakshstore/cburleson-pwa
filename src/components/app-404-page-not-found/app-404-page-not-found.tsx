import { Component, h } from '@stencil/core';

import { EnvironmentConfigService } from '../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'app-404-page-not-found',
})
export class App404PageNotFound {

    title = 'Page not found';

    async componentWillLoad() {
        if(debug) {
            console.log('> App404PageNotFound.componentWillLoad');
        }
        document.title = this.title;
    }

    render() {
        return [
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-buttons slot="start">
                        <ion-back-button defaultHref="/" />
                    </ion-buttons>
                    <ion-title>Page not found</ion-title>
                </ion-toolbar>
            </ion-header>,

            <ion-content class="ion-padding">
                
                <h1>{this.title}</h1>

            </ion-content>

        ];
    }
}