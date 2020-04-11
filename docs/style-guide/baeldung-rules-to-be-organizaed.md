title capitalization
- the title, main sections and subsections should follow Title Capitalization (rules) (online tool - option 1)



sections and subsections
- the structure of the article should be organized in Sections and Subsections
- sections should H2
- sub-sections should use H3

- example: 
1. Overview // H2
2. Stuff  // H2
2.1. Subsection 1  // H3
2.2. Subsection 2  // H3
3. More Stuff // H2
4. Conclusion // H2

- generally - there should be no sub-sub-sections
ex: 3.1.1. Something


- all sections and subsections should have numbers (including the Overview and the Conclusion)
- correct:  
2.1. Text

- incorrect: 
2.1 Text         // missing period char
2.1.  Text         // two spaces before the text
…




code snippets in text (not full code samples)
- any small code snippet used within normal text should be Italicized
- for example: 
Each HttpMessageConverter implementation has one or several associated MIME Types
- notice how the name of the class is italicized

- this applies to sections and subsections as well

- Java imports should be skipped from code samples (unless they’re absolutely necessary)



double spaces
- there should be no occurrence of double spaces in the article; 

ex: 
-- correct: the code
-- incorrect: the  code
- note: this of course doesn’t apply to code samples - these will indeed have double spaces - these are fine, since it’s the normal way to indent the code



bulleted lists
- the rule: the elements of a bulleted list shouldn’t end with a period

- example - incorrect: 
Here’s a list of stuff:
Point number one.
Another point.
Yet another point.

- example - correct: 
Here’s a list of stuff:
Point number one
Another point
Yet another point



using images
- most articles don’t actually have images
- but, when you do need to use images in an article, preview the article and make sure the images are actually readable
- notice that, in the editor - if you click on an image and edit it - you’ll be able to select a custom size
- if the full size is too large, you can go with a width of 500px - that is usually good (but still preview it to check)



grammarly
- if you’re not a native speaker, this tools is fantastic for significantly improving the quality of your article - definitely make sure you use it: 
https://www.grammarly.com/
- note that using Grammarly isn’t everything; language can be technically correct but still not flow how it needs to



writing style
- first - the working assumption is that the reader knows the basics - no need to explain every basic theoretical detail

- keep paragraphs small, simple and to the point - use clear and simple statements
- break concepts into multiple paragraphs if possible - if an idea stretches more than a few lines, I would break it into multiple paragraphs

- here’s an example of how paragraphs should look: 
http://www.baeldung.com/java-8-sort-lambda 


- try not to overuse keywords - for example, if the article is about Spring, do not use “Spring” excessively because Google will consider that ”Keyword Stuffing”



prefer “we” language, not “you” language
- whenever possible, it’s better to say: 
We’re going to implement this ...
than: 
You’re going to implement this...



using your own pronoun
- when you write, feel free to use either “he” or “she”, when you need to



prefer America English
- America English is standard on the site



introducing code examples
- a code sample should be introduced with a sentence ending in a colon ( “:” )
- example - correct: 
Here we’re setting up a controller: 
{some code here}

- and this is incorrect: 
Here, we’re setting up a controller. 
{some code here}


- when introducing code samples, don’t use filler words
- I’ll highlight the filler words that should be removed

- example 1: 
Now we can create an aspect using AspectJ annotation syntax as follows:

- example 2: 
After we have defined the interceptor binding we should define interceptor implementation like this:

- example 3: 
Let's apply the created interceptor to the business logic in the following way:

- example 4: 
We can now create an simple aspect using AspectJ annotation syntax like in the following example:

- example 5: 
We have an Item class which represents the tuple "ITEM" in the database. The class looks like the following:



use a conversational style
- the first variation is not conversational, the second one is

- example 1: 
Assume the following Person Java bean:
Let's define the following Person Java bean:

- example 2: 
To get the reader acquainted, a short survey of some of the key concepts of Cassandra is given below:
Let’s start with a short survey of some of the key concepts of Cassandra:


- example 3: 
Building upon the tutorial series, we modify the registration.html to include Google's library.
Building upon the tutorial series, let’s modify the registration.html to include Google's library.

- example 4: 
We must specify 
We need to specify / We should specify / Let’s specify



never use content from other articles
- before starting to write - you can read as many articles on the topic as you’d like
- but when you write, never have any articles open
- that can easily lead to unintentional plagiarism - which is not OK




various notes

- never copy-paste sections from other articles; it’s OK to look through other material before you write of course, but never copy-paste from these


- don’t use the word “my” to refer to other tutorials
- incorrect: Don't forget to check out my tutorial on 
- correct: Don't forget to check out our tutorial on 

- it’s better to say: let’s do something - than we’ll do something
- incorrect: Now we'll create the interceptor.
- correct: Let's now create the interceptor.

- try to rephrase these generic expressions like: one needs to do ...
- incorrect: In order to mark the class as a bean, one needs to annotate it with @Component
- correct: In order to mark the class as a bean, we need to annotate it with @Component



use short sentences (and make liberal use of paragraphs)

- the rule: whenever you’re dealing with a medium or long paragraph, see if the second sentence is actually directly a part of it, or if it’s a new idea; if it is a new idea - break it into a new line
- I’ll highlight the word where I broke the new paragraph


- example 1: 
In this article, we have discussed the Thread Pool pattern and its implementations in the standard Java library and in Google's Guava library. The source code for the article is available on GitHub.

- example 2: 
One of the advantages of database abstraction layers such as ORM (object-relational mapping) frameworks is their ability to transparently cache data retrieved from the underlying store. This helps eliminate database-access costs for frequently accessed data. Performance gains can be significant if read/write ratios of cached content are high, especially for entities which consist of large object graphs.

- example 3: 
In order to make an entity eligible for second-level caching, we annotate it with Hibernate specific @org.hibernate.annotations.Cache annotation and specify a cache concurrency strategy. Some developers consider that it is a good convention to add the standard @javax.persistence.Cacheable annotation as well (although not required by Hibernate), so an entity class implementation might look like this:

- example 4: 
In this test, we first get the bean SuperService from the container, then invoke business method deliverService on it and check that interceptor AuditedInterceptor was actually called by validating its state variables. Also, we have @Before and @After annotated methods in which we initialize and shutdown Weld container respectively.

- example 5: 
As implied, a truth value in the success property means the user has been validated. Otherwise, the errorCodes property will populate with the reason. The hostname refers to the server that redirected the user to the reCAPTCHA. If you manage many domains and wish them all to share the same key-pair, you can choose to verify the hostname property yourself.

- example 6: 
Gladly, Guava provides predefined instances for us. Here's an example that demonstrates the execution of a task in the same thread. Although the provided task sleeps for 500 milliseconds, it blocks the current thread, and the result is available immediately after the execute call is finished: ...

- example 7: 
This exception is thrown when a problem during retrieving data appears, such as looking up an object with an identifier which doesn't exist in a database. For example, we're going to use the JdbcTemplate class which has a method that throws this exception:

