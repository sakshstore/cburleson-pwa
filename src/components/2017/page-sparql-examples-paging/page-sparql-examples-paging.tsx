import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import Prism from "prismjs"
import 'prismjs/components/prism-turtle.min.js';
import 'prismjs/components/prism-sparql.min.js';

import { BlogData } from '../../../services/blog-data';



@Component({
	tag: 'page-sparql-examples-paging',
})
export class PageSparqlExamplesPaging {

	title = 'Blog';

	// header for this individual item by id...
	header: any;

	async componentWillLoad() {
		if (isLocal()) {
			console.log('> PageSparqlExamplesPaging.componentWillLoad');
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

							<p>Retrieve the second page of names and emails of people in Tim Berners-Lee&#8217;s FOAF file, given that each page has 10 people. Try this on <a href="http://sparql.org/sparql.html" rel="nofollow">ARQ</a>.</p>
							<pre><code class="language-sparql">{`PREFIX foaf:  <http://xmlns.com/foaf/0.1/>

SELECT ?name ?email
FROM <http://www.w3.org/People/Berners-Lee/card>
WHERE {
    {SELECT DISTINCT ?person ?name WHERE {
        ?person foaf:name ?name
      } ORDER BY ?name LIMIT 10 OFFSET 10 }
    OPTIONAL { ?person foaf:mbox ?email }
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
