import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
    tag: 'page-install-java-plugin-for-64bit-firefox-on-centos-6-4',
})
export class PageInstallJavaPluginFor64bitFirefoxOnCentos64 {

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

                            <p><img class="alignleft" width="150" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/logo-centos.svg" alt="CentOS Icon" /></p>

                            <p>Today, I had to install the Java plugin for 64bit Firefox on CentOS 6.4. The procedure wasn’t too bad, but it wasn’t exactly straight-forward either. So, I’m recording what worked for when I have to do it again. Hopefully, you might find it useful too. This is not a descriptive tutorial; it’s just quick notes, so you may have to do a little reading between the lines.</p>

                            <p>Java must be installed on the system first. This procedure only works with the version you download from Oracle; it will not work with the OpenJDK version of Java you’ll have when using the ‘yum install java’ command.</p>

                            <p>Download Linux x64 RPM from Oracle's <a href="http://www.java.com/en/download/manual.jsp" rel="nofollow">Java Downloads for All Operating Systems</a>&nbsp;page.</p>

                            <p>Close Firefox.</p>

                            <p>Change to root user and enter password.</p>

                            <deckgo-highlight-code language="bash"><code slot="code">{`su`}</code></deckgo-highlight-code>

                            <p>Change directory to /usr/java. If it isn’t created, create it.</p>

                            <deckgo-highlight-code language="bash"><code slot="code">{`mkdir /usr/java
cd /usr/java`}</code></deckgo-highlight-code>

                            <p>Execute rpm on the Java RPM you just downloaded…</p>

                            <deckgo-highlight-code language="bash"><code slot="code">{`rpm -ivh /home/basejump/Downloads/jre-7u21-linux-x64.rpm`}</code></deckgo-highlight-code>

                            <p>Validate with:</p>

                            <deckgo-highlight-code language="bash"><code slot="code">{`java -version`}</code></deckgo-highlight-code>

                            <p>Delete the original RPM; you don’t need that anymore.</p>

                            <deckgo-highlight-code language="bash"><code slot="code">{`rm -rf /home/basejump/Downloads/jre-7u21-linux-x64.rpm`}</code></deckgo-highlight-code>

                            <p>From the /usr/java directory, Find the Firefox plugin (which gets installed with java):</p>

                            <deckgo-highlight-code language="bash"><code slot="code">{`find . | grep libnpjp`}</code></deckgo-highlight-code>

                            <p>For me, that returned:</p>

                            <deckgo-highlight-code language="bash"><code slot="code">{`/usr/java/jre1.7.0_21/lib/amd64/libnpjp2.so`}</code></deckgo-highlight-code>

                            <p>Change to directory for Firefox plugins:</p>

                            <deckgo-highlight-code language="bash"><code slot="code">{`cd /usr/lib64/mozilla/plugins`}</code></deckgo-highlight-code>

                            <p>Be careful. There is also a <code>/usr/lib/mozilla/plugins</code> directory. Be sure you’re in <code>lib64</code>!</p>

                            <p>Create symbolic link to the plugin:</p>

                            <deckgo-highlight-code language="bash"><code slot="code">{`ln -fs /usr/java/jre1.7.0_21/lib/amd64/libnpjp2.so libnpjp2.so`}</code></deckgo-highlight-code>

                            <p>Exit the root user:</p>

                            <deckgo-highlight-code language="bash"><code slot="code">{`exit`}</code></deckgo-highlight-code>

                            <p>Start Firefox and validate by going to Tools &gt; Addons &gt; Plugins. You should now see Java Plug-in 1.x.x enabled.</p>


                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>



        ];
    }
}