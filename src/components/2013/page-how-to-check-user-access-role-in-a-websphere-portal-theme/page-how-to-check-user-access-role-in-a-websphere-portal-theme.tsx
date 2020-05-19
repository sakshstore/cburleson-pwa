import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, isLocal, SITENAME } from '../../../helpers/utils';



import { BlogData } from '../../../services/blog-data';



@Component({
    tag: 'page-how-to-check-user-access-role-in-a-websphere-portal-theme',
})
export class PageHowToCheckUserAccessRoleInAWebspherePortalTheme {

    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('>> PageHowToCheckUserAccessRoleInAWebspherePortalTheme.componentWillLoad');
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

                            <p><img class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/logo-websphere.png" alt="WebSphere Portal Logo Symbol" />Since the release of IBM WebSphere Portal 7, there have been a number of&nbsp;<a href="https://www-10.lotus.com/ldd/portalwiki.nsf/dx/Portal_EL_Beans" rel="nofollow">Portal EL beans</a>&nbsp;exposed for access in your theme. EL beans are Java objects that can be used with the JSTL Expression Language. One of these objects, the AccessControlRuntimeModelBean, provides convenient access to the current access control permissions on a resource.</p>

                            <p>Since the release of IBM WebSphere Portal 7, there have been a number of Portal EL beans exposed for access in your theme. EL beans are Java objects that can be used with the JSTL Expression Language. </p>

                            <p>In the default Portal 8.0 theme, for example, you can find the following code stanza, which is used to determine whether or not a Help link should be shown in the UI. The snippet is in /themes/html/dynamicSpots/commonActions.jsp and it looks like this:</p>

                            <deckgo-highlight-code language="xml"><code slot="code">{`<%-- Help icon - only displayed for users with admin or editor role --%>
<portal-logic:if loggedIn="yes" line="1">
    <c:set var="admin" value="<%=com.ibm.portal.ac.data.RoleType.ADMIN%>"/>
    <c:if test="$\{wp.ac[wp.selectionModel.selected].hasPermission[admin]\}">
        <a class="wpthemeHelp" href="javascript:void(0);" onclick="javascript:window.open('/wps/iehs/topic/com.ibm.wp.admin.help/admin/h_wp_admin_welcome.html','wpthemeHelp','width=800,height=600')" aria-label="<portal-fmt:text key="help.title" bundle="nls.commonUI"/>" aria-haspopup="true" role="button">
            <img src="$\{themeConfig['resources.modules.ibm.contextRoot']\}/themes/html/dynamicSpots/icons/blank.gif" alt="">
            <span class="wpthemeAltText"><portal-fmt:text key="help.title" bundle="nls.commonUI"/></span>
        </a>
    </li>
    </c:if>
</portal-logic:if`}</code></deckgo-highlight-code>

                            <p>First, a JSTL variable, admin, is being set with the value of a RoleType constant representing the Administrator role. The AccessControlRuntimeModelBean is exposed as an EL bean called wp.ac, which has a hasPermission method that takes the RoleType as parameter. That’s the part, written in expression language, that looks like this:</p>

                            <deckgo-highlight-code language="xml"><code slot="code">{`$\{wp.ac[wp.selectionModel.selected].hasPermission[admin]\}`}</code></deckgo-highlight-code>

                            <p>So, you can use the same general stanza to check whether or not the current user is in a given role on a given resource.</p>

                            <p><strong>Your Copy/Paste Template…</strong></p>

                            <p>Here’s a general template you can use to copy/paste from. When replacing and , remember to eliminate the less-than and greater-than symbols.</p>

                            <deckgo-highlight-code language="xml"><code slot="code">{`<portal-logic:if loggedIn="yes">
    <c:if test="$\{wp.ac[wp.selectionModel.selected].hasPermission[<role_type_var>]\}">
        ... render something ...
    </li>
</portal-logic:if>`}</code></deckgo-highlight-code>

                            <p>And here’s a useful variation, which checks against a named portal page, rather than the currently selected page.</p>

                            <deckgo-highlight-code language="xml"><code slot="code">{`<portal-logic:if loggedIn="yes">
    <c:if test="$\{wp.ac[wp.navigationModel['uniquename']].hasPermission[<role_type_var>]\}">
        ... render something ...
    </li>
</portal-logic:if>`}</code></deckgo-highlight-code>

                            <p><strong>Role Types:</strong></p>

                            <p>The <code>com.ibm.portal.ac.data.RoleType</code> object shown above exposes the following RoleType constants:</p>
                            <ul>
                                <li>ADMIN</li>
                                <li>SECURITY_ADMIN</li>
                                <li>DELEGATOR</li>
                                <li>CAN_RUN_AS_USER</li>
                                <li>MANAGER</li>
                                <li>EDITOR</li>
                                <li>MARKUP_EDITOR</li>
                                <li>CONTRIBUTOR</li>
                                <li>PRIVILEGED_USER</li>
                                <li>USER</li>
                            </ul>

                            <p><strong>Related Content</strong></p>

                            <p>You may also be interested in another useful Portal EL Bean, which I describe in my post,How to Display User Attributes in a WebSphere Portal Theme.</p>

                            <p>See: Portal EL Beans in the WebSphere Portal Family wiki for a list of all the EL beans.</p>

                            <p><strong>Acknowledgements</strong></p>

                            <p>Special thanks goes to Georgy Gobozov who provided information that improved the quality of this post. Georgy blogs about Android and WebSphere Portal development, among other things (in both Russian and English) on his weblog, <a href="http://gobozov.blogspot.com/">Блоггг</a>.</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}