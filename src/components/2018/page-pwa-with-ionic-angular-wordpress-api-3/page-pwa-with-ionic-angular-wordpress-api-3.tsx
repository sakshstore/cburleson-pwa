import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import Prism from "prismjs"
import 'prismjs/components/prism-typescript.min';

import { BlogData } from '../../../services/blog-data';


@Component({
  tag: 'page-pwa-with-ionic-angular-wordpress-api-3',
})
export class PagePwaWithIonicAngularWordpressApi3 {

  title = 'Blog';

  // header for this individual item by id...
  header: any;

  id: string;

  async componentWillLoad() {
    if (isLocal()) {
      console.log('> PagePwaWithIonicAngularWordpressApi3.componentWillLoad');
    }
    // this.data = await BlogData.load();
    // Get the id from the URL path (slug)
    this.id = document.location.pathname.substr(1);
    this.header = BlogData.getPostHeaderById(this.id);

    // set document title for browser / tab / bookmark
    document.title = this.header.title + ' | ' + SITENAME;
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

              <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/ionic4-ng-wp-client_featured.gif" alt="" /></p>

              <p>In this weekend side-hustle series, we’re building a&nbsp;Progressive Web App (PWA) for desktop and mobile that delivers WordPress content using Ionic, Angular, and the WordPress API. In <a href="/pwa-with-ionic-angular-wordpress-api-1">Part 1</a>, we got things setup and working. In <a href="/pwa-with-ionic-angular-wordpress-api-2">part 2</a>, we created a richer presentation of the WordPress posts using Ionic cards. Today, we’ll implement the single post view (a.k.a. the “content detail view”).</p>

              <h2>Part 2 Recap</h2>

              <p>Here’s a quick recap of what we accomplished in Part 2.</p>

              <ul><li>Replaced Home page list with cards</li><li>Formatted the post dates using the Angular DatePipe</li><li>Added featured image to cards (when featured images exist on the post)</li><li>Made revised source code available on GitHub at&nbsp;<a href="https://github.com/codyburleson/ionic-ng-wp-client" rel="nofollow">https://github.com/codyburleson/ionic-ng-wp-client</a>.</li></ul>

              <p>The final result of Part 2 is still pretty simple, but it’s evolving. After Part 2, and starting now, our app looks like this…</p>

              <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/ionpress14.jpg" alt="" /></p>

              <h2>Part 3 game plan</h2>

              <p>The game plan for today is to create a Read More… button on each post preview card. We’ll also create a PostPage component for viewing a single post and we’ll make a parameterized route for it. We’ll pass the post slug as a parameter to the DataService and use that to retrieve the single post for display on the newly created Post page. While we’re at it, we’ll also polish the presentation a bit more.</p>

              <h2>Add a Read More… button</h2>

              <p>Next, we’ll add the Read More… button to each post preview card. At the same time, we’ll put in a place holder for displaying the post categories and tags, which we may implement a little later down the road. Update <code>src/app/home/home.page.html</code> with the following…</p>

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
<div>
<ion-button href="/{{item.slug}}" routerDirection="root" color="primary" size="small">Read more...</ion-button>
</div>
Posted in W<br/>
Tagged X, Y, Z
</ion-card-content>
</ion-card>
</ion-content>`}</code></pre>

              <p>Now, if you run ionic serve and preview the app, you can see that we have a Read More… button.</p>

              <p>Notice that we also have a placeholder for post categories and tags below the Read More… button. I’m not entirely sure that’s where I want it yet, but it’s a reminder for us to think about implementing later.</p>

              <h2>Add the PostPage component</h2>

              <p>Next we’ll use the Ionic CLI to generate a PostPage component. This will be the view that is loaded when the user clicks the Read More… button. Within the project root, enter the following command.</p>

              <p><code>ionic generate</code></p>

              <p>From the command-line menu of options, choose <code>Page</code> for the component type and for the <code>Name/path of page:</code>, type <code>Post</code> and hit <kbd>enter</kbd>. The Ionic CLI will generate a post directory with the following files inside:</p>

              <ul><li>post.module.ts</li><li>post.page.html</li><li>post.page.scss</li><li>post.page.spec.ts</li><li>post.page.ts</li></ul>

              <p>We’ll come back to this component soon, but first, let’s modify the DataService so that it can return a single post by slug.</p>

              <h2>Update the DataService</h2>

              <p>Modify <code>src/app/shared/data.service.ts</code> by adding the following function for the PostPage component to call.</p>

              <pre><code class="language-ts">{`getPostBySlug(slug): any {
return this.items.find(item => item.slug === slug);
}`}</code></pre>

              <p>This takes the post slug and passes it through an RxJS <code>find</code> function, which searches for an element that matches the conditions defined by the specified predicate, and returns the first occurrence within the entire Observable sequence. In this case, we’ll be searching through the array of posts that have been loaded – returning the one that has the given slug. The slug is the URL segment that identifies the post. We use it to maintain clean URLs that match the WordPress Post name (/%postname%/) permalink structure that we set up in Part 1.</p>

              <h2>Update the PostPage component</h2>

              <p>Modify <code>src/app/post/post.page.ts</code> to be as follows.</p>

              <pre><code class="language-ts">{`import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../shared/data.service';
@Component({
selector: 'app-post',
templateUrl: './post.page.html',
styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
item: any;
constructor(private route: ActivatedRoute, public dataService: DataService) { }
ngOnInit() {
const itemSlug = this.route.snapshot.paramMap.get('slug');
this.item = this.dataService.getPostBySlug(itemSlug);
}
}`}</code></pre>

              <p>In the <code>ngOnInit()</code> function, we set the <code>item</code> field based on the item given back from the <code>DataService</code>. This is done by passing the item’s slug which is a route param that we can read out of the <code>ActivatedRoute</code>. So now, we just need to configure the parameterized route.</p>

              <h2>Configure the parameterized route to the Post page</h2>

              <p>When we used the Ionic CLI to create the <code>PostPage</code> component, it automatically added the following entry to the routing module (in <code>src/app/app-routing.module.ts</code>).</p>

              <pre><code class="language-ts">{`{ path: 'Post', loadChildren: './post/post.module#PostPageModule' }`}</code></pre>

              <p>Change the path from <code>'Post'</code> to <code>':slug'</code>. The colon signifies a named parameter, which we read by name from the <code>ActivatedRoute</code>.</p>

              <p>The entire <code>app-routing.module.ts</code> file should&nbsp; now look like this:</p>

              <pre><code class="language-ts">{`import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
const routes: Routes = [
{
path: '',
redirectTo: 'home',
pathMatch: 'full'
},
{
path: 'home',
loadChildren: './home/home.module#HomePageModule'
},
{
path: 'list',
loadChildren: './list/list.module#ListPageModule'
},
{path: ':slug', loadChildren: './post/post.module#PostPageModule'}
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {
}`}</code></pre>

              <p>And that’s it! If we run the app now with <code>ionic serve</code>, we can click on the Read More… button in a post preview card to load the full post. Here’s what one of our dummy content items looks like now, loaded up into the Post view.</p>

              <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/ionpress16.jpg" alt="" /></p>

              <p>I’m committing this check-point to GitHub with the following message.</p>

              <p><span class="badge badge-secondary">Implement single post view</span></p>

              <h2>Wrapping up</h2>

              <p>Building on&nbsp;<a href="/pwa-with-ionic-angular-wordpress-api-2">Part 2</a>, I showed you how you can implement the single post view (a.k.a. the “content detail view”). So, now we can preview a list of WordPress posts and then read any individual one. However,&nbsp; at this point we’re only able to access the default number of posts returned from our REST API call,&nbsp; which is ten. In the next part of this series, we’ll implement Ionic’s Infinite Scroll (<a href="https://beta.ionicframework.com/docs/api/infinite-scroll/" rel="nofollow">ion-infinite-scroll</a>) to automatically fetch more posts when the user scrolls to the end. So, stay tuned and remember that the evolving source code can always be cloned from GitHub at&nbsp;<a href="https://github.com/codyburleson/ionic-ng-wp-client" rel="nofollow">https://github.com/codyburleson/ionic-ng-wp-client</a>.</p>

              <p><ion-button color="primary" routerDirection="back" href="/pwa-with-ionic-angular-wordpress-api-2">&lt;&lt; Previous: Part 2</ion-button> <ion-button color="primary" routerDirection="forward" href="/pwa-with-ionic-angular-wordpress-api-4">Next: Part 4 &gt;&gt;</ion-button></p>

              <gls-disqus url={'https://codyburleson.com/' + this.id} identifier={this.id} title={this.header.title} category="" language="" />
              
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
