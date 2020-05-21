import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
    tag: 'page-javascript-ternary-operator-shortcut-to-the-if-statement',
})
export class PageJavaScriptTernary {

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


                            <p>The conditional (ternary) operator is the only JavaScript operator that takes three operands and it is frequently used as a shortcut for the if statement.</p>

                            <deckgo-highlight-code language="javascript"><code slot="code">{`// If isMember (first argument) evaluates to true, return "$2:00" (first expression),
// else return "$10.00" (second expression)
function getFee(isMember) {
  return (isMember ? "$2.00" : "$10.00");
}

// Another example
// var foo = (a === b) ? 1 : 2;
var foo = (a === b)
  ? 1
  : 2;`}</code></deckgo-highlight-code>

                            <p>See also: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator" rel="nofollow">Conditional (ternary) Operator</a>, MDN web docs</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}