import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import Prism from "prismjs"
import 'prismjs/components/prism-turtle.min.js';
import 'prismjs/components/prism-sparql.min.js';

import { BlogData } from '../../../services/blog-data';


@Component({
	tag: 'page-sparql-examples-limit',
})
export class PageSparqlExamplesLimit {

	title = 'Blog';

	// header for this individual item by id...
	header: any;

	async componentWillLoad() {
		if (isLocal()) {
			console.log('> PageSparqlExamplesLimit.componentWillLoad');
		}
		// this.data = await BlogData.load();
		// Get the id from the URL path (slug)
		let id = document.location.pathname.substr(1);
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

							<h3>Limit the number of results returned</h3>

							<pre><code class="language-sparql">{`PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>
PREFIX bc: <http://www.base22.com/ontologies/2010/5/bc.owl#>

SELECT *
WHERE {
  ?subject bc:hasEmployer <http://www.base22.com/ontologies/2010/5/my-contacts.owl#IBM> .
           ?subject bc:hasBusinessEmail ?email .
} LIMIT 5`}</code></pre>

							<p>The LIMIT keyword is used after the WHERE clause, followed by a numerical value. In this case, of course, only 5 results are returned.</p>

							<ul>
								<li>LIMIT is a solution modifier that limits the number of rows returned from a query. SPARQL has two other solution modifiers:
	<ul>
										<li>ORDER BY for sorting query solutions on the value of one or more variables</li>
										<li>OFFSET, used in conjunction with LIMIT and ORDER BY to take a slice of a sorted solution set (e.g. for paging)</li>
									</ul>
								</li>
							</ul>

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