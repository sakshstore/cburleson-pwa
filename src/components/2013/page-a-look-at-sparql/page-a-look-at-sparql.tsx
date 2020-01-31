import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import Prism from "prismjs"
import 'prismjs/components/prism-turtle.min.js';
import 'prismjs/components/prism-sparql.min.js';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-a-look-at-sparql-sql-for-semantic-web',
})
export class PageALookAtSparql {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageALookAtSparql.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + SITENAME;
        if (this.header.teaser) {
            document.getElementById("meta-desc").setAttribute("content", this.header.teaser);
        }
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

                <ion-grid>
                    <ion-row>
                        <ion-col size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="7">
                            <h1>{this.header.title}</h1>
                            <app-entry-meta header={this.header} />

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/sparql-sql-for-sem-web-0.png" alt="" />SPARQL is the query language for Linked Data and the Semantic Web. It provides new capabilities that you simply cannot get out of traditional SQL and its power to unearth knowledge is amazing. With it, you can perform a distributed or <em>federated</em> query across multiple databases with a single query statement. Because SPARQL endpoints may exist on the World Wide Web as well as within your corporate enterprise, your own data can be augmented and extended by graphs upon graphs of information where as little as one single link was made. You can find and explore relationships in your company data, as well as world data, that you didn’t even know existed – all without the need for schema knowledge or some brain-numbing entity-relationship diagram postered on your wall. SPARQL is just one of a handful of tools that are transforming the current Web of documents into tomorrow’s &quot;semantic&quot; Web of linked data. In this post, I provide a very light introduction to SPARQL with a few simple queries you can cut your teeth on.</p>

                            <h2>RDF and the surprisingly simple, but infinitely powerful triple</h2>

                            <p>Linked Data is based on the RDF data model – a model in which simple assertions are made with statements called “triples”. A triple has a structure like a simple sentence we might have learned about in grade-school (e.g. “Jack is a friend of Jill.”). It is comprised of a<em>subject</em>, <em>predicate</em>, and <em>object</em>.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/sparql-sql-for-sem-web-1.png" alt="" /></p>

                            <p>Believe it or not, that’s really all we need to describe anything and everything known to man; the known universe can be described with triples. OK, if you want to get philosophical about it, we’d need a few axiomatic concepts to begin with, but let’s not get philosophical. A triple is all we need to say something meaningful…</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/sparql-sql-for-sem-web-2.png" alt="" /></p>

                            <p>That’s it. Unless Jill’s pissed-off at Jack, that’s a fact; that’s knowledge. Only, in RDF, it doesn’t really look like that. In RDF, triples are expressed with Uniform Resource Identifiers (URIs), which can be globally unique on the Web, so it looks more like this…</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/sparql-sql-for-sem-web-3.png" alt="" /></p>

                            <p>To make things easier, in RDF we can also use prefixed names for URIs as long as we pre-define the prefix.</p>

                            <p><code>@prefix social: &lt;</code><a href="http://example.org/models/social" rel="nofollow">http://example.org/models/social#</a><code>&gt;.</code></p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/sparql-sql-for-sem-web-4.png" alt="" /></p>

                            <p>The <em>object</em> of a triple may be a URI that refers to a resource, but it can also be a <em>literal</em>value – a string, integer, boolean, etc.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/sparql-sql-for-sem-web-5.png" alt="" /></p>

                            <h2>Schema-less RDF storage</h2>

                            <p>RDF triples are stored in what’s commonly referred to as a <em>triple-store</em>. A triple-store is to SPARQL what a relational-database is to SQL. But since all we need to express a triple are three URIs, or two URI’s and a literal value, we have no need for a pre-defined schema in order to put new data in. Pause for a second and let the gravity of that statement sink in, please. And because we don’t need a pre-defined schema, we can store new relationships and new kinds of information about things even though we were unable to predict all the possible needs of our application when we first developed it. An application that uses a triple-store can therefore be continuously enhanced and extended with absolutely no need for database changes and significantly less code changes and deployments.</p>

                            <blockquote><p>Linked Data applications can significantly reduce application design, development, and integration costs.</p></blockquote>

                            <p>Wikipedia has a pretty good list of <a href="http://en.wikipedia.org/wiki/Triplestore" rel="nofollow">vendor implementations for triple-store support</a>. Among them, for example, are <a href="http://www.franz.com/agraph/allegrograph/" rel="nofollow">AlegroGraph</a>, <a href="http://mulgara.org/" rel="nofollow">Mulgara</a>, <a href="http://virtuoso.openlinksw.com/" rel="nofollow">OpenLink Virtuoso</a>, <a href="http://www.openrdf.org/" rel="nofollow">Sesame</a>, <a href="http://www.oracle.com/technetwork/database-options/spatialandgraph/overview/rdfsemantic-graph-1902016.html" rel="nofollow">Oracle</a>, and <a href="http://www-01.ibm.com/software/data/db2/" rel="nofollow">IBM DB2</a> (NoSQL Graph).</p>

                            <p>So, if you’re familiar with SQL databases, you might think of all the triples in a triple-store as a flat list of three-column records. However, because a triple links one concept with another, and because all the triples can be linked to one another, what we really end up with is a <em>graph</em>, which we can enter at any point, and bounce around like a cockroach on a hot griddle.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/sparql-sql-for-sem-web-6.png" alt="" /></p>

                            <p>It is important to note that just because a triple-store does not require a schema, it doesn’t mean that we shouldn’t have a general model for the information we’re storing. We’re still storing information about certain kinds of things, which have common properties and relationships. We don’t have to standardize on those classes and attributes, but if we do, our data is much easier to query and to integrate with data conforming to other standard models. The model for a particular domain of knowledge is called a <em>vocabulary</em> or an <em>ontology</em>. An ontology defines the classes of things you’re going to be storing information about as well as the properties they have and the relationships that can hold among them. You can create your own or you can use other, well defined vocabularies available online. It’s always a best-practice to use existing vocabularies when they suit your needs, rather than invent your own. You can also leverage existing vocabularies, but extend them to better suit the specific needs of your organization.</p>

                            <h2>SPARQL endpoints</h2>

                            <p>The RDF graph within a triple-store is then exposed with a standard interface made accessible on the web, called a <em>SPARQL endpoint</em>. A SPARQL endpoint accepts queries and returns results via HTTP. This is a machine-friendly interface to a knowledge base; although there is typically also a user interface for querying the data. <em>Generic</em> endpoints can query any Web-accessible RDF data and <em>specific</em> endpoints are wired to query against particular datasets. So, let’s take a look at a specific SPARQL endpoint now that’s very popular.</p>

                            <p><a href="http://dbpedia.org/About" rel="nofollow"><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/sparql-sql-for-sem-web-7.png" alt="" />DBpedia</a> is a crowd-sourced community effort to extract structured information from Wikipedia. Because it is exposed as a SPARQL endpoint, we can use it to ask interesting questions about the information in Wikipedia. So, let’s get our feet wet, shall we? Point your web browser here: <a href="http://dbpedia.org/snorql/" rel="nofollow">http://dbpedia.org/snorql/</a>, and submit the following query:</p>

                            <pre><code class="language-sparql">{`SELECT ?p ?o WHERE {
    <http://dbpedia.org/resource/IBM> ?p ?o .
} LIMIT 200`}</code></pre>

                            <p><a href="http://dbpedia.org/snorql/?query=SELECT+%3Fp+%3Fo+WHERE+{%0D%0A+++++%3Chttp%3A%2F%2Fdbpedia.org%2Fresource%2FIBM%3E+%3Fp+%3Fo+.%0D%0A}+LIMIT+200%0D%0A" rel="nofollow">Enter this query for me</a></p>

                            <p>In this query, we are saying, “Give me all the predicates (?p) and all of the objects (?o) where the URI in the subject is <a href="http://dbpedia.org/resource/IBM" rel="nofollow">http://dbpedia.org/resource/IBM</a>. Or, in other words, “show me all the properties and values of your resource, IBM.” The results, should look something like this when you select ‘Browse’ for the results format; lots of properties and values…</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/sparql-sql-for-sem-web-8.jpg" alt="" /></p>

                            <p>An interesting property, to me is dbpedia:ontology/numberOfEmployees. At the time of this writing, the value was 434,246 employees. That seems like a big number, but I’m not entirely sure. Before I say, “wow,” I want to compare with some other companies that I think of as being ‘big’. I can easily just replace the subject in the query with another company, such as the shipping, freight, logistics and supply chain management company, UPS.</p>

                            <pre><code class="language-sparql">{`SELECT ?p ?o WHERE {
    <http://dbpedia.org/resource/United_Parcel_Service> ?p ?o .
} LIMIT 100`}</code></pre>

                            <p><a href="http://dbpedia.org/snorql/?query=SELECT+%3Fp+%3Fo+WHERE+{%0D%0A+++++%3Chttp%3A%2F%2Fdbpedia.org%2Fresource%2FUnited_Parcel_Service%3E+%3Fp+%3Fo+.%0D%0A}+LIMIT+100" rel="nofollow">Enter this query for me</a>.</p>

                            <p>How did I know that the subject URI should be /United_Parcel_Service and not /UPS? I performed a quick look at Wikipedia. The URL <a href="http://en.wikipedia.org/wiki/UPS" rel="nofollow">http://en.wikipedia.org/wiki/UPS</a> leads to an informational page about a variety of uses of the acronym, not the company page. From that informational page, however, I found the link to the company and there, I could see how the topic, United_Parcel_Service, was identified in the URL ( i.e. <a href="http://en.wikipedia.org/wiki/United_Parcel_Service" rel="nofollow">http://en.wikipedia.org/wiki/United_Parcel_Service</a>). You can usually take the topic name from a Wikipedia URL and add it to the end of <a href="http://dbpedia.org/resource/" rel="nofollow">http://dbpedia.org/resource/</a> to create the DBpedia URI. <sup>1</sup></p>

                            <p>Of course, I can look at the results and see that UPS has fewer employees than IBM – 398,300 total at the time of this blog post. I could also use a slightly different kind of query to ask the question, “Is IBM bigger than UPS in terms of the total number of employees?” For the next query, you must first switch the results format from ‘Browse’ to ‘as XML’ or ‘as XML + XSLT’.</p>

                            <pre><code class="language-sparql">{`PREFIX ont: <http://dbpedia.org/ontology/>

ASK {
    <http://dbpedia.org/resource/IBM> ont:numberOfEmployees ?ibm .
    <http://dbpedia.org/resource/United_Parcel_Service&gt; ont:numberOfEmployees ?ups .
    FILTER(?ibm > ?ups) .
}`}</code></pre>

                            <p><a href="http://dbpedia.org/sparql?default-graph-uri=http%3A%2F%2Fdbpedia.org&amp;query=PREFIX+owl%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0D%0APREFIX+xsd%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0D%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0APREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+%3A+%3Chttp%3A%2F%2Fdbpedia.org%2Fresource%2F%3E%0D%0APREFIX+dbpedia2%3A+%3Chttp%3A%2F%2Fdbpedia.org%2Fproperty%2F%3E%0D%0APREFIX+dbpedia%3A+%3Chttp%3A%2F%2Fdbpedia.org%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0APREFIX+ont%3A+%3Chttp%3A%2F%2Fdbpedia.org%2Fontology%2F%3E%0D%0A%0D%0AASK%0D%0A{%0D%0A++%3Chttp%3A%2F%2Fdbpedia.org%2Fresource%2FIBM%3E+ont%3AnumberOfEmployees+%3Fibm+.%0D%0A++%3Chttp%3A%2F%2Fdbpedia.org%2Fresource%2FUnited_Parcel_Service%3E+ont%3AnumberOfEmployees+%3Fups+.%0D%0A++FILTER%28%3Fibm+%3E+%3Fups%29+.%0D%0A}%0D%0A" rel="nofollow">Enter this query for me</a>.</p>

                            <p>Here’s a more sophisticated query for all companies that have more than 398300 employees, filtered for English labels only, and ordered by number of employees descending.</p>

                            <pre><code class="language-sparql">{`PREFIX ont: <http://dbpedia.org/ontology/>

SELECT ?company_name ?num_employees
WHERE {
    ? company a ont:Company;
    rdfs:label ?company_name ;
    ont:numberOfEmployees ?num_employees .
    FILTER (?num_employees > 398300 && lang(?company_name) = "en") .
} ORDER BY DESC(?num_employees) LIMIT 250`}</code></pre>



                            <p><a href="http://dbpedia.org/snorql/?query=PREFIX+ont%3A+%3Chttp%3A%2F%2Fdbpedia.org%2Fontology%2F%3E%0D%0A%0D%0ASELECT+%3Fcompany_name+%3Fnum_employees%0D%0AWHERE+{%0D%0A++++%3Fcompany+a+ont%3ACompany%3B%0D%0A+++++++++++++rdfs%3Alabel+%3Fcompany_name+%3B%0D%0A+++++++++++++ont%3AnumberOfEmployees+%3Fnum_employees+.%0D%0A++++FILTER+%28%3Fnum_employees+%3E+398300+%26%26+lang%28%3Fcompany_name%29+%3D+%22en%22%29+.%0D%0A}+ORDER+BY+DESC%28%3Fnum_employees%29+LIMIT+250" rel="nofollow">Enter this query for me</a>.</p>

                            <p>As you can see, not all of the data is clean because Wikipedia editors have sometimes included the source date in the field where the number of employees was recorded. That’s an issue to be sorted out either with the DBpedia parsing engine or Wikipedia editors. It’s also something to keep in mind about the World Wide Web of linked open data; while it affords us broad access to a lot of valuable information, there are still issues with accuracy, proof, and trust – not too much different than those we’re familiar with in the current “Web of documents”. There is something fundamentally different about linking data than linking documents, however, and I hope that I have at least helped you get a sense of it.</p>

                            <p>SPARQL is one of the key technologies of the &quot;next&quot; Web and though it’s not as popular and well-understood as traditional SQL, it is mature and well-ready to deliver new value to the the modern corporate enterprise.</p>

                            <p>Is that your enterprise? Maybe, it should be.</p>

                            <div class="simple-footnotes">
                                <p class="notes">Footnotes:</p>
                                <ol>
                                    <li>Bob DuCharme has made this point with very similar words in his excellent O’REILLY®book, <a href="http://www.amazon.com/gp/product/1449371434/ref=as_li_qf_sp_asin_tl?ie=UTF8&amp;camp=1789&amp;creative=9325&amp;creativeASIN=1449371434&amp;linkCode=as2&amp;tag=burtecgrollc-20" rel="nofollow">Learning SPARQL</a>, Second Ed. He wrote, &#8220;If Wikipedia has a page for ‘Some_Topic’ at <a href="http://en.wikipedia.org/wiki/Some_Topic" rel="nofollow">http://en.wikipedia.org/wiki/Some_Topic</a>, the DBpedia URI to represent that resource is usually <a href="http://dbpedia.org/resource/Some_Topic" rel="nofollow">http://dbpedia.org/resource/Some_Topic</a>.</li>
                                </ol>
                            </div>

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