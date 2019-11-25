import { Component, h } from '@stencil/core';

import Prism from "prismjs"
import '/assets/prismjs/prism-turtle.min.js';
import '/assets/prismjs/prism-sparql.min.js';

import { BlogData } from '../../services/blog-data';

import { EnvironmentConfigService } from '../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
	tag: 'page-sparql-examples-ask',
})
export class PageSparqlExamplesAsk{

	title = 'Blog';

	// header for this individual item by id...
	header: any;

	async componentWillLoad() {
		if (debug) {
			console.log('> PageSparqlExamplesAsk.componentWillLoad');
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

				<p>Is the Amazon river longer than the Nile river?</p>

				<p>You can also try this one against DBPedia&#8230;</p>

				<pre><code class="language-sparql">{`PREFIX prop: <http://dbpedia.org/property/>
ASK
{
  <http://dbpedia.org/resource/Amazon_River> prop:length ?amazon .
  <http://dbpedia.org/resource/Nile> prop:length ?nile .
  FILTER(?amazon > ?nile) .
}`}</code></pre>

				<p>The answer is: false.</p>

				<p>Note: The WHERE keyword is optional&#8211;not only in ASK queries but in all SPARQL queries.</p>

				<p>Does a triple with the given subject URI exist?</p>

				<pre><code class="language-sparql">{`ASK { <http://example.org/carbon/ldp/main/people> ?p ?o> }`}</code></pre>

				<p>Returns true or false.</p>

				<p>Does Fred have grandchildren?</p>

				<pre><code class="language-sparql">{`PREFIX: <http://bedrock/>  
ASK  
WHERE {  :fred :hasChild :?child . :?child :hasChild :?grandchild. }`}</code></pre>

				<p>Where :fred has any child, see if that child has any child identified by the placeholder, :?child, then use the value of that placeholder to ask whether or not that child itself also has a child, which will be the :?grandchild.</p>

			</ion-content>

		];
	}
}