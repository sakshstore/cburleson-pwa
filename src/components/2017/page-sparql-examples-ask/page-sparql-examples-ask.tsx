import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
	tag: 'page-sparql-examples-ask',
})
export class PageSparqlExamplesAsk {

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

							<p>Is the Amazon river longer than the Nile river?</p>

							<p>You can also try this one against DBPedia&#8230;</p>

							<deckgo-highlight-code><code slot="code">{`PREFIX prop: <http://dbpedia.org/property/>
ASK
{
<http://dbpedia.org/resource/Amazon_River> prop:length ?amazon .
<http://dbpedia.org/resource/Nile> prop:length ?nile .
FILTER(?amazon > ?nile) .
}`}</code></deckgo-highlight-code>

							<p>The answer is: false.</p>

							<p>Note: The WHERE keyword is optional&#8211;not only in ASK queries but in all SPARQL queries.</p>

							<p>Does a triple with the given subject URI exist?</p>

							<deckgo-highlight-code><code slot="code">{`ASK { <http://example.org/carbon/ldp/main/people> ?p ?o> }`}</code></deckgo-highlight-code>

							<p>Returns true or false.</p>

							<p>Does Fred have grandchildren?</p>

							<deckgo-highlight-code><code slot="code">{`PREFIX: <http://bedrock/>  
ASK  
WHERE {  :fred :hasChild :?child . :?child :hasChild :?grandchild. }`}</code></deckgo-highlight-code>

							<p>Where :fred has any child, see if that child has any child identified by the placeholder, :?child, then use the value of that placeholder to ask whether or not that child itself also has a child, which will be the :?grandchild.</p>

						</ion-col>
						<ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
						</ion-col>
					</ion-row>
				</ion-grid>

			</ion-content>



		];
	}
}