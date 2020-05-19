import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
    tag: 'page-setup-carbon-ldp-with-stardog-container-from-scratch',
})
export class PageSetupCarbon {

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

                            <p>In this post, I provide a procedure for setting up Carbon LDP with Stardog as the database, from scratch. Further documentation can be found on the product documentation page, <a href="https://carbonldp.com/documentation/v1.0.x/platform/enterprise-class-repositories/" rel="nofollow">Enterprise-class repositories</a>. This procedure will detail how to run both Carbon LDP and Stardog together as two linked Docker containers.</p>

                            <h2>Obtain Stardog and license key file</h2>

                            <p>To create the Stardog container, you will need the Stardog binary and a license key. Head over to <a href="https://www.stardog.com/">stardog.com</a> and fetch yourself the 30-day Enterprise trial or Community Edition.</p>

                            <h2>Setup the Stardog docker container</h2>

                            <p>First, we&#8217;ll setup the Stardog container. For this, we&#8217;ll use Jon Tutcher&#8217;s Stardog dockerfile. Use the following command to get Jon&#8217;s repo. In my case, I am providing a new name for the local repo (stardog-docker-jontutcher).</p>

                            <p><code>git clone https://github.com/jontutcher/stardog-docker.git stardog-docker-jontutcher</code></p>

                            <p>Navigate into the directory and create a resources directory inside of it&#8230;</p>

                            <deckgo-highlight-code language="bash"><code slot="code">{`cd stardog-docker-jontutcher/
mkdir resources`}</code></deckgo-highlight-code>

                            <p>Put the Stardog license key file into the resources directory. The file must be named stardog-license-key.bin. You can obtain a license key for the 30 day enterprise trial or community edition at <a href="https://www.stardog.com/">stardog.com</a>. The license key will be picked up from the resources directory and built into the image when we build from the dockerfile.</p>

                            <p>Back out of the resources directory and run the docker build command.</p>

<deckgo-highlight-code language="bash"><code slot="code">{`cd ..
docker build --tag stardog:latest .`}</code></deckgo-highlight-code>

                            <p>Now use the following command to run the container.</p>

<deckgo-highlight-code language="bash"><code slot="code">{`docker run \\
    -d -p 5820:5820 \\
    --name stardog-instance \\
    -v /Users/cburleson/data/stardog:/stardog \\
    stardog:latest`}</code></deckgo-highlight-code>

                            <p>Note that the -v parameter should point to your Stardog data directory on your host machine. If you do not have an existing Stardog data directory, you should create an empty one and refer to that.</p>

                            <p>You can use the following command to verify the container exists and is running:</p>

                            <p><code>docker ps -a</code></p>

                            <p>In your web browser, navigate to <code>http://localhost:5820/</code> to access the Stardog administrative interface. You can login with the default username and password: admin | admin. Alternatively, you can access Stardog through <a href="https://www.stardog.com/studio/" rel="nofollow">Stardog Studio</a>, a separate download.</p>

                            <h2>Create a database in Stardog for Carbon LDP</h2>

                            <p>Next, we&#8217;ll create a database in the Stardog server for the Carbon platform to use. Through the web interface, you can do this through Databases &gt; New DB. Create a new database with all the default options except for &#8220;Database online&#8221;, which you should switch to OFF. This will allow us to edit the database configuration directly after creating it. Name the database whatever you want, such as &#8220;carbonldp&#8221;. In my case, I&#8217;m using the name &#8220;carbonldp-industrial&#8221; for the industrial PoC I&#8217;m building.</p>

                            <p>After creating the database, edit it and set Query all graphs to ON, which is necessary for Carbon to function properly.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/stardog-query-all-graphs.jpg" alt="" /></p>

                            <p>Now Save the database configuration and turn the database ON.</p>

                            <h2>Configure and run the Carbon LDP platform container</h2>

                            <p>Spinning up a Carbon LDP platform container requires only one docker command. But first, you need to&#8230;</p>

                            <p><strong>Create a persistent volume for Carbon LDP</strong></p>

                            <p>Create a directory on your local machine that can be used as a persistent volume for the Carbon platform container. In my case, I created the following directory, for example:</p>

                            <p><code>/Users/cburleson/data/carbonldp-industrial</code></p>

                            <p><strong>Run the Carbon LDP container</strong></p>

                            <p>The prerequisites are set. So, now we can spin up a Carbon server with the following Docker command. Be sure to replace the -v parameter with the path you created for your persistent Carbon directory. Leave everything after the colon in tact (don&#8217;t touch the part, <code>:/opt/carbonldp/shared</code>). At the time of this writing, the latest version of Carbon is 1.0.x-alpha. If there is a later version by the time you read this, you can use that. Also be sure to change the name of the carbonldp.repository.id parameter to the name of the database you created for Carbon in the Stardog server. You can name the container whatever you want. It&#8217;s typical to call it &#8220;carbonldp&#8221;, but in my case, I&#8217;m running it with the container named &#8220;carbonldp-industrial&#8221; This allows me to have multiple carbon containers for different purposes. As per my own settings, the full command is as follows:</p>

                            <deckgo-highlight-code language="bash"><code slot="code">{`docker run -d --name carbonldp-industrial -p 8083:8083 \\
    -v /Users/cburleson/data/carbonldp-industrial:/opt/carbonldp/shared \\
    --link stardog-instance:stardog-instance carbonldp/carbonldp-platform:1.0.x-alpha \\
    --carbonldp.repository.type="stardog" \\
    --carbonldp.repository.url="http://stardog-instance:5820/" \\
    --carbonldp.repository.username="admin" \\
    --carbonldp.repository.password="admin" \\
    --carbonldp.repository.id="carbonldp-industrial"`}</code></deckgo-highlight-code>

                            <p>In order for the two containers to communicate with one another, they are linked with Docker <code>link</code> parameter.  The value of that parameter is the container (&lt;name or id&gt;:alias or &lt;name or id&gt;). In my case, <code>stardog-instance:stardog-instance</code>, where <code>stardog-instance</code> is the name of the Stardog container and also referred to in the <code>carbonldp.repository.url</code> value.</p>

                            <p>If the Carbon image is not yet present on your machine, it will be fetched by the command from Docker Hub. You can execute the following Docker command to verify that the container is up and running.</p>

                            <p><code>docker ps -a</code></p>

                            <p>Is the STATUS is Exited, there was a problem in the startup. If you see such a problem, you can run the following command to examine the logs for troubleshooting:</p>

                            <p><code>docker logs &lt;container-name&gt;</code></p>

                            <p>Or, in my case&#8230;</p>

                            <p><code>docker logs carbonldp-industrial</code></p>

                            <p>If Carbon started up successfully, its logs should resemble the following:</p>

                            <deckgo-highlight-code language="bash"><code slot="code">{`├┬---------------------------------------------------------------------------------------------------┤
 ¦ Platform: v1.0.0-alpha.13 (Build: 2018-04-12T16:39:27+0000)
 ¦
 ¦ https://carbonldp.com
└┴---------------------------------------------------------------------------------------------------┘

INFO  [                         c.c.Application] -- Starting Application v1.0.0-alpha.13 on 6a8195e0e2e2 with PID 7 (/opt/carbonldp/carbonldp-platform.jar started by root in /)
DEBUG [                         c.c.Application] -- Running with Spring Boot v2.0.1.RELEASE, Spring v5.0.5.RELEASE
INFO  [                         c.c.Application] -- The following profiles are active: default
DEBUG [c.c.r.t.TxnConfig$$EnhancerBySpringCGLIB$$5dca10a3] -- Connecting with configured Stardog repository...
DEBUG [c.c.r.t.TxnConfig$$EnhancerBySpringCGLIB$$5dca10a3] -- Connecting with configured Stardog repository...DONE
DEBUG [                     c.c.l.LockingConfig] -- Starting embedded ZooKeeper server...
DEBUG [                     c.c.l.LockingConfig] -- Starting embedded ZooKeeper server...COMPLETE
DEBUG [   c.c.s.a.t.JWTokenAuthenticationFilter] -- Initializing filter 'jwTokenAuthenticationFilter'
DEBUG [   c.c.s.a.t.JWTokenAuthenticationFilter] -- Filter 'jwTokenAuthenticationFilter' configured successfully
DEBUG [ c.c.s.a.a.AnonymousAuthenticationFilter] -- Initializing filter 'anonymousAuthenticationFilter'
DEBUG [ c.c.s.a.a.AnonymousAuthenticationFilter] -- Filter 'anonymousAuthenticationFilter' configured successfully
INFO  [                         c.c.Application] -- Started Application in 11.816 seconds (JVM running for 13.061)`}</code></deckgo-highlight-code>

                            <p><strong>Verify Carbon data in the Stardog server</strong></p>

                            <p>For an additional validation, you can verify that the database in Stardog has some preliminary Carbon-specific data in it. In the Stardog web console at <code>http://localhost:5820/</code>, navigate to the database you created for Carbon, click on &gt;_ Query and run the following SPARQL query for Types:</p>

<deckgo-highlight-code><code slot="code">{`select distinct ?type ?label 
where { 
  ?s a ?type . 
  OPTIONAL { ?type rdfs:label ?label } 
}`}</code></deckgo-highlight-code>

                            <p>You should see Carbon-specific types in the results as shown below&#8230;</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/carbon-ldp-stardog-types.jpg" alt="" /></p>

                            <p><strong>Verify Carbon response in web browser</strong></p>

                            <p>You can also do a check for a response from the Carbon server by hitting the following URL in your web browser:</p>

                            <p><code>http://localhost:8083/.system/platform/</code></p>

                            <p>The browser should return an RDF response similar to the following (the platform meta, which includes the build date and version):</p>

                            <deckgo-highlight-code language="xml"><code slot="code">{`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
  <rdf:Description rdf:about="http://localhost:8083/.system/platform/">
    <rdf:type rdf:resource="http://www.w3.org/ns/ldp#Container"/>
    <rdf:type rdf:resource="https://carbonldp.com/ns/v1/platform#RequiredSystemDocument"/>
    <rdf:type rdf:resource="http://www.w3.org/ns/ldp#RDFSource"/>
    <rdf:type rdf:resource="http://www.w3.org/ns/ldp#BasicContainer"/>
    <rdf:type rdf:resource="http://www.w3.org/ns/ldp#Resource"/>
    <rdf:type rdf:resource="https://carbonldp.com/ns/v1/platform#Document"/>
    <rdf:type rdf:resource="https://carbonldp.com/ns/v1/platform#Platform"/>
    <membershipResource xmlns="http://www.w3.org/ns/ldp#" rdf:resource="http://localhost:8083/.system/platform/"/>
    <modified xmlns="https://carbonldp.com/ns/v1/platform#" rdf:datatype="http://www.w3.org/2001/XMLSchema#dateTime">2018-07-17T20:06:25.656Z</modified>
    <created xmlns="https://carbonldp.com/ns/v1/platform#" rdf:datatype="http://www.w3.org/2001/XMLSchema#dateTime">2018-07-17T20:06:25.656Z</created>
  </rdf:Description>
  <rdf:Description rdf:nodeID="node1ciktjenqx53">
    <rdf:type rdf:resource="https://carbonldp.com/ns/v1/platform#PlatformInstance"/>
    <rdf:type rdf:resource="https://carbonldp.com/ns/v1/platform#VolatileResource"/>
    <buildDate xmlns="https://carbonldp.com/ns/v1/platform#" rdf:datatype="http://www.w3.org/2001/XMLSchema#dateTime">2018-04-12T16:39:27.000Z</buildDate>
    <version xmlns="https://carbonldp.com/ns/v1/platform#">1.0.0-alpha.13</version>
  </rdf:Description>
    <rdf:Description rdf:about="http://localhost:8083/.system/platform/">
    <instance xmlns="https://carbonldp.com/ns/v1/platform#" rdf:nodeID="node1ciktjenqx53"/>
  </rdf:Description>
</rdf:RDF>`}</code></deckgo-highlight-code>

                            <p>You&#8217;re good to go! You may, however, wish to use the Carbon LDP Workbench as well.</p>

                            <h2>Run the Carbon LDP Workbench</h2>

                            <p>The Carbon LDP Workbench provides a visual interface to your Carbon instance data. You can spin up the workbench with the following command:</p>

                            <deckgo-highlight-code language="bash"><code slot="code">{`docker run -d --name carbonldp-workbench -p 8000:80 \\
    -e "CARBON_HOST=localhost:8083" \\
    -e "CARBON_PROTOCOL=http" \\
    carbonldp/carbonldp-workbench:1.0.x-alpha`}</code></deckgo-highlight-code>

                            <p>You can then access the Workbench at the following URL:</p>

                            <p><code>http://localhost:8000/</code></p>

                            <p>If you see any errors in the Workbench when first accessing it, try a hard refresh in your browser.</p>

                            <h2>Accessing the Stardog container&#8217;s shell</h2>

                            <p>If you want to get into the Stardog container to execute stardog-admin commands, use the following Docker command:</p>

                            <p><code>docker exec -it &lt;stardog-container-name&gt; bash</code></p>

                            <p>In my case:</p>

                            <p><code>docker exec -it stardog-instance bash</code></p>

                            <p>Then you can change into the stardog/bin directory&#8230;</p>

                            <p><code>cd /stardog/bin</code></p>

                            <p>And execute stardog-admin commands, such as&#8230;</p>

                            <p><code>./stardog-admin help</code></p>

                            <p>You can type <code>exit</code> to exit out of the container and back to your host shell.</p>

                            <h2>Accessing the Carbon LDP container&#8217;s shell</h2>

                            <p>If you want to get into the Carbon LDP container, you can use a similar command. However, the Carbon container does not include <code>bash</code>, so you can use <code>sh</code> instead&#8230;</p>

                            <p><code>docker exec -it &lt;carbon-container-name&gt; sh</code></p>

                            <p>You can type <code>exit</code> to exit out of the container and back to your host shell.</p>

                            <h2>Conclusion</h2>

                            <p>This post described the procedure for setting up a Carbon LDP container configured to run with a Stardog database in a Stardog container. Additionally, we setup the Carbon LDP Workbench. And finally, I showed how you can get inside the Stardog container to execute stardog-admin commands. The procedure results in three Docker containers providing everything you need for Carbon LDP with Stardog development environment.</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}