import { Component, h } from '@stencil/core';

import { EnvironmentConfigService } from '../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'app-404-page-not-found',
    styleUrl: 'app-404-page-not-found.css'
})
export class App404PageNotFound {

    title = 'Page not found';
    pathname: string;

    async componentWillLoad() {
        if(debug) {
            console.log('> App404PageNotFound.componentWillLoad');
        }
        
        this.pathname = window.location.pathname;

        document.title = this.title + ' : ' + this.pathname;
    }


    render() {
        return [
            <ion-header>
                <ion-toolbar color="danger">
                    <ion-title >PAGE NOT FOUND</ion-title>
                </ion-toolbar>
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