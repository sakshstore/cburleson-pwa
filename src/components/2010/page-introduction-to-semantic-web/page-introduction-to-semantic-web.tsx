import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-introduction-to-the-semantic-web-vision-and-technologies',
})
export class PageIntroductionToSemanticWeb {

    header: any;

    async componentWillLoad() {
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

                            <p>This is the video version of the PowerPoint presentation for a talk I gave at the IBM Technical Leadership Exchange in March, 2006. The presentation, which is now quite dated, provides a summary of the vision and technologies related to the Semantic Web, which was arguably considered to be emergent for the time. Related, but more modern concepts that have since surfaced include Linked Data, Linked Data Platform, and Graph Databases (e.g. Amazon Neptune, Blazegraph, Stardog,  Ontotext GraphDB).</p>

                            <div class="video-container"><iframe title="Introduction to the Semantic Web Vision and Technologies - March, 2006" class="video" src="https://www.youtube.com/embed/qHScuThR6aE" frameborder="0" data-allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>

                            <p>Download this presentation as a Microsoft PowerPoint file (1,881 KB zipped, 2,087 KB unzipped):<br/><br/><strong><a href="https://s3.us-east-2.amazonaws.com/codyburleson.com/files/emt-070_semantic-web-vision-and-tech_2006-03-08.zip">emt-070_semantic-web-vision-and-tech_2006-03-08.zip</a></strong></p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}