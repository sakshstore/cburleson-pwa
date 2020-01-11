import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import Prism from "prismjs"
import 'prismjs/components/prism-turtle.min.js';
import 'prismjs/components/prism-sparql.min.js';

import { BlogData } from '../../../services/blog-data';



@Component({
	tag: 'page-sparql-examples-filter',
})
export class PageSparqlExamplesFilter {

	title = 'Blog';

	// header for this individual item by id...
	header: any;

	async componentWillLoad() {
		if (isLocal()) {
			console.log('> PageSparqlExamplesFilter.componentWillLoad');
		}
		// this.data = await BlogData.load();
		// Get the id from the URL path (slug)
		let id = document.location.pathname.substr(1);
		this.header = BlogData.getPostHeaderById(id);

		// set document title for browser / tab / bookmark
		document.title = this.header.title + ' | ' + SITENAME;
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

							<h3>Return items with recorded date less than given date</h3>
							<pre><code class="language-sparql">{`PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX web: <http://base22.com/ont/web#>
 
SELECT * WHERE {
    ?subject dcterms:title ?title.
    ?subject dcterms:abstract ?abstract.
    ?subject web:publishDate ?publishDate.
    FILTER (?publishDate < "2016-09-28T19:19:02.982Z"^^xsd:dateTime)
}`}</code></pre>

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