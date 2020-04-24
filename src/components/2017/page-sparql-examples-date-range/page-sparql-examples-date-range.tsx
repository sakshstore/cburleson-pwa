import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import Prism from "prismjs"
import 'prismjs/components/prism-turtle.min.js';
import 'prismjs/components/prism-sparql.min.js';

import { BlogData } from '../../../services/blog-data';



@Component({
	tag: 'page-sparql-examples-date-range',
})
export class PageSparqlExamplesDateRange {

	title = 'Blog';

	// header for this individual item by id...
	header: any;

	async componentWillLoad() {
		if (isLocal()) {
			console.log('> PageSparqlExamplesDateRange.componentWillLoad');
		}
		// this.data = await BlogData.load();
		// Get the id from the URL path (slug)
		let id = document.location.pathname.substring( document.location.pathname.lastIndexOf('/') + 1 );
		this.header = BlogData.getPostHeaderById(id);

		// set document title for browser / tab / bookmark
		document.title = this.header.title + ' | ' + SITENAME;
		if (this.header.teaser) {
			document.getElementById("meta-desc").setAttribute("content", this.header.teaser);
		}
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

							<p>An example SPARQL query filtering for resources within a given date range (between two given dates).</p>

							<pre><code class="language-sparql">{`PREFIX c: <https://carbonldp.com/ns/v1/platform#>
 
SELECT ?document ?createdDate WHERE {
    ?document c:created ?createdDate
    FILTER (?createdDate < "2017-04-18T22:29:33.667Z"^^xsd:dateTime && ?createdDate > "2017-04-18T21:37:37.708Z"^^xsd:dateTime)
} LIMIT 100`}</code></pre>

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