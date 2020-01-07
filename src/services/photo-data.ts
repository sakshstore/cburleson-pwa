import { EnvironmentConfigService } from '../services/environment/environment-config.service';

const debug: boolean = EnvironmentConfigService.getInstance().get('debug');
const SITE_VERSION: string = EnvironmentConfigService.getInstance().get('siteVersion');

class PhotoDataService {

    data: any;

    constructor() {
        if (debug) {
            console.log('> PhotoDataService.constructor');
        }
    }

    async load(name: string) {
        if (debug) {
            console.log('> PhotoDataService.load(%s)', name);
        }

        if (this.data && this.data.id === name) {
            return this.data;
        } else {
            const rsp = await fetch('/assets/data/photos-' + name + '.json?v=' + SITE_VERSION);
            const json = await rsp.json();
            return this.processData(json);
        }
    }

    processData(data: any) {
        if (debug) {
            console.log('> PhotoDataService.processData')
        }

        // just some good 'ol JS fun with objects and arrays
        // build up the data by linking speakers to sessions
        this.data = data;
        console.log('- PhotoDataService < processData() returning: \n %o', this.data);
        return this.data;
    }

}
// Singleton. See: https://www.joshmorony.com/using-services-providers-to-share-data-in-a-stencil-js-application/
export const PhotoData = new PhotoDataService();
