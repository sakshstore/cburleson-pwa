import { Component, h } from '@stencil/core';
import Prism from "prismjs"
import { BlogData } from '../../../services/blog-data';


import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');


const CODE_1 = `<script src="https://unpkg.com/@reactivex/rxjs@5.3.0/dist/global/Rx.js"></script>
<button>Click me</button>`;
const CODE_2 = `var button = document.querySelector('button');
Rx.Observable.fromEvent(button, 'click').
    subscribe(
        (value) => console.log(value.clientX) // just for example, log the x position of the cursor
    );`;
const CODE_3 = `import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/switchMap';
// etc., etc...
// or, you could just more conventiently grab the whole package, but this may not be efficient without Tree Shaking, so I'd recommend the approach above
// import 'rxjs/Rx';`;
const CODE_4 = `var button = document.querySelector('button');
var observer = {
    next: function(value) {
        console.log(value.clientX);
    }
    // In reality, the error and complete functions below would never be
    // called for a button click event, but this shows the basic structure
    // of an Observable; generally implementing the three functions: next, error, and complete...
    error: function (error) {
        console.log(error);
    }
    complete: function() {
        console.log('Completed');
    }
};
Rx.Observable.fromEvent(button, 'click').
    subscribe(observer);`;

@Component({
    tag: 'page-respond-to-button-click-with-observable',
})
export class PageRespondToButtonClickWithObservable {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageRespondToButtonClickWithObservable.componentWillLoad');
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

                <h1>{this.header.title}</h1>

                <p class="entry-meta">Posted on <time>{new Date(this.header.datePublished).toDateString()}</time> (last modified <time>{new Date(this.header.dateModified).toDateString()}</time>)</p>
                
                <p>A recipe for responding to a button click with an RxJS Observable.</p>
                <p><strong>HTML</strong></p>
                <pre><code class="language-html">{CODE_1}</code></pre>
                <p><b>JavaScript</b></p>
                <pre><code class="language-js">{CODE_2}</code></pre>
                <p>The observable is created by the operator, <code>fromEvent</code>, which takes an “element” and an event name as parameters. It will listens for events of that name (i.e. 'click') taking place on that element. It returns an Observable that emits those events. An “element” may be a simple DOM element, or a NodeList, jQuery element, Zepto Element, Angular element, Ember.js element, or EventEmitter. This operator also takes an optional third parameter: a function that accepts the arguments from the event handler as parameters and returns an item to be emitted by the resulting Observable in place of the event.</p>
                <h2 id="Respondtoabuttonclickwithanobservable-Alternativeimporting">Alternative importing</h2>
                <p>If you're using a JavaScript modules approach (such as with TypeScript),  you could do something like the following instead of using the <code>&lt;script&gt;</code> element for importing as shown above.</p>
                <pre><code class="language-js">{CODE_3}</code></pre>
                <h2 id="Respondtoabuttonclickwithanobservable-Creatingyourownobserver">Creating your own observer</h2>
                <p>Alternatively, you could create your on observer to listen to the click event. Since RxJS provides the <code>fromEvent</code> operator, this is unnecessary. However, showing how this <em>could</em> be done provides a good example of how to create your own observers without use of the RxJS operators.</p>
                <p><strong>JavaScript</strong></p>
                <pre><code class="language-js">{CODE_4}</code></pre>
                <h2>References</h2>

                <p>
                    <div class="video-container">
                        <iframe class="video" src="https://www.youtube.com/embed/Tux1nhBPl_w" data-allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" frameborder="0" allowFullScreen></iframe>
                    </div>
                </p>
            </ion-content>

        ];
    }
}