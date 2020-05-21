import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
    tag: 'page-set-the-page-title-in-angular',
})
export class PageSetThePageTitleInAngular {

    header: any;

    async componentWillLoad() {
        let id = extractIdFromDocumentPath();
        this.header = BlogData.getPostHeaderById(id);
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

                <ion-grid>
                    <ion-row>
                        <ion-col size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="7">
                            <h1>{this.header.title}</h1>
                            <app-entry-meta header={this.header} />

                            <p>Angular provides a Title service that you can use to set the title of a page. This is good, of course, for SEO. Here’s how to use it.</p>

                            <deckgo-highlight-code><code slot="code">{`import { Component } from '@angular/core';
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
}`}</code></deckgo-highlight-code>

                            <p>The service automatically creates the title&nbsp;element in the head if needed and also sets the value. &nbsp;The service also has a getter method to get the title.</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>


        ];
    }
}