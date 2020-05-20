import { handleFetchErrors, isLocal, SITEVERSION } from '../helpers/utils';


class BlogDataService {

    data: any;
    postId: string;

    constructor() {
        if (isLocal()) {
            console.log('> BlogDataService.constructor')
        }
    }

    async load() {
        if (isLocal()) {
            console.log('> BlogDataService.load');
        }

        if (this.data) {
            if (isLocal()) {
                console.log('< BlogDataService.load < returning cached data: \n %o', this.data);
            }
            return this.data;
        } else {
            try {
                const response = await fetch('/assets/data/site-data.json?v=' + SITEVERSION);
                const json = await response.json();
                handleFetchErrors(response);
                let data = this.processData(json);
                if (isLocal()) {
                    console.log('< BlogDataService.load < returning newly loaded data: \n %o', this.data);
                }
                return data;
            } catch (err) {
                console.log("Error fetching data: %o", err);
                return;
            }
        }
    }

    processData(data: any) {

        if (isLocal()) {
            console.log('> BlogDataService.processData');
        }

        this.data = data;
        this.data.topics = [];

        // For each content item...
        this.data.content.forEach((item: any) => {
            // If it has topics...
            if (item.topics) {
                // For each topic that it has...
                item.topics.forEach((topic: any) => {
                    // If topic is not already in data.topics array, put it there...
                    if (this.data.topics.indexOf(topic) < 0) {
                        this.data.topics.push(topic);
                    }
                });
            }
        });

        return this.data;
    }


    async getContent(excludeTopics: any[] = []) {

        if (isLocal()) {
            console.log('> BlogDataService.getContent');
        }

        const data = await this.load();

        data.content.forEach((item: any) => {
            this.filterContent(item, excludeTopics);
        });

        return data;

    }

    filterContent(item: any, excludeTopics: string[]) {

        // if any of the item's topics are not in the
        // exclude topics then this item passes the topic test
        let matchesTopics = false;
        if (item.topics) {
            item.topics.forEach((topicName: string) => {
                if (excludeTopics.indexOf(topicName) === -1) {
                    matchesTopics = true;
                }
            });

            // all tests must be true if it should not be hidden
            item.hide = !(matchesTopics);
        }
    }

    async getTopics() {
        if (isLocal()) {
            console.log('> BlogDataService.getTopics');
        }
        const data = await this.load();
        return data.topics.sort();
    }

    getPostHeaderById(slug: string) {
        if (isLocal()) {
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

    getPageHeaderById(slug: string) {
        if (isLocal()) {
            console.log('> BlogDataService.getPageHeaderById("%s")', slug);
        }

        // FIX FOR #54 - URLs that end with fwd slash load appropriate page, but do not render
        // If the given slug ends with fwd slash, strip it off so that we find the post header;
        // the router can then send by urls that either end in fwd slash, or don't. In either case, the 
        // content item will be found in the data by slug and the page will always render.
        if (slug.charAt(slug.length - 1) == '/') {
            slug = slug.substr(0, slug.length - 1);
        }

        return this.data.pages.find(item => item.id === slug);
    }

    async getPostsByTopic(topic: string) {

        if (isLocal()) {
            console.log('>> BlogDataService.getPostsByTopic("%s")', topic);
        }

        const data = await this.load();
        const result: any = [];

        data.content.forEach((item: any) => {
            if (item.topics && item.topics.includes(topic)) {
                result.push(item);
            }
        });

        if (isLocal()) {
            console.log('<< BlogDataService.getPostsByTopic() < returning: %o', result);
        }

        return result;

    }

    async getPostsByMenu(menu: string) {

        if (isLocal()) {
            console.log('>> BlogDataService.getPostsByMenu("%s")', menu);
        }

        const data = await this.load();
        const result: any = [];

        data.content.forEach((item: any) => {
            if (item.menus && item.menus.includes(menu)) {
                result.push(item);
            }
        });

        if (isLocal()) {
            console.log('<< BlogDataService.getPostsByMenu() < returning: %o', result);
        }

        return result;

    }

}
// Singleton. See: https://www.joshmorony.com/using-services-providers-to-share-data-in-a-stencil-js-application/
export const BlogData = new BlogDataService();
