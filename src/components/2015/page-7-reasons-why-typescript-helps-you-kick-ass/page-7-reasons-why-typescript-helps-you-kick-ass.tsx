import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, isLocal, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-7-reasons-why-typescript-helps-you-kick-ass',
})
export class Page7ReasonsWhyTypescriptHelpsYouKickAss {

    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('>> Page7ReasonsWhyTypescriptHelpsYouKickAss.componentWillLoad');
        }

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

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/TypeScriptBanner.png" alt="" /></p>

                            <p>You can now count me as one of the many JavaScript developers who thinks TypeScript is kick-ass. I don’t want to say that I’m old-school, but if you measure by Internet time, I’m pretty old. I grew up shoving JavaScript into onclick attributes years before jQuery was even a thing. It also means that lately, I’ve been feeling a lot like a toddler who just got tossed in the twelve-foot end of a swimming pool and told to swim. I’ve been paddling my ass off to keep up with all the newfangled ways that front-end development is done. Seems like there’s been a whole-scale revolution darn-near overnight – what with all the Node.js, CSS preprocessors, task runners like Gulp and all. But recently, I took a deep dive into TypeScript and I gotta say – it’s a breath of fresh air. I feel like someone just threw me a floaty.</p>

                            <p>TypeScript adds to everything that JavaScript can already do while giving you a whole new set of features that can really improve the way you work. I’ll explain why in a second, but before you go crying about yet another technology to learn, let me ease your mind. You see, TypeScript is a superset of JavaScript, which means it literally sits right on top JavaScript and, as a result you can take any existing JavaScript code and shove it in a TypeScript file (a file with a .ts extension). Assuming you weren’t drunk when you wrote the code, it’ll work. Once you get the tools in place to compile TypeScript into JavaScript, you can start writing the kind of JavaScript you’re already familiar with in TypeScript files. Then, at your own leisure, you can start learning some of the benefits of TypeScript and start sweetening your code as you go.</p>

                            <p>I’ll introduce you to seven of the key benefits now so you can know why you might go with TypeScript and where it might lead you.</p>

                            <p>7 key benefits of TypeScript</p>

                            <ol>
                                <li>Types</li>
                                <li>Classes</li>
                                <li>ES6/ECMAScript® 2015 Features</li>
                                <li>Compile to ES3/ES5/ES6</li>
                                <li>Generics</li>
                                <li>Modules</li>
                                <li>Interfaces</li>
                            </ol>

                            <h2>1. Types</h2>

                            <p>One of the most significant value propositions for using TypeScript is that it offers types, which you can associate with function parameters, variables, and other aspects of your code. By this, I mean types like number, boolean, string, and array.</p>
                            <p>As you know, JavaScript is not a strongly typed language, which can be good in some cases, but bad in others. It’s bad for IDE’s for one thing. Without explicit types, developer tools don’t have the semantics they need to help you out. Tools that understand TypeScript can help you find errors in your code at compile time and they can employ techniques like intellisense to give you hints about what you can properly do. A lot of the best and most commonly used tools support TypeScript – Visual Studio, WebStorm, and Sublime Text to name just a few.</p>
                            <p>Your weakly typed code can also be error prone and difficult for other developers to use. Take the following function, which is intended to add two numbers, for example:</p>

                            <deckgo-highlight-code language="javascript"><code slot="code">{`function total(x, y) {
     alert( x + y );
}`}</code></deckgo-highlight-code>

                            <p>There’s nothing in that code that says that the two parameters given to the function should be numbers and JavaScript won’t enforce it either. If you pass a number and a string, you’d get an unintended result. The result of the following function call would not give you 3, but 12.</p>

                            <deckgo-highlight-code language="javascript"><code slot="code">{`total('1',2);`}</code></deckgo-highlight-code>

                            <p>In TypeScript, we can explicitly assign types to the function parameters like this:</p>

                            <deckgo-highlight-code><code slot="code">{`function total(x: number, y: number) {
     alert( x + y );
}`}</code></deckgo-highlight-code>

                            <p>When we explicitly assign types, developers and IDE’s can better understand the code and that can help us avoid problems before runtime.</p>

                            <h2>2. Classes</h2>

                            <p>JavaScript is a functional language, which has its own benefits, but it can be a hassle when you like to think and organize your code in an object-oriented way. Classes allow that. Just like Java and other object-oriented languages, TypeScript allows you to define classes with fields (variables), a constructor (for seeding the class when creating instances), and functions (methods) among other things.</p>

                            <p>TypeScript also supports inheritance, so the classes you create can extend other classes and inherit their attributes. So, with TypeScript it’s possible to structure your code in a way that can make a lot more sense than the typical function spaghetti. It’s also makes it easier to to use proven object-oriented patterns.</p>

                            <p>It’s pretty simple. Here’s a class in TypeScript, for example:</p>

                            <deckgo-highlight-code><code slot="code">{`class Greeter {
 
    greeting: string;
 
    constructor(message: string) {
        this.greeting = message;
    }
 
    greet() {
        return "Hello, " + this.greeting;
    }
 
}`}</code></deckgo-highlight-code>

                            <p>We can instantiate that class using the following code:</p>

                            <deckgo-highlight-code><code slot="code">{`var greeter = new Greeter("world");`}</code></deckgo-highlight-code>

                            <p>Pretty cool, huh? The makers of ES6/ECMAScript® 2015 seem to think so; classes are coming to JavaScript irregardless of TypeScript. Which brings me to the next point.</p>

                            <h2>3. ES6/ECMAScript® 2015</h2>

                            <p>TypeScript allows you to use several features of ES6/ECMAScript® 2015 now without having to worry about how compatible they might be in today’s browsers. With TypeScript, you can start learning and using a lot of the new JavaScript now – features such as the following, for example:</p>

                            <ul>
                                <li>Classes</li>
                                <li>Modules</li>
                                <li>Arrow functions</li>
                                <li>Rest parameters</li>
                                <li>Default parameter values</li>
                            </ul>

                            <p>But wait, you say. How can I use ES6/ECMAScript® 2015 without worrying about browser support?</p>

                            <h2>4. Compile to ES3/ES5/ES6</h2>

                            <p>That’s right. It’s genius. With TypeScript, you can learn and use ES6, but compile down to ES5 or even ES3. And guess what. It all still works. Boom! TypeScript automatically changes your code for you. You can see this in action using the <a href="http://www.typescriptlang.org/Playground" rel="nofollow">TypeScript Playground</a>, which is shown below. In the Playground, you can enter TypeScript code on the left while watching how the TypeScript compiler transforms it on the right.</p>

                            <p><img class="alignnone size-full wp-image-638" src="/wp-content/uploads/2018/07/TypeScriptPlayground.png" alt="" width="828" height="516" srcset="/wp-content/uploads/2018/07/TypeScriptPlayground.png 828w, /wp-content/uploads/2018/07/TypeScriptPlayground-300x187.png 300w, /wp-content/uploads/2018/07/TypeScriptPlayground-768x479.png 768w" sizes="(max-width: 828px) 100vw, 828px" /></p>

                            <p>You may be wondering: <em>if TypeScript is compiled, how can I debug it at runtime using developer tools in my browser</em>? Not a problem. There’s a source map generator in the TypeScript compiler, which will create .map files alongside your JavaScript files. These files tell your browser tooling how to map the compiled JavaScript to the original TypeScript .ts files. That means, for example, that in Chrome’s Developer Tools, you can find the .ts file under Sources, and place breakpoints.</p>

                            <h2>5. Generics</h2>

                            <p>TypeScript has the ability to define code templates, called generics, that can be reused throughout your codebase and that provide great functionality. C# and Java have a similar feature you may already be familiar with. Generics provide a lot more flexibility while working with types. As a developer, you can write code that allows for multiple, but limited types. With generics you get to say, “You can use multiple types here, but not anything under the sun. I’ll let you tell me which types you want to use when calling this code, but it needs to be either a string or number.” In other words, generics allow you to write code templates that can change depending on the context of use.</p>

                            <p>To understand what I mean, take a look at the following class that simply manages a list of numbers.</p>

                            <deckgo-highlight-code><code slot="code">{`class ListOfNumbers {
 
        _items: number[] = [];
 
        add(item: number) {
                this._items.push(item);
        }
 
        getItems(): number[] {
                return this._items;
        }
 
}`}</code></deckgo-highlight-code>

                            <p>Now, suppose someone comes along, looks at this code and decides they need to do something very similar. They want to manage a list of strings in the same way, so they copy the code, paste it, and change it up a bit by replacing all the number types with string types, like so…</p>

                            <deckgo-highlight-code><code slot="code">{`class ListOfStrings {
 
        _items: string[] = [];
 
        add(item: string) {
                this._items.push(item);
        }
 
        getItems(): string[] {
                return this._items;
        }
 
}`}</code></deckgo-highlight-code>

                            <p>It has been said that duplicate code is the root of all evil in software design. This, being identical or nearly identical code, you might call it careless. If you’re in a bad mood, you might even say it’s just downright sloppy and unprofessional. Generics can help solve this by allowing the same class to handle both a list of numbers and a list of strings.</p>

                            <p>An easy metaphor for understanding how this works is to look at a kind of template we’re all familiar with – a mail merge template:</p>

                            <deckgo-highlight-code><code slot="code">{`Dear <name>

We have sent the info to <address>. Thanks, <from>`}</code></deckgo-highlight-code>

                            <p>I can merge values into the placeholders for this template to get a unique letter for each person on my mailing list.</p>

                            <p>Generics allow you to make code templates in a similar way. Of course, JavaScript functions already allow you to pass in different data values. Generics allow you to vary the actual data types that can be used with a function. They rely on &#8220;type&#8221; variables such as &lt;T&gt; to define types in a <em>generic</em> template.</p>

                            <p>With generics we can have just one function, which can be called with a specified type for the type variable. For example:</p>

                            <deckgo-highlight-code><code slot="code">{`var stringNumeric = new GenericNumber&lt;number&gt;();`}</code></deckgo-highlight-code>

                            <p>Or…</p>

                            <deckgo-highlight-code><code slot="code">{`var stringNumeric = new GenericNumber&lt;string&gt;();`}</code></deckgo-highlight-code>

                            <p>In summary, a <em>generic</em> is a code template that relies on type variables: &lt;T&gt;. This allows you to create more generalized code while ensuring that it remains type-safe at compile time.</p>

                            <h2>6. Modules</h2>

                            <p>Modules are a way to organize code into <em>buckets</em> with namespaces (like package names in Java). In addition to helping you avoid naming conflicts, these buckets of code can encapsulate some general functionality that is then imported and reused across your project or in other projects.</p>

                            <p>Historically, JavaScript wasn’t often used to build very large, sophisticated applications with several dependencies and a large set of files. As it has increased in popularity and as people now use it to build sophisticated single-page apps like GMail or Office 365 Web, the need for modularity has become increasingly clear. Managing such apps without modularity is a royal pain.</p>

                            <p>To ease this pain, you can use <em>internal modules</em> in TypeScript, which help you organize your code. You can also use external modules (CommonJS or AMD loading), which in addition to helping you organize code, allow you to encapsulate and share reusable functionality.</p>

                            <p>If you use Gulp, you’ve already used modules. Gulp and other Node.js applications use CommonJS to require and import modules:</p>

                            <deckgo-highlight-code><code slot="code">{`var gulp = require('gulp-uglify');`}</code></deckgo-highlight-code>

                            <h2>7. Interfaces</h2>

                            <p>You’ve heard the old programming best practice: <em>alway program to an interface, not an implementation</em>. Interfaces allow us to define a certain set of rules that classes must follow when they implement the interface. In this way, classes can be more easily swapped without breaking existing code and your objects can be more loosely coupled.</p>

                            <p>JavaScript doesn’t inherently support the use of interfaces, so again, TypeScript comes to the rescue – giving us a way to define the contract for a class, what members of the interface must be implemented, and optional members.</p>

                            <p>Following is a TypeScript example of the interface for a class and the class itself.</p>

                            <deckgo-highlight-code><code slot="code">{`interface IClock {
    currentTime: Date;
}
 
class Clock implements IClock {
    currentTime: Date;
    constructor(h: number, m: number) { }
}`}</code></deckgo-highlight-code>

                            <h2>Conclusion</h2>

                            <p>In this post, I’ve shown you just 7 out of more reasons why TypeScript helps you kicks ass. Of course, you don’t have to kick ass. You can wait for ES6/ECMAScript® 2015 to become widely adopted and learn about it then. You can keep wrestling with runtime defects and debugging your code in a browser. You can stick with writing JavaScript purely in the functional form and miss out on object orientated benefits that have been enjoyed in other languages for years. You can write tons of big-ass JavaScript files that are difficult to understand and difficult to maintain. You can keep swimming with your nose just above the surface of the water.</p>

                            <p>But not me. I like to kick ass.</p>



                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">



                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}
