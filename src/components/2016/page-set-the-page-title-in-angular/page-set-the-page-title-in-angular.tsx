import { Component, h } from '@stencil/core';

import Prism from "prismjs"
import 'prismjs/components/prism-typescript.min';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-set-the-page-title-in-angular',
})
export class PageSetThePageTitleInAngular {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageSetThePageTitleInAngular.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + EnvironmentConfigService.getInstance().get('siteName');
    }

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

                <app-entry-meta header={this.header} />

                <p>Angular provides a Title service that you can use to set the title of a page. This is good, of course, for SEO. Here’s how to use it.</p>

                <pre><code class="language-ts">{`import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
 
@Component({
    selector: 'my-app', 
    viewProviders: [Title], 
    template: \`< h1 > MyApp</h1>\`
                })
export class MyAppComponent {
                        constructor(private titleService: Title) {}


                    ngOnInit() {
                        this.setTitle('My Web Page Title');
                }
            
            
    public setTitle( newTitle: string) {
                        this.titleService.setTitle(newTitle);
                }
}`}</code></pre>

                <p>The service automatically creates the title&nbsp;element in the head if needed and also sets the value. &nbsp;The service also has a getter method to get the title.</p>

            </ion-content >

        ];
    }
}