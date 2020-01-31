import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';
import Prism from "prismjs"

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-glossary-of-ldap-acronyms-and-terms',
})
export class PageGlossaryOfLdapAcronymsAndTerms {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageTemplatePage.componentWillLoad');
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

                            <p><strong>abstract (object classes)</strong><br />
                                Abstract classes are used to build other object classes, but never for building direct instances of the class. A special abstract class called top is the ultimate superclass of all object classes. To build a class that doesn&#8217;t inherit any attributes, you build a class that is a direct subclass of top.</p>
                            <p><strong>ApacheDS</strong><br />
                                ApacheDS (Apache Directory Server) is an embeddable, extendable, standards compliant, modern LDAP server written entirely in Java, and available under the Apache Software License.</p>
                            <p><strong>auxiliary (object classes)</strong><br />
                                You use auxiliary classes to mix and match. An auxiliary class augments the other object classes of an entry without the costs tied to inheritance. The auxiliary class is never involved in inheritance because it is never the super class for a structural or abstract class. Instead, auxiliary classes are explicitly included in an entry rather than included implicitly via inheritance. You use auxiliary classes to add specific functionality to a standard object class without modifying the original object definition. The same auxiliary class may be added to entries with different object classes and this is the most significant advantage of the auxiliary class. In other words, the auxiliary class is not part of a chain of inheritance and you can use it with entries of differing classes.</p>
                            <p>So, which is better: inheritance or Auxiliary class? The main thing to consider is the users who must create new entries. They must explicitly include both object classes unless you have some kind of user interface that abstracts this from them. If you use inheritance instead, they need to include only one object class. With the auxiliary option, problems can occur if a user forgets one of the object classes.</p>
                            <p><strong>c</strong><br />
                                Country</p>
                            <p><strong>cn</strong><br />
                                common name</p>
                            <p>If the object holding this attribute corresponds to a person, it is typically the person&#8217;s full name.</p>
                            <p><strong>dc</strong><br />
                                Domain Component</p>
                            <p><strong>DIT</strong><br />
                                Directory Information Tree</p>
                            <p><strong>DN</strong><br />
                                Distinguished Name</p>
                            <p><strong>l</strong><br />
                                Location</p>
                            <p><strong>LDIF</strong><br />
                                LDAP Data Interchange Format<br />
                                Example LDIF file with organizational and person entries:</p>

                            <pre><code class="language-">{`dn: o=burlesontech.com
objectclass: top
objectclass: organization
o: burlesontech.com

dn: ou=People, o=burlesontech.com
objectclass: organizationalUnit
ou: people

dn: ou=marketing, o=burlesontech.com
objectclass: organizationalUnit
ou: marketing

dn: cn=Cody Burleson, ou=people, o=burlesontech.com
objectclass: top
objectclass: organizationalPerson
cn: Cody Burleson
sn: Burleson
givenname: Cody
uid: cburleson
ou: marketing`}</code></pre>

                            <p><strong>o</strong><br />Organization</p>
                            <p><strong>OID</strong><br />Object Identifier used to uniquely name each entity in the LDAP schema. The syntax is a string of numbers separated by periods. For example:</p>

                            <p><code>2.16.840.1.113730.3.2.2</code></p>

                            <p>The string can be of any length and can contain any number of segments. The left-most segments are considered &#8216;most significant&#8217;. An OID can be subdivided simply by adding more segments to the end; the collective group of all OIDs beginning with a specific series of numbers is commonly called an &#8216;arch&#8217;.</p>

                            <p>Since OIDs are hierarchical, your organization can obtain one OID and then branch it as needed. For example, if your organization&#8217;s OID was 1.1, you could use 1.1.1, 1.1.2, 1.1.3, 1.1.3.1, etc. A root OID for your organization, a.k.a. Private Enterprise Number (PEN), can be obtained from IANA, the Internet Assigned Numbers Authority. You can typically receive a PEN within a few days after applying online although IANA commits only to a minimum of 30 days.</p>

                            <p>There is a specific arch that is reserved for private use within an enterprise. That arch is 1.3.6.1.4.1. Following the private-OID arch, organizations add their own Private Enterprise Number (PEN) to form a sub-arch that belongs totally to that organization and is globally unique. My company, Burleson Technology Group, has been assigned the Private Enterprise Number 31751, so our LDAP arch is 1.3.6.1.4.1.31751. Thus, if we created any unique entities in our LDAP schema, that&#8217;s the arch we would start with. We could, of course, branch it or add to the end, so that OIDs like 1.3.6.1.4.1.31751.1 or 1.3.6.1.4.1.31751.1.2.1 would be valid for our schema.</p>

                            <p>There is a specific arch (1.3.6.1.3) which is reserved by the IANA for experimentation and you can assign OIDs within this arch for temporary purposes, such as testing or for experimenting with your schema while waiting for your permanent PEN. OIDs within this experimental arch are not guaranteed to be globally unique, and therefore should not be published external to your organization nor used for production LDAP directories.</p>

                            <p><strong>ou</strong></p>

                            <p>Organizational Unit<br />OUs are typically used to create a hierarchy of containers within a domain. Only OUs within the same domain can have relationships. OUs of the same name in different domains are independent.</p>

                            <p><strong>RDN</strong><br />Relative Distinuished Name</p>

                            <p><strong>sn</strong></p>

                            <p>Surname</p>
                            <p>The family name (last name) of a person</p>

                            <p><strong>st</strong><br />State</p>

                            <p><strong>structural (object classes)</strong><br />
                                Each directory entry (instance) must contain at least one structural class. A structural class always uses inheritance, and it must be a subclass of some other object class. Only structural classes can use inheritance; abstract and auxiliary classes cannot use inheritance. A structural class can be a super class of another object class.</p>
                            <p><strong>uid</strong><br />User ID</p>

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