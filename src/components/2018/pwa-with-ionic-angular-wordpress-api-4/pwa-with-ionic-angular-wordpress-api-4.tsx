import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
    tag: 'page-pwa-with-ionic-angular-wordpress-api-4',
})
export class PagePwaWithIonicAngularWordpressApi4 {

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

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/ionic4-ng-wp-client_featured.gif" alt="" /></p>

                            <p>In this weekend side-hustle series, we’re building a&nbsp;Progressive Web App (PWA) for desktop and mobile that delivers WordPress content using Ionic, Angular, and the WordPress API. In <a href="/pwa-with-ionic-angular-wordpress-api-1">Part 1</a>, we got everything setup and working. In <a href="/pwa-with-ionic-angular-wordpress-api-2">Part 2</a>, we created a richer presentation of the WordPress Posts using Ionic cards. In <a href="/pwa-with-ionic-angular-wordpress-api-3">Part 3</a>, we implemented the single post view. Today, we’ll implement paging functionality using Ionic’s Infinite Scroll (<a href="https://beta.ionicframework.com/docs/api/infinite-scroll/" rel="nofollow">ion-infinite-scroll</a>).</p>

                            <h2>Part 3 Recap</h2>

                            <p>Here’s a quick recap of what we accomplished in Part 3.</p>

                            <ul>
                                <li>Polished the presentation</li>
                                <li>Added a Read More… button to post preview cards</li>
                                <li>Added a PostPage component for viewing single posts</li>
                                <li>Updated the DataService to return single post based on post slug given as route parameter</li>
                                <li>Configured the parameterized route to the Post page</li>
                                <li>Made revised source code available on GitHub at&nbsp;<a href="https://github.com/codyburleson/ionic-ng-wp-client" rel="nofollow">https://github.com/codyburleson/ionic-ng-wp-client</a>.</li>
                            </ul>

                            <p>The final result of Part 3 is still pretty simple, but it’s evolving. After Part 3, and starting now, our app looks like this…</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/ionpress17.jpg" alt="" /></p>

                            <h2>Part 4 game plan</h2>

                            <p>The game plan for today is to implement paging functionality using Ionic’s Infinite Scroll feature. Currently, our app only displays a single page of ten posts (the WordPress API default amount). We need a way to load up additional posts when more exist. With Ionic’s Infinite Scroll (<a href="https://beta.ionicframework.com/docs/api/infinite-scroll/" rel="nofollow">ion-infinite-scroll</a>) feature, additional posts will be automatically loaded and displayed when the user scrolls to the bottom of the list.</p>

                            <h2>Update the DataService to get more posts</h2>

                            <p>Update the DataService (<code>src/app/shared/data.service.ts</code>) so that it is as follows…</p>

                            <deckgo-highlight-code line-numbers><code slot="code">{`import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs';
const ENDPOINT_URL = environment.endpointURL;

@Injectable({
providedIn: 'root'
})
export class DataService {

    items: any[] = [];
    page = 1;
    totalPages = 1;
    constructor(private http: HttpClient) {
    }

    /**
    * Gets a page of posts or all posts formerly fetched
    */
    getPosts(): any {
        console.log('>> DataService.getPosts');
        if (this.items.length > 0) {
            return of(this.items);
        } else {
            return this.http.get(ENDPOINT_URL + 'wp/v2/posts?_embed', {observe: 'response'})
            .map(this.processPostData, this);
        }
    }

    /**
     * Gets the next page of posts
     */
    getMorePosts(): any {
        this.page++;
        return this.http.get(ENDPOINT_URL + 'wp/v2/posts?_embed&page=' + this.page, {observe: 'response'})
        .map(this.processPostData, this);
    }
    
    // A place for post-processing, before making the fetched data available to view.
    processPostData(resp: HttpResponse<any[]>) {
        this.totalPages = +resp.headers.get('X-WP-TotalPages'); // unary (+) operator casts the string to a number
        resp.body.forEach((item: any) => {
            this.items.push(item);
        });
        return this.items;
    }

    getPostBySlug(slug): any {
        return this.items.find(item => item.slug === slug);
    }

    hasMorePosts() {
        return this.page < this.totalPages;
    }

}`}</code></deckgo-highlight-code>

                            <p>What’s going on here?</p>

                            <ul>
                                <li>Line 15 – We added a class variable called <code>page</code> to track the current or last page (set of posts) that we’ve loaded.</li>
                                <li>Line 16 – We added a class variable called <code>totalPages</code> to hold the total number of pages of posts that are available. This is needed so that we can disable the infinite scroll component when we’ve reached the last of the available pages. If we don’t disable the component, it will try to fetch a page number that isn’t available and thus result in an error.</li>
                                <li>Line 23 – In the <code>getPosts()</code> function, we modified the HttpClient’s&nbsp;<code>get</code> call. We added&nbsp;<code>&#123;observe: 'response'&#125;</code> to specify that we want the whole <code>HttpResponse</code> back, rather than just the body. This is necessary because we need to inspect the response to find the&nbsp;<code>X-WP-TotalPages</code> header, which WordPress gives to tell us how many&nbsp; total pages are available.</li>
                                <li>Line 36 – We added a <code>getMorePosts()</code> function that increments&nbsp; the current page variable, gets the next page of posts, and then pushes them onto the array of posts that we already have.</li>
                                <li>Line 43 – We modified the&nbsp;<code>processPostData()</code> function to read the&nbsp;<code>X-WP-TotalPages</code> header and set the&nbsp;<code>totalPages</code> class variable.</li>
                                <li>Line 55 – Finally, we added a&nbsp;<code>hasMorePosts()</code> convenience function to return <code>true</code> or <code>false</code> depending on whether more pages are available to be loaded.</li>
                            </ul>

                            <h2>Update the HomePage component to use infinite scroll</h2>

                            <p>Update the <code>HomePage</code> component (<code>src/app/home/home.page.ts</code>) so that it’s now as follows…</p>

                            <deckgo-highlight-code line-numbers><code slot="code">{`import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {DataService} from '../shared/data.service';
import {environment} from '../../environments/environment';
import {InfiniteScroll} from '@ionic/angular';

@Component({
selector: 'app-home',
templateUrl: 'home.page.html',
styleUrls: ['home.page.scss'],
encapsulation: ViewEncapsulation.ShadowDom
})
export class HomePage implements OnInit {

    @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;
    items: any[];
    dateFormat = environment.dateFormat;

    constructor(public dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.getPosts().subscribe((data: any[]) => {
            this.items = data;
        });
    }

    getMorePosts(evt) {
        this.dataService.getMorePosts().subscribe((data: any[]) => {
            this.items = data;
            this.infiniteScroll.complete();
        });
    }

    infiniteScrollDisabled() {
        if (this.dataService.hasMorePosts()) {
            return false;
        } else {
            return true;
        }
    }
}`}</code></deckgo-highlight-code>

                            <p>What’s going on here?</p>

                            <ul>
                                <li>Line 14 – Gives us access to the&nbsp;InfiniteScroll component that we’ll&nbsp; be using in&nbsp; the Home view.</li>
                                <li>Line 27 – A new <code>getMorePosts()</code> function pretty much just proxies to the function of the same name that’s in the <code>DataService</code>. I uses&nbsp;<code>this.infiniteScroll.complete()</code> to remove the loading&nbsp; spinner when it’s done doing its thing.</li>
                                <li>Line 34 – The new&nbsp;<code>infiniteScrollDisabled()</code> function exposes a <code>true/false</code> property that will be bound to the <code>ion-infinite-scroll</code> component in the view. This will be used&nbsp; to ensure that the infinite scroll component gets disabled when there are no more post pages available to load.</li>
                            </ul>

                            <h2>Add ion-infinite-scroll to the HomePage component HTML</h2>

                            <p>We now just need to add the ion-infinite-scroll component to <code>src/app/home/home.page.html</code>. The snippet we need to add is as follows:</p>

                            <deckgo-highlight-code language="html"><code slot="code">{`<ion-infinite-scroll threshold="100px" (ionInfinite)="getMorePosts($event)" [disabled]="infiniteScrollDisabled()">
<ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data...">
</ion-infinite-scroll-content>
</ion-infinite-scroll>`}</code></deckgo-highlight-code>

                            <p>The complete contents of src/app/home/home.page.html should now be…</p>

                            <deckgo-highlight-code language="html"><code slot="code">{`<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button></ion-menu-button>
    </ion-buttons>
    <ion-title>Home</ion-title>
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
      <div>
        <ion-button href="/{{item.slug}}" routerDirection="root" color="primary" size="small">Read more...</ion-button>
      </div>
    Posted in W<br/>
    Tagged X, Y, Z
    </ion-card-content>
  </ion-card>
  <ion-infinite-scroll threshold="100px" (ionInfinite)="getMorePosts($event)" [disabled]="infiniteScrollDisabled()">
    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data...">
    </ion-infinite-scroll-content>
  </ion-infinite-scroll>
</ion-content>`}</code></deckgo-highlight-code>

                            <p>Here’s what’s going on. Whenever the user scrolls down within the 100px threshold of the&nbsp;<code>ion-infinite-scroll</code>,&nbsp;<code>getMorePosts($event)</code> is called and the next page is loaded. If no more pages are available,&nbsp;<code>infiniteScrollDisabled()</code> will return <code>true</code> and disable the control so that it doesn’t try to function unnecessarily. It’s pretty freagin’ cool how the ionic control does all this magic with such a simple setup on our part!</p>

                            <p>And&nbsp; that’s it! Now, if&nbsp; you run the app using&nbsp; <code>ionic serve</code>, you should be able to scroll &quot;infinitely&quot; through all&nbsp; available posts.</p>

                            <p>I’m committing this check-point to GitHub with the following message.</p>

                            <p><span class="badge badge-secondary">Implement paging with ion-infinite-scroll</span></p>

                            <h2>Wrapping up</h2>

                            <p>Building on&nbsp;<a href="/pwa-with-ionic-angular-wordpress-api-3">Part 3</a>, I showed you how you can implement infinite scroll functionality to page through all available WordPress posts. The app is starting to get useful, but there’s still a lot to do&nbsp; to make it&nbsp; cool. I’m not sure what I’ll tackle next, but I will continue to evolve the app, so stay tuned and remember that the evolving source code can always be cloned from GitHub at&nbsp;<a href="https://github.com/codyburleson/ionic-ng-wp-client" rel="nofollow">https://github.com/codyburleson/ionic-ng-wp-client</a>.</p>

                            <p><ion-button color="primary" routerDirection="back" href="/pwa-with-ionic-angular-wordpress-api-3">&lt;&lt; Previous: Part 3</ion-button> <ion-button color="primary" routerDirection="forward" href="/pwa-with-ionic-angular-wordpress-api-5">Next: Part 5 &gt;&gt;</ion-button></p>

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
                                            <ion-label>Part 2</ion-label>
                                        </ion-item>
                                        <ion-item href="/pwa-with-ionic-angular-wordpress-api-3">

                                            <ion-label>Part 3</ion-label>
                                        </ion-item>
                                        <ion-item href="/pwa-with-ionic-angular-wordpress-api-4">
                                            <ion-icon name="chevron-forward-outline" slot="start"></ion-icon>
                                            <ion-label>Part 4</ion-label>
                                        </ion-item>
                                        <ion-item href="/pwa-with-ionic-angular-wordpress-api-5">
                                            <ion-label>Part 5</ion-label>
                                        </ion-item>
                                    </ion-list>
                                </ion-card-content>
                            </ion-card>

                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>


        ];
    }
}
