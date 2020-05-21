import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
	tag: 'page-sparql-examples-federation',
})
export class PageSparqlExamplesFederation {

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

							<h2>Federate data from 2 endpoints</h2>
							<p>Find the birth dates of all of the actors in Star Trek: The Motion Picture.<br />
								Try this on ARQ.</p>
							<deckgo-highlight-code><code slot="code">{`PREFIX movie: <http://data.linkedmdb.org/resource/movie/>
PREFIX dbpedia: <http://dbpedia.org/ontology/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
SELECT ?actor_name ?birth_date
FROM <http://www.w3.org/People/Berners-Lee/card> # placeholder graph
WHERE {
  SERVICE <http://data.linkedmdb.org/sparql> {
    <http://data.linkedmdb.org/resource/film/675> movie:actor ?actor .
    ?actor movie:actor_name ?actor_name
  }
  SERVICE <http://dbpedia.org/sparql> {
    ?actor2 a dbpedia:Actor ; foaf:name ?actor_name_en ; dbpedia:birthDate ?birth_date .
    FILTER(STR(?actor_name_en) = ?actor_name)
  }
}`}</code></deckgo-highlight-code>
							<p>The <code>SERVICE</code> keyword is used to send part of a query against a remote SPARQL endpoint.</p>

						</ion-col>
						<ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
						</ion-col>
					</ion-row>
				</ion-grid>

			</ion-content>

		];
	}
}