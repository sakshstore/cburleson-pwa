import { Component, h } from '@stencil/core';
import Prism from "prismjs"
import { BlogData } from '../../../services/blog-data';


import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

const CODE_1 = `<tr *ngFor="#item of data; #ndx = index">
    <td>{{ndx+1}}</td>
    <td>{{item.po}}</td>
    <td>{{item.serviceType}}</td>
    <td>{{item.validStart}}</td>
    ...
</tr>`;

@Component({
    tag: 'page-index-of-item-within-angular-ngfor-loop',
})
export class PageIndexOfItemWithinAngularNgforLoop {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if(debug) {
            console.log('> PageIndexOfItemWithinAngularNgforLoop.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + EnvironmentConfigService.getInstance().get('siteName');
    }

    // Use this if using source code blocks to be formatted by prism.js...
    componentDidLoad() {
        setTimeout(() => Prism.highlightAll(), 0)
    }

    render() {
        return [
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-buttons slot="start">
                        <ion-back-button defaultHref="/" />
                    </ion-buttons>
                    <ion-title>Blog</ion-title>
                </ion-toolbar>
            </ion-header>,

            <ion-content class="ion-padding">
                
                <h1>{this.header.title}</h1>
                
                <p class="entry-meta">Posted on <time>{new Date(this.header.datePublished).toDateString()}</time> (last modified <time>{new Date(this.header.dateModified).toDateString()}</time>)</p>
            
                <p>Here's how to get and print the index (or the iteration number) of the current item in an ngFor loop.</p>
                
                <p>In Angular, to get the index (or the iteration number) of the current item, add a second part to the ngFor expression (after a semi-colon) as shown here.</p>

                <pre><code class="language-html">{CODE_1}</code></pre>

                <p>Notice that I’m adding 1 to the output expression ( <code>ndx+1</code> ) because the index is zero-based. The data table row example shown above renders as follows:</p>
                
                <p><img  src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2016/04/ngForLoopIndexExample.jpg" alt="" /></p>

            </ion-content>

        ];
    }
}