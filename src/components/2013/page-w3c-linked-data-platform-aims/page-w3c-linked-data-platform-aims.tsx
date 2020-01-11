import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-w3c-linked-data-platform-aims-to-reframe-the-web',
})
export class PageW3cLinkedDataPlatformAims {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageW3cLinkedDataPlatformAims.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + SITENAME;
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

                            <p><img class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/w3c-linked-data-1.png" alt="" width="150" height="150" />Last week at the Center for Open Middleware in Madrid, Spain, history was made. The World Wide Web Consortium’s Linked Data Platform working group concluded a third face-to-face meeting in which the finer points of an emerging specification were vigorously debated. Being the dumbest guy in the room is not usually something to be proud of, but I’m lucky to have been there. What occurred last week pertains to a paradigm shift in computing on a global scale and it will ultimately affect the future of the World Wide Web.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/w3c-linked-data-2.png" alt="" /></p>

                            <p><em>W3C’s Linked Data Platform working group, Madrid, Spain, June 2013</em></p>

                            <p>From left to right: Cody Burleson (me), Henry Story, Nandana Mihindukulasooriya, Raúl García Castro, Arnaud Le Hors (top row), John Arwe (green shirt), Miel Vander Sande, Steve Speicher, Ashok Malhotra (grey beard), Miguel Esteban Gutiérrez, Kevin Page, and Roger Menday. Note that others attended our daily meetings by phone. Some of the other contributors include Ted Thibodeau, Bart van Leeuwen, Steve Battle, Sandro Hawke, David Wood, and Eric Prud’hommeaux. Numerous other contributors have also been playing an active role, and I beg pardon for not including an exhaustive list.</p>

                            <h2>Reframing the Web</h2>

                            <p>Though I’ve been working with web technology for years, it still takes every ounce of concentration I’ve got to keep up with these guys. They argue and debate in a language that seems to know every little nuance of every specification that defines the Web that runs our world. They cite RFC numbers and even specific passages by memory while, pretending to take notes, I am Googling feverishly to keep up. At times, following along is a bit like reading RegEx, but I think I can boil it down to the salient points for you.</p>

                            <p>What we’re working on is a new reframing of the Web – an essential new part of the emerging Semantic Web, called the Linked Data Platform. Years ago, we were compelled to put our documents on the Internet and through what was essentially a wildly successful grassroots movement, the World Wide Web was born. Now, we are compelled to put our data on the Web in a new movement that promises to transform the current Web of linked documents into a Web of linked data. It’s sort of like turning the Web into a massive database, which will allow us to mix and mash, query, and process information like never before. It promises to unlock what is still incredibly huge potential – huge enough to change the world yet again.</p>

                            <p><img class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/w3c-linked-data-3.gif" alt="" width="150" height="753" />So, what’s the big deal? What’s the big difference between linkeddocuments and linked data? Documents on the web are largely unstructured or just semi-structured. They are mainly designed for browsers to render and for humans to read. Data, on the other hand, is structured for processing. You can do a lot of magical things with it. Take statistics guru, Hans Rosling’s global trends in health and economics for example. In one of the most amazing TED presentations to date, he showed how visualizing data could help us see new things – breaking down our preconceived notions and debunking common myths about the so-called “developing world”. By putting a bunch of existing data together, he was able to elicit much more from all the data than what was originally there. If Hans could do something so spectacular with what he was able to cobble together, just imagine the possibilities in a world where everybody is putting data on the Web.</p>

                            <p>The technology for Linked Data is actually extremely simple:</p>

                            <p>First, those HTTP URLs or URIs that you normally see in your web browser’s address bar are now being used to identify, not just documents, but the things that they are about; concepts and real-world things (people, places, products, events, etc).<br />
                                Second, if we use those URI’s to fetch data using the HTTP protocol, we should get back data in standard and well-defined formats (using RDF and SPARQL, for example).<br />
                                Third, when we get that data back, it doesn’t just contain information about the entity we asked for, but also relationships and links to other things. These relationships are expressed with URIs and so, through these linked URI’s and the standards for the data, we can slice, dice, and traverse the web as one big graph of information.<br />
                                Data comes in a lot of forms and formats. It is incredibly diverse. There is government data; tons of it. Medical data. Scholastic data. Genomics data. Social data. Geographic data. The list goes on and on. Unlocking and linking this data will represent a sea change of insight and discovery. The Linked Data Platform (LDP) can help us in this plan by providing a standard set of principles and patterns for interacting with Linked Data over HTTP (accessing, updating, creating and deleting resources from servers that expose their resources as Linked Data). There’s a lot more to reframing the Web than just the LDP, but we believe the LDP is going to play an extremely important role.</p>

                            <p>The working group hopes to have a recommendation published by Q1, 2014. In the mean-time, you can review some of our work-in-progress on the working group’s wiki. You can also follow my blog and I’ll keep you posted.</p>

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