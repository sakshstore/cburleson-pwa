import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, isLocal, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-avoid-tracking-ga-page-views-in-atlassian-confluence',
})
export class PageAvoidTracking {

    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('>> PageAvoidTracking.componentWillLoad');
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


                            <p>Here's how to avoid tracking page views in Google Analytics when you're logged in as an administrative or other specific user.</p>
                            <p>This solution presupposes that your Google Analytics tracking snippet is pasted into the field labelled &quot;At end of the HEAD&quot; in the Custom HTML section in the Confluence Administration Area as shown below&#8230;</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/ga-snippet-in-confluence-admin.jpg" alt="" /></p>

                            <p>Before modification, your Google Analytics tracking code should look something like this.</p>

                            <deckgo-highlight-code language="html"><code slot="code">{`<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
 
ga('create', 'UA-XXXXXXXX-X', 'auto');
ga('send', 'pageview');
 
</script>`}</code></deckgo-highlight-code>

                            <p>Now, to avoid tracking pages for an administrative user (or any particular user or set of users, for that matter), you can wrap the ga() function calls in an IF check. In the following code, we use the Confluence AJS object to determine whether or not the authenticated user is an administrative user. If that&#8217;s true, we do not reach the ga() functions and thus, the pageview is not tracked. In all other cases, however, the pageview will be tracked.</p>

                            <deckgo-highlight-code language="html"><code slot="code">{`<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
 
if(! AJS.params.isConfluenceAdmin) {
    ga('create', 'UA-XXXXXXXX-X', 'auto');
    ga('send', 'pageview');
}
</script>`}</code></deckgo-highlight-code>

                            <p>You could use console.log statements to test this in your local browser.</p>

                            <p>If you want to avoid logging page views for specific users, you can check for specific user names with <code>AJS.params.remoteUser</code>.</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">

                            

                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}