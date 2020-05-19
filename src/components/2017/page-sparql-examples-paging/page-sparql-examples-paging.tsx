import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
	tag: 'page-sparql-examples-paging',
})
export class PageSparqlExamplesPaging {

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

							<p>Retrieve the second page of names and emails of people in Tim Berners-Lee&#8217;s FOAF file, given that each page has 10 people. Try this on <a href="http://sparql.org/sparql.html" rel="nofollow">ARQ</a>.</p>
							<deckgo-highlight-code><code slot="code">{`PREFIX foaf:  <http://xmlns.com/foaf/0.1/>

SELECT ?name ?email
FROM <http://www.w3.org/People/Berners-Lee/card>
WHERE {
    {SELECT DISTINCT ?person ?name WHERE {
        ?person foaf:name ?name
      } ORDER BY ?name LIMIT 10 OFFSET 10 }
    OPTIONAL { ?person foaf:mbox ?email }
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
