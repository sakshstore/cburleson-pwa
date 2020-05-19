import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, isLocal, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
	tag: 'page-sparql-examples-construct',
})
export class PageSparqlExamplesConstruct {

	header: any;

	async componentWillLoad() {
		if (isLocal()) {
			console.log('>> PageSparqlExamplesConstruct.componentWillLoad');
		}
		
		let id = extractIdFromDocumentPath();
		this.header = BlogData.getPostHeaderById(id);

		// set document title for browser / tab / bookmark
		document.title = this.header.title + ' | ' + SITENAME;
		if (this.header.teaser) {
			document.getElementById("meta-desc").setAttribute("content", this.header.teaser);
		}
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
<deckgo-highlight-code><code slot="code">{`CONSTRUCT { ?s ?p ?o . } 
WHERE { VALUES ?p { rdfs:subClassOf rdfs:subPropertyOf rdfs:domain rdfs:range} ?s ?p ?o }
`}</code></deckgo-highlight-code>
							<p>Note that when a reasoner is enabled classes may typically be inferred to be <code>rdfs:subClassOf</code> themselves and <code>rdfs:subClassOf</code> any parent class, not just the direct parent.</p>
						</ion-col>
						<ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
							
						</ion-col>
					</ion-row>
				</ion-grid>

			</ion-content>


		];
	}
}