import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
	tag: 'page-sparql-examples-count-all-statements',
})
export class PageSparqlExamplesCountAllStatements {

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

							<p>Here&#8217;s a SPARQL query that counts all statements (triples) in a repository.</p>

							<deckgo-highlight-code><code slot="code">{`SELECT (COUNT(?s) AS ?triples) WHERE { ?s ?p ?o }`}</code></deckgo-highlight-code>

							<p>Note that this can be a long running query. For me it took took 21 seconds to count the statements in a repository with 30 million triples.</p>

						</ion-col>
						<ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
						</ion-col>
					</ion-row>
				</ion-grid>

			</ion-content>


		];
	}
}