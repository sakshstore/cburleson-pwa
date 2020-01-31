import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-are-mashups-the-new-portals-and-gadgets-the-new-portlets',
})
export class PageAreMashupsTheNewPortals {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageAreMashupsTheNewPortals.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
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

                            <p>What it means to be a portal and a portlet may be changing. With <a href="http://web.archive.org/web/20090702082524/http://www.google.com/webmasters/gadgets/" rel="nofollow">Google Gadgets</a>, <a href="http://web.archive.org/web/20090702082524/http://code.google.com/apis/opensocial/" rel="nofollow">OpenSocial</a>, and <a href="http://web.archive.org/web/20090702082524/http://incubator.apache.org/shindig/" rel="nofollow">Apache Shindig</a>, application functionality can now be delivered to any page on the web, backed by any variety of web and application servers. Using only HTML, JavaScript, and REST/RPC protocols, gadgets are more universal than JSR 168 Portlets and arguably more amenable to rich internet application techniques like <a href="http://web.archive.org/web/20090702082524/http://en.wikipedia.org/wiki/Ajax_%28programming%29" rel="nofollow">Ajax</a>. Gadgets go hand-in-hand with OpenSocial, a common API that can help you bring social networking features to your applications. With OpenSocial, it is possible to extend the range of your apps and evolve towards Enterprise 2.0 while adhering to a service oriented model. Shindig is an OpenSocial container from Apache that can help you make any website capable of hosting these gadgets and social apps. Taken together, these kinds of technologies have to make one wonder if the days of the monolithic enterprise portal platform are nearing an end.</p>
                            <p>As a former consultant for PricewaterhouseCoopers and IBM, I have spent many years working to help companies realize the promise of an enterprise portal: one consistent interface to the enterprise, a common development platform, common infrastructure, standardized application architecture, employee self-service, security, personalization, content management, application integration, single sign-on, and the like. IBM WebSphere Portal, Oracle WebLogic Portal, and SAP NetWeaver Portal are just a few of the platforms I&#8217;ve worked with that promise to deliver all this value in a single package. But if there is one thing I&#8217;ve learned from my experience with these behemoths, it is that tapping that value and getting honest-to-goodness ROI in a large organization is incredibly hard. In fact, professional consultants have coined a term to describe the feeling customers have after a year or more of design, installation, customization, configuration and tuning – we call it &#8220;portal fatigue&#8221;.</p>
                            <p>The fact is that while the promise is noble, integrating a large enterprise on one platform does not honor the reality in most organizations. For one thing, it presents a huge governance challenge. It requires C-level sponsorship, unification across organizational boundaries, an integrated funding model, and centralized management that can deal with being blamed for any individual problem that makes the whole thing look bad. Building an enterprise portal is difficult in itself &#8211;  running it efficiently is then an entirely new problem.</p>
                            <p>There is also the problem of lethargy. The portal is supposed to deliver &#8220;on-demand&#8221; transformation to your enterprise and help you respond more quickly to new business requirements. But what happens when you line up an entire organization behind a single deployment process? It&#8217;s like waiting to ride a roller coaster at Six Flags on a sunny summer afternoon. By the time you actually get your seat, you&#8217;ve already wasted a great portion of your day at the park – aside from being severely dehydrated.</p>
                            <p>Then there is the problem of variety amongst developers and their unwavering love for the particular technology they use. In one division, you have the Java guys. Since most of the enterprise-class platforms are based on Java, these guys often hold the keys to the kingdom – or at least they think they do or think they should. You also have the mainframe bunch. Their apps, old as they may be, still form the mission-critical heart of many organizations. There are ColdFusion, ASP, and .NET developers and all their various applications serving a variety of needs from &#8216;rogue&#8217; servers tucked inconspicuously under desks and in storage closets. And then there are &#8216;the new kids on the block&#8217; – the youngest new group of web savvy, open source users who&#8217;ve mastered Web 2.0 and who dig things like PHP. None are less or more than the others. They are just different and these differences often make it difficult to get them on the same page – especially if that page is not based on just a few common standards they all understand such as HTML, JavaScript, and CSS. Which brings me to my point.</p>
                            <p>This is all about the need to share information and collaborate amongst employees, with business partners, and with customers. The two things we all share are the browser and the Net. That is why technologies like Gadgets and OpenSocial are so appealing now. They seek to unify us where we are common – on the web page where just a few simple standards are well excepted. They embrace our differences by responding to any back-end technology that can ultimately serve an HTTP response. They provide a new means to integrate application functionality and data at the front-end without as much reliance on changes in the back-end. They can also extend the reach of our information into new applications on the Web while improving our ability to pull data and features from those apps into our own.</p>
                            <p>While all of this is naturally maturing in the open domain of the World Wide Web, it has enormous potential behind the firewall. Atlassian Software, for example, has embraced the paradigm in their products (<a href="http://web.archive.org/web/20090702082524/http://www.atlassian.com/opensocial/" rel="nofollow">Atlassian + OpenSocial</a>). They&#8217;ve made it possible to build a dashboard incorporating gadgets from Confluence, JIRA, Bamboo, Crucible, and external sources. Those same gadgets can also be deployed to other applications such as iGoogle, Google Desktop, and GMail. IBM has also embraced the paradigm by extending <a href="http://web.archive.org/web/20090702082524/http://www.ibm.com/developerworks/websphere/library/techarticles/0705_schaeck/0705_schaeck.html" rel="nofollow">support for Google Gadgets in WebSphere Portal 6</a>. Support is huge on the Web, and growing fast within the firewall.</p>
                            <p>This doesn&#8217;t necessarily mean that the enterprise portal platform is really dying. But if I had my choice today, I would at least think twice before writing another fat portlet on JSR 168 with JSF. When designing new applications, we must always ask the questions, &#8220;How can I make this investment usable and useful by and for more than just this one app? How can I make this information more open and accessible across the entire enterprise – across enterprises? How can I be sure I&#8217;m not just building another information silo?&#8221; With technologies like Google Gadgets, OpenSocial, and Apache Shindig, we now have fresh new paradigms to consider.</p>

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