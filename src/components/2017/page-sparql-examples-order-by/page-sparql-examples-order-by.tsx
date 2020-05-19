import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, isLocal, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
	tag: 'page-sparql-examples-order-by',
})
export class PageSparqlExamplesOrderBy {

	header: any;

	async componentWillLoad() {
		if (isLocal()) {
			console.log('>> PageSparqlExamplesOrderBy.componentWillLoad');
		}
		
		let id = extractIdFromDocumentPath();
		this.header = BlogData.getPostHeaderById(id);

		// set document title for browser / tab / bookmark
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

							<p>Order by the highest population<br />
								Here&#8217;s a similar query for DBPedia &#8211; this time, ordered by highest population first and filtered by language (&#8220;en&#8221;).</p>
							<deckgo-highlight-code><code slot="code">{`PREFIX type: <http://dbpedia.org/class/yago/>
PREFIX prop: <http://dbpedia.org/property/>
SELECT ?country_name ?population
WHERE {
    ?country a type:LandlockedCountries ;
             rdfs:label ?country_name ;
             prop:populationEstimate ?population .
    FILTER (?population > 15000000 && langMatches(lang(?country_name), "en")) .
} ORDER BY DESC(?population)`}</code></deckgo-highlight-code>

						</ion-col>
						<ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">

							

						</ion-col>
					</ion-row>
				</ion-grid>

			</ion-content>


		];
	}
}