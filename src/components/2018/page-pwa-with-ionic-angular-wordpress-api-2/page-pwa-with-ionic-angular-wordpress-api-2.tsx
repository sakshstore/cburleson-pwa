import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';
// Use this if using source code blocks to be formatted by prism.js...
import Prism from "prismjs"
import 'prismjs/components/prism-typescript.min';

import { BlogData } from '../../../services/blog-data';


@Component({
  tag: 'page-pwa-with-ionic-angular-wordpress-api-2',
})
export class PagePwaWithIonicAngularWordpressApi2 {

  title = 'Blog';

  // header for this individual item by id...
  header: any;

  id: string;

  async componentWillLoad() {
    if (isLocal()) {
      console.log('> PagePwaWithIonicAngularWordpressApi2.componentWillLoad');
    }
    // this.data = await BlogData.load();
    // Get the id from the URL path (slug)
    this.id = document.location.pathname.substr(1);
    this.header = BlogData.getPostHeaderById(this.id);

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

              <p>In this series, we’re building a Progressive Web App (PWA) for desktop and mobile that delivers WordPress content using Ionic, Angular, and the WordPress API. In <a href="/pwa-with-ionic-angular-wordpress-api-1/">Part 1</a>, we got things setup and working. If you haven’t seen Part 1, I recommend that you <a href="/pwa-with-ionic-angular-wordpress-api-1/">start there</a>. Today, for Part 2, we will convert the Home page list items to cards, which will allow for a richer presentation of the post previews.</p>

              <h2>Part 1 Recap</h2>

              <p>Here’s a quick recap of what we accomplished in Part 1.</p>

              <ul><li>Installed the Ionic CLI</li><li>Created a new Ionic app with the CLI</li><li>Ran the app (acid test)</li><li>Setup a local WordPress development environment using Docker</li><li>Populated WordPress with dummy data using a plugin</li><li>Enabled the WordPress REST API</li><li>Finally, we created a DataService to do the fetching from the WordPress REST API and connected it to the HomePage component to prove that we could render the JSON results in a list.</li><li>Made source code available on GitHub at <a href="https://github.com/codyburleson/ionic-ng-wp-client">https://github.com/codyburleson/ionic-ng-wp-client</a>.</li></ul>

              <p>The final result of Part 1 is still pretty simple, but it’s a solid foundation. After Part 1, and starting now, our app looks like this.</p>

              <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/ionpress-10.jpg" alt="" /></p>

              <h2>Part 2 game plan</h2>

              <p>The game plan for today is to convert the Home page list, which currently just shows the title and id, into a set of cards which can show much more information such as the title, excerpt, date, featured image, etc. Take a look, for example, at the example card from the <a href="https://ionicframework.com/docs/api/card/" rel="nofollow">Ionic 4 documentation for ion-card</a>.</p>

              <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/ionpress-11.jpg" alt="Example Ionic Card" /></p>

              <p>Something like this is much more like what we want for previews of each post, wouldn’t you agree? Great! Let’s begin.</p>

              <h2>Replace Home page list with cards</h2>

              <p>Modify <code>src/app/home/home.page.html</code> with the following.</p>

              <pre><code class="language-html">{`<ion-header>
<ion-toolbar>
<ion-buttons slot="start">
<ion-menu-button></ion-menu-button>
</ion-buttons>
<ion-title>
Home
</ion-title>
</ion-toolbar>
</ion-header>
<ion-content padding>
<ion-card *ngFor="let item of items">
<ion-card-header>
<ion-card-subtitle>{{item.date}}</ion-card-subtitle>
<ion-card-title [innerHTML]="item.title.rendered"></ion-card-title>
</ion-card-header>
<ion-card-content>
<div [innerHTML]="item.excerpt.rendered"></div>
</ion-card-content>
</ion-card>

</ion-content>`}</code></pre>

              <p>Now, if you run ionic serve, the result should look something like this.</p>

              <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/ionpress12.jpg" alt="" /></p>

              <p>That’s much better already.</p>

              <p>There’s something important to point out here, however. Notice, that for the title and the excerpt, we used an Angular technique to render them as innerHTML? We did this with the following two lines.</p>

              <pre><code class="language-html">{`...
<ion-card-title [innerHTML]="item.title.rendered"></ion-card-title>
...
<div [innerHTML]="item.excerpt.rendered"></div>
...`}</code></pre>

              <p>You might have thought to do it this way instead.</p>

              <pre><code class="language-html">{`...
<ion-card-title>{{item.title.rendered}}</ion-card-title>
...
<div>{{item.excerpt.rendered}}</div>
...`}</code></pre>

              <p>In the second case, Angular does not interpret and decode special HTML characters. In other words, it will render the raw data, but it will not render the HTML as it should be. The <code>[innerHTML]=""</code> trick fixes this.</p>

              <p>Now, moving on, the date format is not user friendly, so let’s fix that.</p>

              <h3>Format the date using Angular DatePipe</h3>

              <p>To make the post dates more user friendly, we can simply use the Angular DatePipe.</p>

              <p>In home.page.html, we can change&nbsp;<code>&lt;ion-card-subtitle&gt;&#123;&#123;item.date&#125;&#125;&lt;/ion-card-subtitle&gt;</code> to&nbsp;<code>&lt;ion-card-subtitle&gt;&#123;&#123; item.date | date &#125;&#125;&lt;/ion-card-subtitle&gt;</code>. This produces the a better date format as you can see below.</p>

              <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/ionpress13.jpg" alt="" /></p>

              <p>That looks good enough for me, but there are many different ways to format dates and some other format might be desired by someone else. For that reason, my desire is to have the rendered date format be configurable. For now, we will allow this to be done in the environment&nbsp; configuration files where we hold global constants.</p>

              <p>Add a <code>dateFormat</code>&nbsp;field to the configuration by changing both <code>src/environment/environment.ts</code> and <code>environment.prod.ts</code> to the following.</p>

              <pre><code class="language-ts">{`// For dateFormat options, see: https://angular.io/api/common/DatePipe
export const environment = {
production: false,
endpointURL: 'http://localhost:8080/wp-json/',
dateFormat: 'MMM d, y'
};`}</code></pre>

              <p>Then, in <code>home.page.html</code>, make sure the DatePipe is changed to be&nbsp;<code>&#123;&#123; item.date | date:dateFormat &#125;&#125;</code>. All of <code>home.page.html</code> should then look like this…</p>

              <pre><code class="language-html">{`<ion-header>
<ion-toolbar>
<ion-buttons slot="start">
<ion-menu-button></ion-menu-button>
</ion-buttons>
<ion-title>
Home
</ion-title>
</ion-toolbar>
</ion-header>
<ion-content padding>
<ion-card *ngFor="let item of items">
<ion-card-header>
<ion-card-subtitle>{{ item.date | date:dateFormat }}</ion-card-subtitle>
<ion-card-title [innerHTML]="item.title.rendered"></ion-card-title>
</ion-card-header>
<ion-card-content>
<div [innerHTML]="item.excerpt.rendered"></div>
</ion-card-content>
</ion-card>
</ion-content>`}</code></pre>

              <p>And finally, we need to have the dateFormat&nbsp; field also in the HomPage component. We’ll import the environment file and pass the value through with <code>dateFormat = environment.dateFormat</code>. Modify <code>src/app/home/home.page.ts</code> to the following.</p>

              <pre><code class="language-ts">{`import {Component, OnInit} from '@angular/core';
import {DataService} from '../shared/data.service';
import {environment} from '../../environments/environment';
@Component({
selector: 'app-home',
templateUrl: 'home.page.html',
styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
items: any[];
dateFormat = environment.dateFormat;
constructor(public dataService: DataService) {
}
ngOnInit() {
console.log('> ngOnInit');
this.dataService.getPosts().subscribe((data: any[]) => {
this.items = data;
console.log('ngOnInit() > items: %o', this.items);
});
}
}`}</code></pre>

              <p>Now, when users edit the environment file to point to their own WordPress endpoint, they can also configure the date format to their liking. This is a good check-point to make a commit.</p>

              <p><span class="badge badge-secondary">Replace Home page list with cards</span></p>

              <h2>Add featured image to cards</h2>

              <p>If a featured image is included with the post, we want that to render in the cards. This is as simple as adding the following line in our cards.</p>

              <pre><code class="language-html">{`<ion-img *ngIf="item._embedded['wp:featuredmedia']" [src]="item._embedded['wp:featuredmedia'][0].source_url"></ion-img>`}</code></pre>

              <p>Because some items do not have a featured image, we’ve used ngIf to avoid errors. To add this line in the proper place, modify <code>home.page.html</code> to the following.</p>

              <pre><code class="language-html">{`<ion-header>
<ion-toolbar>
<ion-buttons slot="start">
<ion-menu-button></ion-menu-button>
</ion-buttons>
<ion-title>
Home
</ion-title>
</ion-toolbar>
</ion-header>
<ion-content padding>
<ion-card *ngFor="let item of items">
<ion-img *ngIf="item._embedded['wp:featuredmedia']" [src]="item._embedded['wp:featuredmedia'][0].source_url"></ion-img>
<ion-card-header>
<ion-card-subtitle>{{ item.date | date:dateFormat }}</ion-card-subtitle>
<ion-card-title [innerHTML]="item.title.rendered"></ion-card-title>
</ion-card-header>
<ion-card-content>
<div [innerHTML]="item.excerpt.rendered"></div>
</ion-card-content>
</ion-card>
</ion-content>`}</code></pre>

              <p>Now, if we run <code>ionic serve</code> and examine the result, items with featured images look like this.</p>

              <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/ionpress14.jpg" alt="" /></p>

              <p>Perfect! Again, it’s a good time for a commit.</p>

              <p><span class="badge badge-secondary">Add featured image to cards</span></p>

              <h2>Wrapping up</h2>

              <p>Building on <a href="/pwa-with-ionic-angular-wordpress-api-1/">Part 1</a>, I showed you how you can dress up the home page with cards instead of <code>ion-list</code> items. We formatted the date for a better user experience and we now render featured images when the posts have them.</p>

              <p>Remember that the evolving source code can always be cloned from GitHub at&nbsp;<a href="https://github.com/codyburleson/ionic-ng-wp-client" rel="nofollow">https://github.com/codyburleson/ionic-ng-wp-client</a>.</p>

              <p>I hope you’ll join me on this project, contribute comments, or your own improvements.&nbsp;I intend to take the project further and will continue my “developer log” here, so stay tuned!</p>

              <p><ion-button color="primary" routerDirection="back" href="/pwa-with-ionic-angular-wordpress-api-1">&lt;&lt; Previous: Part 1</ion-button> <ion-button color="primary" routerDirection="forward" href="/pwa-with-ionic-angular-wordpress-api-3">Next: Part 3 &gt;&gt;</ion-button></p>

            </ion-col>
            <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
              <ion-card>
                <ion-card-header>
                  <ion-card-subtitle>Build a PWA with Ionic, Angular, and the WordPress REST API</ion-card-subtitle>
                  <ion-card-title>Series content</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <ion-list>
                    <ion-item href="/pwa-with-ionic-angular-wordpress-api-1">
                      <ion-label>Part 1</ion-label>
                    </ion-item>
                    <ion-item href="/pwa-with-ionic-angular-wordpress-api-2">
                      <ion-icon name="chevron-forward-outline" slot="start"></ion-icon>
                      <ion-label>Part 2</ion-label>
                    </ion-item>
                    <ion-item href="/pwa-with-ionic-angular-wordpress-api-3">
                      <ion-label>Part 3</ion-label>
                    </ion-item>
                    <ion-item href="/pwa-with-ionic-angular-wordpress-api-4">
                      <ion-label>Part 4</ion-label>
                    </ion-item>
                    <ion-item href="/pwa-with-ionic-angular-wordpress-api-5">
                      <ion-label>Part 5</ion-label>
                    </ion-item>
                  </ion-list>
                </ion-card-content>
              </ion-card>

              <gls-adsense-ad />
            </ion-col>
          </ion-row>
        </ion-grid>

      </ion-content>


    ];
  }
}