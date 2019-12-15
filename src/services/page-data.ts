import { EnvironmentConfigService } from '../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

class PageDataService {

    data: any;

    constructor() {
        if (debug) {
            console.log('> PageDataService.constructor')
        }
    }

    async load() {
        if (debug) {
            console.log('> PageDataService.load');
        }
        
        if (this.data) {
            if (debug) {
                console.log('< PageDataService.load < returning cached data: \n %o', this.data);
            }
            return this.data;
        } else {
            const rsp = await fetch('/assets/data/page-data.json');
            const json = await rsp.json();
            let data = this.processData(json);
            if (debug) {
                console.log('< PageDataService.load < returning newly loaded data: \n %o', this.data);
            }
            return data;
        }
    }

    processData(data: any) {

        if (debug) {
            console.log('> PageDataService.processData');
        }

        this.data = data;

        /*
        // For each content item...
        this.data.content.forEach((item: any) => {
            // If it has tracks (topics)...
            if (item.tracks) {
                // For each topic that it has...
                item.tracks.forEach((track: any) => {
                    // If topic is not already in data.tracks array, put it there...
                    if (this.data.tracks.indexOf(track) < 0) {
                        this.data.tracks.push(track);
                    }
                });
            }
        });
        */

        return this.data;
    }

}
// Singleton. See: https://www.joshmorony.com/using-services-providers-to-share-data-in-a-stencil-js-application/
export const PageData = new PageDataService();
