import { Component, h } from '@stencil/core';

import Prism from "prismjs"
import '/assets/prismjs/prism-turtle.min.js';
import '/assets/prismjs/prism-sparql.min.js';

import { BlogData } from '../../../services/blog-data';


import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
	tag: 'page-sparql-examples-paging',
})
export class PageSparqlExamplesPaging {

	title = 'Blog';

	// header for this individual item by id...
	header: any;

	async componentWillLoad() {
		if (debug) {
			console.log('> PageSparqlExamplesPaging.componentWillLoad');
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

			</ion-content>

		];
	}
}
