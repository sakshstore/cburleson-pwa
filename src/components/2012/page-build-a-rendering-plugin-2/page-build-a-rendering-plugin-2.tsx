import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import Prism from "prismjs"
import 'prismjs/components/prism-java.min';
import 'prismjs/components/prism-velocity.min';

import { BlogData } from '../../../services/blog-data';



@Component({
    tag: 'page-build-a-rendering-plugin-ibm-wcm-part-2',
})
export class PageBuildARenderingPlugin2 {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageBuildARenderingPlugin2.componentWillLoad');
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

                            <p><img class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/velocity-template-150x150.png" alt="" />Content Manager with a custom rendering plugin that integrates the<a title="Apache Velocity Engine home page" href="http://velocity.apache.org/engine/index.html" rel="nofollow">Apache Velocity Engine</a>. This enables users to use Velocity templates within WCM content, which can give them JSP-like capabilities without the need for server-side deployments.</p>

                            <p>In <a href="/build-a-rendering-plugin-ibm-wcm-part-1">Part 1</a>, we created a custom rendering plugin. We also brought the Apache Velocity template technology into the project and gave the plugin class a main method so that we could run a quick console test. So, we’ve proven the custom rendering plugin for WCM and we’ve also proven the Velocity Engine. Today, we’re going to weave the two together so that users can actually use the plugin’s custom tag to reference and render an HTML Component containing VTL (Velocity Template Language). When we’re done, the plugin’s tag will function when used like this:</p>

                            <p class="clear"><code>[Plugin:Velocity lib="Web Content" cmpnt="HTML - My Velocity Template" vars="name=Velocity | project=Jakarta"]</code></p>

                            <p>Where…</p>

                            <ul>
                                <li>lib specifies the name of the WCM library in which the given HTML component can be found</li>
                                <li>cmpnt specifies an HTML component containing VTL (Velocity Template Language)</li>
                                <li>vars specifies one or more key/value pairs representing variables that will be injected into the Velocity context</li>
                            </ul>

                            <h2>Replace the Render Method</h2>

                            <p>Let’s start by replacing the render method of the plugin from Part 1.</p>

                            <p>VelocityPlugin.java (<a href="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/VelocityRenderPluginProject-Part2.zip">download it, zipped</a>)</p>

                            <pre><code class="language-java">{`// These constants typically go at the top of the class, but are placed just above
// this method for simplicity of this documentation...
  
public static final String CMPNT_NAME = "cmpnt";
public static final String LIBRARY_NAME = "lib";
public static final String CONTEXT_VARS = "vars";
 
public boolean render(final RenderingPluginModel p_model) throws RenderingPluginException {
 
    HttpServletRequest request = (HttpServletRequest) p_model.getRequest();
 
    final Map&lt;String, List&gt; params = p_model.getPluginParameters();
    final Writer writer = p_model.getWriter();
 
    String htmlCmpntName = null;
    String contextVariables = null;
 
    try {
 
        if (!params.containsKey(CMPNT_NAME)) {
            writer.write(" &lt;span style="0color: red\&amp;quot;;"&gt;WCM Velocity plugin parameter '" + CMPNT_NAME + "' is required, but has either been omitted or mispelled.&lt;/span&gt; ");
        }
        if (!params.containsKey(LIBRARY_NAME)) {
            writer.write(" &lt;span style="0color: red\&amp;quot;;"&gt;WCM Velocity plugin parameter '" + LIBRARY_NAME + "' is required, but has either been omitted or mispelled. ");
            writer.write("Provide the name of the WCM library in which the HTML component can be found.&lt;/span&gt; ");
        }
 
        if (params.containsKey(CMPNT_NAME) &amp;amp;&amp;amp; params.containsKey(LIBRARY_NAME)) {
 
            htmlCmpntName = params.get(CMPNT_NAME).get(0);
 
            Workspace workspace = WCM_API.getRepository().getSystemWorkspace();
            // Workspace workspace = WCM_API.getRepository().getWorkspace(request.getUserPrincipal());
 
            DocumentLibrary library = workspace.getDocumentLibrary(LIBRARY_NAME);
            if (library != null) {
                workspace.setCurrentDocumentLibrary(library);
            }
 
            DocumentIdIterator docIds = workspace.findByName(DocumentTypes.HTMLComponent, htmlCmpntName);
 
            if (docIds.hasNext()) {
 
                DocumentId docId = (DocumentId) docIds.next();
 
                LibraryHTMLComponent cmpnt = (LibraryHTMLComponent) workspace.getById(docId);
                String rawTemplate = workspace.render(p_model.getRenderingContext(), cmpnt);
 
                /* Init the runtime engine. Defaults are fine. */
                Velocity.init();
 
                VelocityContext context = new VelocityContext();
 
                if (params.containsKey(CONTEXT_VARS)) {
                    contextVariables = params.get(CONTEXT_VARS).get(0);
 
                    if (contextVariables.contains("|") &amp;amp;&amp;amp; contextVariables.contains("=")) {
                        String[] keyValPairs = contextVariables.split("\\|");
                        for (int i = 0; i &amp;lt; keyValPairs.length; i++) {
                            String pair = keyValPairs[i];
                            if (pair.contains("=")) {
                                StringTokenizer st = new StringTokenizer(pair, "=");
                                while (st.hasMoreTokens()) {
                                    String key = st.nextToken().trim();
                                    String val = st.nextToken().trim();
                                    context.put(key, val);
                                }
                            }
                        }
                    }
                    else if (contextVariables.contains("=")) {
                        StringTokenizer st = new StringTokenizer(contextVariables, "=");
                        while (st.hasMoreTokens()) {
                            String key = st.nextToken().trim();
                            String val = st.nextToken().trim();
                            context.put(key, val);
                        }
                    }
 
                }
 
                StringWriter w = new StringWriter();
                Velocity.evaluate(context, w, "mystring", rawTemplate);
                writer.write(w.toString());
 
            }
 
        }
 
    } catch (ServiceNotAvailableException e) {
        e.printStackTrace();
    } catch (OperationFailedException e) {
        e.printStackTrace();
    } catch (AuthorizationException e) {
        e.printStackTrace();
    } catch (DocumentRetrievalException e) {
        e.printStackTrace();
    } catch (IOException e) {
        e.printStackTrace();
    }
 
    // determine whether inner contents of the plugin should be rendered
    final boolean renderBody;
 
    final List renderBodyList = params.get("renderbody");
 
    if (renderBodyList != null &amp;amp;&amp;amp; renderBodyList.get(0).equals("false")) {
        renderBody = false;
    }
    else {
        renderBody = true;
    }
 
    return renderBody;
}`}</code></pre>

                            <p>Here’s some information about what’s going on with the code above:</p>

                            <ul>
                                <li>Line 4,5,6: Constants representing the attribute names that can be used in the plugin’s custom tag.</li>
                                <li>Line 10: The ServletRequest returned by p_model.getRequest() is actually an HttpServletRequest, so it’s safe to cast it as such when we get a handle on it. We don’t actually use it now, but I’m guessing we might soon as we continue to evolve the plugin.</li>
                                <li>Line 12: Note that the <em>less-than</em> and<em> greater-than</em> symbols are being replaced by my syntax highlighter plugin or rich text editor in WordPress. In your own code, be sure to replace &amp;lt; with the less-than symbol and replace &amp;gt; with the greater-than symbol.</li>
                                <li>Lines 20-30: If the user doesn’t supply the expected attributes to the plugin’s tag, we write some red text that tells them so.</li>
                                <li>Line 36: To work with the WCM API, we must get a handle on the workspace. The workspace is the main interface to everything in WCM using the WCM API. In this case, we’re using the system workspace with full access to everything in WCM. The following line is commented out, but it shows you how you could get a workspace by logging in as the current user if you wanted to.</li>
                                <li>Lines 39-42: We attempt to set the current Document Library used by the workspace, which can hopefully help us avoid errors and make our operations more efficient.</li>
                                <li>Line 44: Just about everything in the WCM API extends from the Document class. This confused me when I first started working with the WCM API because I thought that Document meant <em>content item</em> (as opposed to a component, for example). That’s not the case. Document is simply the superclass for just about every model object you work with in the API. So anyway – this line searches for the given HTML component by name and returns an iterator of DocumentId objects.</li>
                                <li>Line 48: We only expect one component to be returned, so we only have to worry about dealing with the first in the iterator.</li>
                                <li>Line 50: And we expect it to be a LibraryHTMLComponent, so we cast it as such.</li>
                                <li>Line 51: We render the HTML component to get its contents, which will be the raw Velocity template (before being merged with objects in the Velocity context). You could use the API to just get the contents of the HTML element rather than rendering it, but if you did that, none of the WCM tags and references that might exist in the component would be properly rendered. You’d just get the raw source. In this case, we want WCM to render the component and then the results of that will be the raw Velocity template.</li>
                                <li>Lines 54-88: We’re essentially doing the same thing here that we did in Part 1 of this tutorial series. We are creating a Velocity context, shoving some objects into it, and then merging the context and the template in a rendering. We’re also parsing the value of the <em>variables </em>attribute if the user provides variables to the tag and then were injecting those into the Velocity context. This is the place where you could continue to evolve the plugin and put your own interesting objects into the context if you wanted to. My idea is that the plugin should allow users to define variables, but then also supply some interesting objects from Portal and WCM. That’s an exercise for a later day, perhaps.</li>
                            </ul>

                            <h2>Setup a Simple Test Case and Test</h2>

                            <p>We can test the plugin now using a very simple test case comprised of two HTML components. One will contain the plugin’s tag and will reference the Velocity template. The other will be the template which contains VTL. Create the following two HTML components in WCM:</p>

                            <p>HTML Component Name: HTML – Velocity Render Plugin Test<br />
                                HTML Element Contents: [Plugin:Velocity lib=”Web Content” cmpnt=”HTML – My Velocity Template” vars=”name=Velocity|project=Jakarta”]</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/HTML-VelocityPluginTest.png" alt="" /></p>

                            <p>&nbsp;</p>

                            <p>HTML Component Name: HTML – Velocity Render Plugin Test<br />
                                HTML Element Contents: We are using $project $name to render this.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/HTML-MyVelocityTemplate.png" alt="" /></p>

                            <p>&nbsp;</p>

                            <p>After creating the two HTML components above, you can preview the first one (i.e. HTML – Velocity Plugin Test). If the stars are aligned just right, you should see a preview in which the variable placeholders used in the template are replaced with the values given for them in the tag.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/VelocityRenderPluginPreview.png" alt="" /></p>

                            <h2>Conclusion</h2>

                            <p>The plugin is now to a point where you can have some real fun with it. All we’ve done in our example is replace the variables <em>$name</em> and <em>$project</em> with the values we injected into the Velocity context. Without adding anymore to the plugin, there is a whole lot more VTL we could use. For just one simple example, you can use if/else statements, like this:</p>

                            <pre><code class="language-velocity">{`#if( $foo < 10 )
 Go North
#elseif( $foo == 10 )
 Go East
#elseif( $bar == 6 )
 Go South
#else
 Go West
#end`}</code></pre>

                            <p>&nbsp;</p>

                            <p>See the <a href="http://velocity.apache.org/engine/releases/velocity-1.7/user-guide.html" rel="nofollow">Apache Velocity User Guide</a> for more information about what you can do with velocity templates.</p>

                            <p>Now, you should know that this code is probably not robust enough for a production deployment. I’ve handled a few exception cases gracefully, but not all. And I simply have not put this to any extended use to see how she holds up. But hopefully I’ve been able to inspire you to start thinking creatively about the kinds of things you can do in WCM using a custom rendering plugin.</p>

                            <p>I would like to bring some Java object access to our Velocity context in a new part of this series, but hopefully, you know enough about this now to be dangerous on your own.</p>

                            <p>Here’s the WAR and EAR projects for Rational or your Ecplipse-based IDE (unzip and import into your Rational workspace): <a href="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/VelocityRenderPluginProject-Part2.zip">VelocityRenderPluginProject-Part2.zip</a></p>

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