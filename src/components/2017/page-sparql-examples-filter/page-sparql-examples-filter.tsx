import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, isLocal, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
	tag: 'page-sparql-examples-filter',
})
export class PageSparqlExamplesFilter {

	header: any;

	async componentWillLoad() {
		if (isLocal()) {
			console.log('>> PageSparqlExamplesFilter.componentWillLoad');
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

							<h3>Return items with recorded date less than given date</h3>
							<deckgo-highlight-code><code slot="code">{`PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX web: <http://base22.com/ont/web#>
 
SELECT * WHERE {
    ?subject dcterms:title ?title.
    ?subject dcterms:abstract ?abstract.
    ?subject web:publishDate ?publishDate.
    FILTER (?publishDate < "2016-09-28T19:19:02.982Z"^^xsd:dateTime)
}`}</code></deckgo-highlight-code>

						</ion-col>
						<ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">

							

						</ion-col>
					</ion-row>
				</ion-grid>

			</ion-content>



		];
	}
}