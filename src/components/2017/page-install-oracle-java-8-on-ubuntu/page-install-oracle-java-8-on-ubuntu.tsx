import { Component, h } from '@stencil/core';

import Prism from "prismjs"
import 'prismjs/components/prism-bash.min.js';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-install-oracle-java-8-on-ubuntu',
})
export class PageInstallOracleJava8OnUbuntu {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageInstallOracleJava8OnUbuntu.componentWillLoad');
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

                <p>How to install Oracle Java 8 on Ubuntu (in may case,&nbsp;Ubuntu 16.04 LTS)</p>

                <h2>Procedure to install Oracle Java 8 on Ubuntu</h2>

                <p>You probably want to confirm first that a version of Java is not already installed. If so, you can do that with the&nbsp;java -version command as shown below…</p>

                <pre><code class="language-bash">{`developer@ubuntu:~$ java -version
The program 'java' can be found in the following packages:
 * default-jre
 * gcj-5-jre-headless
 * openjdk-8-jre-headless
 * gcj-4.8-jre-headless
 * gcj-4.9-jre-headless
 * openjdk-9-jre-headless
Try: sudo apt install <selected package>
developer@ubuntu:~$`}</code></pre>

                <p>Change to root…</p>

                <pre><code class="language-bash">{`sudo su -
(enter password)
apt-get install software-properties-common
add-apt-repository ppa:webupd8team/java
apt-get update
apt-get install oracle-java8-installer`}</code></pre>

                <p>Check if Java is successfully installed</p>

                <pre><code class="language-bash">{`java -version
java version "1.8.0_111"
Java(TM) SE Runtime Environment (build 1.8.0_111-b14)
Java HotSpot(TM) 64-Bit Server VM (build 25.111-b14, mixed mode)`}</code></pre>

                <h2>Procedure to uninstall</h2>

                <p>If, for some reason, you want to undo this operation and uninstall Oracle Java 8 from Ubuntu, you can then execute the following:</p>

                <pre><code class="language-bash">{`sudo su -
sudo apt-get remove oracle-java8-installer`}</code></pre>

            </ion-content>

        ];
    }
}