import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import Prism from "prismjs"
import 'prismjs/components/prism-javascript.min.js';


import { BlogData } from '../../../services/blog-data';



@Component({
    tag: 'page-create-player-health-status-indicator-for-unity-gui-part-2',
})
export class PageCreatePlayerHealthStatusIndicatorForUnityGuiPart2 {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageCreatePlayerHealthStatusIndicatorForUnityGuiPart2.componentWillLoad');
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

                            <p>This is the second of a multi-part series that will teach you how to build a player health status indicator for the <a href="http://unity3d.com/" target="_blank" rel="noopener noreferrer nofollow">Unity</a> GUI.</p>

                            <p><img title="Health Status Bar" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2012/10/healthStatusBar.png" alt="" /></p>

                            <h2>Introduction</h2>

                            <p>In the first part of this series, we provided the assets and a few tips for getting results fast. If you haven’t already, you should <a title="How to Create a Player Health Status Indicator for the Unity GUI, Part 1" href="/create-player-health-status-indicator-for-unity-gui-part-1">read Part 1</a> and also <a title="Click to download the image assets and Javascript in one ZIP archive." href="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2012/10/Health-Status-Bar-Assets.zip" target="_blank" rel="noopener noreferrer">download the starter assets</a>.</p>

                            <p>In today’s post, we’ll examine the Javascript that can be applied to any Unity GameObject to create the Health Status Indicator in your game’s GUI. The goal for today’s post is to learn how the script works and to hopefully learn a little bit about Javascript programming in Unity.</p>
                            <p>You’ve got an awesome game to make, so let’s get on with it…</p>

                            <h2>First, let’s review</h2>

                            <p>Our Javascript for the Health Status Indicator is very simple at this point, but it’s going to get a bit more complex. For that reason, it’s very important that you learn about this in phases. Let’s start by taking a look at the full script so that we have the whole thing in mind and then we’ll break it down line by line.</p>

                            <pre><code class="language-javascript">{`#pragma strict
// JavaScript
var backgroundTexture : Texture;
var foregroundTexture : Texture;
var frameTexture : Texture;
var healthWidth: int = 199;
var healthHeight: int = 30;
var healthMarginLeft: int = 41;
var healthMarginTop: int = 38;
var frameWidth : int = 266;
var frameHeight: int = 65;
var frameMarginLeft : int = 10;
var frameMarginTop: int = 10;
function OnGUI () {
GUI.DrawTexture( Rect(frameMarginLeft,frameMarginTop, frameMarginLeft + frameWidth, frameMarginTop + frameHeight), backgroundTexture, ScaleMode.ScaleToFit, true, 0 );
GUI.DrawTexture( Rect(healthMarginLeft,healthMarginTop,healthWidth + healthMarginLeft, healthHeight), foregroundTexture, ScaleMode.ScaleAndCrop, true, 0 );
GUI.DrawTexture( Rect(frameMarginLeft,frameMarginTop, frameMarginLeft + frameWidth,frameMarginTop + frameHeight), frameTexture, ScaleMode.ScaleToFit, true, 0 );
}`}</code></pre>


                            <h2>UnityScript is very much, but not exactly like JavaScript</h2>

                            <p>Before we get too far into this, you should be aware that the script language in Unity is very often referred to as ‘JavaScript’. It is also called UnityScript and while it is very much like JavaScript, it does have some differences.</p>

                            <p>If you are familiar with JavaScript for the Web, but not UnityScript, then you may want to read <a title="UnityScript versus JavaScript" href="http://wiki.unity3d.com/index.php?title=UnityScript_versus_JavaScript" target="_blank" rel="noopener noreferrer nofollow">UnityScript versus JavaScript</a> in the UnifyWiki. If you’re starting to learn programming by using Unity, then don’t worry about it. Programming concepts are similar across all languages and by learning any one language, you’ll be better prepared to learn another.</p>

                            <h2>Use #pragma strict</h2>

                            <p>The first line in our program, <strong>#pragma strict,</strong> is very important to understand because it relates to performance and performance is extremely important in games. As a general rule, you should put that line atop all of your Javascript files in Unity, even though it isn’t required. Here’s why:</p>

                            <p>When you create a variable in most programming languages, you need to tell the compiler what kind of object or datatype the variable represents. Is it a string? A number? A texture? The compiler usually needs to know. But in JavaScript, you do not have to specify the type of a variable. When you must specify the type of a variable, it is known as <em>strict typing</em>. When you do not have to specify the type of variable it is known as <em>dynamic typing</em> because the type is figured out dynamically at runtime.</p>

                            <p><strong>Dynamically typed variable declaration</strong></p>

                            <pre><code class="language-javascript">{`var healthWidth = 199;`}</code></pre>

                            <p><strong>Statically typed variable declaration</strong></p>

                            <pre><code class="language-javascript">{`var healthWidth: int = 199;`}</code></pre>

                            <p>See the difference there? In the dynamically typed example, the variable healthWidth is a number, but it could also be used for a string or a boolean or some other type because we didn’t specify the type. In the statically typed example, we declared the variable as an int (a.k.a. an integer, which is just simple kind of number).</p>

                            <p>The problem with using dynamically typed variable declarations is that you’re forcing the compiler to make additional calculations while your game is running. The engine has to ask questions. Does this work as a string? Nope. Let’s try a boolean. Nope. An int? All this additional evaluation takes time, which can reduce the performance of your game.</p>

                            <p>By using <strong>#pragma strict</strong> at the top of a script, we are telling Unity to disable dynamic typing in that script, which forces us to declare the type of each variable we create. If a type is not known, Unity will then report compile errors. This will not only improve the performance of your game, it will also make you a better programmer. So, as a rule of thumb, just do it.</p>

                            <h2>Comments in your code</h2>

                            <p>The second line of our script starts with two forward-slashes, which indicates that it’s just a comment.</p>

                            <pre><code class="language-javascript">{`// JavaScript`}</code></pre>

                            <p>A comment is just a note inside of your program that helps you and other developers understand something. Humans can read comments in the code, but the engine will just ignore them. In this case, we’re just throwing in a note that the format of the script is JavaScript and not some other language that Unity also supports such as C#.</p>

                            <p>Two forward slashes are for single-line comments. If you want to have multiple lines of commentary in a single block, you can use the following:</p>

                            <pre><code class="language-javascript">{`/* This is an example 
of a multi-line comment. 
Are we having fun yet? */`}</code></pre>

                            <h2>Global variables and the Unity Inspector</h2>

                            <p>The next three lines of the code define three global variables, each of the type Texture.</p>

                            <pre><code class="language-javascript">{`var backgroundTexture : Texture;
var foregroundTexture : Texture;
var frameTexture : Texture;`}</code></pre>

                            <p>Global variables are usually declared at the very top of a script and not inside of any function. This makes them available for access from anywhere in the script. Where a variable is available for access is known as the variable’s <em>scope</em>, so variables outside of any function are said to have <em>global scope</em>.</p>

                            <p>You see, if a variable is declared first inside of a function you can’t get to it from any place outside of that function. Such a variable is said to be scoped to the function or <em>private</em> to the function.</p>

                            <p>Globally scoped variables show up in the Inspector panel as values that can be populated or modified without changing the script’s code. In the image below, you can see that all of the global variables in our script at right are also exposed in the Unity Inspector panel at left.</p>

                            <p><img title="Global Variables in the Unity Inspector" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2012/10/globalVariablesBecomeInspectorSlots.png" alt="" /></p>

                            <p>Our Health Status Indicator has already shown us two reasons why this is valuable. First, we are able to drag and drop our own textures into the Inspector slots created by the variables <em>backgroundTexture</em>, <em>foregroundTexture</em>, and <em>frameTexture</em>. That makes our script reusable and easy to customize. That is to say, you can reuse it for more than one game without changing any code. All you need to do is provide your own images to the widget by dragging and dropping them onto their respective slots in the inspector.</p>

                            <p>Second, we are able to drag left and right on the healthWidth slot in the Inspector while the game is running and when we do this, we can see the green health status bar reducing or increasing in size. So, the Inspector allows us to manipulate the values of global variables at runtime. Very cool!</p>

                            <h2>Texture image size settings</h2>

                            <p>The next two lines in our script specify the default width and the height of the green health bar image.</p>

                            <pre><code class="language-javascript">{`var healthWidth: int = 199;
var healthHeight: int = 30;`}</code></pre>

                            <p>Later in the script, we use these numbers to establish a size for the rectangle that we render the texture on. We got those pixel dimensions from the drawing program we used when we saved the file. When a file is an image, you can usually get its dimensions just by inspecting the properties of the file. In Windows, you can right-click, select Properties from the context menu, and then select the Details tab of the resulting dialog. On a Mac, you can right-click and select Get Info.</p>

                            <p>Remember, the reason why we made the image width and height into global variables is so that our script becomes more generic and reusable. You probably want to create your own graphics for the widget, for example. You may wish to have the widget be a different size also. What we’re trying to do, therefore, is to make these things easier to customize without enforcing any knowledge of the underlying code.</p>

                            <h2>Positioning textures on the screen</h2>

                            <p>The next two lines of code specify the distance from the left and top of the screen where the green health bar’s rectangular texture should begin.</p>

                            <pre><code class="language-javascript">{`var healthMarginLeft: int = 41;
var healthMarginTop: int = 38;`}</code></pre>

                            <p>We will use the healthMarginLeft variable to specify the horizontal position (from the left of the screen) where the texture’s rectangle will begin. And Similarly, we’ll use the healthMarginTop to specify the vertical position from the top of the screen.</p>
                            <p>In computer graphics, we often refer to the horizontal axis as <em>x </em>and the vertical axis as <em>y</em>. The top-most and left-most position on the screen is expressed as position (0,0) in (x,y).</p>

                            <p><img title="Unity GUI 2D" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2012/10/Unity-GUI-2D-300x257.png" alt="" /></p>

                            <p>So, if our variables define x and y coordinates, it could be expressed like this: (healthMarginLeft,healthMarginTop). The point (41,38) is where the top-most and left-most corner of our texture will be placed. So, it will have a left margin (a distance to the far-left hand side of the screen) of 41 pixels. And it will have a top-margin of 38 pixels.</p>

                            <p>But keep in mind that we haven’t drawn anything yet. We are only setting up the variables that we will use to size and position our textures a little later.</p>

                            <p>The next four lines are very similar to the last four we’ve looked at. They do the same thing, but they define a width, height, and margins for the background texture and top frame texture.</p>

                            <pre><code class="language-javascript">{`var frameWidth : int = 266;
var frameHeight: int = 65;
var frameMarginLeft : int = 10;
var frameMarginTop: int = 10;`}</code></pre>

                            <p>To keep things as simple as possible, we cropped the background layer and the top-most layer images exactly the same size. That way, we can use the same dimensions and margins to position and render those two layers. The green health bar was an exception, which we cropped uniquely because it has to shrink or stretch to represent losing or gaining health.</p>

                            <h2>The OnGui() function</h2>

                            <p>The next stanza in the code is where the GUI functionality is really pulled together. When a script contains the OnGUI() function and is enabled in the game, it gets called every frame just like the Update() function.</p>

                            <pre><code class="language-javascript">{`function OnGUI () {
...
}`}</code></pre>

                            <p>It is within this function that we create the GUI controls that will be seen on the screen. Which brings us to the first line of code within the function – the creation of a GUI texture. Think of a GUI texture as a 2D image that is parallel to the screen facing the user.</p>

                            <pre><code class="language-javascript">{`GUI.DrawTexture( Rect(frameMarginLeft,frameMarginTop, frameMarginLeft + frameWidth, frameMarginTop + frameHeight), backgroundTexture, ScaleMode.ScaleToFit, true, 0 );`}</code></pre>

                            <p>This method can be understood by looking at the documentation in the Unity API. Take a moment now to <a href="http://docs.unity3d.com/Documentation/ScriptReference/GUI.DrawTexture.html" target="_blank" rel="noopener noreferrer">review the API documentation for the GUI.DrawTexture function</a> in the Unity API documentation.</p>

                            <p>API is an acronym for Application Programmer’s Interface; it’s the official documentation for a software development system. Each development language or system usually has a standard set of documents that comprise the API. Learning how to read and understand the API documentation for your platform is critical to your success as a developer!</p>

                            <p>For now, we’re going to try to explain very briefly how to understand this function’s documentation. Let’s break it down…</p>

                            <h2>GUI.DrawTexture</h2>

                            <pre><code class="language-javascript">{`static function DrawTexture (position, image, scaleMode, alphaBlend, imageAspect) : void`}</code></pre>

                            <p>Everything within the parenthesis represent values that you pass into the function when you call it. Below, we provide the type of each value and a description.</p>

                            <ul>
                                <li><strong>position</strong> is of the type Rect. In API documentation, that’s usually stated as <em>position : Rect </em>(the variable, a colon, and then the type; it means ‘this function expects a position to be passed in when you call it and the position needs to be a Rect’). The position : Rect, in this case, is the rectangle within the screen to draw the texture in.</li>
                                <li><strong>image</strong> is of the type Texture (image : Texture), which is the texture to display within the given Rect.</li>
                                <li><strong>scaleMode </strong>is one of either of the following constants: ScaleMode.StretchToFill, ScaleMode.ScaleAndCrop, or ScaleMode.ScaleToFit. This defines how to scale the image when the aspect ratio of it doesn’t fit the aspect ratio to be drawn within. That is to say – when the proportional relationship between the image’s width and height does not match that of the rectangle that you’re drawing it within.</li>
                                <li><strong>alphaBlend </strong>is of type boolean, which means either <em>true</em> or <em>false</em>. If the image has alpha blend information, then you can set this to true so that the image will blend with the background using the alpha information in the image. If the image has no alpha information, then we could set this to false.</li>
                                <li><strong>imageAspect</strong> is of type float, which means a floating point number (basically, a decimal number). If you pass in 0 (the default), the aspect ratio from the image is used. Pass in w/h for the desired aspect ratio. This allows the aspect ratio of the source image to be adjusted without changing the pixel width and height.</li>
                            </ul>

                            <h2>Drawing the first layer of the health status indicator</h2>

                            <p>So, now that we kind of understand how the GUI.DrawTexture() function works, let’s take another look at the line we use to draw the first layer (the red that shows through when the green health bar is shrunk).</p>

                            <pre><code class="language-javascript">{`GUI.DrawTexture( Rect(frameMarginLeft,frameMarginTop, frameMarginLeft + frameWidth, frameMarginTop + frameHeight), backgroundTexture, ScaleMode.ScaleToFit, true, 0 );`}</code></pre>

                            <p>Let’s break it down a little. Starting with the function call itself:</p>

                            <pre><code class="language-javascript">{`GUI.DrawTexture(`}</code></pre>

                            <p>GUI is an object that Unity engine makes available to us. We know this because it’s documented in the API. The object has several functions that you could call from it using the dot notation. If you type the word GUI in the Unity editor and then a period character, the code completer should show a pop-up menu of the functions that are available on that object.</p>

                            <p>TIP: You can jump quickly to the API from within the MonoDevelop editor by selecting the menu Help &gt; Unity API Reference.</p>

                            <p>The next thing that is passed into the function is the Rect which defines the position and size of the rectangle on the screen.</p>

                            <pre><code class="language-javascript">{`Rect(frameMarginLeft,frameMarginTop, frameMarginLeft + frameWidth, frameMarginTop + frameHeight)`}</code></pre>

                            <p>To construct a Rect object we can use Rect(left, top, width, height). Instead of hard-coding values, we put variables in those spots. But notice that when we define the width and height, we add the margin. Since the rectangle will start after the margin, then we must increase the size of the rectangle by the amount of the margin.</p>

                            <p>Anyway, the statement then continues with…</p>

                            <pre><code class="language-javascript">{`, backgroundTexture, ScaleMode.ScaleToFit, true, 0 );`}</code></pre>

                            <p>The backgroundTexture is a reference to the image that you drag and drop into the variable’s slot in the Inspector when using the script. The meaning of the rest of the values has already been described above.</p>

                            <p>The last two GUI.DrawTexture lines are for the middle layer and the foreground layer. The bottom layer and top layer are defined the same except for their texture. So, let’s just focus now on that middle layer – the green health status bar.</p>

                            <p>There’s something special about it…</p>

                            <h2>Drawing the middle layer (the green bar)</h2>

                            <pre><code class="language-javascript">{`GUI.DrawTexture( Rect(healthMarginLeft,healthMarginTop,healthWidth + healthMarginLeft, healthHeight), foregroundTexture, ScaleMode.ScaleAndCrop, true, 0 );`}</code></pre>

                            <p>Notice that the ScaleMode used in the DrawTexture function is different than what’s defined for the bottom and top layers. That’s because the size of the green bar in the middle layer is going to change size as the game is played. If the ScaleMode is not set just so, the texture will do some strange things when sized.</p>

                            <h2>Conclusion</h2>

                            <p>You’ve finished the second in a multi-part series. This post was focused on teaching you how our script works as well as a little bit about programming.</p>

                            <p>In <strong> <a title="How to Create a Player Health Status Indicator for the Unity GUI, Part 3" href="/create-player-health-status-indicator-for-unity-gui-part-3">Part 3</a></strong>, we’ll learn how to reduce or increase health through code while the game is running.</p>

                            <p><ion-button color="primary" routerDirection="back" href="/create-player-health-status-indicator-for-unity-gui-part-1">&lt;&lt; Previous: Part 1</ion-button> <ion-button color="primary" routerDirection="forward" href="/create-player-health-status-indicator-for-unity-gui-part-3">Next: Part 3 &gt;&gt;</ion-button></p>

                            <gls-disqus shortname="codyburleson-com" disable={isLocal()}/>
                            
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