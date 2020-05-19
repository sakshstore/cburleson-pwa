import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
    tag: 'page-java-system-properties',
})
export class PageJavaSystemProperties {

    header: any;

    async componentWillLoad() {
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

                            <p>Following are a list of the standard system properties which can be accessed in Java code by using the System.getProperty methods. For example&#8230;</p>

                            <deckgo-highlight-code language="java"><code slot="code">{`System.getProperty("path.separator");`}</code></deckgo-highlight-code>

                            <table class="table table-bordered table-striped" role="grid">
                                <thead>
                                    <tr role="row">
                                        <th>Property Name</th>
                                        <th>Description</th>
                                        <th>Java Version</th>
                                    </tr>
                                </thead>
                                <tbody aria-live="polite" aria-relevant="all">
                                    <tr role="row">
                                        <td>file.encoding</td>
                                        <td>The character encoding for the default locale</td>
                                        <td>1.1</td>
                                    </tr>
                                    <tr role="row">
                                        <td>file.encoding.pkg</td>
                                        <td>The package that contains the converters that handle converting between local encodings and Unicode</td>
                                        <td>1.1</td>
                                    </tr>
                                    <tr role="row">
                                        <td>file.separator</td>
                                        <td>The platform-dependent file separator (e.g., &#8220;/&#8221; on UNIX, &#8220;\&#8221; for Windows)</td>
                                        <td>1.0</td>
                                    </tr>
                                    <tr role="row">
                                        <td>java.class.path</td>
                                        <td>The value of the CLASSPATH environment variable</td>
                                        <td>1.0</td>
                                    </tr>
                                    <tr role="row">
                                        <td>java.class.version</td>
                                        <td>The version of the Java API</td>
                                        <td>1.0</td>
                                    </tr>
                                    <tr role="row">
                                        <td>java.compiler</td>
                                        <td>The just-in-time compiler to use, if any. The java interpreter provided with the JDK initializes this property from the environment variable JAVA_COMPILER.</td>
                                        <td>1.0</td>
                                    </tr>
                                    <tr role="row">
                                        <td>java.home</td>
                                        <td>The directory in which Java is installed</td>
                                        <td>1.0</td>
                                    </tr>
                                    <tr role="row">
                                        <td>java.io.tmpdir</td>
                                        <td>The directory in which java should create temporary files</td>
                                        <td>1.2</td>
                                    </tr>
                                    <tr role="row">
                                        <td>java.version</td>
                                        <td>The version of the Java interpreter</td>
                                        <td>1.0</td>
                                    </tr>
                                    <tr role="row">
                                        <td>java.vendor</td>
                                        <td>A vendor-specific string</td>
                                        <td>1.0</td>
                                    </tr>
                                    <tr role="row">
                                        <td>java.vendor.url</td>
                                        <td>A vendor URL</td>
                                        <td>1.0</td>
                                    </tr>
                                    <tr role="row">
                                        <td>line.separator</td>
                                        <td>The platform-dependent line separator (e.g., &#8220;\n&#8221; on UNIX, &#8220;\r\n&#8221; for Windows)</td>
                                        <td>1.0</td>
                                    </tr>
                                    <tr role="row">
                                        <td>os.name</td>
                                        <td>The name of the operating system</td>
                                        <td>1.0</td>
                                    </tr>
                                    <tr role="row">
                                        <td>os.arch</td>
                                        <td>The system architecture</td>
                                        <td>1.0</td>
                                    </tr>
                                    <tr role="row">
                                        <td>os.version</td>
                                        <td>The operating system version</td>
                                        <td>1.0</td>
                                    </tr>
                                    <tr role="row">
                                        <td>path.separator</td>
                                        <td>The platform-dependent path separator (e.g., &#8220;:&#8221; on UNIX, &#8220;,&#8221; for Windows)</td>
                                        <td>1.0</td>
                                    </tr>
                                    <tr role="row">
                                        <td>user.dir</td>
                                        <td>The current working directory when the properties were initialized</td>
                                        <td>1.0</td>
                                    </tr>
                                    <tr role="row">
                                        <td>user.home</td>
                                        <td>The home directory of the current user</td>
                                        <td>1.0</td>
                                    </tr>
                                    <tr role="row">
                                        <td>user.language</td>
                                        <td>The two-letter language code of the default locale</td>
                                        <td>1.1</td>
                                    </tr>
                                    <tr role="row">
                                        <td>user.name</td>
                                        <td>The username of the current user</td>
                                        <td>1.0</td>
                                    </tr>
                                    <tr role="row">
                                        <td>user.region</td>
                                        <td>The two-letter country code of the default locale</td>
                                        <td>1.1</td>
                                    </tr>
                                    <tr role="row">
                                        <td>user.timezone</td>
                                        <td>The default time zone</td>
                                        <td>1.1</td>
                                    </tr>
                                </tbody>
                            </table>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}