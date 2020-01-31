import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import Prism from "prismjs"
import 'prismjs/components/prism-turtle.min.js';
import 'prismjs/components/prism-sparql.min.js';

import { BlogData } from '../../../services/blog-data';



@Component({
	tag: 'page-sparql-examples-insert',
})
export class PageSparqlExamplesInsert {

	title = 'Blog';

	// header for this individual item by id...
	header: any;

	async componentWillLoad() {
		if (isLocal()) {
			console.log('> PageTemplatePage.componentWillLoad');
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

							<p>Insert some statements</p>
							<pre><code class="language-sparql">{`PREFIX <http://bedrock/>
INSERT DATA {
    :fred :hasSpouse :wilma .
    :fred :hasChild :pebbles .
    :wilma :hasChild :pebbles .
    :pebbles :hasSpouse :bamm-bamm ;
        :hasChild :roxy, :chip.
}`}</code></pre>

							<p>Insert data into a named graph</p>

							<pre><code class="language-sparql">{`INSERT DATA
{
     GRAPH <http://example.org/myGraph> 
     {
          <http://example.org/subject> <http://example.org/predicate> <http://example.org/object>
     }
}
`}</code></pre>

							<p>Inserts into a specific Graph. You can insert as many Triples as you want within a single command (only one is used in the example for brevity)</p>

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