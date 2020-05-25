import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
    tag: 'page-logging-with-spring-boot',
})
export class PageLoggingWithSpringBoot {

    header: any;

    async componentWillLoad() {
        let id = extractIdFromDocumentPath();
        this.header = BlogData.getPostHeaderById(id);
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

                            <p>Logging with Spring Boot is dead simple. Everything’s pretty much setup and ready to go. In this post, I provide some quick and simple tips to get your Spring Boot logs rolling.</p>

                            <h2>About Logging Dependencies</h2>

                            <p>If you use the ‘Starters’, Logback will be used with appropriate routing included to ensure that dependent libraries that use Java Util Logging, Commons Logging, Log4J or SLF4J will all work correctly. Let’s suppose, for example, that you’re using the web starter in your Maven pom.xml file, as shown below.</p>

                            <deckgo-highlight-code language="xml"><code slot="code">{`<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>`}</code></deckgo-highlight-code>


                            <p>Generally you won’t need to change any logging dependencies and the Spring Boot defaults will work just fine. That is to say, you don’t need to add any additional dependencies to the POM for logging. You can verify this by printing a tree representation of your project dependencies. On the command line, change to your project directory and executing the following command.</p>

                            <p>Print Maven Dependency Tree with the command: <code>mvn dependency:tree</code></p>

                            <p>Notice that the Spring Boot starter already includes dependencies for logging…</p>

                            <deckgo-highlight-code language="bash"><code slot="code">{`[INFO] +- org.springframework.boot:spring-boot-starter-web:jar:1.5.2.RELEASE:compile
[INFO] |  +- org.springframework.boot:spring-boot-starter:jar:1.5.2.RELEASE:compile
[INFO] |  |  +- org.springframework.boot:spring-boot-starter-logging:jar:1.5.2.RELEASE:compile
[INFO] |  |  |  +- ch.qos.logback:logback-classic:jar:1.1.11:compile
[INFO] |  |  |  |  \- ch.qos.logback:logback-core:jar:1.1.11:compile
[INFO] |  |  |  +- org.slf4j:jcl-over-slf4j:jar:1.7.24:compile
[INFO] |  |  |  +- org.slf4j:jul-to-slf4j:jar:1.7.24:compile
[INFO] |  |  |  \- org.slf4j:log4j-over-slf4j:jar:1.7.24:compile`}</code></deckgo-highlight-code>

                            <h2>Configure Log Levels</h2>

                            <p>The easiest way to configure logging levels is in the <code>application.properties</code> file. If you don’t already have one, create the file in the root of the <code>resources</code> folder. Then, simply prefix Java packages and classes with <code>logging.level</code> as shown below. Notice that you can configure the root logger at a specific level first, then get more specific with other loggers.</p>

                            <p><strong>application.properties</strong></p>

                            <deckgo-highlight-code language="properties"><code slot="code">{`logging.level.root=INFO
logging.level.com.cburleson.rdfx=TRACE`}</code></deckgo-highlight-code>

                            <h2>Put Logging Code in Your Classes</h2>

                            <p>Now, we can use SLF4J for logging. Here’s how.</p>

                            <p>Add the following to the imports section of your java code:</p>

                            <deckgo-highlight-code language="java"><code slot="code">{`import org.slf4j.Logger;
import org.slf4j.LoggerFactory;`}</code></deckgo-highlight-code>

                            <p>Add the following at the top of your class in the global section (just under the line that declares your class public class Whatever extends Whatever). Change the name of the class (MyClassName) in the getLogger method call, of course. Name it the same as the class you’re dropping this code into.</p>

                            <deckgo-highlight-code language="java"><code slot="code">{`static final Logger LOG = LoggerFactory.getLogger(MyClassName.class);`}</code></deckgo-highlight-code>

                            <p>To test quickly, you can throw some logging statements in your code somewhere where you know they’ll be fired right away when you run your app. For example:</p>

                            <deckgo-highlight-code language="java"><code slot="code">{`LOG.trace("Hello World!");
LOG.debug("How are you today?");
LOG.info("I am fine.");
LOG.warn("I love programming.");
LOG.error("I am programming.");`}</code></deckgo-highlight-code>

                            <p>The default log configuration will echo messages to the console as they are written. If your terminal supports ANSI, color output will be used to aid readability.</p>

                            <h2>Log to a File</h2>

                            <p>If you want to write log files in addition to the console, you can set a <code>logging.file</code> or <code>logging.path</code> property in your <code>application.properties</code> file. For example…</p>

                            <deckgo-highlight-code language="properties"><code slot="code">{`logging.level.root=INFO
logging.level.com.cburleson.rdfx=TRACE
#output to a temp_folder/file
logging.file=$\{java.io.tmpdir\}/myapp.log
#output to a file
#logging.file=/Users/cburleson/myapp.log
#output to a file called spring.log in the specified path
#logging.path=/var/log`}</code></deckgo-highlight-code>

                            <h2>Using SLF4J over Log4j</h2>

                            <p>Now, if you want to use SLF4 over Log4j 2, and a log4j configuration file, the setup is a little different. In your Maven, POM, you must exclude spring-boot-starter-logging and then add a dependency for spring-boot-starter-log4j2 as shown below.</p>

                            <deckgo-highlight-code language="xml"><code slot="code">{`<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <exclusions>
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-logging</artifactId>
        </exclusion>
    </exclusions>
</dependency>
 
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-log4j2</artifactId>
</dependency>`}</code></deckgo-highlight-code>

                            <p>Then you need to have a log4j2.xml file on the classpath; for example – in src/main/resources. Here’s a simple log4j2.xml file example.</p>

                            <p><strong>log4j2.xml</strong></p>

                            <deckgo-highlight-code language="xml"><code slot="code">{`<?xml version="1.0" encoding="UTF-8"?>
<Configuration status="INFO">
    <Appenders>
        <Console name="Console" target="SYSTEM_OUT">
            <PatternLayout pattern="%d{HH:mm:ss.SSS} [%t] %-5level %logger{36} - %msg%n" />
        </Console>
        <File name="MyFile" fileName="all.log" immediateFlush="false" append="false">
            <PatternLayout pattern="%d{yyy-MM-dd HH:mm:ss.SSS} [%t] %-5level %logger{36} - %msg%n"/>
        </File>
    </Appenders>
    <Loggers>
        <Root level="debug">
            <AppenderRef ref="Console" />
            <!-- AppenderRef ref="MyFile"/ -->
        </Root>
 
        <Logger name="com.base22" level="trace" additivity="false">
            <AppenderRef ref="Console"/>
        </Logger>
 
    </Loggers>
</Configuration>`}</code></deckgo-highlight-code>

                            <h2>Conclusion</h2>

                            <p>As you can see, logging from your Spring Boot application is piece of cake. Of course, there’s a lot more that you can do as your requirements dictate. For more information, take a look at&nbsp;<a href="http://docs.spring.io/spring-boot/docs/1.5.2.RELEASE/reference/htmlsingle/#boot-features-logging" rel="nofollow">Logging, in the Spring Boot Reference Guide</a>.</p>

                            <h2>References</h2>

                            <ul>
                                <li><a href="http://docs.spring.io/spring-boot/docs/1.5.2.RELEASE/reference/htmlsingle/#boot-features-logging" rel="nofollow">Logging</a>, in the Spring Boot Reference Guide</li>
                                <li><a href="http://www.baeldung.com/spring-boot-logging">Logging in Spring Boot</a>, by Andrea Ligios, Baeldung</li>
                            </ul>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}