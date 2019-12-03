import { EnvironmentConfigService } from '../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

class BlogDataService {

    data: any;
    postId: string;
    post: any;

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
            const rsp = await fetch('/assets/data/blog-data.json');
            const json = await rsp.json();
            return this.processData(json);
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

        if (debug) {
            console.log('< BlogDataService < processData() returning: \n %o', this.data);
        }

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

    /* Loads and returns a single blog post as JSON file to be rendered in the dynamic page-blog-post component. */
    async getPostById(slug: string) {
        if (debug) {
            console.log('> BlogDataService.getPostById("%s")', slug);
        }
        if (this.postId == slug) {
            if (debug) {
                console.log('< BlogDataService.getPostById < returning aleady loaded post: %s', slug);
            }
            return this.post;
        } else {
            const rsp = await fetch('/assets/data/' + slug + '.json');

            /* MAY LATER BE HELPFUL FOR 404 PAGE NOT FOUND
            const rsp = await fetch('/assets/data/' + slug + '.json').then(function (response) {
                if (response.status == 200) {
                    return response;
                } else if (response.status == 404) {
                    if (debug) {
                        console.error('- BlogDataService.getPostById > 404 PAGE NOT FOUND');
                    }
                    return response;
                } else {
                    if (debug) {
                        console.error('- BlogDataService.getPostById > No programming to handle response code.');
                    }
                    return response;
                }
            });
            */

            const json = await rsp.json();
            this.postId = slug;
            return this.processPost(json);
        }
    }

    processPost(post: any) {
        if (debug) {
            console.log('> BlogDataService.processPost');
        }
        this.post = post;
        // Placeholder function for future processing, but nothing done for now.
        if (debug) {
            console.log('< BlogDataService.processPost < returning post: %o', this.post);
        }
        return this.post;
    }

}
// Singleton. See: https://www.joshmorony.com/using-services-providers-to-share-data-in-a-stencil-js-application/
export const BlogData = new BlogDataService();
