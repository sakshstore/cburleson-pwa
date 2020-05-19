import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, isLocal, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

const CODE_1 = `<tr *ngFor="#item of data; #ndx = index">
    <td>{{ndx+1}}</td>
    <td>{{item.po}}</td>
    <td>{{item.serviceType}}</td>
    <td>{{item.validStart}}</td>
    ...
</tr>`;

@Component({
    tag: 'page-index-of-item-within-angular-ngfor-loop',
})
export class PageIndexOfItemWithinAngularNgforLoop {

    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('>> PageIndexOfItemWithinAngularNgforLoop.componentWillLoad');
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

                            <p>Here's how to get and print the index (or the iteration number) of the current item in an ngFor loop.</p>

                            <p>In Angular, to get the index (or the iteration number) of the current item, add a second part to the ngFor expression (after a semi-colon) as shown here.</p>

                            <deckgo-highlight-code language="html"><code slot="code">{CODE_1}</code></deckgo-highlight-code>

                            <p>Notice that I’m adding 1 to the output expression ( <code>ndx+1</code> ) because the index is zero-based. The data table row example shown above renders as follows:</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2016/04/ngForLoopIndexExample.jpg" alt="" /></p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">

                            

                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}