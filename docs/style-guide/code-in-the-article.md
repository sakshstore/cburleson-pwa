- all videos: 
about_formatting_code
how_to_add_a_correct_java_code_example_into_an_article
how_to_do_a_maven_dependency_in_an_article
on_the_project_modules_and_the_jenkins_job

how_to_do_code_examples_that_are_very_long



about code samples
- code should be - as much as possible - copy-paste runnable; that means - a reader should be able to simply copy-paste a code sample in an empty unit test and run it



- this is of course easily achieved, since code samples should mostly be copy-pasted into the article from the IDE

- code should be as simple as possible (as long as we’re still able to explain the concept)
- for example, when you work with a POJO (Entity, DTO, Resource, whatever) - define a simple class: id and name - if nothing more is needed
- use package-scope access modifier if possible
- prefer Java-based configurations over XML



code - assertions
- when creating complex assertions, it’s a good idea to use assertj to preserve clarity - if assertions are trivial, it’s fine to stick to JUnit ones



code - indentation
- very important: code samples should be correctly indented: 
each nested block of code should be inlined with 4 spaces, consistently; if in doubt, see how Eclipse indents the code and do the same
when breaking up a long line, the second part of the line needs to be indented by 2 spaces (compared to the first part of the line)

Of course, there is no need for doing this manually - you can use the predefined formatter.

- the relevant video talking about formatting and indentation is: 
about_formatting_code



formatting - fluent APIs
- sometimes, the default formatter does need a bit of manual help
- for example, fluent APIs are more readable if we split each method call on its own line
- if the method call is small enough, and very logically connected to the next one - you can also group 2 on a single line

- for example: 
.onException(IllegalArgumentException.class)
.handled(true)
.setHeader(Exchange.HTTP_RESPONSE_CODE, constant(400))
.setHeader(Exchange.CONTENT_TYPE, constant("text/plain"))
.setBody().constant("Invalid request data");




code - should not contain
- Java code samples should not contain any: 
final keywords (unless it’s for a constant)
setters and getters (instead just say // standard setters and getters)
comments or javadoc
System.out.println or log calls
private static final long serialVersionUID = ...;
try-catch blocks (most of the time)
default constructors for classes that only have the default constructor



code - formatting
- code needs to be formatted using the provided Eclipse formatter 
- if you’re not using Eclipse, it’s still a good idea to do a quick formatting pass in Eclipse, using that formatter
- note: formatting is the most common problem we run into, so using the formatter is going to save a lot of time



versions to use
- as much as possible - try to use the newest version of whatever library/framework we’re using in the article or in the code
- also, for the most part - use Java 8 syntax freely; we don’t need to force Java 8 constructs, but whenever possible, we should definitely use these (since most modules are Java 8 enabled)



tests - names
- test should follow the BDD convention: 
givenX_whenY_thenZ

- then given part is optional, but the other two are not
- example: 
whenSendingAPost_thenCorrectStatusCode

- also, the delimiter (underline) should only be used between these sections, and not anywhere else
- for example - this isn’t correct:  
whenSomethingHappens_andSomethingElse_thenSuccessfull



code - other notes
- variable names should be relevant 
- for example, if we’re working with a Query object representing a SELECT query - instead of query1, a query object is better named selectQuery



tests - structure
- always use a new line before the then section of the test
- for example (notice the new line): 
public void whenSomething_thenSomethingElse {
    // some preparation code belonging to the when section

    assert( ...)
}



code - new lines
- here are a few suggestions of where to add (and not add new lines)

- add a new line before the comment: // getters and setters

- add a new line between the given, when and then sections of a test



code - breaking a new line into multiple lines

- example 1 - incorrect: 
public Object process(BeanContext context, Object object,
 String name, Object value) {

- example 1 - correct: 
public Object process(
  BeanContext context, Object object, String name, Object value) {

- example 1 - discussion: technically, both are OK; but, it’s a good idea to keep all of the parameters on the same line if possible (like here)


- example 2 - incorrect: 
@RequestMapping(
  value = "/ex/foos", headers = { "key1=val1", "key2=val2" }, 
  method = GET)

- example 3 - correct: 
@RequestMapping(
  value = "/ex/foos", 
  headers = { "key1=val1", "key2=val2" }, 
  method = GET
)


- example 3 - incorrect: 
public void givenDestWithNullReverseMappedToSourceAndLocalConfigForNoNull
  _whenFailsToMap_thenCorrect() {

- example 3 - correct: either put the entire method on a new line or rename it; definitely don’t break a method name in the middle


- when breaking a line with an operator, put the operator on the new line
- example - correct: 
CompletableFuture<String> completableFuture 
  = new CompletableFuture<>();

- incorrect: 
CompletableFuture<String> completableFuture = 
  new CompletableFuture<>();



how to add code into the article
- to add a new code sample - use the Code button in the wordpress editor menu


- make sure you select the right language (Java, XML, etc): 



working on Github - commits, Pull Requests
- baeldung - authors - working with Github



doing stacktraces correctly
- stack traces are naturally very long - we need to make them nice and readable
- first, use Logback (of course)
- then, make sure you actually select the right exception in the stack trace
- finally, if you have a long stack, only show the few lines at the top
- here’s a video showing you practically how to do that: 
on_doing_stacktraces_right



finally - how much code?
- Baeldung targets medium to advanced developers and readers
- that means, we should assume the reader understands the basics and should focus - as much as possible - on the main topic of the article
- that also applies to code as well - we have several “intro” level articles that already show how to set up various types of projects, so we can link to these if we have to show some basic setup before reaching our main topic
