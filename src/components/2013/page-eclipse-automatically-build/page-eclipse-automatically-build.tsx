import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-automatically-build-and-include-one-eclipse-project-into-another',
})
export class PageEclipseAutomaticallyBuild {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageEclipseAutomaticallyBuild.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substring( document.location.pathname.lastIndexOf('/') + 1 );
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + SITENAME;
        if (this.header.teaser) {
            document.getElementById("meta-desc").setAttribute("content", this.header.teaser);
        }
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

                            <p>I just learned that you can automatically build and consume one project into another as a Java jar file in your Eclipse or Rational IDE. I am such a lazy dunce! I can’t believe how long I’ve been using Eclipse without knowing this.</p>
                            <p>This will save you from having to right-click and export every time you change code in the project that’s consumed. Or it can save you from having to write a build script just for this purpose, which I am now embarrassed to say I’ve done (more than once).</p>
                            <ul>
                                <li>In your Eclipse or Rational IDE, right-click on the destination project and select Properties.</li>
                                <li>Select Java Build Path and then the Projects tab.</li>
                                <li>Click Add… to add the dependency project that you want to consume as a jar file.</li>
                                <li>Next, in the left-hand side of the Properties dialog, switch from the Java Build Path to the item that says Deployment Assembly.</li>
                                <li>Click Add… and select the project to be consumed as shown below<br /><br />
                                    <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2013/04/EclipseRadDeploymentAssembly.png" alt="" /><br /><br /></li>
                                <li>Finally, click Apply and OK.</li>
                            </ul>
                            <p>Now, when I build my web app project, my <code>base22-commons</code> library (a separate project) is now automatically built and included in <code>WEB-INF/lib</code> as <code>base22-commons.jar</code>.</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">

                            <gls-adsense-ad />

                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}