import { Component, h } from '@stencil/core';

import Prism from "prismjs"
import '/assets/prismjs/prism-turtle.min.js';
import '/assets/prismjs/prism-sparql.min.js';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

const CODE_1 = `SELECT ?subject ?predicate ?object
WHERE {?subject ?predicate ?object} 
LIMIT 100`;
const CODE_2 = `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
SELECT ?subject ?predicate ?object
WHERE {
    <http://codyburleson.com/hyperg/person/cody-burleson> ?predicate ?object .
} LIMIT 100`;
const CODE_3 = `SELECT ?predicate (COUNT(*)AS ?frequency)
WHERE {?subject ?predicate ?object}
GROUP BY ?predicate
ORDER BY DESC(?frequency)
LIMIT 10`;
const CODE_4 = `PREFIX rank:&lt;http://www.ontotext.com/owlim/RDFRank#&gt;
SELECT ?n
WHERE {?n rank:hasRDFRank ?r }
ORDER BY DESC(?r)
LIMIT 100`;
const CODE_5 = `PREFIX rdfs: &lt;http://www.w3.org/2000/01/rdf-schema#&gt;
SELECT ?subject ?label
WHERE { ?subject rdfs:label ?label } LIMIT 100`;
const CODE_6 = `PREFIX rdfs: &lt;http://www.w3.org/2000/01/rdf-schema#&gt;
PREFIX rdf: &lt;http://www.w3.org/1999/02/22-rdf-syntax-ns#&gt;
SELECT ?subject ?label
WHERE {
    ?subject rdf:type &lt;http://codyburleson.com/hyperg#Organization&gt; .
    ?subject rdfs:label ?label
} LIMIT 100`;
const CODE_7 = `PREFIX rdfs: &lt;http://www.w3.org/2000/01/rdf-schema#&gt;
PREFIX bc: &lt;http://www.base22.com/ontologies/2010/5/bc.owl#&gt;
SELECT ?subject
WHERE { ?subject bc:hasEmployer &lt;http://www.base22.com/ontologies/2010/5/my-contacts.owl#IBM&gt; } LIMIT 100`;
const CODE_8 = `PREFIX rdf: &lt;http://www.w3.org/1999/02/22-rdf-syntax-ns#&gt;
 
SELECT DISTINCT ?type
WHERE {
    ?s a ?type.
}`;
const CODE_9 = `PREFIX bc: &lt;http://base22.com/ont/bc#&gt;
 
SELECT DISTINCT ?type
WHERE {
    ?subject a ?type.
    FILTER( STRSTARTS(STR(?type),str(bc:)) )
}`;
const CODE_10 = `PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX card: <http://www.w3.org/People/Berners-Lee/card#>
SELECT ?homepage
FROM <http://www.w3.org/People/Berners-Lee/card>
WHERE {
    card:i foaf:knows ?known .
    ?known foaf:homepage ?homepage .
}`;
const CODE_11 = `PREFIX rdfs: &lt;http://www.w3.org/2000/01/rdf-schema#&gt;
PREFIX type: &lt;http://dbpedia.org/class/yago/&gt;
PREFIX prop: &lt;http://dbpedia.org/property/&gt;
SELECT ?country_name ?population
WHERE {
    ?country a type:LandlockedCountries ;
    rdfs:label ?country_name ;
    prop:populationEstimate ?population .
    FILTER (?population &gt; 15000000) .
}`;

@Component({
    tag: 'page-sparql-examples-select',
})
export class PageSparqlExamplesSelect {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageSparqlExamplesSelect.componentWillLoad');
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

                <app-entry-meta header={this.header} />

                <h2>Find all triples</h2>

                <p>Use <code>SELECT</code> to signify you want to select certain information and <code>WHERE</code> to signify your conditions, restrictions, and filters. A <code>LIMIT</code> is used to avoid cracking the server on a large dataset.</p>

                <pre><code class="language-sparql" innerHTML={CODE_1}></code></pre>

                <h2>Find all same-subject triples by given subject</h2>

                <p>By specifying only the subject in the pattern, we can return all triples that have that subject. When an individual entity is defined by a given subject URI, then this is a way to get all the properties for that entity.</p>

                <pre><code class="language-sparql">{CODE_2}</code></pre>

                <p>Since the subject is known, you could also omit <code>?subject</code> from the <code>SELECT</code> line so that only the predicates and objects are returned.</p>

                <h2>Find and order most used predicates</h2>

                <pre><code class="language-sparql" innerHTML={CODE_3}></code></pre>

                <h2>Select the top 100 nodes in the RDF graph</h2>

                <p>RDF Rank is a <a href="http://ontotext.com/products/graphdb/" rel="nofollow">GraphDB</a> extension. It is similar to Page Rank and it identifies “important” nodes in an RDF graph based on their interconnectedness. It is accessed using the <code>rank:hasRDFRank</code> system predicate.</p>

                <pre><code class="language-sparql" innerHTML={CODE_4}></code></pre>

                <h2>Find anything with a label</h2>

                <p>The following query will find all triples where subject and object are joined by <code>rdfs:label</code>. In other words, anything that has been defined as having a label.</p>

                <pre><code class="language-sparql" innerHTML={CODE_5}></code></pre>

                <h2>Find instances by class with a label</h2>

                <p>The following example query will get the labels of anything of the class type (<code>rdf:type</code>) Organization.</p>

                <pre><code class="language-sparql" innerHTML={CODE_6}></code></pre>

                <h2>Find all subjects with a given object property</h2>

                <pre><code class="language-sparql" innerHTML={CODE_7}></code></pre>

                <p>From my contacts ontology, I find all IBMers (i.e. the <code>hasEmployer</code> predicate points to the individual IBM, which is an object of type Organization).</p>

                <h2>Find all classes</h2>

                <pre><code class="language-sparql" innerHTML={CODE_8}></code></pre>

                <p>The SPARQL keyword&nbsp;<strong>a</strong>&nbsp;is a shortcut for the common predicate <code>rdf:type</code>, giving the class of a resource.</p>

                <h2>Find all classes with a given prefix</h2>

                <pre><code class="language-sparql" innerHTML={CODE_9}></code></pre>

                <p>The SPARQL keyword <strong>a</strong> is a shortcut for the common predicate <code>rdf:type</code>, giving the class of a resource.</p>

                <h2>Query from a particular graph on the web</h2>

                <pre><code class="language-sparql" innerHTML={CODE_10}></code></pre>

                <p>The <code>FROM</code> keyword lets us specify the target graph in the query itself.<br />Of interest also in the query shown above:<br />By using <code>?known</code> as an object of one triple and the subject of another, we traverse multiple links in the graph.</p>

                <h2>Find subjects with a property value greater than</h2>

                <p>Find me all landlocked countries with a population greater than 15 million</p>

                <pre><code class="language-sparql" innerHTML={CODE_11}></code></pre>

                <p>You can try this one at the <a class="external-link" href="http://dbpedia.org/sparql" rel="nofollow">DBPedia SPARQL endpoint</a>.</p>
                <ul>
                    <li><code>FILTER</code> constraints use boolean conditions to filter out unwanted query results.</li>
                    <li>Shortcut: a semicolon (;) can be used to separate two triple patterns that share the same subject. (<code>?country</code> is the shared subject above.)</li>
                    <li><code>rdfs:label</code> is a common predicate for giving a human-friendly label to a resource.</li>
                </ul>

            </ion-content>

        ];
    }
}
