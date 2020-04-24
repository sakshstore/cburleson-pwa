import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import Prism from "prismjs"
import 'prismjs/components/prism-java.min';

import { BlogData } from '../../../services/blog-data';



@Component({
    tag: 'page-user-impersonation-programming-in-websphere-portal',
})
export class PageUserImpersonationProgramming {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageUserImpersonationProgramming.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substring( document.location.pathname.lastIndexOf('/') + 1 );
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

                            <p>The user impersonation feature in WebSphere Portal allows specified users or groups the ability to assume the profile of others. In this way, administrators or help-desk staff can view a personalized and secured portal the way another end-user sees it. Of course, depending on the types of content and services you provide, this could be a security risk. If you have features that should not be accessed, even in impersonated sessions, you may need to wrap those features with some specialized logic. In this post, I show you how.</p>

                            <h2>Accessing the ImpersonationService in Your Java Code</h2>

                            <p>First, you’ll need to access the ImpersonationService in your theme or portlet code. The example below uses a JNDI lookup, which can be expensive, so be sure to put these kinds of things in an init method.</p>

                            <pre><code class="language-java">{`try {
  portletServiceHome = (com.ibm.portal.portlet.service.PortletServiceHome)ctx.lookup(com.ibm.portal.portlet.service.impersonation.ImpersonationService.JNDI_NAME);
  if(portletServiceHome != null) {
    impersonationHome = (com.ibm.portal.portlet.service.impersonation.ImpersonationService) portletServiceHome.getPortletService(com.ibm.portal.portlet.service.impersonation.ImpersonationService.class);
    if( impersonationHome != null ) {
      isImpersonationEnabled = true;
    }
  }
} catch ( javax.naming.NamingException ne ) {
  // impersonation is not present
} catch ( com.ibm.portal.portlet.service.PortletServiceUnavailableException psue ) {
  // impersonation is not present
}</pre>
<p>That’s how the PageBuilder theme does it. Here’s another example from the SPIs JavaDoc on how to perform the JNDI lookup to acquire the service object:</p>
<pre class="EnlighterJSRAW" data-enlighter-language="java">com.ibm.portal.portlet.service.PortletServiceHome psh;
javax.naming.Context ctx = new javax.naming.InitialContext();
 
try {
    psh = (PortletServiceHome) ctx.lookup(ImpersonationService.JNDI_NAME);
} catch(javax.naming.NameNotFoundException ex) {
    // error handling
}
 
// obtain the service object and use the service
ImpersonationService impersonationService = (ImpersonationService) psh.getPortletService(ImpersonationService.class);
try {
    impersonationService.doImpersonate(request, response, request.getParameter(FORM_TEXT));
} catch (Exception e) {
    // error handling
}`}</code></pre>

                            <h2>Using the ImpersonationService in Your Java Code</h2>

                            <p>Once you have access to the service, you can use the following method to determine if the current user is an impersonated user (returns a boolean):</p>

                            <p><code>impersonationHome.isUserImpersonated()</code></p>

                            <p>There are other useful methods on the ImpersonationService. Following are all the methods as of WebSphere Portal 7.0.0.</p>

                            <p><strong>Interface com.ibm.portal.portlet.service.impersonation.ImpersonationService</strong></p>

                            <p><code>void doImpersonate(ActionRequest actionRequest, ActionResponse actionResponse, java.lang.String impUserDN)</code><br />
                                This method starts the impersonation.</p>

                            <p><code>void doImpersonate(ActionRequest actionRequest, ActionResponse actionResponse, User impUser)</code><br />
                                This method starts the impersonation.</p>

                            <p><code>void doImpersonate(PortletRequest portletRequest, PortletResponse portletResponse, java.lang.String impUserDN)</code><br />
                                Deprecated. since 7.0 use <code>doImpersonate(ActionRequest, ActionResponse, String)</code> instead</p>

                            <p><code>void doImpersonate(PortletRequest portletRequest, PortletResponse portletResponse, User impUser)</code><br />
                                Deprecated. since 7.0 use <code>doImpersonate(ActionRequest, ActionResponse, User)</code> instead</p>

                            <p><code>User getOriginalUser()</code><br />
                                This method returns the original user that has logged in.</p>

                            <p><code>boolean isUserImpersonated()</code><br />
                                This method indicates whether the current user has been impersonated or he is acting on its own behalf.</p>

                            <p><code>void loginOriginalUser(HttpServletRequest aRequest, HttpServletResponse aResponse)</code> Deprecated. since 7.0 use<br />
                                <code>com.ibm.portal.impersonation.ImpersonationService#loginOriginalUser(HttpServletRequest, HttpServletResponse)</code> instead</p>

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