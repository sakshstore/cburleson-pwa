import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import Prism from "prismjs"

import 'prismjs/components/prism-javascript.min.js';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-javascript-ternary-operator-shortcut-to-the-if-statement',
})
export class PageJavaScriptTernary {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageJavaScriptTernary.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substring( document.location.pathname.lastIndexOf('/') + 1 );
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + SITENAME;
        if(this.header.teaser) {
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


                            <p>The conditional (ternary) operator is the only JavaScript operator that takes three operands and it is frequently used as a shortcut for the if statement.</p>

                            <pre><code class="language-js">{`// If isMember (first argument) evaluates to true, return "$2:00" (first expression),
// else return "$10.00" (second expression)
function getFee(isMember) {
  return (isMember ? "$2.00" : "$10.00");
}
 
 
// Another example
// var foo = (a === b) ? 1 : 2;
var foo = (a === b)
  ? 1
  : 2;`}</code></pre>


                            <p>See also: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator" rel="nofollow">Conditional (ternary) Operator</a>, MDN web docs</p>

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