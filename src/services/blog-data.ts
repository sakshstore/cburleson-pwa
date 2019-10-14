class BlogDataService {

    data: any;

    constructor() {
        console.log('> BlogDataService > constructor()')
    }

    async load() {
        console.log('> BlogDataService > load()')
        if (this.data) {
            return this.data;
        } else {
            const rsp = await fetch('/assets/data/data.json');
            const json = await rsp.json();
            return this.processData(json);
        }
    }

    processData(data: any) {
        console.log('> BlogDataService > processData()')
        // just some good 'ol JS fun with objects and arrays
        // build up the data by linking speakers to sessions
        this.data = data;
        console.log('- BlogDataService < processData() returning: \n %o',this.data);
        return this.data;
    }

    async getTopics() {
        console.log('> BlogDataService > getTopics()')
        const data = await this.load();
        return data.topics.sort();
    }

}

export const BlogData = new BlogDataService();
