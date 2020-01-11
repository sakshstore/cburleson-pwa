import { Component, h } from '@stencil/core';
import Prism from "prismjs"

import 'prismjs/components/prism-turtle.min.js';
import 'prismjs/components/prism-sparql.min.js';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
	tag: 'page-sparql-examples-construct',
})
export class PageSparqlExamplesConstruct {

	title = 'Blog';

	// header for this individual item by id...
	header: any;

	async componentWillLoad() {
		if (debug) {
			console.log('> PageSparqlExamplesConstruct.componentWillLoad');
		}
		// this.data = await BlogData.load();
		// Get the id from the URL path (slug)
		let id = document.location.pathname.substr(1);
		this.header = BlogData.getPostHeaderById(id);

		// set document title for browser / tab / bookmark
		document.title = this.header.title + ' | ' + EnvironmentConfigService.getInstance().get('siteName');
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

							<p>Construct a graph giving ontology structure (the class hierarchy, properties, domains and ranges)</p>

							<pre><code class="language-sparql">{`CONSTRUCT { ?s ?p ?o . } 
WHERE { VALUES ?p { rdfs:subClassOf rdfs:subPropertyOf rdfs:domain rdfs:range} ?s ?p ?o }
`}</code></pre>

							<p>Note that when a reasoner is enabled classes may typically be inferred to be rdfs:subClassOf themselves and rdfs:subClassOf any parent class, not just the direct parent.</p>

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