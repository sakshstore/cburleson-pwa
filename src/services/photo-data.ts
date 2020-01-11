import { isLocal, SITEVERSION } from '../helpers/utils';

class PhotoDataService {

    data: any;

    constructor() {
        if (isLocal()) {
            console.log('> PhotoDataService.constructor');
        }
    }

    async load(name: string) {
        if (isLocal()) {
            console.log('> PhotoDataService.load(%s)', name);
        }

        if (this.data && this.data.id === name) {
            return this.data;
        } else {
            const rsp = await fetch('/assets/data/photos-' + name + '.json?v=' + SITEVERSION);
            const json = await rsp.json();
            return this.processData(json);
        }
    }

    processData(data: any) {
        if (isLocal()) {
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
