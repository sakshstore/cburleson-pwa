import { Component, h } from '@stencil/core';
import Prism from "prismjs"
import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

const CODE_1 = `<tr *ngFor="#item of data">
     <td><a href="#">{{ item.invoiceNo }}</a></td>
     <td>{{ item.invoiceDate }}</td>
     <td>{{ item.invoiceStatus }}</td>
     <td class="right aligned">{{ item.invoiceTotal | currency:'USD':true:'1.2-2' }}</td>
</tr>`;

@Component({
    tag: 'page-format-currency-in-angular',
})
export class PageFormatCurrencyInAngular {

    // All data from BlogService
    //data: any;

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);
        if (debug) {
            console.log('-- PageFormatCurrencyInAngular.componentDidLoad > header by id: %o', BlogData.getPostHeaderById(id));
        }
        // set internalk property for use inside the page content H1

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

                <h1>{this.header.title}</h1>

                <p class="entry-meta">
                    Posted on <time>{new Date(this.header.datePublished).toDateString()}</time> (last modified <time>{new Date(this.header.dateModified).toDateString()}</time>)
                            </p>

                <p>In Angular, to format a currency, use the currency pipe on a number as shown here.</p>
                <pre><code class="language-html">{CODE_1}</code></pre>
                <ul>
                    <li>The first parameter, <code>'USD'</code>, of the pipe is an ISO currency code (e.g. ‘<code>USD</code>’,’<code>EUR</code>’, etc.)</li>
                    <li>The second parameter, <code>true</code>, is an optional boolean to specify whether or not you want to render the currency symbol (‘<code>$</code>’, ‘<code>€</code>’); default is false</li>
                    <li>The third parameter,<code>'1.2-2'</code>, also optional, specifies how to format the number, using the same formatting rules as apply to the <em>number</em> pipe.</li>
                </ul>
                <p>Note, however, that the currency pipe relies on the Internationalization API, which is not available in all browsers. See <a class="external-link" href="http://caniuse.com/#search=intl" rel="nofollow">current browser support for Internationalization API</a>.</p>
                <p>Here’s a visual example of what the example shown above renders when used on a decimal number:</p>
                <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2016/04/angularFormatCurrencyExample.jpg" alt="" class="img-fluid" /></p>

            </ion-content>
        ];
    }
}
