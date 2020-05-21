import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
    tag: 'page-sparql-examples-list-classes',
})
export class PageSparqlExamplesListClasses {

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

                            <p>Example SPARQL queries that can help you list the classes in an ontology.</p>
                            <h2 id="SPARQLexamples-listclasses-Listallclasses">List all classes</h2>

                            <deckgo-highlight-code><code slot="code">{`PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  
SELECT DISTINCT ?type
WHERE {
  ?s a ?type.
}`}</code></deckgo-highlight-code>

                            <p>Note: The SPARQL keyword <code>a</code> is a shortcut for the common predicate <code>rdf:type</code>, giving the class of a resource.</p>

                            <h2>List root classes</h2>

                            <deckgo-highlight-code><code slot="code">{`SELECT ?directSub ?super
 WHERE { ?directSub rdfs:subClassOf ?super .
         FILTER NOT EXISTS {
            ?directSub rdfs:subClassOf ?otherSub .
            FILTER (?otherSub != ?directSub)
         }
}`}</code></deckgo-highlight-code>

                            <h2>List all classes with a given prefix</h2>

                            <deckgo-highlight-code><code slot="code">{`PREFIX bc: <http://base22.com/ont/bc#>
 
SELECT DISTINCT ?type
WHERE {
  ?subject a ?type.
  FILTER( STRSTARTS(STR(?type),str(bc:)) )
}`}</code></deckgo-highlight-code>

                            <h2>List class hierarchy</h2>

                            <deckgo-highlight-code><code slot="code">{`PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
 
SELECT DISTINCT ?subject ?label ?supertype
WHERE {
    { ?subject a owl:Class . } UNION { ?individual a ?subject . } .
    OPTIONAL { ?subject rdfs:subClassOf ?supertype } .
    OPTIONAL { ?subject rdfs:label ?label }
} ORDER BY ?subject`}</code></deckgo-highlight-code>

                            <p>Note that when a reasoner is enabled classes may typically be inferred to be <code>rdfs:subClassOf</code> themselves and <code>rdfs:subClassOf</code> any parent class, not just the direct parent.</p>

                            <h2>List class hierarchy &#8211; filtered</h2>

                            <p>Give a class hierarchy, but filter out several structural elements so that we only end up with the unique classes in our ontology.</p>

                            <deckgo-highlight-code><code slot="code">{`PREFIX owl: <http://www.w3.org/2002/07/owl#>
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
} ORDER BY ?subject`}</code></deckgo-highlight-code>

                            <p>Note that when a reasoner is enabled classes may typically be inferred to be rdfs:subClassOf themselves and rdfs:subClassOf any parent class, not just the direct parent.</p>

                            <h2>List class hierarchy with direct subclasses only</h2>

                            <p>This is similar to the query above, but uses the Sesame-specific sesame:directSubClassOf to get only direct subclasses. This would work in any RDF4J (formerly Sesame) system such as Graph DB.</p>

                            <deckgo-highlight-code><code slot="code">{`PREFIX owl: <http://www.w3.org/2002/07/owl#>
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
} ORDER BY ?subject`}</code></deckgo-highlight-code>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>



        ];
    }
}