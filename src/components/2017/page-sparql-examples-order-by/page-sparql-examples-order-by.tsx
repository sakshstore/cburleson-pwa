import { Component, h } from '@stencil/core';
// Use this if using source code blocks to be formatted by prism.js...
import Prism from "prismjs"

import 'prismjs/components/prism-turtle.min.js';
import 'prismjs/components/prism-sparql.min.js';

import { BlogData } from '../../../services/blog-data';


import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
	tag: 'page-sparql-examples-order-by',
})
export class PageSparqlExamplesOrderBy {

	title = 'Blog';

	// header for this individual item by id...
	header: any;

	async componentWillLoad() {
		if (debug) {
			console.log('> PageSparqlExamplesOrderBy.componentWillLoad');
		}
		// this.data = await BlogData.load();
		// Get the id from the URL path (slug)
		let id = document.location.pathname.substr(1);
		this.header = BlogData.getPostHeaderById(id);

		// set document title for browser / tab / bookmark
		document.title = this.header.title + ' | ' + EnvironmentConfigService.getInstance().get('siteName');
	}

	componentDidLoad() {
		setTimeout(() => Prism.highlightAll(), 0)
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
				<pre><code class="language-sparql">{`PREFIX type: <http://dbpedia.org/class/yago/>
PREFIX prop: <http://dbpedia.org/property/>
SELECT ?country_name ?population
WHERE {
    ?country a type:LandlockedCountries ;
             rdfs:label ?country_name ;
             prop:populationEstimate ?population .
    FILTER (?population > 15000000 && langMatches(lang(?country_name), "en")) .
} ORDER BY DESC(?population)`}</code></pre>

		</ion-col>
		<ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">

			<gls-adsense-ad />

		</ion-col>
	</ion-row>
</ion-grid>

</ion-content>


		];
	}
}