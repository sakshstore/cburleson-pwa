import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
    tag: 'page-create-custom-properties-for-a-resource-environment-provider-using-wasadmin-scripting',
})
export class PageCreateCustomProperties {

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

                            <p>Here’s an example wasadmin script (in Jython) that demonstrates how to create and/or update custom properties for resource environment providers. This one, in particular, is a good template for scripting the creation and/or updating of dynamic content spot mappings for a WebSphere Portal theme.</p>

                            <p>First, I want to give a shout out to <a href="http://www.linkedin.com/pub/gabriel-aberasturi/11/97a/52a" rel="nofollow">Gabriel Aberasturi</a>, System Analist at Grupo Versia who helped me find this long desired script by answering my question in LinkedIn; he pointed me to <a href="http://pic.dhe.ibm.com/infocenter/wasinfo/v7r0/index.jsp?topic=%2Fcom.ibm.websphere.express.doc%2Finfo%2Fexp%2Fae%2Ftxml_resourcecustom.html" rel="nofollow">IBM documentation for this</a> that none of my searches had returned. Also, after posting the original article, my friend Jared Piper, who works at the Neiman Marcus Group, provided a much improved script, which has now replaced my old example in this article. I could never be any good if it wasn’t for a strong community of people like Gabriel and Jared who take the time to help. That’s exactly why I blog what I learn – to give back. Where would any of us be without the virtual community that makes us stronger? I know I speak for everyone in ours when I say to Gabriel and those who take the time to share that we salute you.</p>

                            <p>Anyway, here’s the script…</p>

                            <h2>Jython: Create dynamic content spot mappings</h2>

                            <deckgo-highlight-code language="python"><code slot="code">{`
# To execute, navigate to wp_profile/bin and use:
# wsadmin -lang jython -user wpsadmin -password wpsadmin -conntype SOAP -host mojo.base22.com -port 10025 -f C:/workspace/themeScripts/updated_example.py
 
# Identify the parent ID and assign it to the newrep variable.
newrep = AdminConfig.getid('/ResourceEnvironmentProvider:WP DynamicContentSpotMappings/')
print newrep
 
# Identify the required attributes
#print AdminConfig.required('J2EEResourceProperty')
 
# Identify all possible attributes
#print AdminConfig.attributes('J2EEResourceProperty')
 
# Set up a list of dictionaries for the properties. Each Dictionary should have "name" and "value" at a minimum. Look at line 10 for possible attributes
themePropertyList = [
    {"name": "MyTheme_toolbar", "value": "res:/wps/themeModules/modules/pagebuilder/jsp/toolbar.jsp,wp_toolbar"},
    {"name": "MyTheme_status", "value": "res:/MyTheme/themes/html/dynamicSpots/status.jsp,wp_status_bar"},
    {"name": "MyTheme_sideNav", "value": "res:/MyTheme/themes/html/dynamicSpots/sideNavigation.jsp?startLevel=2"},
    {"name": "MyTheme_projectMenu", "value": "res:/wps/themeModules/modules/pagebuilder/jsp/projectMenu.jsp,wp_project_menu"},
    {"name": "MyTheme_preview", "value": "res:/wps/themeModules/modules/pagebuilder/jsp/preview.jsp,wp_preview"},
    {"name": "MyTheme_asaPortlet", "value": "res:/wps/themeModules/modules/asa/jsp/asaPortlet.jsp, wp_analytics"},
    {"name": "MyTheme_asaHead", "value": "res:/wps/themeModules/modules/asa/jsp/head.jsp, wp_analytics"},
    {"name": "MyTheme_topNav", "value": "res:/MyTheme/themes/html/dynamicSpots/navigation.jsp?rootClass=wpthemeHeaderNav&amp;amp;startLevel=0&amp;amp;primeRoot=true"},
    {"name": "MyTheme_pageModeToggle", "value": "res:/MyTheme/themes/html/dynamicSpots/pageModeToggle.jsp, wp_toolbar"},
    {"name": "MyTheme_primaryNav", "value": "res:/MyTheme/themes/html/dynamicSpots/navigation.jsp?rootClass=wpthemePrimaryNav%20wpthemeLeft&amp;amp;startLevel=1"},
    {"name": "MyTheme_secondaryNav", "value": "res:/MyTheme/themes/html/dynamicSpots/navigation.jsp?rootClass=wpthemeSecondaryNav&amp;amp;startLevel=2&amp;amp;levelsDisplayed=2"},
    {"name": "MyTheme_crumbTrail", "value": "res:/MyTheme/themes/html/dynamicSpots/crumbTrail.jsp?rootClass=wpthemeCrumbTrail&amp;amp;startLevel=2"},
    {"name": "MyTheme_layout", "value": "lm:template"},
    {"name": "MyTheme_asa", "value": "res:/wps/themeModules/modules/asa/jsp/asa.jsp,wp_analytics"},
    {"name": "MyTheme_search", "value": "res:/MyTheme/themes/html/dynamicSpots/modules/search/coveo-search.jsp"}
]
 
# Get the J2EE resource property set:
propSet = AdminConfig.showAttribute(newrep, 'propertySet')
resourceProperties = AdminConfig.list("J2EEResourceProperty", propSet).splitlines()
 
# Loop through properties we are adding
for property in themePropertyList:
    found = 0
    for resourceProperty in resourceProperties:
        if (AdminConfig.showAttribute(resourceProperty, "name") == property["name"]):
            # Modify if values are different
            if (AdminConfig.showAttribute(resourceProperty, "value") != property["value"]):
                print("Found and modified: ", property["name"])
                print AdminConfig.modify(resourceProperty, [['value', property["value"]]])
            else:
                print("Found but did not modify: ", property["name"])
            found = 1
            break
    if found == 0:
        # Add to the property set
        print("Creating new property: ", property["name"], " ", property["value"])
        print AdminConfig.create('J2EEResourceProperty', propSet, [["name", property["name"]], ["value", property["value"]]])
 
# Save the configuration changes:
AdminConfig.save()
 
# Display finished message
print "Config Saved."`}</code></deckgo-highlight-code>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                            
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}