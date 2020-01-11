import { isLocal } from '../helpers/utils';

/**
 * PageDataService is responsible for loading and returning data from the 
 * assets/page-data.json file. As of now, the page-data.json file exists 
 * to provide one single place to define the main, top-level pages that 
 * may also appear in the primary navigation menu and as mobile tabs. There 
 * can, therefore, exist page components that are not defined in the file 
 * (as they do no need to be if not creating a primary menu item or mobile tab.)
 */
class PageDataService {

    data: any;

    constructor() {
        if (isLocal()) {
            console.log('> PageDataService.constructor')
        }
    }

    async load() {
        if (isLocal()) {
            console.log('> PageDataService.load');
        }
        
        if (this.data) {
            if (isLocal()) {
                console.log('< PageDataService.load < returning cached data: \n %o', this.data);
            }
            return this.data;
        } else {
            const rsp = await fetch('/assets/data/page-data.json');
            const json = await rsp.json();
            let data = this.processData(json);
            if (isLocal()) {
                console.log('< PageDataService.load < returning newly loaded data: \n %o', this.data);
            }
            return data;
        }
    }

    processData(data: any) {

        if (isLocal()) {
            console.log('> PageDataService.processData');
        }

        this.data = data;

        return this.data;
    }

}
// Singleton. See: https://www.joshmorony.com/using-services-providers-to-share-data-in-a-stencil-js-application/
export const PageData = new PageDataService();
