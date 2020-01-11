import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import Prism from "prismjs"

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-display-user-attributes-in-a-websphere-portal-theme',
})
export class PageDisplayUserAttributesInAWebspherePortalTheme {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageDisplayUserAttributesInAWebspherePortalTheme.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + SITENAME;
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

                            <p><img class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/logo-websphere.png" alt="WebSphere Portal Logo Symbol" />Since the release of IBM WebSphere Portal 7, there have been a number of&nbsp;<a href="https://www-10.lotus.com/ldd/portalwiki.nsf/dx/Portal_EL_Beans" rel="nofollow">Portal EL beans</a>&nbsp;exposed for access in your theme. EL beans are Java objects that can be used with the JSTL Expression Language. One of these objects, the UserBean, provides convenient access to the defined user attributes of the authenticated user.</p>

                            <p>In the default Portal 8.0 and CTC 3.1 theme, for example, you can find the following JSTL statement, which is used to print the authenticated user’s name in the theme header. The snippet is in /themes/html/dynamicSpots/commonActions.jsp and it looks like this:</p>


                            <pre><code class="language-xml">{`<c:out value="$\{wp.user[themeConfig['user.displaynameattribute']]\}" />`}</code></pre>

                            <p>The JSTL <code>c:out tag</code> in the line above is actually using two EL beans together. The ThemeConfigBean is providing access to theme metadata, the value of which is being passed as a parmeter to the UserBean. To clarify, we could simplify that line to go after the user’s surname, which is defined by LDAP convention as 'sn'...</p>

                            <pre><code class="language-xml">{`<c:out value="\{wp.user['sn']\}" />`}</code></pre>

                            <p>You have to be careful though; I learned that you cannot expect a String to be returned in all cases. Take this for example:</p>

                            <pre><code class="language-xml">{`<c:out value="\{wp.user['givenName']\}" />`}</code></pre>

                            <p>That prints the username with square brackets surrounding it (e.g. [Cody]) and it took me a bit to understand why. As it turns out, givenName was a multi-valued attribute, so what was actually being returned was an ArrayList. Once I knew that, it was easy enough to solve the problem with the following stanza:</p>

                            <pre><code class="language-xml">{`<%-- givenName is an ArrayList --%>
<c:set var="gName" value="$\{wp.user['givenName']\}"/>
<c:if test="$\{gName ne null\}">
    <c:set var="givenName" value="$\{gName[0]\}"/>
</c:if>
<c:choose>
    <c:when test="$\{givenName eq null || givenName eq ''\}">
        <a href="<%wpsURL.write(escapeXmlWriter);%>"><c:out value="$\{wp.user[themeConfig['user.displaynameattribute']]\}" /></a>
    </c:when>
    <c:otherwise>
        <a href="<%wpsURL.write(escapeXmlWriter);>"><c:out value="$\{givenName\}" />&amp;amp;nbsp;<c:out value="$\{wp.user['sn']\}" /></a>
    </c:otherwise>
</c:choose></ion-grid>`}</code></pre>

                            <p>In the code above, I’m checking to see if the user has a givenName defined and if so, I’m printing it by accessing the first String in the ArrayList ( i.e. <code>$&#123;gName[0]&#125;</code> ). I put the result of that expression into a variable called givenName and then use it later as <code>$&#123;givenName&#125;</code> in a <code>c:out</code> tag.</p>

                            <p>Now, you may be familiar with printing defined user attribute values in your theme using the <code>portal-fmt</code> tag like this:</p>

                            <pre><code class="language-xml">{`<portal-fmt:user attribute="givenName"/>`}</code></pre>

                            <p>I don’t have any reason to believe that one approach is better than the other, but it’s an alternative that you might find useful in some scenarios. Also, just being aware of these EL beans that are accessible from theme code is good. Perhaps the next time you see one, it will be a little more familiar to you now.</p>

                            <p>See:&nbsp;<a href="http://www-10.lotus.com/ldd/portalwiki.nsf/dx/Portal_EL_Beans" rel="nofollow">Portal EL Beans</a>&nbsp;in the WebSphere Portal Family wiki for a list of all the EL beans.</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">

                            <gls-adsense-ads />

                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}