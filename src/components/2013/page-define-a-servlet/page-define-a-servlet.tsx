import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, isLocal, SITENAME } from '../../../helpers/utils';




import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-define-a-servlet-using-java-annotations-instead-of-xml',
})
export class PageDefineAServlet {

    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('>> PageDefineAServlet.componentWillLoad');
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

                            <p><img class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/logo-java.svg" alt="" width="150" />With Servlet 3.0, it’s now possible to define your servlet using annotations instead of XML in the web deployment descriptor (web.xml). This can simplify maintenance and deployments because it keeps the servlet definition inline with the servlet’s actual code – everything’s conveniently found and managed together in one file. For those of you ready to start evolving into Java EE 6, here’s the essential information you need to know.</p>

                            <p>Use the <code>@WebServlet</code> annotation to define (declare) your servlet.</p>

                            <deckgo-highlight-code language="java"><code slot="code">{`@WebServlet(
    description = "Main dispatcher for the application.",
    urlPatterns = {
        "/HelloServlet",
        "/"
    })
public class HelloServlet extends HttpServlet {
 
    // servlet code...
 
}`}</code></deckgo-highlight-code>

                            <p>Here's another example...</p>

                            <deckgo-highlight-code language="java"><code slot="code">{`@WebServlet(value="/hello")
public class HelloServlet extends GenericServlet {
 
  // servlet code...
 
}`}</code></deckgo-highlight-code>

                            <p>Note that I’ve defined URL mappings using <code>urlPatterns</code> in one case and then using <code>value</code> in another. The&nbsp;<a href="http://docs.oracle.com/javaee/6/api/javax/servlet/annotation/WebServlet.html" rel="nofollow">JavaDoc for the @WebServlet annotation</a>&nbsp;states they are the same. There are other optional elements that can be used with the annotation (e.g. initParams, loadOnStartup, etc.) and those can be found in the JavaDoc also.</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                            
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}