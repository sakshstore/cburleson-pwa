import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
	tag: 'page-sparql-examples-negation',
})
export class PageSparqlExamplesNegation {

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

							<p>Find the person entries in Tim Berners-Lee&#8217;s FOAF file that do not contain a URL for the person&#8217;s FOAF file. Try this on <a href="http://sparql.org/sparql.html" rel="nofollow">ARQ</a>.</p>
							<deckgo-highlight-code><code slot="code">{`PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?name
FROM <http://www.w3.org/People/Berners-Lee/card>
WHERE {
  ?person a foaf:Person ; foaf:name ?name .
  MINUS { ?person rdfs:seeAlso ?url }
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