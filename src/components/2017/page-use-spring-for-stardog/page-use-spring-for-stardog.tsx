import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import Prism from "prismjs"
import 'prismjs/components/prism-java.min';
import 'prismjs/components/prism-bash.min.js';

import { BlogData } from '../../../services/blog-data';



@Component({
    tag: 'page-use-spring-for-stardog-in-a-spring-boot-application',
})
export class PageUseSpringForStardog {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageUseSpringForStardog.componentWillLoad');
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

                            <p>Recently I completed a little study incorporating Spring for Stardog into a Spring Boot web app, with successful results. Here&#8217;s how.</p>

                            <h2>Introduction</h2>

                            <p>Stardog is a Java based RDF repository server (a.k.a. triple-store and more), which supports the RDF graph data model; SPARQL query language; property graph model and Gremlin graph traversal language; HTTP and SNARL protocols for remote access and control; OWL 2 and user-defined rules for inference and data analytics; virtual graphs; geospatial query answering; and programmatic interaction via several languages and network interfaces. At this point, I don&#8217;t have a lot of experience with Stardog, but I&#8217;ve been experimenting with it to see what I can learn. As part of my study, I recently incorporated Stardog Spring into a Spring Boot web app &#8211; taking notes along the way. Here&#8217;s my notes on how I got it setup and working successfully.</p>

                            <h2>Download and install Stardog</h2>

                            <p>For my local development environment on Mac OS, I installed Stardog 5 BETA (Community Edition).</p>

                            <p>You can download Stardog at www.stardog.com. Once you&#8217;ve downloaded it, unzip the archive to a destination directory. I&#8217;m put mine in /Users/cburleson/stardog</p>

                            <p>Next you need to set the STARDOG_HOME environment variable. You can do this by adding an export line to your .bash_profile.</p>


                            <pre class="EnlighterJSRAW" data-enlighter-language="null">cd ~
sudo nano .bash_profile</pre>

                            <p>Add the following line to .bash_profile:</p>

                            <p><code>export STARDOG_HOME=/Users/cburleson/stardog</code></p>

                            <p>Save changes made to .bash_profile by hitting Control+o (that’s an o as in otter), ENTER, then exit out of nano by hitting Control+X.</p>

                            <p>Note that changes made .bash_profile will require the shell to be restarted or a new shell to spawn.</p>

                            <p>Copy <code>stardog-license-key.bin</code> into the STARDOG_HOME location. Then you can start the Stardog server to test your installation.</p>

                            <p><b>Start the Stardog server</b></p>

                            <p><code>/Users/cburleson/stardog/bin/stardog-admin server start</code></p>

                            <p>If everything is working properly, you should get the following response.</p>

                            <pre><code class="language-bash">{`Stardog server is listening on all network interfaces.
HTTP server available at http://localhost:5820.
 
STARDOG_HOME=/Users/cburleson/stardog`}</code></pre>

                            <p>the server is running and can be accessed in a web browser at  <a class="external-link" href="http://localhost:5820/" rel="nofollow"><code>http://localhost:5820/</code></a></p>

                            <p>Login with:</p>

                            <table class="table table-bordered table-striped">
                                <tbody>
                                    <tr>
                                        <th>Username</th>
                                        <td>admin</td>
                                    </tr>
                                    <tr>
                                        <th>Password</th>
                                        <td>admin</td>
                                    </tr>
                                </tbody>
                            </table>

                            <p>You can also check the server status with the following command:</p>

                            <p><code>/Users/cburleson/stardog/bin/stardog-admin server status</code></p>

                            <p>Now, that you&#8217;ve tested the installation, you can stop the server with the following command.</p>

                            <p><code>/Users/cburleson/stardog/bin/stardog-admin server stop</code></p>

                            <h2>Add the Stardog Maven Repo to pom.xml</h2>

                            <p>In order to get the required dependencies, you need to add the Stardog public maven repository to your repositories defined in the Maven POM (pom.xml). Here&#8217;s how that section looks in my file:</p>

                            <pre><code class="language-xml">{`<repositories>
 
 <repository>
     <id>spring-releases</id>
     <url>https://repo.spring.io/libs-release</url>
 </repository>

 <repository>
     <id>stardog-public</id>
     <url>http://maven.stardog.com</url>
 </repository>

</repositories>`}</code></pre>


                            <h2>Add Stardog dependencies to pom.xml</h2>

                            <p>Now, we can add the required dependencies. Notice that even though I installed Stardog 5 BETA, I&#8217;m using a different version number for various dependencies (<em>still, it works</em>).</p>

                            <pre><code class="language-xml">{`<dependency>
    <groupId>com.complexible.stardog</groupId>
    <artifactId>client-snarl</artifactId>
    <version>4.2.4</version>
    <type>pom</type>
</dependency>
 
 
<dependency>
    <groupId>com.complexible.stardog</groupId>
    <artifactId>client-http</artifactId>
    <version>4.2.4</version>
    <type>pom</type>
</dependency>
 
 
<dependency>
    <groupId>com.complexible.stardog</groupId>
    <artifactId>server</artifactId>
    <version>4.2.4</version>
    <type>pom</type>
</dependency>
 
<!--
<dependency>
    <groupId>com.complexible.stardog.sesame</groupId>
    <artifactId>stardog-sesame-core</artifactId>
    <version>4.2.4</version>
    <type>jar</type>
</dependency>
-->
<!--
<dependency>
  <groupId>com.complexible.stardog.jena</groupId>
  <artifactId>stardog-jena</artifactId>
  <version>4.2.4</version>
  <type>jar</type>
</dependency>
-->
 
<!--
<dependency>
    <groupId>com.complexible.stardog.gremlin</groupId>
    <artifactId>stardog-gremlin</artifactId>
    <version>4.2.4</version>
    <type>jar</type>
</dependency>
-->
 
 
<dependency>
    <groupId>com.complexible.stardog</groupId>
    <artifactId>stardog-spring</artifactId>
    <version>2.1.3</version>
    <type>jar</type>
</dependency>
 
 
<!--
<dependency>
    <groupId>com.complexible.stardog</groupId>
    <artifactId>stardog-spring-batch</artifactId>
    <version>2.1.3</version>
    <type>jar</type>
</dependency>
-->
 
<!-- https://mvnrepository.com/artifact/org.apache.lucene/lucene-core -->
<dependency>
    <groupId>org.apache.lucene</groupId>
    <artifactId>lucene-core</artifactId>
    <version>6.5.1</version>
</dependency>`}</code></pre>

                            <p>Notice that I&#8217;ve got stardog-spring-batch commented in the file, but commented out. I put it in the file incase I decide to use it in the future, but for now, I don&#8217;t need it.</p>

                            <h2>Create or edit Spring application context file</h2>

                            <p>I prefer using pure Java only configuration for Spring, but I had trouble with this one, so opted to use the XML configuration. I created the following file inside of <code>src/main/resources...</code></p>

                            <p><strong>applicationContext.xml</strong></p>

                            <pre><code class="language-xml">{`<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
 
    <bean name="embeddedProvider" class="com.base22.rdfx.config.EmbeddedProvider"></bean>
 
    <bean name="dataSource" class="com.complexible.stardog.ext.spring.DataSourceFactoryBean">
        <property name="to" value="testdb"/>
        <property name="provider" ref="embeddedProvider"/>
        <property name="username" value="admin"/>
        <property name="password" value="admin"/>
    </bean>
 
    <bean name="template" class="com.complexible.stardog.ext.spring.SnarlTemplate">
        <property name="dataSource" ref="dataSource"/>
    </bean>
 
    <bean name="importer" class="com.complexible.stardog.ext.spring.DataImporter">
        <property name="snarlTemplate" ref="template"/>
        <property name="format" value="N3"/>
        <property name="inputFiles">
            <list>
                <value>classpath:data/sp2b_10k.n3</value>
            </list>
        </property>
    </bean>
 
</beans>`}</code></pre>

                            <p>Notice that the data importer bean is going to look for an RDF file in the classpath, which should exist in <code>src/main/resources/data.</code></p>

                            <p>I got that file from the source project for stardog-spring, which you can find on GitHub at:  <a href="https://github.com/stardog-union/stardog-spring" rel="nofollow">https://github.com/stardog-union/stardog-spring</a></p>

                            <p>You could use any RDF file that you want to have auto-loaded into the Stardog repository.</p>

                            <h2>Make the applicationContext.xml available to your Spring Boot app</h2>

                            <p>In order for your Spring Boot app to recognize and load the applicationContext.xml, you&#8217;ll need to add an annotation to the main application class (the one with a Java main() method)&#8230;</p>

                            <p>The annotation you&#8217;ll need to add is:</p>

                            <p><code>@ImportResource("classpath:applicationContext.xml")</code></p>

                            <p>My main application class looks like this:</p>

                            <pre><code class="language-java">{`package com.base22.rdfx;
  
  import org.springframework.boot.SpringApplication;
  import org.springframework.boot.autoconfigure.SpringBootApplication;
  import org.springframework.context.annotation.ImportResource;
    
  @SpringBootApplication
  @ImportResource("classpath:applicationContext.xml")
  public class Platform {
    
      public static void main(String[] args) throws Exception {
          SpringApplication.run(Platform.class, args);
      }
    
  }`}</code></pre>

                            <h2>Create an EmbeddedProvider Java class</h2>

                            <p>The applicationContext.xml file references an EmbeddedProvider class. There is no EmbeddedProvider exposed by the stardog-spring library, but I found one in the stardog-spring source code at <code>src/main/test/java/com/complexible/stardog/ext/spring</code>.</p>

                            <p>You&#8217;ll need to create this class in your project and make sure that you reference the package and class properly for the embeddedProvider bean in your applicationContext.xml file.</p>

                            <p><strong>EmbeddedProvider.java</strong></p>

                            <pre><code class="language-java">{`package com.base22.rdfx.config;
 
 import com.complexible.common.protocols.server.ServerException;
 import com.complexible.stardog.Stardog;
 import com.complexible.stardog.StardogException;
 import com.complexible.stardog.api.admin.AdminConnection;
 import com.complexible.stardog.api.admin.AdminConnectionConfiguration;
 import com.complexible.stardog.ext.spring.Provider;
 import com.complexible.stardog.protocols.snarl.SNARLProtocolConstants;
  
 public class EmbeddedProvider implements Provider {
  
    @Override
    public void execute(String to, String url, String user, String pass) {
  
       try {
          Stardog.builder()
                .create()
                .newServer()
                .bind(SNARLProtocolConstants.EMBEDDED_ADDRESS)
                .start();
          AdminConnection dbms = AdminConnectionConfiguration.toEmbeddedServer().credentials(user, pass).connect();
          if (dbms.list().contains(to)) {
             dbms.drop(to);
             dbms.createMemory(to);
          } else {
             dbms.createMemory(to);
          }
          dbms.close();
       } catch (StardogException e) {
  
       } catch (ServerException e) {
  
       } finally {
  
       }
  
    }
 }`}</code></pre>

                            <h2>Use the Spring for Stardog SnarlTemplate in a controller</h2>

                            <p>For a quick acid test, I created a simple Spring Controller that gets executed when you hit the path <code>/test</code> in a web browser.</p>

                            <p>Here&#8217;s the simple test controller I created, which logs output from a SPARQL query to the console.</p>

                            <p><strong>TestController.java</strong></p>

                            <pre><code class="language-java">{`package com.base22.rdfx.controllers;
 
 import com.complexible.stardog.ext.spring.SnarlTemplate;
 import com.complexible.stardog.ext.spring.mapper.SimpleRowMapper;
 import org.slf4j.Logger;
 import org.slf4j.LoggerFactory;
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.web.bind.annotation.RequestMapping;
 import org.springframework.web.bind.annotation.RequestParam;
 import org.springframework.web.bind.annotation.RestController;
  
 import java.util.Iterator;
 import java.util.List;
 import java.util.Map;
 import java.util.Set;
  
 @RestController
 public class TestController {
  
    private static final Logger log = LoggerFactory.getLogger( TestController.class);
  
    @Autowired
    private SnarlTemplate template;
  
    //private static final String template = "Hello, %s!";
    //private final AtomicLong counter = new AtomicLong();
  
    @RequestMapping("/test")
    public void test(@RequestParam(value="name", defaultValue="World") String name) {
  
       log.trace(">> test()");
  
       String sparql = "SELECT ?s ?p ?o WHERE { ?s ?p ?o } LIMIT 5";
  
       List<Map<String,String>> results = template.query(sparql, new SimpleRowMapper());
  
       for ( Map<String, String> result : results ) {
  
          log.trace( "-- test() > --------------------------");
  
          Set keys = result.keySet();
  
          for ( Iterator i = keys.iterator(); i.hasNext(); ) {
             String key = (String) i.next();
             String value = result.get(key);
             log.trace("-- test() > " + key + " | " + value);
          }
  
       }
  
    }
  
 }`}</code></pre>

                            <p><strong>How to use the SnarlTemplate</strong></p>

                            <p>The <a href="http://www.stardog.com/docs/#_spring_programming" rel="nofollow">Spring Programming</a> section of the documentation on the Stardog website provides some good information. However, if you want to see some actual code examples, you might want to refer to the <a href="https://github.com/stardog-union/stardog-spring/blob/master/stardog-spring/src/test/java/com/complexible/stardog/ext/spring/TestDataSourceFactory.java" rel="nofollow">TestDataSourceFactory.java</a> class on GitHub. That&#8217;s where I learned how to execute the query shown in my TestController using a SimpleRowMapper.</p>

                            <h2>Test the app</h2>

                            <p>Now you should be able to run your Spring Boot application and hit the TestController (/test in your browser). When you hit the URL, you should see the following output logged to the console, which shows that you&#8217;ve successfully configured and used Spring for Stardog. As you can see, five triples were returned from the given LIMIT 5 SPARQL query&#8230;</p>

                            <pre><code class="language-bash">{`14:40:36.903 [http-nio-8080-exec-1] TRACE com.base22.rdfx.controllers.TestController - -- test() > --------------------------
14:40:36.903 [http-nio-8080-exec-1] TRACE com.base22.rdfx.controllers.TestController - -- test() > p | http://www.w3.org/2000/01/rdf-schema#subClassOf
14:40:36.903 [http-nio-8080-exec-1] TRACE com.base22.rdfx.controllers.TestController - -- test() > s | http://localhost/vocabulary/bench/Journal
14:40:36.903 [http-nio-8080-exec-1] TRACE com.base22.rdfx.controllers.TestController - -- test() > o | http://xmlns.com/foaf/0.1/Document
14:40:36.903 [http-nio-8080-exec-1] TRACE com.base22.rdfx.controllers.TestController - -- test() > --------------------------
14:40:36.903 [http-nio-8080-exec-1] TRACE com.base22.rdfx.controllers.TestController - -- test() > p | http://www.w3.org/2000/01/rdf-schema#subClassOf
14:40:36.903 [http-nio-8080-exec-1] TRACE com.base22.rdfx.controllers.TestController - -- test() > s | http://localhost/vocabulary/bench/Proceedings
14:40:36.903 [http-nio-8080-exec-1] TRACE com.base22.rdfx.controllers.TestController - -- test() > o | http://xmlns.com/foaf/0.1/Document
14:40:36.903 [http-nio-8080-exec-1] TRACE com.base22.rdfx.controllers.TestController - -- test() > --------------------------
14:40:36.903 [http-nio-8080-exec-1] TRACE com.base22.rdfx.controllers.TestController - -- test() > p | http://www.w3.org/2000/01/rdf-schema#subClassOf
14:40:36.903 [http-nio-8080-exec-1] TRACE com.base22.rdfx.controllers.TestController - -- test() > s | http://localhost/vocabulary/bench/Inproceedings
14:40:36.903 [http-nio-8080-exec-1] TRACE com.base22.rdfx.controllers.TestController - -- test() > o | http://xmlns.com/foaf/0.1/Document
14:40:36.903 [http-nio-8080-exec-1] TRACE com.base22.rdfx.controllers.TestController - -- test() > --------------------------
14:40:36.903 [http-nio-8080-exec-1] TRACE com.base22.rdfx.controllers.TestController - -- test() > p | http://www.w3.org/2000/01/rdf-schema#subClassOf
14:40:36.903 [http-nio-8080-exec-1] TRACE com.base22.rdfx.controllers.TestController - -- test() > s | http://localhost/vocabulary/bench/Article
14:40:36.903 [http-nio-8080-exec-1] TRACE com.base22.rdfx.controllers.TestController - -- test() > o | http://xmlns.com/foaf/0.1/Document
14:40:36.903 [http-nio-8080-exec-1] TRACE com.base22.rdfx.controllers.TestController - -- test() > --------------------------
14:40:36.903 [http-nio-8080-exec-1] TRACE com.base22.rdfx.controllers.TestController - -- test() > p | http://www.w3.org/2000/01/rdf-schema#subClassOf
14:40:36.903 [http-nio-8080-exec-1] TRACE com.base22.rdfx.controllers.TestController - -- test() > s | http://localhost/vocabulary/bench/Www
14:40:36.903 [http-nio-8080-exec-1] TRACE com.base22.rdfx.controllers.TestController - -- test() > o | http://xmlns.com/foaf/0.1/Document`}</code></pre>

                            <h2>Conclusion</h2>

                            <p>In this post, I showed how I used Spring for Stardog in a Spring Boot web app. With some minor variation, these instructions could probably be useful for any Spring app and not just a Spring Boot web app.</p>

                            <p>There is also some useful information in the <a href="https://github.com/stardog-union/stardog-spring/blob/master/stardog-spring/docs/QUICKSTART.txt" rel="nofollow">QUICKSTART.txt</a> file on GitHub that you might find useful, so be sure to check it out.</p>


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