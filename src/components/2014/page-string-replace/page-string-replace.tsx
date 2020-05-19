import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
    tag: 'page-string-replace-helper-for-dust-js',
})
export class PageStringReplace {

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

                            <p>Recently, I’ve been learning about the <a href="http://linkedin.github.io/dustjs/" rel="nofollow">LinkedIn fork of Dust</a> – a client-side templating solution. Dust allows you to create helpers, which are functions that can be called from within a rendering template. They help separate presentation from logic, which is always a good practice.</p>

                            <p>Today we created a String Replace helper, which seems like it might be pretty useful for others, so I thought I’d share it.</p>

                            <p>Following is an example of the helper in use. In this example, the <em>replace</em> helper will replace all instances of a period character with a hyphen in the given <em>message</em> string, and then it will write the trimmed result.</p>

                            <p>Usage example:</p>

                            <deckgo-highlight-code language="javascript"><code slot="code">{`{@replace str="{message}" search="." replace="-" trim="true" /}`}</code></deckgo-highlight-code>

                            <p>Here is the Replace Helper for Dust (<a href="https://gist.github.com/codyburleson/eb49a3f69de76e3d752a" rel="nofollow">also on GitHub Gist</a>)</p>

                            <deckgo-highlight-code language="javascript"><code slot="code">{`(function (dust) {
 
 /**
  * Polyfill to create String.trim() if it's not natively available
  */
 if (!String.prototype.trim) {
     (function(){
         // Make sure we trim BOM and NBSP
         var rtrim = /^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g;
         String.prototype.trim = function () {
             return this.replace(rtrim, "");
         }
     })();
 }

 /**
  * Processes the given string to escape special meta characters used within
  * Regular Expressions. This is used by the replace helper.
  */
 function escapeRegExp(string) {
     return string.replace(/([.*+?^=!:$\{\}()|\\[\\]\\/\\\\])/g, "\\\\$1");
 }

 /**
  * Performs a global search and replace within a string.
  * In the following example, we replace all periods in the
  * message string with dashes and we trim the result.
  *
  * {@replace str="{message}" search="." replace="-" trim="true" /}
  *
  * str - the input string within which the search and replace will be performed
  * search - the character or sequence to search
  * replace - the character or sequence used to replace
  * trim - when 'true', will trim the string before returning result.
  *
  */
 dust.helpers.replace = function (chunk, ctx, bodies, params) {

     var str = dust.helpers.tap(params.str, chunk, ctx);
     var search = dust.helpers.tap(params.search, chunk, ctx);
     var replace = dust.helpers.tap(params.replace, chunk, ctx);
     var trim = dust.helpers.tap(params.trim, chunk, ctx);

     if(trim && trim == 'true') {
         str = str.trim();
     }

     var result = str.replace(new RegExp(escapeRegExp(search), 'g'), replace);

     return chunk.write( result );

 }

})(typeof exports !== 'undefined' ? module.exports = require('dustjs-linkedin') : dust);`}</code></deckgo-highlight-code>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}