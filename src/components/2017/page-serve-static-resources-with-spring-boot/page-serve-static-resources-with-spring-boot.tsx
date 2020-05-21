import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-serve-static-resources-with-spring-boot',
})
export class PageServeStaticResourcesWithSpringBoot {

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


                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">

                            

                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}