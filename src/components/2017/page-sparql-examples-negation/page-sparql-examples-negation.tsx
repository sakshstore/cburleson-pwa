import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import Prism from "prismjs"
import 'prismjs/components/prism-turtle.min.js';
import 'prismjs/components/prism-sparql.min.js';

import { BlogData } from '../../../services/blog-data';


@Component({
	tag: 'page-sparql-examples-negation',
})
export class PageSparqlExamplesNegation {

	title = 'Blog';

	// header for this individual item by id...
	header: any;

	async componentWillLoad() {
		if (isLocal()) {
			console.log('> PageTemplatePage.componentWillLoad');
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

	// Use this if using source code blocks to be formatted by prism.js...
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

							<p>Find the person entries in Tim Berners-Lee&#8217;s FOAF file that do not contain a URL for the person&#8217;s FOAF file. Try this on <a href="http://sparql.org/sparql.html" rel="nofollow">ARQ</a>.</p>
							<pre><code class="language-sparql">{`PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?name
FROM <http://www.w3.org/People/Berners-Lee/card>
WHERE {
  ?person a foaf:Person ; foaf:name ?name .
  MINUS { ?person rdfs:seeAlso ?url }
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