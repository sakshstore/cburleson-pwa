import { Component, h } from '@stencil/core';

import Prism from "prismjs"
import '/assets/prismjs/prism-turtle.min.js';
import '/assets/prismjs/prism-sparql.min.js';

import { BlogData } from '../../services/blog-data';


import { EnvironmentConfigService } from '../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
	tag: 'page-sparql-examples-insert',
})
export class PageSparqlExamplesInsert {

	title = 'Blog';

	// header for this individual item by id...
	header: any;

	async componentWillLoad() {
		if (debug) {
			console.log('> PageTemplatePage.componentWillLoad');
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

				<p class="entry-meta">Posted on <time>{new Date(this.header.datePublished).toDateString()}</time> (last modified <time>{new Date(this.header.dateModified).toDateString()}</time>)</p>


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

			</ion-content>

		];
	}
}