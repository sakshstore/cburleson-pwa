import { Component, h } from '@stencil/core';

import Prism from "prismjs"
import 'prismjs/components/prism-bash.min.js';

import { BlogData } from '../../../services/blog-data';


import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-install-java-plugin-for-64bit-firefox-on-centos-6-4',
})
export class PageInstallJavaPluginFor64bitFirefoxOnCentos64 {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageInstallJavaPluginFor64bitFirefoxOnCentos64.componentWillLoad');
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

                <ion-grid>
                    <ion-row>
                        <ion-col size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="7">
                            <h1>{this.header.title}</h1>
                            <app-entry-meta header={this.header} />

                            <p><img class="alignleft" width="150" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/logo-centos.svg" alt="CentOS Icon" /></p>

                            <p>Today, I had to install the Java plugin for 64bit Firefox on CentOS 6.4. The procedure wasn’t too bad, but it wasn’t exactly straight-forward either. So, I’m recording what worked for when I have to do it again. Hopefully, you might find it useful too. This is not a descriptive tutorial; it’s just quick notes, so you may have to do a little reading between the lines.</p>

                            <p>Java must be installed on the system first. This procedure only works with the version you download from Oracle; it will not work with the OpenJDK version of Java you’ll have when using the ‘yum install java’ command.</p>

                            <p>Download Linux x64 RPM from Oracle's <a href="http://www.java.com/en/download/manual.jsp" rel="nofollow">Java Downloads for All Operating Systems</a>&nbsp;page.</p>

                            <p>Close Firefox.</p>

                            <p>Change to root user and enter password.</p>

                            <pre><code class="language-bash">{`su`}</code></pre>

                            <p>Change directory to /usr/java. If it isn’t created, create it.</p>

                            <pre><code class="language-bash">{`mkdir /usr/java
cd /usr/java`}</code></pre>

                            <p>Execute rpm on the Java RPM you just downloaded…</p>

                            <pre><code class="language-bash">{`rpm -ivh /home/basejump/Downloads/jre-7u21-linux-x64.rpm`}</code></pre>

                            <p>Validate with:</p>

                            <pre><code class="language-bash">{`java -version`}</code></pre>

                            <p>Delete the original RPM; you don’t need that anymore.</p>

                            <pre><code class="language-bash">{`rm -rf /home/basejump/Downloads/jre-7u21-linux-x64.rpm`}</code></pre>

                            <p>From the /usr/java directory, Find the Firefox plugin (which gets installed with java):</p>

                            <pre><code class="language-bash">{`find . | grep libnpjp`}</code></pre>

                            <p>For me, that returned:</p>

                            <pre><code class="language-bash">{`/usr/java/jre1.7.0_21/lib/amd64/libnpjp2.so`}</code></pre>

                            <p>Change to directory for Firefox plugins:</p>

                            <pre><code class="language-bash">{`cd /usr/lib64/mozilla/plugins`}</code></pre>

                            <p>Be careful. There is also a <code>/usr/lib/mozilla/plugins</code> directory. Be sure you’re in <code>lib64</code>!</p>

                            <p>Create symbolic link to the plugin:</p>

                            <pre><code class="language-bash">{`ln -fs /usr/java/jre1.7.0_21/lib/amd64/libnpjp2.so libnpjp2.so`}</code></pre>

                            <p>Exit the root user:</p>

                            <pre><code class="language-bash">{`exit`}</code></pre>

                            <p>Start Firefox and validate by going to Tools &gt; Addons &gt; Plugins. You should now see Java Plug-in 1.x.x enabled.</p>


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