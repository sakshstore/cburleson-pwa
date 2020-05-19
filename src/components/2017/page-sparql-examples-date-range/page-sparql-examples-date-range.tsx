import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
	tag: 'page-sparql-examples-date-range',
})
export class PageSparqlExamplesDateRange {

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

							<p>An example SPARQL query filtering for resources within a given date range (between two given dates).</p>

							<deckgo-highlight-code><code slot="code">{`PREFIX c: <https://carbonldp.com/ns/v1/platform#>
 
SELECT ?document ?createdDate WHERE {
    ?document c:created ?createdDate
    FILTER (?createdDate < "2017-04-18T22:29:33.667Z"^^xsd:dateTime && ?createdDate > "2017-04-18T21:37:37.708Z"^^xsd:dateTime)
} LIMIT 100`}</code></deckgo-highlight-code>

						</ion-col>
						<ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
						</ion-col>
					</ion-row>
				</ion-grid>

			</ion-content>

		];
	}
}