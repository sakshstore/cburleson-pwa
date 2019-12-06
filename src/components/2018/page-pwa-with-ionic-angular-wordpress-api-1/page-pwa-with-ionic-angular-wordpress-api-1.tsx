import { Component, h } from '@stencil/core';

import Prism from "prismjs"
import 'prismjs/components/prism-typescript.min';
import 'prismjs/components/prism-json.min';
import 'prismjs/components/prism-yaml.min';

import { BlogData } from '../../../services/blog-data';


import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

const CODE_1 = `$ cd ./ionic-ng-wp-client
$ ionic serve`;

const CODE_3 = `$ docker-compose stop
$ docker-compose up -d`;

const CODE_4 = `[{"id":1,"date":"2018-09-08T18:33:28","date_gmt":"2018-09-08T18:33:28","guid":{"rendered":"http:\/\/localhost:8080\/?p=1"},"modified":"2018-09-08T18:33:28","modified_gmt":"2018-09-08T18:33:28","slug":"hello-world","status":"publish","type":"post","link":"http:\/\/localhost:8080\/hello-world\/","title":{"rendered":"Hello world!"},"content":{"rendered":"<p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!<\/p>\n","protected":false},"excerpt":{"rendered":"<p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!<\/p>\n","protected":false},"author":1,"featured_media":0,"comment_status":"open","ping_status":"open","sticky":false,"template":"","format":"standard","meta":[],"categories":[1],"tags":[],"_links":{"self":[{"href":"http:\/\/localhost:8080\/wp-json\/wp\/v2\/posts\/1"}],"collection":[{"href":"http:\/\/localhost:8080\/wp-json\/wp\/v2\/posts"}],"about":[{"href":"http:\/\/localhost:8080\/wp-json\/wp\/v2\/types\/post"}],"author":[{"embeddable":true,"href":"http:\/\/localhost:8080\/wp-json\/wp\/v2\/users\/1"}],"replies":
...etc., etc,...`;

const CODE_5 = `export const environment = {
    production: true,
    endpointURL: 'http://localhost:8080/wp-json/'
};`;

const CODE_6 = `export const environment = {
    production: false,
    endpointURL: 'http://localhost:8080/wp-json/'
};`;

const CODE_7 = `import {environment} from '../../environments/environment';
const ENDPOINT_URL = environment.endpointURL;`;

const CODE_8 = `import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
}`;

const CODE_9 = `import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
const ENDPOINT_URL = environment.endpointURL;
@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor() {
    }
}`;

const CODE_10 = `import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}`;

const CODE_11 = `import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {of} from 'rxjs/observable/of';
const ENDPOINT_URL = environment.endpointURL;
@Injectable({
    providedIn: 'root'
})
export class DataService {
    items: any[];
    constructor(private http: HttpClient) { }
    /**
     * Gets a page of posts or all posts formerly fetched
     */
    getPosts(): any {
        if (this.items) {
            // The of operator accepts a number of items as parameters, and returns an Observable that emits each of
            // these parameters, in order, as its emitted sequence. In this case, we will only be returning this.items
            // to any subscriber.
            return of(this.items);
        } else {
            // http.get() creates an observable.
            // map() creates and returns its own new observable from the observable that http.get() created,
            // which we can then subscribe to. Therefore, we can subscribe to the result of this method.
            //
            // The Map operator applies a function of your choosing to each item emitted by the source Observable, and
            // returns an Observable that emits the results of these function applications.
            return this.http.get(ENDPOINT_URL + 'wp/v2/posts?_embed').map(this.processPostData, this);
        }
    }
    // A place for post-processing, before making the fetched data available to view.
    processPostData(data: any[]) {
        // Do post-processing code here (if useful)
        this.items = data;
        return this.items;
    }
}`;

const CODE_12 = `import {Component, OnInit} from '@angular/core';
import {DataService} from '../shared/data.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    items: any[];
    constructor(public dataService: DataService) {
    }
    ngOnInit() {
        console.log('> ngOnInit');
        this.dataService.getPosts().subscribe((data: any[]) => {
            this.items = data;
            console.log('ngOnInit() > items: %o', this.items);
        });
    }
}`;

const CODE_13 = `<ion-header>
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
<ion-list>
  <ion-item *ngFor="let item of items">
    <span [innerHTML]="">{{item.title.rendered}}</span>
    <div class="item-note" slot="end">
      {{item.id}}
    </div>
  </ion-item>
</ion-list>
</ion-content>`;

const CODE_14 = `import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HomePage } from './home.page';
describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [
        HttpClientModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});`;

const CODE_15 = `import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
  }));
  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});`;

@Component({
  tag: 'page-pwa-with-ionic-angular-wordpress-api-1'
})
export class PagePwaWithIonicAngularWordpressApi1 {

  title = 'Blog';

  // header for this individual item by id...
  header: any;

  async componentWillLoad() {
    if (debug) {
      console.log('> PageTemplatePage.componentWillLoad');
    }
    // this.data = await BlogData.load();
    // Get the id from the URL path (slug)
    let id = document.location.pathname.substr(1);
    this.header = BlogData.getPostHeaderById(id);

    // set document title for browser / tab / bookmark
    document.title = this.header.title + ' | ' + EnvironmentConfigService.getInstance().get('siteName');
  }

  // Use this if using source code blocks to be formatted by prism.js...
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


        <img  alt="" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/ionic4-ng-wp-client_featured.gif" />

        <p>To keep my dev skills polished, I always like to have a little weekend side-hustle. This weekend, I decided to start building a Progressive Web App (PWA) for desktop and mobile that delivers WordPress content using Ionic, Angular, and the WordPress API. This is my “developer log”, which you can use as a tutorial for learning more about these technologies or for just understanding the code base, which I’m sharing on GitHub. You can fork the code and customize it for yourself, or share in the development and post pull requests with your improvements.</p>

        <h2>Prerequisites</h2>

        <ul>
          <li>Before proceeding, make sure the latest version of Node.js and npm are installed. I write with the assumption that you are familiar with these two systems.</li><li>You will also need an editor or an IDE (integrated development environment). A free IDE that is&nbsp; fantastic is <a href="https://code.visualstudio.com/">VS Code</a> from Microsoft.</li><li>You’ll need Git if you want to work with my code base. I recommend using Git even if you don’t intend to share code as this will allow you to snapshot stable check-points, keep a journal of commits, and roll back when you screw things up. It’s just good practice.</li><li>Essential references are provided here as they will undoubtably be helpful along the journey:
                        <ul>
              <li><a href="https://ionicframework.com/docs">Ionic Framework Docs</a></li>
              <li><a href="https://developer.wordpress.org/rest-api/">WordPress REST API Handbook</a></li>
            </ul>
          </li>
          <li>Optionally, <a href="https://www.docker.com/get-started">Docker</a>, if you want to setup your local WordPress development environment in the way I describe in this post.</li><li>Evolving source code for this project can be found on GitHub
                        <ul>
              <li>Home:&nbsp;<a href="https://github.com/codyburleson/ionic-ng-wp-client">https://github.com/codyburleson/ionic-ng-wp-client</a></li>
            </ul>
          </li>
        </ul>

        <h2>Install the Ionic CLI</h2>

        <p>The Ionic CLI is a command-line utility that we’ll use for creating and developing our Ionic / Angular app. This needs to be installed globally by using the following command in a terminal or console.&nbsp;For Window’s it’s recommended to open an Admin command prompt. For Mac/Linux, run the command with&nbsp;<code>sudo</code>.</p>

        <p><code>$ npm install -g ionic</code></p>

        <p>If you already have the Ionic CLI installed and you want to update it to the latest version, enter the following command:</p>

        <p><code>$ npm install -g ionic</code></p>

        <h2>Start an app</h2>

        <p>Now we can use the Ionic CLI to&nbsp;create a blank app or a starter-app using a&nbsp; pre-made app template. We’re going to use the <code>sidemenu</code> template, but others are available such as <code>blank</code>, and&nbsp;<code>tabs</code>. Change to the directory where you want to create your project and execute the following command. If you’re following along, you can name the app whatever you want. Naming things is hard, so I’m just going to go with “ionic-ng-wp-client”.</p>

        <p><code>$ ionic start ionic-ng-wp-client sidemenu --type=angular</code></p>

        <p>This will start a command-line wizard sequence:</p>

        <ul>
          <li><code>Install the free Ionic Applow SDK and connect your app? (Y/n)</code> Answer <code>n</code>, no. This can also be added later if desired.</li>
        </ul>

        <h2>Run the App</h2>

        <p>Now we can run the Ionic app to see what the sidemenu template has given us as a starting point. Change into the newly created project’s directory and run the app…</p>

        <pre><code class="language-shell">{CODE_1}</code></pre>

        <p>The ionic serve command will spawn the app in your web browser and it should look something like this:</p>

        <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/ionpress-1.jpg" alt=""  />

        <p>Isn’t that awesome? With just a couple of simple commands, we’ve got a running app and we’re ready to go!</p>

        <p>Now, let’s take a quick peek at the project structure that was created for us.</p>

        <img src="https://codyburleson.com/wp-content/uploads/2018/09/ionpress-3.jpg" alt=""  />

        <p>The <code>src/</code> directory has items such as the <code>index.html</code> file, configuration files for tests, an <code>assets/</code> folder for images, and the main <code>app/</code> directory for the app’s code.&nbsp;The <code>src/app/</code> directory contains the root app component and module as well as additional directories that contain features such as pages, components, services, etc.</p>

        <p>The project has automatically been initialized as a Git repository (notice the <code>.gitignore</code> file) and an Initial commit has been performed on the local repo. From here on out, you’ll see a badge similar to the following, which indicates a point at which I’ve committed code.</p>

        <p><span class="badge badge-secondary">Initial commit</span></p>

        <h2>Setup a WordPress development environment</h2>

        <p>In order to ensure the app works with any general WordPress instance, I want to setup a completely fresh local WordPress instance for development.</p>

        <p>If you already have a local development environment with WordPress installed, or if you just want to develop against your production instance (not recommended), you can skip this section. If you’ve done WordPress development in the past, you might have used something like MAMP. My preference is to use Docker containers, which makes it easier (I think) to have isolated environments for specific purposes like this.</p>

        <p>For this setup, I am generally following the procedure outlined by&nbsp;A. Tate Barber in his post on Medium called <a href="https://medium.com/@tatemz/local-wordpress-development-with-docker-3-easy-steps-a7c375366b9">Local WordPress Development with Docker: 3 Easy Steps</a>. If you don’t have Docker installed, of course, you’ll need to do that first.</p>

        <h3>Setup docker-compose</h3>

        <p>In the project’s root directory, create a file called <code>docker-compose.yml</code> with the following contents.</p>

        <pre><code class="language-yml">{`version: "2"
services:
  my-wpdb:
    image: mariadb
    ports:
      - "8081:3306"
    environment:
      MYSQL_ROOT_PASSWORD: ChangeMeIfYouWant
  my-wp:
    image: wordpress
    volumes:
      - ./wp:/var/www/html
    ports:
      - "8080:80"
    links:
      - my-wpdb:mysql
    environment:
      WORDPRESS_DB_PASSWORD: ChangeMeIfYouWant`}</code></pre>

        <p>This file will create the LAMP stack we need to run WordPress using two containers – one for the database and one for the web server. We are using official Docker images and one is the official WordPress image. It’s also has a shell script that automatically connects to the database container, creates a database, clones WordPress files, and sets up the wp-config based on environment variables that we pass to it (see the official image page for all the options).</p>

        <p>With this docker-compose file in place, we can create and run the environment with a single command. Simply execute the following command from within the project directory.</p>

        <p><code>$ docker-compose up -d</code></p>

        <p>After you run this command and it creates the containers, you can execute the following command to verify that they are running:</p>

        <p><code>$ docker ps -a</code></p>

        <p>You should now have a <code>wp/</code> directory in your project root, which has all the files for WordPress mapped into the container’s&nbsp;<code>/var/www/html</code> directory. It should now look something like this:</p>

        <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/ionpress-4.jpg" alt=""  />

        <p>With the containers running, you can now navigate to <code>http://localhost:8080</code> to complete the WordPress setup.</p>

        <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/ionpress5.jpg" alt=""  />

        <p>If you want to see the output of the containers (to monitor for errors), you can follow their logs with:</p>

        <p><code>$ docker-compose logs -f</code></p>

        <p>If you want to stop and restart the containers, run:</p>

        <pre><code class="language-html">{CODE_3}</code></pre>

        <p>Complete the WordPress setup in the browser. Since this is just a local development environment, I would recommend using a username and password that are simple to remember. wordpress / wordpress, for example.</p>

        <p>We’ve just made a major step in the process, so it’s a good time for a Git commit. First, however, we should add the <code>wp/</code> directory to the <code>.gitignore</code> file and create a <code>README.md</code> that explains to other developers how to run the local docker environment. It’s also a good time to add any other helpful information to the README file, which will be the landing page for the project in GitHub. And then, commit…</p>

        <p><span class="badge badge-secondary">Add docker-compose.yml and README.md</span></p>

        <h3>Populate WordPress with dummy content</h3>

        <p>To build and test the app, we need to have a variety of content in our WordPress instance. For this, we’ll use a handy plugin called FakerPress, which will create dummy content, featured images, random meta information and the like. To install it, navigate to your WordPress Dashboard &gt; Plugins, select Add New, search for “FakerPress” and click Install Now.</p>

        <p>Activate the plugin and then navigate to FakerPress &gt; Posts in the WordPress menu. Set a number of posts to generate and the date range for them. I’m choosing 42 posts for now, with a date range of 2010-09-07 to 2018-09-07. For everything else, I’m keeping the defaults for now.</p>

        <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/ionpress6.jpg" alt=""  />

        <p>Also, in the Meta Field Rules section, you should enter actual range values for the possible width and height sizes for the images. The plugin doesn’t appear to use default values, I learned, so you’ll end up with broken featured images in your posts if you don’t enter hard values as shown below… </p>

        <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/ionpress-meta-field-rules.jpg" alt=""  />

        <p>Click Generate and then give the plugin time to do its thing and voila! We now have a bunch of dummy content to work with…</p>

        <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/ionpress-7-694x1024.jpg" alt=""  />

        <h3>Enable the WordPress REST API</h3>

        <p>Right now, if you navigate to <code>http://localhost:8080/wp-json/wp/v2/posts</code>, you will get 404 Not Found. This has to do with the permalinks setting for your site. The <code>/wp-json/wp/v2</code> endpoint is available when your site is set up to use the custom permalink setting.</p>

        <p>In the WordPress dashboard, navigate to Settings &gt; Permalinks and choose the Custom Structure with <code>/%postname%/</code> in the field after the host and port. Save changes and try the URL again.</p>

        <p>This time, you should see a lot of JSON in your browser, which confirms that the REST endpoint is now accessible.</p>

        <pre><code class="language-json">{CODE_4}</code></pre>

        <h2>Store the API URL</h2>

        <p>Next, we we’ll configure the REST API endpoint URL in source code using environment constants. This will allow us to use a different endpoint URL for different environments and also have just one place for users to change the configuration to suit their own needs.</p>

        <p>Add the API <code>endpointURL</code> to <code>src/app/environments/environment.prod.ts</code> and to <code>src/app/environments/environment.ts</code> as shown below.</p>

        <p><strong>src/environments/environment.prod.ts</strong></p>

        <pre><code class="language-js">{CODE_5}</code></pre>

        <p><strong>src/environments/environment.ts</strong></p>

        <pre><code class="language-js">{CODE_6}</code></pre>

        <p>Later, this allow us to get the URL from our environment by using:</p>

        <pre><code class="language-js">{CODE_7}</code></pre>

        <p>Commit the change…</p>

        <p><span class="badge badge-secondary">Store the API URL</span></p>

        <h2>Stub out the DataService</h2>

        <p>At this point, we’re ready to get cooking! To begin with, we’ll need a service that can intermediate between the REST endpoint and our components in the app. We can use the Ionic CLI to generate the necessary stub files and, since this will be a shared component, we’ll put it in a <code>shared/</code> directory. We do this simply by running the following command.</p>

        <p><code>$ ionic generate</code></p>

        <p>This presents a little menu as shown below.</p>

        <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/ionpress8.jpg" alt=""  />

        <p>Select the service option and hit <kbd>enter</kbd>. Then, for the <code>Name/path of service:</code>, type <code>shared/Data</code>&nbsp;and hit <kbd>ENTER</kbd>.</p>

        <p>This generates a TypeScript file for the service and a test specification.</p>

        <ul>
          <li><code>src/</code>
            <ul>
              <li><code>app/</code>
                <ul>
                  <li><code>shared/</code>
                    <ul>
                      <li><code>data.service.spec.ts</code></li>
                      <li><code>data.service.ts</code></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

        <p>Take a look at <code>data.service.ts</code>. Here’s what the Ionic CLI generated for us.</p>

        <pre><code class="language-js">{CODE_8}</code></pre>

        <p>In keeping with good Angular style practice, the CLI appended <code>Service</code>, so the name is <code>DataService</code>.</p>

        <p>We can add the import and a constant for the ENDPOINT_URL, which we’ll need later when we flesh out the service.</p>

        <pre><code class="language-js">{CODE_9}</code></pre>

        <h3>Install RxJS dependencies</h3>

        <p>To fetch data from the endpoint, we’ll be using the Angular <a href="https://angular.io/guide/http">HttpClient</a>. It makes use of Observables instead of Promises, so we’ll need to install&nbsp;RxJS dependencies. Run the following command:</p>

        <p><code>npm install rxjs &amp;&amp; npm install rxjs-compat</code></p>

        <p>We also need to add the&nbsp;<code>HttpClientModule</code> to the imports in <code>src/app/app.module.ts</code> so that <code>app.module.ts</code> should then look like this:</p>

        <pre><code class="language-ts">{CODE_10}</code></pre>

        <p>Next, we’ll add methods to fetch post data from the API endpoint. Update <code>src/app/shared/data.service.ts</code> with the following code…</p>

        <pre><code class="language-ts">{CODE_11}</code></pre>

        <p>Now we we’ll add methods for the Home view to communicate with the DataService. Update <code>src/app/home/home.page.ts</code> with the following code…</p>

        <pre><code class="language-ts">{CODE_12}</code></pre>

        <p>Now if you run <code>ionic serve</code> and inspect the console, you should see that post items are being returned from WordPress and logged to the console…</p>

        <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/ionpress-9.jpg" alt=""  />

        <p>Sweet! Now we’ll put those items into the view using&nbsp;<code>ion-list</code> and <code>ion-item</code>. Update <code>src/app/home/home.page.html</code> with the following code…</p>

        <pre><code class="language-html">{CODE_13}</code></pre>

        <p>Now, when you run the app with <code>ionic serve</code>, you should see something similar to the following.</p>

        <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/ionpress-10.jpg" alt=""  />

        <p>The app runs fine, but if we run <code>ng test</code> at this point, we’ll get some errors, because we also need to make the <code>HttpClientModule</code> available to the test specs for the HomePage and DataService.</p>

        <p>In <code>src/app/home/home.page.spec.ts</code>, import the <code>HTTPClientModule</code> and then add the <code>HttpClientModule</code> into an <code>imports</code> stanza in the <code>TestBed</code> configuration, similar to how it’s done in <code>app.module.ts</code>. When you’re done, the <code>home.page.spec.ts</code> file should look like this:</p>

        <pre><code class="language-ts">{CODE_14}</code></pre>

        <p>We need to do the same for the <code>data.service.spec.ts</code> file. When you’re done, the file should look like this:</p>

        <pre><code class="language-ts">{CODE_15}</code></pre>

        <p>Now, if you run ng test, all tests should pass. Great! It’s a good time to commit this stable check-point. I’m doing so with the following commit message:</p>

        <p><span class="badge badge-secondary">Stub out the DataService</span></p>

        <h2>Wrapping up</h2>

        <p>For this weekend side-hustle, I provided initial steps for building a Progressive Web App (PWA) for desktop and mobile that delivers WordPress content using Ionic, Angular, and the WordPress API. So far, all we’ve done is set the stage, but I’m posting the process in parts so that it might be more immediately helpful to anybody who needs it. I hope it has been helpful to you.</p>

        <p>Remember that the evolving source code can always be cloned from GitHub at&nbsp;<a href="https://github.com/codyburleson/ionic-ng-wp-client">https://github.com/codyburleson/ionic-ng-wp-client</a>.</p>

        <p>I hope you’ll join me on this project, contribute comments, or your own improvements.&nbsp;I intend to take the project further and will continue my “developer log” here, so stay tuned!</p>

        <p>Want to keep going? Click the link below for Part 2:</p>

        <p><strong><a href="/pwa-with-ionic-angular-wordpress-api-2/">Build a PWA with Ionic, Angular, and the WordPress REST API – Part 2</a></strong></p>

      </ion-content>

    ];
  }
}