import { Component, h } from '@stencil/core';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-serve-static-resources-with-spring-boot',
})
export class PageServeStaticResourcesWithSpringBoot {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageTemplatePage.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + EnvironmentConfigService.getInstance().get('siteName');
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

                <p>To automatically serve static resources with Spring Boot (e.g. when using spring-boot-starter-web), you can simply place the static resources in one of several paths that Spring Boot automatically recognizes as a static file paths.</p>
                <p>Following are paths that will are recognized as static file paths:</p>
                <ul>
                    <li><code>src/main/resources/META-INF/resources/index.html</code></li>
                    <li><code>src/main/resources/resources/index.html</code></li>
                    <li><code>src/main/resources/static/index.html</code></li>
                    <li><code>src/main/resources/public/index.html</code></li>
                </ul>
                <p>You can then access the resources at:</p>
                <p><code>http://host/index.html</code></p>
                <p>So, for example, given the following resource at the following location…</p>
                <ul>
                    <li><code>src/main/resources/static/css/bootstrap.min.css</code></li>
                </ul>
                <p>You could fetch the file with the following URL:</p>
                <p><code>http://host/css/bootstrap.min.css</code></p>

            </ion-content>

        ];
    }
}