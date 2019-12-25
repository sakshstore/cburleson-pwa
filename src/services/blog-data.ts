import { EnvironmentConfigService } from '../services/environment/environment-config.service';

const DEBUG: boolean = EnvironmentConfigService.getInstance().get('debug');
const SITE_VERSION: string = EnvironmentConfigService.getInstance().get('siteVersion');

class BlogDataService {

    data: any;
    postId: string;

    constructor() {
        if (DEBUG) {
            console.log('> BlogDataService.constructor')
        }
    }

    async load() {
        if (DEBUG) {
            console.log('> BlogDataService.load');
        }
        
        if (this.data) {
            if (DEBUG) {
                console.log('< BlogDataService.load < returning cached data: \n %o', this.data);
            }
            return this.data;
        } else {
            const rsp = await fetch('/assets/data/site-data.json?v=' + SITE_VERSION);
            const json = await rsp.json();
            let data = this.processData(json);
            if (DEBUG) {
                console.log('< BlogDataService.load < returning newly loaded data: \n %o', this.data);
            }
            return data;
        }
    }

    processData(data: any) {

        if (DEBUG) {
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

        if (DEBUG) {
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
        if (DEBUG) {
            console.log('> BlogDataService.getTracks');
        }
        const data = await this.load();
        return data.tracks.sort();
    }

    getPostHeaderById(slug: string) {
        if (DEBUG) {
            console.log('> BlogDataService.getPostHeaderById("%s")', slug);
        }


        // FIX FOR #54 - URLs that end with fwd slash load appropriate page, but do not render
        // If the given slug ends with fwd slash, strip it off so that we find the post header;
        // the router can then send by urls that either end in fwd slash, or don't. In either case, the 
        // content item will be found in the data by slug and the page will always render.
        if (slug.charAt(slug.length - 1) == '/') {
            slug = slug.substr(0, slug.length - 1);
        }

        return this.data.content.find(item => item.id === slug);
    }

}
// Singleton. See: https://www.joshmorony.com/using-services-providers-to-share-data-in-a-stencil-js-application/
export const BlogData = new BlogDataService();
