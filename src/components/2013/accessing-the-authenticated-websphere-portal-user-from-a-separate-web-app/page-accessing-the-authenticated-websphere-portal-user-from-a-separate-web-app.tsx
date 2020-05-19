import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
        tag: 'page-accessing-the-authenticated-websphere-portal-user-from-a-separate-web-app',
})
export class PageAccessingTheAuthenticatedWebspherePortalUserFromASeparateWebApp {

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

                                                        <p><img class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/logo-websphere.png" alt="WebSphere Portal Logo" />Recently, I had trouble sharing a security context between WebSphere Portal and a custom web app deployed on the same server. It was for a mobile app that provides a JSON/XML REST API to content and services from Portal 6.1.5. For this to work, we needed the currently authenticated portal user, but since it was a separate web app deployed on the app server, and not a portlet or set of resources deployed within the portal, it was a challenge. This post illustrates the challenge and a solution.</p>

                                                        <p>If the user was logged in to the portal, I expected to get a name for the Principal from the HTTPServletRequest object using the following code:</p>

                                                        <deckgo-highlight-code language="java"><code slot="code">{`Principal principal = (Principal) request.getUserPrincipal();
if(principal != null) {
     System.out.println("username: " + principal.getName());
} else {
     System.out.prinln("Principal is null!");
}`}</code></deckgo-highlight-code>

                                                        <p>But, this did not work. The Principal was null. And of course, I couldn’t get what I needed using the Portal User Management Architecture (PUMA) either using code similar to the following…</p>

                                                        <deckgo-highlight-code language="java"><code slot="code">{`String userCnFromPuma = null;
PumaHome home = null;
try {
        // ------------------------------------------
        // Stuff like this should really be done in
        // an init method of a service singleton
        // because JNDI lookups are expensive...
        Context ctx = new InitialContext();
        String myjndiname = PumaHome.JNDI_NAME;
        home = (PumaHome) ctx.lookup(myjndiname);
        // ------------------------------------------------------------------------
  
        Map map=null;   
        if(home!=null){
  
                PumaProfile pp = home.getProfile(request);
  
                if(pp!=null){
  
                        List attribNames = new ArrayList();
                        attribNames.add("cn");
                        map = pp.getAttributes(pp.getCurrentUser(),attribNames);
                        userCnFromPuma = (String)map.get("cn");
                        if(userCnFromPuma != null) {
                                System.out.println("userCnFromPuma: " + userCnFromPuma);
                        } else {
                                System.out.println("userCnFromPuma from PUMA is null!");
                        }
                }
  
        }else{
                System.out.println("PumaHome is null!");
        }
  
} catch (Exception e) {
        e.printStackTrace();
        System.out.println("Exception occurred while looking up PuamHome");
}`}</code></deckgo-highlight-code>


                                                        <p>Following is a solution&#8230;</p>

                                                        <h2 >Add security roles and bindings to the deployment descriptor for the EAR</h2>

                                                        <p>Modify the deployment descriptor (<code>application.xml</code>) for the EAR project, which is the wrapper to your web app’s module (WAR) in Rational. Add an &quot;Everyone Role&quot; and then check <em>Everyone</em> in the WebSphere Bindings.</p>

                                                        <p>Add an &quot;All Role&quot; and check <em>All authenticated users</em> in the WebSphere Bindings.</p>

                                                        <p>And for good measure, added a &quot;No Role&quot; and leave all the WebSphere Bindings unchecked for that role.</p>

                                                        <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/noRole.png" alt="" /></p>

                                                        <p>After making these changes, the source of your application.xml file should look something like this:</p>

                                                        <deckgo-highlight-code language="xml"><code slot="code">{`<?xml version="1.0" encoding="UTF-8"?>
<application id="Application_ID" version="1.4" xmlns="http://java.sun.com/xml/ns/j2ee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://java.sun.com/xml/ns/j2ee http://java.sun.com/xml/ns/j2ee/application_1_4.xsd">
        <display-name>mywebappEAR</display-name>
        <module id="WebModule_1377797584294">
                <web>
                        <web-uri>mywebapp.war</web-uri>
                        <context-root>wps/mywebapp</context-root>
                </web>
        </module>
        <security-role id="SecurityRole_1379706420653">
                <description>
                Everyone in the enterprise.</description>
                <role-name>Everyone Role</role-name>
        </security-role>
        <security-role id="SecurityRole_1379706420654">
                <description>
                All Authenticated users in the enterprise.</description>
                <role-name>All Role</role-name>
        </security-role>
        <security-role>
                <description>
                No users in the enterprise.</description>
                <role-name>No Role</role-name>
        </security-role>
</application>`}</code></deckgo-highlight-code>


                                                        <h2 >Add auth constraints to the deployment descriptor for the WAR</h2>

                                                        <p>Finally, added auth constraints to the deployment descriptor for the WAR. That is to say – modify the WEB-INF/web.xml file in the dynamic web app project by adding the following:</p>

                                                        <deckgo-highlight-code language="xml"><code slot="code">{`<security-constraint id="SecurityConstraint_1">
        <web-resource-collection id="WebResourceCollection_1">
                <web-resource-name/>
                <url-pattern>/*</url-pattern>
                <http-method>DELETE</http-method>
                <http-method>GET</http-method>
                <http-method>POST</http-method>
                <http-method>PUT</http-method>
                <http-method>HEAD</http-method>
        </web-resource-collection>
        <auth-constraint id="AuthConstraint_1">
                <description/>
                <role-name>All Role</role-name>
        </auth-constraint>
        <user-data-constraint id="UserDataConstraint_4">
                <transport-guarantee>NONE</transport-guarantee>
        </user-data-constraint>
</security-constraint>
  
<security-role id="SecurityRole_1">
        <description>Everyone role</description>
        <role-name>Everyone Role</role-name>
</security-role>
<security-role id="SecurityRole_2">
        <description>All role</description>
        <role-name>All Role</role-name>
</security-role>
<security-role id="SecurityRole_3">
        <description>No role</description>
        <role-name>No Role</role-name>
</security-role>`}</code></deckgo-highlight-code>

                                                        <p>The HTTP methods you wish to protect with the transport-guarantee are up to you. In my case, I used the very same settings as what is defined for the “/myportal” path in WebSphere Portal.</p>

                                                        <h2>Final results</h2>

                                                        <p>After having added the security (auth) constraints, I established an authenticated session by logging in to the portal. I then entered the URL of the web app and was able to see that the Principal from the HTTPServletRequest was no longer returning null; principal.getName() returned the name of the user I authenticated with. The PUMA code also returned the common name (cn) of the user. When I did not establish an authenticated session and I tried to access the web app, I was routed by WebSeal to the portal login, which is exactly what I wanted.</p>

                                                        <p>My colleague also informed me that there is a way to bypass this requirement to define security (auth) constraints. He said…</p>

                                                        <blockquote><p>There’s also a setting in the WAS Admin console you can use, under the security administration stuff, for “use available authentication” … this will tell WAS to build a security context around a request to your web app if it can, regardless of whether your request URL has security constraints on it or not.</p></blockquote>

                                                        <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/bypassAuthConstraintRequirement.png" alt="" /></p>


                                                        <p>I elected not to use this feature since it seems to me that it’s better to explicitly define security constraints for each app than relax the restriction overall. But, nevertheless, it may also be handy to have noted.</p>

                                                </ion-col>
                                                <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                                                        >
                        </ion-col>
                                        </ion-row>
                                </ion-grid>

                        </ion-content >

                ];
        }
}