import { Component, h } from '@stencil/core';
// Use this if using source code blocks to be formatted by prism.js...

import Prism from "prismjs"
import 'prismjs/components/prism-typescript.min';
import 'prismjs/components/prism-json.min';
import 'prismjs/components/prism-apacheconf.min';
// import 'prismjs/components/prism-php.min';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-pwa-with-ionic-angular-wordpress-api-5',
})
export class PagePwaWithIonicAngularWordpressApi5 {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PagePwaWithIonicAngularWordpressApi5.componentWillLoad');
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

                <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/ionic4-ng-wp-client_featured.gif"  alt="" />

                <p>In this weekend side-hustle series, we’re building a Progressive Web App (PWA) for desktop and mobile that delivers WordPress content using Ionic, Angular, and the WordPress API. In <a href="/pwa-with-ionic-angular-wordpress-api-1/">Part 1</a>, we got everything setup and working. In <a href="/pwa-with-ionic-angular-wordpress-api-2/">Part 2</a>, we created a richer presentation of the WordPress Posts using Ionic cards. In <a href="/pwa-with-ionic-angular-wordpress-api-3/">Part 3</a>, we implemented the single post view. In <a href="/pwa-with-ionic-angular-wordpress-api-4/">Part 4</a> we implemented paging functionality using Ionic’s Infinite Scroll (<a href="https://beta.ionicframework.com/docs/api/infinite-scroll/">ion-infinite-scroll</a>). Today, we’ll implement authentication so that we can login to WordPress. For now, this will just enable users to view private posts, but it will also be necessary in the future if we choose to allow administration from within the client app or other things like adding comments.</p>

                <h2>Part 4 Recap</h2>

                <p>Here’s a quick recap of what we accomplished in Part 4.</p>

                <ul>
                    <li>Updated the DataService to get more posts</li>
                    <li>Updated the HomePage component to use infinite scroll</li>
                    <li>Added ion-infinite-scroll to the HomePage component HTML</li>
                    <li>Made revised source code available on GitHub at <a href="https://github.com/codyburleson/ionic-ng-wp-client" rel="nofollow">https://github.com/codyburleson/ionic-ng-wp-client</a>.</li>
                </ul>

                <p>The final result of Part 4 still looks the same as what we ended with in Part 3, except that now, scrolling to the bottom of the list of posts loads more posts.</p>

                <h2>Create a Login page</h2>

                <p>To implement authentication with WordPress, we’re now going to need a login page, so we’ll start with that. Run the following command:</p>

                <p><code>ionic generate</code></p>

                <p>Choose the <code>page</code> type from the list of options and enter “Login” for the name/path. The Ionic CLI will generate the following files:</p>

                <ul>
                    <li>src/app/login
                        <ul>
                            <li>login.module.ts</li>
                            <li>login.page.html</li>
                            <li>login.page.scss</li>
                            <li>login.page.spec.ts</li>
                            <li>login.page.ts</li>
                        </ul>
                    </li>
                </ul>

                <p>We’ll get back to this component in a bit, but first, let’s add the Login page to the menu.</p>

                <h2>Add the new Login page to the menu</h2>

                <p>Our menu of pages is generated from the public appPages array in AppComponent. Modify <code>src/app/app.component.ts</code> so that the <code>appPages</code> array now looks like this…</p>

                <pre><code class="language-ts">{`public appPages = [
    {
        title: 'Home',
        url: '/home',
        icon: 'home'
    },
    {
        title: 'List',
        url: '/list',
        icon: 'list'
    },
    {
        title: 'Login',
        url: '/login',
        icon: 'unlock'
    }
]`}</code></pre>

                <p>Now, if you open <code>src/app/app-routing.module.ts</code>, you will find that the Ionic CLI already placed a route entry. We only need to change that entry so that the route uses all lower case for the login route and we want to move it above the <code>:slug</code> route as follows…</p>

                <pre><code class="language-ts">{`const routes: Routes = [
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
    {path: 'login', loadChildren: './login/login.module#LoginPageModule'},
    {path: ':slug', loadChildren: './post/post.module#PostPageModule'}
];`}</code></pre>

                <p>Now if you run the app with <code>ionic serve</code>, we can see the new menu item and we can navigate the the Login page.</p>

                <p><img  src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/ionpress18.jpg" alt="" /></p>

                <p>Since this is a stable check-point, we’ll do a Git commit so that we can roll back if we screw something up later. Here, I am committing with the following Git commit message.</p>

                <p><span class="badge badge-secondary">Add login page (stub)</span></p>

                <h2>Create the AuthenticationService</h2>

                <p>Run the <code>ionic generate</code> command, select the <code>service</code> type from the list of options, and then enter &quot;Authentication&quot; for the Name/path of the service. Now open the newly generated file, <code>src/app/shared/authentication.service.ts</code> and modify it as follows…</p>

                <pre><code class="language-ts">{`import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const ENDPOINT_URL = environment.endpointURL;
@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private user: any;
    constructor(private http: HttpClient) {
    }
    /**
     * Login to WordPress via JWT. Returns object with the following shape:
     * {
     *      token: "eyJ0eXAiOiJKV1QiLCJhbGci...",
     *      user_email: "someuser@somewhere.com",
     *      user_nicename: "wordpress",
     *      user_display_name: "wordpress"
     * }
     */
    doLogin(username, password) {
        return this.http.post(ENDPOINT_URL + 'jwt-auth/v1/token', {
            username: username,
            password: password
        });
    }
    validateAuthToken(token) {
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'Basic ' + token);
        return this.http.post(ENDPOINT_URL + 'jwt-auth/v1/token/validate?token=' + token,
            {}, {headers: headers});
    }
    getUser() {
        return this.user;
    }
    setUser(user) {
        this.user = user;
    }
}`}</code></pre>

                <p>This service is written to use a JSON web token based login, which requires the installation and configuration of a WordPress plugin, which is described next.</p>

                <h2>Install and configure JWT Authentication for WP REST API</h2>

                <p>To make the authentication service work, we&nbsp;must install the&nbsp;<a href="https://es.wordpress.org/plugins/jwt-authentication-for-wp-rest-api/" target="_blank" rel="noopener noreferrer">wp-api-jwt-auth</a>&nbsp;plugin which allows us to generate an authentication token. Carefully follow all of the instructions for installation and configuration provided on the plugin’s information page. In general this involves:</p>

                <ul>
                    <li>Installing the plugin,</li>
                    <li>Editing the <code>.htaccess</code> file to enable the&nbsp;HTTP Authorization Header if it is not enabled,</li>
                    <li>Enabling a secret key by adding a constant to the <code>wp-config.php</code> file,</li>
                    <li>Enabling CORS support by adding a constant to the&nbsp;<code>wp-config.php</code> file,</li>
                    <li>And finally, activating the plugin within wp-admin.</li>
                </ul>

                <p>If you’ve been using the Docker container-based local development environment that was described in Part 1, then you may want to know how to access the <code>.htaccess</code> file and the <code>wp-config.php</code> file that is within the container. You can get container shell access with root privileges using the following command:</p>

                <p><code>docker exec -ti -u root &lt;container-name&gt; bash</code></p>

                <p>In my case, for example, the command is:</p>

                <p><code>docker exec -ti -u root ionpress_my-wp_1 bash</code></p>

                <p>To find the names of your running containers, use the <code>docker ps -a</code> command.</p>

                <p>To install the nano editor, you can run the following command in the container.</p>

                <p><code>apt-get update &amp;&amp; apt-get -y install nano</code></p>

                <p>Then you can run the following command to open and edit the .htaccess file using nano.</p>

                <p><code>nano ./.htaccess</code></p>

                <p>After editing the <code>.htaccess</code> file for the JWT plugin, mine now looks like this:</p>

                <pre><code class="language-apacheconf">{`# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{HTTP:Authorization} ^(.*)
RewriteRule . /index.php [L]
RewriteRule ^(.*) - [E=HTTP_AUTHORIZATION:%1]
</IfModule>
# END WordPress`}</code></pre>


                <p>Next, you can then run the following command to edit the <code>wp-config.php</code> file…</p>

                <p><code>nano ./wp-config.php</code></p>

                <p>Add the following to the file:</p>

                <pre><code>{`/** WordPress JWT Authentication for WP REST API **/
/** You can generate secret keys with this URL: https://api.wordpress.org/secret-key/1.1/salt/ **/
define('JWT_AUTH_SECRET_KEY', 'EBgvg4a,bmBYrTf&|-f5{~W0WoZH]&([JCp{GN\`4[Zg4- vX-W|(3!a Ck.-OPd5');
define('JWT_AUTH_CORS_ENABLE', true);`}</code></pre>

                <p><em>Note that as stated in the comment in the snippet above, you can&nbsp;generate secret keys with this URL: <a href="https://api.wordpress.org/secret-key/1.1/salt/">https://api.wordpress.org/secret-key/1.1/salt/</a></em></p>

                <p>Once the <code>.htaccess</code> file and the <code>wp-config.php</code> file have been edited, you should then activate the plugin within wp-admin. I’m not sure if it is necessary to stop and restart the container after these changes, but I did, just in case.</p>

                <p>At this point, we want to update the README.md file to let users and developers know that the JWT plugin is necessary for our client app to work. I’ve done that and am commiting that change with the following Git commit message.</p>

                <p><span class="badge badge-secondary">Update README.md with instructions for WordPress JWT plugin</span></p>

                <h2>Create a private post</h2>

                <p>To test the authentication, we’re also going to need a private post in WordPress that will help us validate that the login works. If we login and can see the private post, we’ll know the authentication works. In WordPress, create a post and in the Publish widget, set the visibility to private.</p>

                <h2>Modify Login page HTML</h2>

                <p>Now, we need a login form on the Login page. Edit <code>src/app/login/login.page.html</code> to be as follows…</p>

                <pre><code class="language-html">{`<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button></ion-menu-button>
    </ion-buttons>
    <ion-title>Login</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content padding>
  <div class="alert alert-danger" role="alert" *ngIf="error_message">{{error_message}}</div>
  <form [formGroup]="login_form" (ngSubmit)="login(login_form.value)">
    <ion-item>
      <ion-label color="primary">Username</ion-label>
      <ion-input type="text" formControlName="username" placeholder="Enter username" required></ion-input>
    </ion-item>
    <ion-item>
      <ion-label color="primary">Password</ion-label>
      <ion-input type="password" formControlName="password" placeholder="Enter password" required></ion-input>
    </ion-item>
    <ion-button expand="full"  type="submit">Login</ion-button>
  </form>
</ion-content>`}</code></pre>

                <p>This will give us a simple login form like this…</p>
                <p><img  src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/ionpress-login-form.jpg" alt="" /></p>

                <h2>Modify Login page style</h2>

                <p>When the user enters invalid credentials, we want the error message to show in a nice red alert block. For this, I’ve borrowed a styles and class names from Bootstrap 4 (even though Bootstrap is not included in the project). Edit <code>src/app/login/login.page.scss</code> to be as follows.</p>

                <pre><code class="language-css">{`.alert {
  position: relative;
  padding: .75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: .25rem;
}
.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}`}</code></pre>
                <p>Of course, we might move these styles in the future to make them global (for now, they apply only to the LoginPage component).&nbsp;This will give us a simple red-boxed error prompt like this…</p>

                <p><img  src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/ionpress-login-form-err.jpg" alt="" /></p>

                <h2>Import the ReactiveFormsModule</h2>

                <p>Since we’re using a form now, we’ll need to import the ReactiveFormsModule into the module for the LoginPage component. Edit <code>src/app/login/login.module.ts</code>. We just need to add <code>ReactiveFormsModule</code> to the <code>@NgModule</code> imports section. The full file should then look like this…</p>

                <pre><code class="language-ts">{`import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {LoginPage} from './login.page';
const routes: Routes = [
    {
        path: '',
        component: LoginPage
    }
];
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [LoginPage]
})
export class LoginPageModule {
}`}</code></pre>

                <h2>Modify the LoginPage component</h2>

                <p>Edit <code>src/app/login/login.page.ts</code> to be as follows…</p>

                <pre><code class="language-ts">{`import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {LoadingController} from '@ionic/angular';
import {AuthenticationService} from '../shared/authentication.service';
import {DataService} from '../shared/data.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    login_form: FormGroup;
    error_message: string;
    constructor(
        public formBuilder: FormBuilder,
        public loadingController: LoadingController,
        public authenticationService: AuthenticationService,
        public dataService: DataService,
        private router: Router) {
    }
    ngOnInit() {
        this.login_form = this.formBuilder.group({
            username: new FormControl('', Validators.compose([
                Validators.required
            ])),
            password: new FormControl('', Validators.required)
        });
    }
    async login(value) {
        const loading = await this.loadingController.create({
            duration: 5000,
            message: 'Please wait...'
        });
        loading.present();
        this.authenticationService.doLogin(value.username, value.password)
            .subscribe(res => {
                    this.authenticationService.setUser(res);
                    // Reset the post items so that next time, they are completely
                    // reloaded for the newly authenticated user...
                    this.dataService.items = [];
                    loading.dismiss();
                    this.router.navigateByUrl('home');
                },
                err => {
                    this.error_message = 'Invalid credentials.';
                    loading.dismiss();
                    console.log(err);
                });
    }
}`}</code></pre>

                <p>What’s going on here?</p>

                <ul>
                    <li>In the login() function, we display an Ionic loading controller.</li>
                    <li>We then pass credentials from the form to the authentication service.</li>
                    <li>If the login is successful…
<ul>
                            <li>The service returns a user object. For now, we give the user object back to the singleton service (with <code>setUser()</code>). Probably, in the future, we should make this step unnecessary by automatically setting the user in the service itself. But… we’re going in iterative steps here. We’ll get to that someday soon.</li>
                            <li>We clear out the list of posts from the DataService so that they’ll be completely reloaded. This ensures that any private posts that may now be available to the authenticated user will be loaded when we return to the Home page.</li>
                            <li>We dismiss the loading spinner.</li>
                            <li>Then finally, we navigate Home, which reloads the first page of posts (this time passing the token and thus getting public <em>and private</em> posts).</li>
                        </ul>
                    </li>
                    <li>If the login is unsuccessful, we set an error message, which will appear on the login form and in the browser console.</li>
                </ul>

                <h2>Modify the DataService</h2>

                <p>Finally, we just need to modify the DataService. Edit <code>src/app/shared/data.service.ts</code> to be as follows…</p>

                <pre><code class="language-ts">{`import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
const ENDPOINT_URL = environment.endpointURL;
@Injectable({
    providedIn: 'root'
})
export class DataService {
    items: any[] = [];
    page = 1;
    totalPages = 1;
    constructor(private http: HttpClient, public authenticationService: AuthenticationService) {
    }
    /**
     * Gets a page of posts or all posts formerly fetched
     */
    getPosts(): any {
        if (this.items.length > 0) {
            return of(this.items);
        } else {
            const user = this.authenticationService.getUser();
            if (user) {
                return this.http.get(ENDPOINT_URL + 'wp/v2/posts?_embed&status=any&token=' + user.token,
                    {observe: 'response', headers: {'Authorization': 'Bearer ' + user.token}})
                    .map(this.processPostData, this);
            } else {
                return this.http.get(ENDPOINT_URL + 'wp/v2/posts?_embed', {observe: 'response'})
                    .map(this.processPostData, this);
            }
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
}`}</code></pre>

                <p>In the <code>getPosts()</code> function, we now look for a user object. If we find it, that means we are authenticated (we have a token to use). If we have a user, we use the following snippet instead of the former one.</p>

                <pre><code class="language-ts">{`return this.http.get(ENDPOINT_URL + 'wp/v2/posts?_embed&status=any&token=' + user.token,
    {observe: 'response', headers: {'Authorization': 'Bearer ' + user.token}})
    .map(this.processPostData, this);`}</code></pre>

                <p>We’re doing three things different here now.</p>

                <ol>
                    <li>We’re using the URL parameter and value,&nbsp;<code>status=any</code>, which indicates to WordPress that we now want posts with any status (i.e. public <em>and</em> private).</li>
                    <li>We’re using the URL parameter, <code>token</code>, with the value of the token given back by the JWT plugin when we logged in.</li>
                    <li>We’re also passing the Authorization HTTP header with the token value; that’s the part written as&nbsp;headers: <code>&#123;'Authorization': 'Bearer ' + user.token&#125;</code></li>
                </ol>

                <p>And that is it! Now, if you run the app with <code>ionic serve</code>, you will not see any private posts at first. But, if you login successfully, you should then see all posts (both public and private). In the screenshot below, for example, the post your reading now is indicated as Private, which is how I keep them until I’m ready to make them public.</p>

                <p><img  src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/09/ionpress-post-login.jpg" alt="" /></p>

                <p>I’m committing the code to <a href="https://github.com/codyburleson/ionpress" rel="nofollow">Github</a> at this point with the following message:</p>

                <p><span class="badge badge-secondary">Implement authentication</span></p>

                <h2>Wrapping up</h2>

                <p>Today we took a big step in terms of the necessary plumbing. We implemented authentication with a little help from the WordPress plugin,&nbsp;JWT Authentication for WP REST API. We proved this authentication using a private post, which will only display after we’re authenticated.</p>

                <p>There are still so many more things to be done, I’m not quite sure what’s best to start on next, but I will be continuing the series, so stay tuned&nbsp;so stay tuned and remember that the evolving source code can always be cloned from GitHub at&nbsp;<a href="https://github.com/codyburleson/ionic-ng-wp-client" rel="nofollow">https://github.com/codyburleson/ionic-ng-wp-client</a>.</p>

            </ion-content>

        ];
    }
}