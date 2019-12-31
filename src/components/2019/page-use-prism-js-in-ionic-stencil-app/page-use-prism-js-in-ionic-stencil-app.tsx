import { Component, h } from '@stencil/core';
import Prism from "prismjs"
import 'prismjs/components/prism-typescript.min';
import { BlogData } from '../../../services/blog-data';


import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

const CODE_1 = `import { Component, h } from '@stencil/core';
import Prism from "prismjs"
const code = \`<tr *ngFor="#item of data">
<td><a href="#">{{ item.invoiceNo }}</a></td>
<td>{{ item.invoiceDate }}</td>
<td>{{ item.invoiceStatus }}</td>
<td class="right aligned">{{ item.invoiceTotal | currency:'USD':true:'1.2-2' }}</td>
</tr>\`;
@Component({
    tag: 'page-whatever',
})
export class PageWhatever {
// ...
`;
const CODE_2 = `componentDidLoad() {
    setTimeout(() => Prism.highlightAll(), 0)
}`;
const CODE_3 = `import { Component, h } from '@stencil/core';
import Prism from "prismjs"
const code = \`<tr *ngFor="#item of data">
<td><a href="#">{{ item.invoiceNo }}</a></td>
<td>{{ item.invoiceDate }}</td>
<td>{{ item.invoiceStatus }}</td>
<td class="right aligned">{{ item.invoiceTotal | currency:'USD':true:'1.2-2' }}</td>
</tr>\`;
@Component({
    tag: 'page-whatever',
})
export class PageWhatever {
    title = 'My Page Title';
    componentWillLoad() {
        document.title = this.title;
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
            <ion-content>
                  <h1>{this.title}</h1>
                  <p>Here's a code snippet formatted with prism.js...</p>
                  <pre><code class="language-html">{code}</code></pre>
            </ion-content>
        ];
    }
`;

const CODE_4 = `// Additional stuff...
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';`;


@Component({
    tag: 'page-use-prism-js-in-ionic-stencil-app',
})
export class PageUsePrismJsInIonicStencilApp {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageUsePrismJsInIonicStencilApp.componentWillLoad');
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

<p>Here is my procedure for using the <a href="https://prismjs.com/">Prism.js</a> syntax highlighter in an Ionic / Stencil app. </p>

<p>First install prism.js with the following command:</p>

<p><code>npm install --save prismjs</code></p>

<p>Add the following import statement in your global CSS file (e.g. <code>src/global/app.css</code>).</p>

<p><code>@import "~prismjs/themes/prism-okaidia.css";</code></p>

<p>Note that I am using the prism-okaidia.css theme file (a dark theme), but you can choose the css file for any theme you prefer. </p>

<p>Now, in the page component where you want to use syntax highlighting, add the following import statement:</p>

<p><code>import Prism from "prismjs"</code></p>

<p>Then, add your code snippet as a constant at the top of the file, after imports and before the class definition (constants can't be defined within the component class itself). Here's an example:</p>

<pre><code class="language-ts">{CODE_1}</code></pre>

<p>Inside the render() method, you can put the code within a pre tag as follows:</p>

<p><code>&lt;pre&gt;&lt;code class="language-html"&gt;&#123;code&#125;&lt;/pre&gt;</code></p>

<p>If you want any HTML encoded characters to be interpreted and rendered, you can alternatively do it this way:</p>

<p><code>&lt;pre&gt;&lt;code class="language-html" innerHTML=&#123;code&#125;&gt;&lt;/pre&gt;</code></p>

<p>Finally add the following method to the class:</p>

<pre><code class="language-ts">{CODE_2}</code></pre>

<p>That's it! Let's now look at the example page component all in one piece:</p>

<pre><code class="language-ts">{CODE_3}</code></pre>



<p>Another alternative to using a constant for the code snippet is to just put the code snippet inline between brackets and back-ticks, like this:</p>

<pre><code class="language-html">{`<pre><code class="language-yml">{\`version: "2"
services:
my-wpdb:
image: mariadb
ports:
- "8081:3306"
environment:
MYSQL_ROOT_PASSWORD: ChangeMeIfYouWant
my-wp:
image: wordpress
volumes:
- ./wp:/var/www/html
ports:
- "8080:80"
links:
- my-wpdb:mysql
environment:
WORDPRESS_DB_PASSWORD: ChangeMeIfYouWant\`}</code></pre>`}</code></pre>



<p>Finally, if you want to support additional plugins and languages, include them like this:</p>

<pre><code class="language-ts">{CODE_4}</code></pre>



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