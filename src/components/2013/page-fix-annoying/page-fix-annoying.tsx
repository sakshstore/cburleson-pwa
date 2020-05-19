import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, isLocal, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-fix-validation-errors-when-using-renderrequest-in-a-jsp',
})
export class PageFixAnnoying {

    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('>> PageFixAnnoying.componentWillLoad');
        }
        
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

                            <p>When you use renderRequest, renderResponse, and portletConfig objects in a JSP, your Rational or Eclipse-based IDE will usually give a validation error – "renderRequest cannot be resolved," for example. Having red-x validation errors in your IDE is annoying as all-hell, so here’s a nice work-around for that…</p>

                            <deckgo-highlight-code language="java" line-numbers><code slot="code">{`<%@ page import="javax.portlet.RenderRequest" %>
<%@ taglib uri="http://java.sun.com/portlet" prefix="portlet"%>
  
<%!
RenderRequest renderRequest;
%>
  
<portlet:defineObjects />
  
<%--
String portletSiteArea = renderRequest.getPreferences().getValue("sitearea", "");
// code...
--%>`}</code></deckgo-highlight-code>

                            <ul>
                                <li>Lines 1 and 2 represent the area atop your JSP where you do your imports and taglib references. I've put those two in because we're using both in the code that follows.</li>
                                <li>Line 5 is the key. We’re declaring the the <code>renderRequest</code> object so that our IDE will shut up and stop telling us it cannot be resolved.</li>
                                <li>Line 8 is important – it’s the tag that establishes the <code>renderRequest</code>, <code>renderResponse</code>, and <code>portletConfig</code> objects so that you can access them in your JSP. It is crucially important to ensure this tag always comes&nbsp;<em>after</em>&nbsp;your declaration of any of those <code>javax.portlet</code> objects. When the <code>&lt;portlet:defineObjects /&gt;</code> tag does its thing, the objects you declared will be overridden by the real deal.</li>
                                <li>Line 11 is just a random example showing how you might be using the object in your code to do some real work. The <code>renderRequest</code> instance in that line would normally get a squiggly red underline.</li>
                            </ul>

                            <p>Happy coding! (<em>Unless you’re on a death-march – to which I can only say: hang in there, buddy.</em>)</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}