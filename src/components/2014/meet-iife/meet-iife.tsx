import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
    tag: 'page-meet-iife-the-quintessential-javascript-closure',
})
export class PageMeetIife {

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

                            <p>If you want to call yourself a JavaScript bad-ass, then there is at least one little code pattern you should know by heart: the Immediately Invoked Function Expression (IIFE). This pattern defines a function that is executed immediately and it looks like this:</p>

                            <deckgo-highlight-code language="javascript"><code slot="code">{`(function () {
    alert("Hello world, I'm an IIFE!");
}());`}</code></deckgo-highlight-code>

                            <p>This is an important pattern primarily because it provides a closure for initialization code, which allows you to keep temporary variables out of the global scope. That is to say, it encloses code in a function that acts as a scope wrapper or sandbox and that is executed immediately after it’s created. I find it easier to remember this pattern by breaking it down into the following steps…</p>

                            <h3>JavaScript IIFE in 4 simple steps</h3>

                            <ol>
                                <li>Define a function using a function expression.<br />
                                <deckgo-highlight-code language="javascript"><code slot="code">{`function() {};`}</code></deckgo-highlight-code></li>
                                <li>Add a set of parentheses at the end, which causes the function to be executed immediately.<br />
                                <deckgo-highlight-code language="javascript"><code slot="code">{`function() {}();`}</code></deckgo-highlight-code></li>
                                <li>Wrap the whole function in parentheses.<em>This is required because we’re not assigning the function to a variable.</em><br />
                                <deckgo-highlight-code language="javascript"><code slot="code">{`(function() {}());`}</code></deckgo-highlight-code></li>
                                <li>Write the function body.<em>…in the usual spot between the curly braces.</em><br />
                                <deckgo-highlight-code language="javascript"><code slot="code">{`(function () {
    alert("Hello world, I'm an IIFE!");
}());`}</code></deckgo-highlight-code></li>
                            </ol>

                            <p>You can use this pattern any time you need to create a scope sandbox. You can also use it instead of jQuery’s <code>$( document ).ready()</code> when you’re actually able to follow the best-practice of loading render-blocking scripts last. You will almost certainly use this pattern when creating your own reusable JavaScript library or framework. When using an IIFE in your own library, you will likely use a more complex form – passing in parameters. In an upcoming post, I’ll show you how to do that, so stay tuned.</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}