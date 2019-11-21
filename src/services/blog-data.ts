import { EnvironmentConfigService } from '../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

class BlogDataService {

    data: any;

    constructor() {
        if (debug) {
            console.log('> BlogDataService.constructor')
        }
    }

    async load() {
        if (debug) {
            console.log('> BlogDataService.load')
        }
        if (this.data) {
            return this.data;
        } else {
            const rsp = await fetch('/assets/data/data.json');
            const json = await rsp.json();
            return this.processData(json);
        }
    }

    processData(data: any) {
        if (debug) {
            console.log('> BlogDataService.processData');
        }
        this.data = data;
        if (debug) {
            console.log('< BlogDataService < processData() returning: \n %o', this.data);
        }
        return this.data;
    }

    async getTopics() {
        if (debug) {
            console.log('> BlogDataService.getTopics');
        }
        const data = await this.load();
        return data.topics.sort();
    }

    getPostHeaderById(slug: string) {
        if (debug) {
            console.log('> BlogDataService.getPostHeaderById("%s")', slug);
        }
        return this.data.content.find(item => item.id === slug);
    }

}
// Singleton. See: https://www.joshmorony.com/using-services-providers-to-share-data-in-a-stencil-js-application/
export const BlogData = new BlogDataService();
