import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
  tag: 'page-rdf-syntax-examples',
})
export class PageRdfSyntaxExamples {

  header: any;

  async componentWillLoad() {
    let id = extractIdFromDocumentPath();
    this.header = BlogData.getPostHeaderById(id);
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

              <p>RDF can be expressed in a variety of different serialization formats. It can also be used inline with HTML. Following is an example of the most widely used of these formats so that you can compare them at a glance.</p>

              <h2>RDF/XML</h2>

              <p>An XML-based syntax for RDF graphs that was the first standard format for serializing RDF.</p>

              <deckgo-highlight-code language="xml"><code slot="code">{`<?xml version="1.0" encoding="utf-8"?>
<rdf:RDF
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:gr="http://purl.org/goodrelations/v1#">
  <gr:Location rdf:about="http://www.acme.com/#store">
    <gr:name>Hepp's Happy Burger Restaurant</gr:name>
    <gr:hasOpeningHoursSpecification>
      <gr:OpeningHoursSpecification>
        <gr:opens>08:00:00</gr:opens>
        <gr:closes>20:00:00</gr:closes>
        <gr:hasOpeningHoursDayOfWeek rdf:resource="http://purl.org/goodrelations/v1#Wednesday"/>
        <gr:hasOpeningHoursDayOfWeek rdf:resource="http://purl.org/goodrelations/v1#Monday"/>
        <gr:hasOpeningHoursDayOfWeek rdf:resource="http://purl.org/goodrelations/v1#Tuesday"/>
        <gr:hasOpeningHoursDayOfWeek rdf:resource="http://purl.org/goodrelations/v1#Thursday"/>
        <gr:hasOpeningHoursDayOfWeek rdf:resource="http://purl.org/goodrelations/v1#Friday"/>
      </gr:OpeningHoursSpecification>
    </gr:hasOpeningHoursSpecification>
  </gr:Location>
</rdf:RDF>`}</code></deckgo-highlight-code>

              <p>See also:&nbsp;<a href="https://www.w3.org/TR/rdf-syntax-grammar/" rel="nofollow">RDF 1.1 XML Syntax</a></p>

              <h2>Turtle</h2>

              <p>A compact, human-friendly format.</p>

              <deckgo-highlight-code language="turtle"><code slot="code">{`@prefix gr: <http://purl.org/goodrelations/v1#> .
 
 <http://www.acme.com/#store>
   a gr:Location ;
   gr:name "Hepp's Happy Burger Restaurant" ;
   gr:hasOpeningHoursSpecification [
     a gr:OpeningHoursSpecification ;
     gr:opens "08:00:00" ;
     gr:closes "20:00:00" ;
     gr:hasOpeningHoursDayOfWeek gr:Wednesday, gr:Monday, gr:Tuesday, gr:Thursday, gr:Friday
   ] .`}</code></deckgo-highlight-code>

              <p>See also:&nbsp;<a href="https://www.w3.org/TeamSubmission/turtle/" rel="nofollow">Turtle – Terse RDF Triple Language</a></p>

              <h2>N-Triples</h2>

              <p>A very simple, easy-to-parse, line-based format that is not as compact as Turtle.</p>

              <deckgo-highlight-code language="turtle"><code slot="code">{`<http://www.acme.com/#store> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://purl.org/goodrelations/v1#Location> .
<http://www.acme.com/#store> <http://purl.org/goodrelations/v1#hasOpeningHoursSpecification> _:b0 .
<http://www.acme.com/#store> <http://purl.org/goodrelations/v1#name> "Hepp's Happy Burger Restaurant" .
_:b0 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://purl.org/goodrelations/v1#OpeningHoursSpecification> .
_:b0 <http://purl.org/goodrelations/v1#opens> "08:00:00" .
_:b0 <http://purl.org/goodrelations/v1#closes> "20:00:00" .
_:b0 <http://purl.org/goodrelations/v1#hasOpeningHoursDayOfWeek> <http://purl.org/goodrelations/v1#Wednesday> .
_:b0 <http://purl.org/goodrelations/v1#hasOpeningHoursDayOfWeek> <http://purl.org/goodrelations/v1#Thursday> .
_:b0 <http://purl.org/goodrelations/v1#hasOpeningHoursDayOfWeek> <http://purl.org/goodrelations/v1#Friday> .
_:b0 <http://purl.org/goodrelations/v1#hasOpeningHoursDayOfWeek> <http://purl.org/goodrelations/v1#Tuesday> .
_:b0 <http://purl.org/goodrelations/v1#hasOpeningHoursDayOfWeek> <http://purl.org/goodrelations/v1#Monday> .`}</code></deckgo-highlight-code>

              <p>See also:&nbsp;<a href="https://www.w3.org/TR/n-triples/" rel="nofollow">RDF 1.1 N-Triples</a></p>

              <h2>N3 (or Notation3)</h2>

              <p>A non-standard serialization that is very similar to Turtle, but has some additional features, such as the ability to define inference rules.</p>

              <deckgo-highlight-code language="turtle"><code slot="code">{`@prefix gr: <http://purl.org/goodrelations/v1#> .
 
 <http://www.acme.com/#store> a gr:Location;
     gr:hasOpeningHoursSpecification [ a gr:OpeningHoursSpecification;
             gr:opens "08:00:00";
             gr:closes "20:00:00";
             gr:hasOpeningHoursDayOfWeek gr:Friday,
                 gr:Monday,
                 gr:Thursday,
                 gr:Tuesday,
                 gr:Wednesday ];
     gr:name "Hepp's Happy Burger Restaurant" .`}</code></deckgo-highlight-code>

              <p>See also:&nbsp;<a href="https://www.w3.org/TeamSubmission/n3/" rel="nofollow">Notation3 (N3): A readable RDF syntax</a></p>

              <h2>JSON-LD</h2>

              <p>a JSON-based serialization (for Linked Data).</p>

              <deckgo-highlight-code language="json"><code slot="code">{`{
  "@context": {
    "gr": "http://purl.org/goodrelations/v1#"
  },
  "@id": "http://www.acme.com/#store",
  "@type": "gr:Location",
  "gr:hasOpeningHoursSpecification": {
    "@type": "gr:OpeningHoursSpecification",
    "gr:closes": "20:00:00",
    "gr:hasOpeningHoursDayOfWeek": [
      {
        "@id": "gr:Thursday"
      },
      {
        "@id": "gr:Wednesday"
      },
      {
        "@id": "gr:Friday"
      },
      {
        "@id": "gr:Monday"
      },
      {
        "@id": "gr:Tuesday"
      }
    ],
    "gr:opens": "08:00:00"
  },
  "gr:name": "Hepp's Happy Burger Restaurant"
}`}</code></deckgo-highlight-code>

              <p>See also:&nbsp;<a href="https://www.w3.org/TR/json-ld/" rel="nofollow">JSON-LD 1.0</a></p>

              <h2>RDFa</h2>

              <p>Not really an RDF syntax, but rather – a compatible format. “RDFa is an extension to HTML5 that helps you markup things like People, Places, Events, Recipes and Reviews. Search Engines and Web Services use this markup to generate better search listings and give you better visibility on the Web, so that people can find your website more easily.” – <a href="https://rdfa.info/" rel="nofollow">rdfa.info</a></p>

              <deckgo-highlight-code language="html"><code slot="code">{`<div xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
     xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
     xmlns="http://www.w3.org/1999/xhtml"
     xmlns:gr="http://purl.org/goodrelations/v1#">
   <div about="http://www.acme.com/#store" typeof="gr:Location">
      <div rel="gr:hasOpeningHoursSpecification">
         <div typeof="gr:OpeningHoursSpecification">
            <div property="gr:closes" content="20:00:00"/>
            <div rel="gr:hasOpeningHoursDayOfWeek"
                 resource="http://purl.org/goodrelations/v1#Thursday"/>
            <div rel="gr:hasOpeningHoursDayOfWeek"
                 resource="http://purl.org/goodrelations/v1#Tuesday"/>
            <div rel="gr:hasOpeningHoursDayOfWeek"
                 resource="http://purl.org/goodrelations/v1#Monday"/>
            <div rel="gr:hasOpeningHoursDayOfWeek"
                 resource="http://purl.org/goodrelations/v1#Friday"/>
            <div rel="gr:hasOpeningHoursDayOfWeek"
                 resource="http://purl.org/goodrelations/v1#Wednesday"/>
            <div property="gr:opens" content="08:00:00"/>
         </div>
      </div>
      <div property="gr:name" content="Hepp's Happy Burger Restaurant"/>
   </div>
</div>`}</code></deckgo-highlight-code>

              <p>See also:&nbsp;<a href="https://rdfa.info/" rel="nofollow">RDFa</a></p>

              <h2>Microdata</h2>

              <p>Also not really an RDF syntax, but a compatible format. This mechanism allows machine-readable data to be embedded in HTML documents in an easy-to-write manner, with an unambiguous parsing model.</p>

              <deckgo-highlight-code language="html"><code slot="code">{`<div itemscope itemtype="http://purl.org/goodrelations/v1#Location" itemid="http://www.acme.com/#store">
  <span itemprop="name">Hepp's Happy Burger Restaurant</span>
  <div itemprop="hasOpeningHoursSpecification" itemscope
       itemtype="http://purl.org/goodrelations/v1#OpeningHoursSpecification">
Opening hours: Mo-Fri,
     <link itemprop="hasOpeningHoursDayOfWeek"
           href="http://purl.org/goodrelations/v1#Monday" />
     <link itemprop="hasOpeningHoursDayOfWeek"
           href="http://purl.org/goodrelations/v1#Tuesday" />
     <link itemprop="hasOpeningHoursDayOfWeek"
           href="http://purl.org/goodrelations/v1#Wednesday" />
     <link itemprop="hasOpeningHoursDayOfWeek"
           href="http://purl.org/goodrelations/v1#Thursday" />
     <link itemprop="hasOpeningHoursDayOfWeek"
           href="http://purl.org/goodrelations/v1#Friday" />
     <meta itemprop="opens" content="08:00:00">8:00 a.m. -
     <meta itemprop="closes" content="20:00:00">8:00 p.m.
  </div>
</div>`}</code></deckgo-highlight-code>

              <p>See also:&nbsp;<a href="https://www.w3.org/TR/microdata/" rel="nofollow">HTML Microdata</a></p>

              <h2>RDF Converter Services Online</h2>

              <p>There’s a few decent RDF converter services that you can use online:</p>

              <ul>
                <li><a href="http://www.easyrdf.org/converter" rel="nofollow">EasyRdf Converter</a></li>
                <li><a href="http://rdf-translator.appspot.com/" rel="nofollow">RDF Translator</a></li>
                <li><a href="http://mowl-power.cs.man.ac.uk:8080/converter/" rel="nofollow">OWL Syntax Converter</a></li>
              </ul>

            </ion-col>
            <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
            </ion-col>
          </ion-row>
        </ion-grid>

      </ion-content>

    ];
  }
}