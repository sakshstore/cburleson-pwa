import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
	tag: 'page-sparql-examples-insert',
})
export class PageSparqlExamplesInsert {

	header: any;

	async componentWillLoad() {
		let id = extractIdFromDocumentPath();
		this.header = BlogData.getPostHeaderById(id);

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

							<p>Insert some statements</p>
							<deckgo-highlight-code><code slot="code">{`PREFIX <http://bedrock/>
INSERT DATA {
    :fred :hasSpouse :wilma .
    :fred :hasChild :pebbles .
    :wilma :hasChild :pebbles .
    :pebbles :hasSpouse :bamm-bamm ;
        :hasChild :roxy, :chip.
}`}</code></deckgo-highlight-code>

							<p>Insert data into a named graph</p>

							<deckgo-highlight-code><code slot="code">{`INSERT DATA
{
     GRAPH <http://example.org/myGraph> 
     {
          <http://example.org/subject> <http://example.org/predicate> <http://example.org/object>
     }
}
`}</code></deckgo-highlight-code>

							<p>Inserts into a specific Graph. You can insert as many Triples as you want within a single command (only one is used in the example for brevity)</p>

						</ion-col>
						<ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
						</ion-col>
					</ion-row>
				</ion-grid>

			</ion-content>

		];
	}
}