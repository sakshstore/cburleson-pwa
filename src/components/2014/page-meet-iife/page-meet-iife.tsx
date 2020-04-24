import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import Prism from "prismjs"
import 'prismjs/components/prism-javascript.min.js';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-meet-iife-the-quintessential-javascript-closure',
})
export class PageMeetIife {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageMeetIife.componentWillLoad');
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

                            <p>If you want to call yourself a JavaScript bad-ass, then there is at least one little code pattern you should know by heart: the Immediately Invoked Function Expression (IIFE). This pattern defines a function that is executed immediately and it looks like this:</p>

                            <pre><code class="language-javascript">{`(function () {
    alert("Hello world, I'm an IIFE!");
}());`}</code></pre>

                            <p>This is an important pattern primarily because it provides a closure for initialization code, which allows you to keep temporary variables out of the global scope. That is to say, it encloses code in a function that acts as a scope wrapper or sandbox and that is executed immediately after it’s created. I find it easier to remember this pattern by breaking it down into the following steps…</p>

                            <h3>JavaScript IIFE in 4 simple steps</h3>

                            <ol>
                                <li>Define a function using a function expression.<br />
                                    <pre><code class="language-javascript">{`function() {};`}</code></pre></li>
                                <li>Add a set of parentheses at the end, which causes the function to be executed immediately.<br />
                                    <pre><code class="language-javascript">{`function() {}();`}</code></pre></li>
                                <li>Wrap the whole function in parentheses.<em>This is required because we’re not assigning the function to a variable.</em><br />
                                    <pre><code class="language-javascript">{`(function() {}());`}</code></pre></li>
                                <li>Write the function body.<em>…in the usual spot between the curly braces.</em><br />
                                    <pre><code class="language-javascript">{`(function () {
    alert("Hello world, I'm an IIFE!");
}());`}</code></pre></li>
                            </ol>

                            <p>You can use this pattern any time you need to create a scope sandbox. You can also use it instead of jQuery’s <code>$( document ).ready()</code> when you’re actually able to follow the best-practice of loading render-blocking scripts last. You will almost certainly use this pattern when creating your own reusable JavaScript library or framework. When using an IIFE in your own library, you will likely use a more complex form – passing in parameters. In an upcoming post, I’ll show you how to do that, so stay tuned.</p>

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