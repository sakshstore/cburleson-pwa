import { EnvironmentConfigService } from '../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

class BlogDataService {

    data: any;
    postId: string;

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
            if (debug) {
                console.log('< BlogDataService.load < returning cached data: \n %o', this.data);
            }
            return this.data;
        } else {
            const rsp = await fetch('/assets/data/site-data.json');
            const json = await rsp.json();
            let data = this.processData(json);
            if (debug) {
                console.log('< BlogDataService.load < returning newly loaded data: \n %o', this.data);
            }
            return data;
        }
    }

    processData(data: any) {

        if (debug) {
            console.log('> BlogDataService.processData');
        }

        this.data = data;
        this.data.tracks = [];

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

        return this.data;
    }


    async getContent(excludeTracks: any[] = []) {

        if (debug) {
            console.log('> BlogDataService.getContent');
        }

        const data = await this.load();

        data.content.forEach((item: any) => {
            this.filterContent(item, excludeTracks);
        });

        return data;

    }

    filterContent(item: any, excludeTracks: any[]) {
        // if any of the sessions tracks are not in the
        // exclude tracks then this session passes the track test
        let matchesTracks = false;
        item.tracks.forEach((trackName: string) => {
            if (excludeTracks.indexOf(trackName) === -1) {
                matchesTracks = true;
            }
        });

        // all tests must be true if it should not be hidden
        item.hide = !(matchesTracks);
    }

    async getTracks() {
        if (debug) {
            console.log('> BlogDataService.getTracks');
        }
        const data = await this.load();
        return data.tracks.sort();
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
