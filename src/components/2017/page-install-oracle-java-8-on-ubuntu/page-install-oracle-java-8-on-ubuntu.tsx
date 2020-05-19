import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, isLocal, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-install-oracle-java-8-on-ubuntu',
})
export class PageInstallOracleJava8OnUbuntu {

    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('>> PageInstallOracleJava8OnUbuntu.componentWillLoad');
        }
        
        let id = extractIdFromDocumentPath();
        this.header = BlogData.getPostHeaderById(id);

 
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

                            <h1>{this.header.title}</h1>

                            <app-entry-meta header={this.header} />

                            <p>How to install Oracle Java 8 on Ubuntu (in my case,&nbsp;Ubuntu 16.04 LTS)</p>

                            <h2>Procedure to install Oracle Java 8 on Ubuntu</h2>

                            <p>You probably want to confirm first that a version of Java is not already installed. If so, you can do that with the&nbsp;java -version command as shown below…</p>

                            <deckgo-highlight-code language="bash"><code slot="code">{`developer@ubuntu:~$ java -version
The program 'java' can be found in the following packages:
 * default-jre
 * gcj-5-jre-headless
 * openjdk-8-jre-headless
 * gcj-4.8-jre-headless
 * gcj-4.9-jre-headless
 * openjdk-9-jre-headless
Try: sudo apt install <selected package>
developer@ubuntu:~$`}</code></deckgo-highlight-code>

                            <p>Change to root…</p>

                            <deckgo-highlight-code language="bash"><code slot="code">{`sudo su -
(enter password)
apt-get install software-properties-common
add-apt-repository ppa:webupd8team/java
apt-get update
apt-get install oracle-java8-installer`}</code></deckgo-highlight-code>

                            <p>Check if Java is successfully installed</p>

                            <deckgo-highlight-code language="bash"><code slot="code">{`java -version
java version "1.8.0_111"
Java(TM) SE Runtime Environment (build 1.8.0_111-b14)
Java HotSpot(TM) 64-Bit Server VM (build 25.111-b14, mixed mode)`}</code></deckgo-highlight-code>

                            <h2>Procedure to uninstall</h2>

                            <p>If, for some reason, you want to undo this operation and uninstall Oracle Java 8 from Ubuntu, you can then execute the following:</p>

                            <deckgo-highlight-code language="bash"><code slot="code">{`sudo su -
sudo apt-get remove oracle-java8-installer`}</code></deckgo-highlight-code>


                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">

                            

                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}