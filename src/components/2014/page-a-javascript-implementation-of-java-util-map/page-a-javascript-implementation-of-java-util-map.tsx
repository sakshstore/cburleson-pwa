import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';
// Use this if using source code blocks to be formatted by prism.js...
import Prism from "prismjs"
import 'prismjs/components/prism-javascript.min.js';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-a-javascript-implementation-of-java-util-map',
})
export class PageAJavascriptImplementationOfJavaUtilMap {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageAJavascriptImplementationOfJavaUtilMap.componentWillLoad');
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

                            <p><img class="alignleft" style={{ marginBottom: `10px` }} src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/150x150-javaScriptHashMap.png" alt="" />As a Java developer, I use a lot of maps – especially instances of HashMap. A map is a dictionary or lookup table that contains key/value pairs. It provides a very convenient way to cache objects for easy retrieval by some identifier such as a string (the&nbsp;<em>key</em>). It’s so convenient, in fact, that I find myself struggling without a JavaScript equivalent, so I wrote one. Following is a partial JavaScript implementation of the java.util.Map interface, which you are free to copy and use.</p>

                            <div class="alert alert-warning" role="alert">Before using this map, please be advised that maps are now available as a part of the ECMAScript 2015 (ES6) standard. See: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map" rel="nofollow">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map</a></div>

                            <h1>JavaScript Map usage example</h1>

                            <p>As you can see from the example below, using this map is just like using a map in Java.</p>

                            <pre><code class="language-javascript">{`var myMap = new Map();
myMap.put('myKey1',"Hello World!");
myMap.put('myKey2',{'prop1':'How','prop2':' are you?'});
 
console.log( myMap.get('myKey1') );
console.log( myMap.get('myKey2').prop1 + myMap.get('myKey2').prop2);`}</code></pre>

                            <h2>JavaScript Map</h2>

                            <pre><code class="language-javascript">{`/**
* An object that maps keys to values. A map cannot contain duplicate keys; each key can map to at most one value.
* For those familiar with the Java programming language, this is similar to a HashMap; it implements most of the
* methods defined by Java's java.util.Map interface.
*
* @constructor
* @version 1.1.0
* @author cody@base22.com Burleson, Cody
*/
 
function Map() {
 
    this.dict = {};
     
    /**
    * Returns the number of key-value mappings in this map.
    * @method
    */
 
    this.size = function() {
        return Object.keys(this.dict).length;
    };
 
    /**
    * Returns true if this map contains no key-value mappings.
    * @method
    */
    this.isEmpty = function() {
        return Object.keys(this.dict).length == 0;
    };
 
    /**
    * Returns the value to which the specified key is mapped, or null if this map contains no mapping for the key.
    * @method
    */
    this.get = function(key){
        return this.dict[key];
    };
 
    /**
    * Returns true if this map contains a mapping for the specified key.
    * @method
    */
    this.containsKey = function(key){
        if( this.get(key) !== undefined) {
            return true;
        } else {
            return false;
        }
    };
 
    /**
    * Associates the specified value with the specified key in this map. If the map previously contained a mapping for the key, the old value is replaced.
    * @method
    */
    this.put = function(key,value) {
        this.dict[key] = value;
    };
 
    /**
    * Removes the mapping for the specified key from this map if present.
    * @method
    */
    this.remove = function(key) {
        'use strict';
        delete this.dict[key];
    };
 
    /**
    * Removes all of the mappings from this map. The map will be empty after this call returns.
    * @method
    */
    this.clear = function(){
        this.dict = {};
    };
     
    /**
     * Executes the given callback for each entry in this map until all entries have been processed.
     * The given callback will be passed a map entry as parameter. So, for example...
     *
     * function myCallback(mapEntryItem) {
     *      console.log('I will process this item: ' + mapEntryItem.text);
     * }
     *
     * myMap.forEach(myCallback);
     *
     * @method
     */
 
    this.forEach = function(callback) {
        var len = this.size();
        for (i = 0; i < len; i++) {
            var item = this.get( Object.keys(this.dict)[i] );
            callback(item);
        }
    }
}`}</code></pre>

                            <p><strong>Test Class</strong></p>

                            <pre><code class="language-javascript">{`/**
* =============================
* Map Test Cases
* =============================
*/
 
/**
* Useful for unit testing JavaScript, this method asserts that the given condition is true.
* If the given condition is not true, an optionally provided message is logged or 'Assertion failed.'
* @method
*/
function assert(condition, message) {
    if (!condition) {
        console.error(message) || console.error('Assertion failed');
    } else {
        console.log("-- PASS");
    }
}
 
// Instantiate a new Dictionary object...
var myMap = new Map();
 
// Test that isEmpty returns true at this point
assert( myMap.isEmpty() );
 
// Test that size is zero at this point
assert( myMap.size() == 0 , "size should be zero before any entries have been put into the lookup table.");
 
// Put a sim0le string value in the dictionary and then test for it
 
myMap.put('key1','http://value1?dt=2014_06_01&dummy=true');
 
// Now let's test adding a different kind of object...
var testObj = {prop1:"Hello", prop2:" World!"};
myMap.put('key2',testObj);
 
// Test that size now equals one
assert( myMap.size() == 2, "size should be 2 after adding 2 entries.");
 
var ref = myMap.get('key2');
 
// Test that ref was fetched from the dictionary
assert( ref !== undefined , "ref should not be undefined; it should be a reference to testObj");
 
// Test a property of the fetched object; just to show there is support for more than just string types
assert( ref.prop1 == 'Hello' , "ref.prop1 should equal 'hello' ");
 
// Show that containsKey is false when there is no matching key
assert( myMap.containsKey('notReal') == false, "containsKey('notReal') should return false; no such object is in the lookup table.");
 
// Show that containsKey is true when there is a matching object found
assert( myMap.containsKey('key2') == true, "containsKey('key2') should return true; that object is in the lookup table.");
 
// Now, we remove an item to test the remove() method
myMap.remove('key1');
assert( myMap.size() == 1 , "size should be 1 after removing item under 'key1'.");
 
// Finally, test the clear()
myMap.clear();
assert( myMap.size() == 0 , "size should be 0 after clearing lookup table.");`}</code></pre>

                            <h2>JavaScript Map API</h2>

                            <h3>Map</h3>

                            <h4>new Map()</h4>

                            <p>An object that maps keys to values. A map cannot contain duplicate keys; each key can map to at most one value. For those familiar with the Java programming language, this is similar to a HashMap; it implements most of the methods defined by Java’s <code>java.util.Map</code> interface.</p>

                            <h2 class="subsection-title">Methods</h2>

                            <h3>clear()</h3>

                            <p>Removes all of the mappings from this map. The map will be empty after this call returns.</p>

                            <h3>containsKey(key)</h3>

                            <p>Returns true if this map contains a mapping for the specified key. Parameters:</p>

                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>key</td>
                                        <td>String</td>
                                        <td>key whose presence in this map is to be tested</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3>forEach(callback)</h3>

                            <p>Executes the given callback for each entry in this map until all entries have been processed. The given callback will be passed a map entry as parameter. So, for example…</p>

                            <pre><code class="language-javascript">{`function myCallback(mapEntryItem) {
     console.log('I will process this item: ' + mapEntryItem.text);
}
 
myMap.forEach(myCallback);`}</code></pre>

                            <p>Parameters:</p>

                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>callback</td>
                                        <td>function</td>
                                        <td>The callback function that will be called for each entry in the map and which will be passed the value for each entry in the map.</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3>isEmpty()</h3>

                            <p>Returns true if this map contains no key-value mappings.</p>

                            <h3>put(key, value)</h3>

                            <p>Associates the specified value with the specified key in this map. If the map previously contained a mapping for the key, the old value is replaced.</p>

                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>key</td>
                                        <td>String</td>
                                        <td>key with which the specified value is to be associated</td>
                                    </tr>
                                    <tr>
                                        <td>value</td>
                                        <td>Object</td>
                                        <td>value to be associated with the specified key</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3>remove(key)</h3>

                            <p>Removes the mapping for the specified key from this map if present.</p>

                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>key</td>
                                        <td>String</td>
                                        <td>key whose mapping is to be removed from the map</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3>size()</h3>

                            <p>Returns the number of key-value mappings in this map.</p>

                            <h2>Gist on GitHub</h2>

                            <p><a href="https://gist.github.com/codyburleson/089157ed8eca114da8c4#file-javascript-map" rel="nofollow">https://gist.github.com/codyburleson/089157ed8eca114da8c4#file-javascript-map</a></p>



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