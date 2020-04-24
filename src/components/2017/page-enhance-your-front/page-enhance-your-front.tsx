import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import Prism from "prismjs"

// And any, but ONLY the languages you need to use with prism...

// import 'prismjs/components/prism-javascript.min.js';
// import 'prismjs/components/prism-typescript.min';
// import 'prismjs/components/prism-json.min';
// import 'prismjs/components/prism-yaml.min';
// import 'prismjs/components/prism-java.min';
// These two both for SPARQL:
// import 'prismjs/components/prism-turtle.min.js';
// import 'prismjs/components/prism-sparql.min.js';
// import 'prismjs/components/prism-bash.min.js';

import { BlogData } from '../../../services/blog-data';



@Component({
    tag: 'page-enhance-your-front-end-web-dev-workflow-with-emmet',
})
export class PageEnhanceYourFront {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageEnhanceYourFront.componentWillLoad');
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


                            <p>Did you know that Emmet&#8217;s built-in to WebStorm, IDEA, and Microsoft VS Code? Emmet takes the snippets idea to a whole new level: you can type CSS-like expressions that imply the HTML structure you want and have the IDE spit out the desired HTML.</p>

                            <h1>Try It!</h1>

                            <p>Here&#8217;s a simple example of a basic expression in the Emmet syntax. Try typing the following in an HTML page in your IDE. If your using VS Code, you simply hit ENTER or RETURN after the expression. If you&#8217;re using an IntelliJ product like WebStorm or IDEA, you have to press TAB after the expression.</p>

                            <pre><code class="language-html">{`ul>li*10`}</code></pre>

                            <p>At the end of the expression, just hit the Tab key. WebStorm will use Emmet to parse the text and spit out the intended HTML which, in this case, will be an unordered list with 5 list items (shown below):</p>

                            <pre><code class="language-html">{`<ul>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
</ul>`}</code></pre>

                            <p>For details, you can refer to&nbsp;the&nbsp;<a href="http://docs.emmet.io/" rel="nofollow">Emmet Documentation</a>, but for convenience, I&#8217;m including the most common stuff below. There&#8217;s a lot more to it though, so if you like what you see here, be sure to RTFM.</p>

                            <h1>Emmet Syntax</h1>

                            <h2>Nesting</h2>

                            <p>You can use&nbsp;<code>&gt;</code>&nbsp;operator to nest elements inside each other:</p>

                            <pre><code class="language-html">{`div>ul>li`}</code></pre>

                            <p><strong>Result:</strong></p>

                            <pre><code class="language-html">{`<div>
    <ul>
        <li></li>
    </ul>
</div>`}</code></pre>

                            <h2>Sibling</h2>

                            <p>Use&nbsp;<code>+</code>&nbsp;operator to place elements near each other, on the same level:</p>

                            <pre><code class="language-html">{`div+p+bq`}</code></pre>

                            <p><strong>Result:</strong></p>

                            <pre><code class="language-html">{`<div></div>
<p></p>
<blockquote></blockquote>`}</code></pre>

                            <h2>Multiplication</h2>

                            <p>With&nbsp;<code>*</code>&nbsp;operator you can define how many times element should be outputted:</p>

                            <pre><code class="language-html">{`ul>li*5`}</code></pre>

                            <p>Result:</p>

                            <pre><code class="language-html">{`<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>`}</code></pre>

                            <h1>Grouping</h1>

                            <p>Parenthesises are used by Emmets’ power users for grouping subtrees in complex abbreviations:</p>

                            <pre><code class="language-html">{`div>(header>ul>li*2>a)+footer>p`}</code></pre>

                            <p><strong>Result:</strong></p>

                            <pre><code class="language-html">{`<div>
    <header>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </header>
    <footer>
        <p></p>
    </footer>
</div>`}</code></pre>

                            <p>If you’re working with browser’s DOM, you may think of groups as Document Fragments: each group contains abbreviation subtree and all the following elements are inserted at the same level as the first element of group.</p>

                            <p>You can nest groups inside each other and combine them with multiplication <code>*</code> operator.</p>

                            <h2>ID and CLASS</h2>

                            <p>In CSS, you use elem#id and elem.class notation to reach the elements with specified id or class attributes. In Emmet, you can use the very same syntax to add these attributes to specified element:</p>

                            <pre><code class="language-html">{`div#header+div.page+div#footer.class1.class2.class3`}</code></pre>

                            <p><strong>Result:</strong></p>

                            <pre><code class="language-html">{`<div id="header"></div>
<div class="page"></div>
<div id="footer" class="class1 class2 class3"></div>`}</code></pre>

                            <h2>Custom attributes</h2>

                            <p>You can use&nbsp;<code>[attr]</code>&nbsp;notation (as in CSS) to add custom attributes to your element:</p>

                            <pre><code class="language-html">{`td[title="Hello world!" colspan=3]`}</code></pre>

                            <p><strong>Result:</strong></p>

                            <pre><code class="language-html">{`<td title="Hello world!" colspan="3"></td>`}</code></pre>

                            <h2>Item numbering</h2>

                            <p>With multiplication&nbsp;<code>*</code>&nbsp;operator you can repeat elements, but with&nbsp;<code>$</code>&nbsp;you can&nbsp;<em>number</em>&nbsp;them. Place&nbsp;<code>$</code>&nbsp;operator inside element’s name, attribute’s name or attribute’s value to output current number of repeated element:</p>

                            <pre><code class="language-html">{`ul>li.item$*5`}</code></pre>

                            <p><strong>Result:</strong></p>

                            <pre><code class="language-html">{`<ul>
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
</ul>`}</code></pre>

                            <p>You can use multiple&nbsp;<code>$</code>&nbsp;in a row to pad number with zeroes:</p>

                            <pre><code class="language-html">{`ul>li.item$$*5`}</code></pre>

                            <p><strong>Result:</strong></p>

                            <pre><code class="language-html">{`<ul>
    <li class="item001"></li>
    <li class="item002"></li>
    <li class="item003"></li>
    <li class="item004"></li>
    <li class="item005"></li>
</ul>`}</code></pre>

                            <h2>Text</h2>

                            <p>You can use curly braces to add text to element:</p>

                            <pre><code class="language-html">{`a{Click me}`}</code></pre>

                            <p>Result:</p>

                            <pre><code class="language-html">{`<a href="">Click me</a>`}</code></pre>

                            <h2>Greek Text</h2>

                            <p>You know &#8211; that filler text that designers use when they can&#8217;t think of real words that are relevant to a design&#8230;</p>

                            <pre><code class="language-html">{`lorem5`}</code></pre>

                            <p><strong>Result:</strong></p>

                            <pre><code class="language-html">{`Lorem ipsum dolor sit amet.`}</code></pre>

                            <h1>Holy shit example</h1>

                            <p>Here&#8217;s a crazy example to give you an idea of what you can accomplish if you get bad ass with Emmet.</p>

                            <pre><code class="language-html">{`nav#menuSystem.navMenu.isOpen>div#hotelLogo>div.navMenuIcon.logoIcon+div#arrowPointer+ul#navMenuMain>li.navMenuItem.navMenuItem$$*10>div.navMenuIcon{Item $}+a{Item $}`}</code></pre>

                            <p><strong>Result:</strong></p>

                            <pre><code class="language-html">{`<nav id="menuSystem" class="navMenu isOpen">
   <div id="hotelLogo">
      <div class="navMenuIcon logoIcon"></div>
      <div id="arrowPointer"></div>
      <ul id="navMenuMain">
         <li class="navMenuItem navMenuItem001">
            <div class="navMenuIcon">Item 1</div>
            <a>Item 1</a></li>
         <li class="navMenuItem navMenuItem002">
            <div class="navMenuIcon">Item 2</div>
            <a>Item 2</a></li>
         <li class="navMenuItem navMenuItem003">
            <div class="navMenuIcon">Item 3</div>
            <a>Item 3</a></li>
         <li class="navMenuItem navMenuItem004">
            <div class="navMenuIcon">Item 4</div>
            <a>Item 4</a></li>
         <li class="navMenuItem navMenuItem005">
            <div class="navMenuIcon">Item 5</div>
            <a>Item 5</a></li>
         <li class="navMenuItem navMenuItem006">
            <div class="navMenuIcon">Item 6</div>
            <a>Item 6</a></li>
         <li class="navMenuItem navMenuItem007">
            <div class="navMenuIcon">Item 7</div>
            <a>Item 7</a></li>
         <li class="navMenuItem navMenuItem008">
            <div class="navMenuIcon">Item 8</div>
            <a>Item 8</a></li>
         <li class="navMenuItem navMenuItem009">
            <div class="navMenuIcon">Item 9</div>
            <a>Item 9</a></li>
         <li class="navMenuItem navMenuItem010">
            <div class="navMenuIcon">Item 10</div>
            <a>Item 10</a></li>
      </ul>
   </div>
</nav>`}</code></pre>


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