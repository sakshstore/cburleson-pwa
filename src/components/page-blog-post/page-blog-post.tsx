import { Component, Prop, h } from '@stencil/core';
import { BlogData } from '../../services/blog-data';

import { EnvironmentConfigService } from '../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-blog-post'
})
export class PageBlogPost {

    @Prop() name: string;

    title: string;

    data: any;
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageBlogPost.componentWillLoad > Route param property "name": %s', this.name);
        }
        this.data = await BlogData.getPostById(this.name);
        this.header = await BlogData.getPostHeaderById(this.name);
        if (debug) {
            console.log('PageBlogPost.componentWillLoad > this.header: %o', this.header);
        }
        document.title = this.header.title + ' | ' + EnvironmentConfigService.getInstance().get('siteName');
    }

    render() {

        let contentBody = '';
        this.data.body.map((line) =>
            contentBody = contentBody + line
        );

        return [
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-buttons slot="start">
                        <ion-back-button defaultHref="/blog" />
                    </ion-buttons>
                    <ion-title>Blog</ion-title>
                </ion-toolbar>
            </ion-header>,

            <ion-content class="ion-padding">
                <h1>{this.header.title}</h1>

                <p class="entry-meta">
                    Posted on <time>{new Date(this.header.datePublished).toDateString()}</time> (last modified <time>{new Date(this.header.dateModified).toDateString()}</time>)
               </p>

                <div innerHTML={contentBody}></div>
            </ion-content>,
        ];
    }
}