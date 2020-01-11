import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-identifying-large-objects-consuming-memory-in-java-heap',
})
export class PageIdentifyingLarge {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageIdentifyingLarge.componentWillLoad');
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

                            <p>Recently, we experienced some excessive memory consumption that was leading our servers into an out-of-memory (OOM) condition. To troubleshoot the issue, we needed a way to identify any large objects that were filling up the heap. As it turns out, there’s a JVM argument for this.</p>

                            <p>Generic JVM argument: <code>-Xdump:stack:events=allocation,filter</code></p>

                            <p>If you set this option, whenever an allocation request is made for an object greater than or equal to the given size, the Java stack trace corresponding to the thread requesting the allocation is printed into the standard error log. From this stack trace, you can easily see which actual Java class is eating up all your memory. For example, the following setting will print the stack information for all allocations over 10 megabytes to the native_stderr.log:</p>

                            <p><code>-Xdump:stack:events=allocation,filter=#10m</code></p>

                            <p>You can also view an allocation within a certain range of values. The following, for example, will print the stack information for all allocations between 2m and 4m to the native_stderr.log</p>

                            <p><code>-Xdump:stack:events=allocation,filter=#2m..4m</code></p>

                            <p>You can read more about this in the following IBM technote:</p>

                            <p><a href="http://www-01.ibm.com/support/docview.wss?uid=swg21236523" rel="nofollow">Identifying the Java stack of a thread making an allocation request larger than a certain size</a></p>

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