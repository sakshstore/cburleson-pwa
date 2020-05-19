import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-awesome-power-of-the-link-in-linked-data',
})
export class PageAwesomePower {

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

                            <p>Hyperlinks are dumb. Literally dumb. They link one document to another – one little piece of text to another, but they don’t know how. They don’t know why. They don’t know diddly squat. The only real sense that search engines can make of them is that one page is more popular than another&#8230;probably&#8230;maybe. They’re dumb, first of all, because while they can relate two pieces of media on the Web, they don’t describe the nature of that relationship. At least – not in any way that computers can understand, which means that we humans have to sort through the mess and – aint nobody got time for that. Second, they’re dumb because the only thing they know how to connect is media. They can link a page to a page or a page to a file, but they can’t link any real-world thing to any other real-world thing. They tell us all about the structure of websites, sure, but they don’t tell us anything meaningful about the real world. The link in Linked Data, however, changes all of that.</p>

                            <p>The link between two things in Linked Data is still very simple like a hyperlink, but much more powerful. When it relates one thing to another, it explicitly describes the nature of that relationship. By providing context to its connection, it creates knowledge. That’s right – the link itself is knowledge. And because Linked Data can connect URIs that identify real-world things, not just documents and media files, it can describe far more than the structure of a website. It can help us learn new things beyond the knowledge we explicitly programmed into an application. It’s connections make statements. And statements, together, tell stories. As vast graphs of information that span the globe, these stories can change the world again, much like the traditional hyperlink did over the last twenty-nine years.</p>

                            <p>A link in Linked Data is, in fact, often referred to as a statement. It has the power, in and of itself, to make an assertion – to state a fact. It does so in very much the same way we humans do when <em>we</em> make a statement about something. We connect a subject to an object by way of some predicate.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/awesome-link-1.png" alt="" /></p>

                            <p>This is the basic sentence structure we learned in grade school, remember? The subject of a sentence is the person, place, or thing that is performing the action. The predicate expresses the action or being. And the object indicates to whom or for whom the action is being done; it receives the action.</p>

                            <p>As simple as this statement is, a hyperlink would not express the same meaning. A blog post written by Jack might hyperlink to a blog post written by Jill, but that link relates the two documents, not the two people. It doesn’t say that Jill is a friend of Jack or Jack a friend of Jill.</p>

                            <p>A link in Linked Data is an RDF statement, which follows the subject &gt; predicate &gt; object pattern.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/awesome-link-2.png" alt="" /></p>

                            <p>The subject is a URI, which could resolve to some representation of a resource. What differentiates this from traditional linking on the Web is that the subject is assumed to represent any kind of thing, document or real-world. The URI is used more like an identifier than a locator. That’s why we use the term URI instead of URL. It’s kind of like a primary key for a record in a database, if you know how that works. Only this time, the database is your entire corporate intranet or the World Wide Web.</p>

                            <p>The predicate, the part that does the actual linking, is a property, which expresses the nature of the relationship. The property is also expressed with a URI and it represents some kind of relational concept such as <em>friend of</em>, <em>has sibling</em>, or <em>has mother</em>. These predicates (or properties) are often borrowed from well-established public vocabularies and as such, they express <em>semantics</em> or meaning that computers can be programmed to understand.</p>

                            <p>The object, the part that is linked to, is either some literal value (like a date, number, string) or it is another resource with its own URI – some other real-world thing with a representation on the Web. And here’s the kicker. This linked object can be the subject of its own statements, with entirely new properties linking to entirely new objects. And that kind of linking creates a graph that has the power to grow far beyond what you and your little app can ever know alone. That’s awesome. <em>That’s power.</em></p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/awesome-link-3.png" alt="" /></p>

                            <p>OK, so maybe hyperlinks aren’t “dumb”. They got us this far, after all, didn’t they? They&#8217;ve been the glue for what today we call the World Wide Web. But if they can do all that, just imagine what the RDF triple, the link in Linked Data, can do.</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">

                            

                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}