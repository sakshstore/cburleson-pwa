import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-permitting-author-access-to-search-collection-in-wcm-search-component',
})
export class PagePermittingAuthor {

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

                            <p>WCM developers who have editor access to a search component may not have appropriate access to the search collection that the component refers to. In this case, the WCM developer may see a warning message in the WCM authoring UI, which states: “<em>The search collection: &lt;CollectionName&gt; could not be found. Please create the collection or select another one.</em>” The search collection selected in the component will also be tagged as [missing].</p>

                            <p>This can be corrected by giving the WCM search component editor appropriate access to the collection using the Access area within the Portal admin interface.</p>

                            <p>Here’s how:</p>

                            <ul>
                                <li>Login as a portal administrator and navigate to Access &gt; Resource Permissions and click on PSE Sources.</li>
                                <li>Locate the collection that the WCM search component refers to and then click the key icon to assign access.</li>
                                <li>The various access roles for the resource will appear. Click on the pencil icon for the Editor role.</li>
                                <li>Add the group or users who should have editor access to the WCM search component that refers to the collection. Then click the collection name in the breadcrumb to move up a level where you can click to Apply the changes.</li>
                                <li>Now, the editor should have access to the PSE source (the collection) from within the WCM search component. The warning message should no longer be displayed and the search collection should no longer be flagged as [missing].</li>
                            </ul>

                            <p>With this tip, you should be able to ease concerns that your WCM search component developers might have. If the same developers do not have access to the search administration area of the Portal admin UI, you should not be concerned about their ability to edit attributes of the collection itself.</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}