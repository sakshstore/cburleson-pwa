import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import Prism from "prismjs"
import 'prismjs/components/prism-java.min';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-mapping-to-a-view-in-spring-when-no-controller-logic-is-required',
})
export class PageMappingToAViewInSpringWhenNoControllerLogicIsRequired {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageMappingToAViewInSpringWhenNoControllerLogicIsRequired.componentWillLoad');
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

                            <p>I’ve always felt stupid for writing a simple Spring controller just to return a view when no controller logic is required. Turns out, I was right; there is a better way. So, okay. I <em>was</em> stupid, but now I know and here it is.</p>

                            <p>Since Spring 3.0, you can use the following tag in your XML configuration:</p>

                            <pre><code class="language-xml">{`<mvc:view-controller path="/" view-name="home"/>`}</code></pre>

                            <p>That’s an example of a view-controller definition that forwards to a home page without any custom backing controller. The <a href="http://static.springsource.org/spring/docs/3.0.x/reference/mvc.html" rel="nofollow">Spring 3.0 documentation</a> describes the tag as follows:</p>

                            <blockquote><p>This tag is a shorcut for defining a ParameterizableViewController that immediately forwards to a view when invoked. Use it in static cases when there is no Java Controller logic to execute before the view generates the response.</p></blockquote>

                            <p>Following is an example of the full dispatcher-servlet.xml file that I’m using at the moment. You can see at the very bottom that I’ve mapped two of these. The path ‘/index’ routes to a <a href="http://freemarker.org/" rel="nofollow">FreeMarker</a> view I’ve defined in an index.ftl file and the path ‘/about’ routes to another FreeMarker view defined in the file, about.ftl.</p>

                            <pre><code class="language-xml">{`<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" 
     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
     xmlns:p="http://www.springframework.org/schema/p" 
     xmlns:mvc="http://www.springframework.org/schema/mvc" 
     xmlns:context="http://www.springframework.org/schema/context" 
     xsi:schemaLocation=" http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.0.xsd 
     http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.0.xsd 
     http://www.springframework.org/schema/mvc http://www.springframework.org/schema/mvc/spring-mvc-3.0.xsd">
 
        <!-- This must remain in place even if there are no uses of the properties loaded in this file because 
        it prepares the properties for use in Java classes. For example: @Value("$\{ldp.installableDataPath\}") 
        private String installableDataPath; -->
        <context:property-placeholder location="classpath:/config.properties" />
 
        <!-- Spring will search in the bellow paths controller an services annotations -->
        <context:component-scan base-package="com.base22" />
 
        <!-- The URL mapping definition -->
        <bean class="org.springframework.web.servlet.mvc.annotation.DefaultAnnotationHandlerMapping" />
 
        <bean class="org.springframework.web.servlet.mvc.annotation.AnnotationMethodHandlerAdapter"/>
 
        <!-- freemarker config -->
        <bean id="freemarkerConfig" class="org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer">
                <property name="templateLoaderPath" value="/WEB-INF/ftl/" />
        </bean>
 
        <!-- View resolvers can also be configured with ResourceBundles or XML files. If you need different 
        view resolving based on Locale, you have to use the resource bundle resolver. -->
        <bean id="viewResolver" class="org.springframework.web.servlet.view.freemarker.FreeMarkerViewResolver">
                <property name="cache" value="true" />
                <property name="prefix" value="" />
                <property name="suffix" value=".ftl" />
        </bean>
 
        <!-- The following tags are shorcuts for defining a ParameterizableViewController that immediately forwards 
        to a view when invoked. They are used in static cases when there is no Java Controller logic to execute before 
        the view generates the response. -->
        <mvc:view-controller path="/index" view-name="index" />
        <mvc:view-controller path="/about" view-name="about" />
 
</beans>`}</code></pre>

                            <p>If you prefer Java code configuration over XML files for Spring, you can do this:</p>

                            <pre><code class="language-java">{`@Configuration
@EnableWebMvc
public class WebConfig extends WebMvcConfigurerAdapter {
 
  @Override
  public void addViewControllers(ViewControllerRegistry registry) {
    registry.addViewController("/").setViewName("home");
  }
 
}`}</code></pre>


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