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
        this.data = data;
        console.log('- BlogDataService < processData() returning: \n %o',this.data);
        return this.data;
    }

    async getTopics() {
        console.log('> BlogDataService > getTopics()')
        const data = await this.load();
        return data.topics.sort();
    }

    getPostHeaderById( slug:string ) {

        console.log('>> BlogDataService.getPostHeaderById("%s")', slug);

        return this.data.content.find(item => item.id === slug);

    }

}
// Singleton. See: https://www.joshmorony.com/using-services-providers-to-share-data-in-a-stencil-js-application/
export const BlogData = new BlogDataService();
