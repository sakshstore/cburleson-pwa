import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-find-java-classes-or-packages-contained-in-jar-files',
})
export class PageFindJavaClassesOrPackagesContainedInJarFiles {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageFindJavaClassesOrPackagesContainedInJarFiles.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
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

                            <p>Did you know there’s a tool that can help you search through JAR files to find Java classes or packages? I’ve been using it for years and I am often surprised that so few Java developers have it in their toolbox. Of course, it’s very handy for resolving those pesky NoClassDefFoundError and ClassNotFoundExceptions, but my favorite use case is to find the location of a class and JAR file on my hard-drive so I can decompile it to understand what some vendor’s proprietary code is actually doing behind the scenes. I know vendors frown on this, but whatever; I’ve got a job to do.</p>

                            <p>The tool is called jarscan and you can <a href="http://web.archive.org/web/20120409022019/http://www.inetfeedback.com/jarscan/" rel="nofollow">read more about it or download it here</a>.</p>

                            <p>It’s just a little jar file that executes as a command-line program. On my Windows virtual machines, I put the jar file in C:\JarScanner\</p>

                            <p>If you’d like to find a Java class called “SystemProperty” somewhere in the “C:\IBM\WebSphere\PortalServer” directory. You would execute the following command:</p>

                            <p><code>java -jar C:\JarScanner\jarscan.jar -dir c:\IBM\WebSphere\PortalServer -class SystemProperty</code></p>

                            <p>That command would then search through every jar file that it can find in the PortalServer directory, including sub-directories. If it finds the specified class file, it reports the location and name of the Jar file containing the class. You can also search for packages, not just class files.</p>

                            <p>For Help, type the following command:</p>

                            <p><code>java -jar C:\JarScanner\jarscan.jar -help</code></p>

                            <p>Shout out to Geoff Yaworski for building this handy tool (there’s a PayPal donate link on his site)</p>

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