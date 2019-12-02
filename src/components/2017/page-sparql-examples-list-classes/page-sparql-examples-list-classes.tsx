import { Component, h } from '@stencil/core';
// Use this if using source code blocks to be formatted by prism.js...
import Prism from "prismjs"

import '/assets/prismjs/prism-turtle.min.js';
import '/assets/prismjs/prism-sparql.min.js';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-sparql-examples-list-classes',
})
export class PageSparqlExamplesListClasses {

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

                <h1>{this.header.title}</h1>

                <p class="entry-meta">Posted on <time>{new Date(this.header.datePublished).toDateString()}</time> (last modified <time>{new Date(this.header.dateModified).toDateString()}</time>)</p>

                <p>Example SPARQL queries that can help you list the classes in an ontology.</p>
                <h2 id="SPARQLexamples-listclasses-Listallclasses">List all classes</h2>

                <pre><code class="language-sparql">{`PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  
SELECT DISTINCT ?type
WHERE {
  ?s a ?type.
}`}</code></pre>

                <p>Note: The SPARQL keyword <code>a</code> is a shortcut for the common predicate <code>rdf:type</code>, giving the class of a resource.</p>

                <h2>List root classes</h2>

                <pre><code class="language-sparql">{`SELECT ?directSub ?super
 WHERE { ?directSub rdfs:subClassOf ?super .
         FILTER NOT EXISTS {
            ?directSub rdfs:subClassOf ?otherSub .
            FILTER (?otherSub != ?directSub)
         }
}`}</code></pre>

                <h2>List all classes with a given prefix</h2>

                <pre><code class="language-sparql">{`PREFIX bc: <http://base22.com/ont/bc#>
 
SELECT DISTINCT ?type
WHERE {
  ?subject a ?type.
  FILTER( STRSTARTS(STR(?type),str(bc:)) )
}`}</code></pre>

                <h2>List class hierarchy</h2>

                <pre><code class="language-sparql">{`PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
 
SELECT DISTINCT ?subject ?label ?supertype
WHERE {
    { ?subject a owl:Class . } UNION { ?individual a ?subject . } .
    OPTIONAL { ?subject rdfs:subClassOf ?supertype } .
    OPTIONAL { ?subject rdfs:label ?label }
} ORDER BY ?subject`}</code></pre>

                <p>Note that when a reasoner is enabled classes may typically be inferred to be <code>rdfs:subClassOf</code> themselves and <code>rdfs:subClassOf</code> any parent class, not just the direct parent.</p>

                <h2>List class hierarchy &#8211; filtered</h2>

                <p>Give a class hierarchy, but filter out several structural elements so that we only end up with the unique classes in our ontology.</p>

                <pre><code class="language-sparql">{`PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
SELECT DISTINCT ?subject ?label ?supertype
WHERE {
    { ?subject a owl:Class . } UNION { ?individual a ?subject . } .
    OPTIONAL { ?subject rdfs:subClassOf ?supertype } .
    OPTIONAL { ?subject rdfs:label ?label }.
    FILTER (?subject != owl:Class &&
        ?subject != rdf:List &&
        ?subject != rdf:Property &&
        ?subject != rdfs:Class &&
        ?subject != rdfs:Datatype &&
        ?subject != rdfs:ContainerMembershipProperty &&
        ?subject != owl:DatatypeProperty &&
        ?subject != owl:NamedIndividual &&
        ?subject != owl:Ontology )
} ORDER BY ?subject`}</code></pre>

                <p>Note that when a reasoner is enabled classes may typically be inferred to be rdfs:subClassOf themselves and rdfs:subClassOf any parent class, not just the direct parent.</p>

                <h2>List class hierarchy with direct subclasses only</h2>

                <p>This is similar to the query above, but uses the Sesame-specific sesame:directSubClassOf to get only direct subclasses. This would work in any RDF4J (formerly Sesame) system such as Graph DB.</p>

                <pre><code class="language-sparql">{`PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX : <https://codyburleson.com/hyperg/>
 
SELECT DISTINCT ?subject ?label ?supertype
WHERE {
    {
        ?subject a owl:Class .
        OPTIONAL { ?subject sesame:directSubClassOf ?supertype } .
        OPTIONAL { ?subject rdfs:label ?label }.
    }
           
          FILTER (?subject != owl:Class &&
            ?subject != rdf:List &&
            ?subject != rdf:Property &&
            ?subject != rdfs:Class &&
            ?subject != rdfs:Datatype &&
            ?subject != rdfs:ContainerMembershipProperty &&
            ?subject != owl:DatatypeProperty &&
            ?subject != owl:NamedIndividual &&
            ?subject != owl:Ontology &&
            ?subject != ?supertype)
} ORDER BY ?subject`}</code></pre>


            </ion-content>

        ];
    }
}