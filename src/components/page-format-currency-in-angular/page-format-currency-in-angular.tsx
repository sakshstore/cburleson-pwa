import { Component, h } from '@stencil/core';
import Prism from "prismjs"

const code = `<tr *ngFor="#item of data">
     <td><a href="#">{{ item.invoiceNo }}</a></td>
     <td>{{ item.invoiceDate }}</td>
     <td>{{ item.invoiceStatus }}</td>
     <td class="right aligned">{{ item.invoiceTotal | currency:'USD':true:'1.2-2' }}</td>
</tr>`;

@Component({
    tag: 'page-format-currency-in-angular',
})
export class PageFormatCurrencyInAngular {

    title = 'Format Currency in Angular';

    componentWillLoad() {
        document.title = this.title;
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
                <ion-grid fixed>
                    <ion-row>
                        <ion-col size-xs="12" size-sm="12" size-md="12" size-lg="12" size-xl="12">
                            <h1>{this.title}</h1>
                            <p>In Angular, to format a currency, use the currency pipe on a number as shown here.</p>
                            <pre><code class="language-html">{code}</code></pre>
                            <ul>
                                <li>The first parameter, <code>'USD'</code>, of the pipe is an ISO currency code (e.g. ‘<code>USD</code>’,’<code>EUR</code>’, etc.)</li>
                                <li>The second parameter, <code>true</code>, is an optional boolean to specify whether or not you want to render the currency symbol (‘<code>$</code>’, ‘<code>€</code>’); default is false</li>
                                <li>The third parameter,<code>'1.2-2'</code>, also optional, specifies how to format the number, using the same formatting rules as apply to the <em>number</em> pipe.</li>
                            </ul>
                            <p>Note, however, that the currency pipe relies on the Internationalization API, which is not available in all browsers. See <a class="external-link" href="http://caniuse.com/#search=intl" rel="nofollow">current browser support for Internationalization API</a>.</p>
                            <p>Here’s a visual example of what the example shown above renders when used on a decimal number:</p>
                            <p><img class="size-full wp-image-73 alignnone" src="https://codyburleson.com/wp-content/uploads/2018/07/angularFormatCurrencyExample.jpg" alt="" width="395" height="577" /></p>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-content>
        ];
    }
}

// Call the Prism.js API here
setTimeout(() => Prism.highlightAll(), 0)