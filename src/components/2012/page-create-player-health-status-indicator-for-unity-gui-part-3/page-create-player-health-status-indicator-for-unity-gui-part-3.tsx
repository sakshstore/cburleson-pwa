import { Component, h } from '@stencil/core';
// Use this if using source code blocks to be formatted by prism.js...
import Prism from "prismjs"
import 'prismjs/components/prism-javascript.min.js';


import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-create-player-health-status-indicator-for-unity-gui-part-3',
})
export class PageCreatePlayerHealthStatusIndicatorForUnityGuiPart3 {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageCreatePlayerHealthStatusIndicatorForUnityGuiPart3.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + EnvironmentConfigService.getInstance().get('siteName');
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

                <h1>{this.header.title}</h1>

                <p class="entry-meta">Posted on <time>{new Date(this.header.datePublished).toDateString()}</time> (last modified <time>{new Date(this.header.dateModified).toDateString()}</time>)</p>


                <p>This is the third of a multi-part series that will teach you how to build a player health status indicator for the <a href="http://unity3d.com/" target="_blank" rel="noopener noreferrer nofollow">Unity</a> GUI. If you haven’t already, you should <a title="How to Create a Player Health Status Indicator for the Unity GUI, Part 1" href="/create-player-health-status-indicator-for-unity-gui-part-1">read Part 1</a> and <a title="How to Create a Player Health Status Indicator for the Unity GUI, Part 2" href="/create-player-health-status-indicator-for-unity-gui-part-2">Part 2</a>. You might also wish to download <a title="Click to download the image assets and Javascript in one ZIP archive." href="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2012/10/Health-Status-Bar-Assets.zip" target="_blank" rel="noopener noreferrer">download the starter assets</a>, which you can then import into Unity.</p>

                <p><img title="Health Status Bar" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2012/10/healthStatusBar.png" alt="" /></p>

                <h2>Introduction</h2>

                <p>So, we’ve got our health status indicator on the screen and we can manually drag on the <em>Health Width</em> property in the inspector to shrink and expand the green health bar while the game is running. But, of course, we need to be able to change the health by accessing the <em>healthWidth</em> property from some other behavior script in the game.</p>

                <p>Let’s imagine a scenario in which an enemy is attacking your hero. Each time the enemy gets within the vicinity of the hero or touches the hero, a script attached to the enemy game object might recognize the collision and send a signal to the health status widget to change.</p>

                <p>In today’s post we’ll tell you how to do it and you’ll be learning a simple skill that you’ll use a lot in your Unity games – you will learn how to access global variables or properties in one behavior script from another.</p>

                <h2>Access the Health Status from Any Behavior Script</h2>

                <p>First, let’s just get this working and then we’ll break it down to understand what the script is doing. Complete the following steps to see the green health being reduced automatically at runtime:</p>

                <ul>
                    <li>First, make sure that the GameObject that your HealthBarScript is attached to is named “GUI Health”.</li>
                    <li>Next, create a new GameObject and name it ‘Enemy’.</li>
                    <li>Create a new behavior script using Assets &gt; Create &gt; Javascript. Name it ‘EnemyBehaviorScript.’</li>
                    <li>Drag and drop the EnemyBehaviorScript on the Enemy GameObject and make sure that GameObject is in the scene.</li>
                </ul>

                <p>Finally paste the following code into the EnemyBehaviorScript, save the script and run the game to see the health shrink away to fatality! If it’s more convenient, you can also just <a href="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2012/11/EnemyBehaviorScript.js">download the EnemyBehaviorScript.js file</a> and import it into Unity.</p>

                <pre><code class="language-javascript">{`#pragma strict
private var guiHealth : GameObject;
private var healthBarScript: HealthBarScript;
/*
Start is called only once in the lifetime of 
the behavior. So, it's a good place to initialize 
things only once.
*/
function Start() {
    guiHealth = GameObject.Find("GUI Health");
    healthBarScript = guiHealth.GetComponent("HealthBarScript");
    // Set initial value of the health...
    // Uncomment the line below and call reduceHealth() in the Update() method to watch health decrease
    healthBarScript.healthWidth = 199;
    // Uncomment the line below and call increaseHealth() in the Update() method to watch health increase
    // healthBarScript.healthWidth = -8;
}
function Update() {
     reduceHealth();
     //increaseHealth();
}
/*
Only decrease the health bar if it's greater than the min width it should ever be;
because we do not want it decreased beyond the left of its frame.
*/
function reduceHealth() {
   if(healthBarScript.healthWidth > -8) {
       healthBarScript.healthWidth = healthBarScript.healthWidth - 1;
   }   
}
/*
Only increase the health bar if it's less than the max width it should ever be;
because we do not want it stretched out beyond its frame.
*/
function increaseHealth() {
   if(healthBarScript.healthWidth < 199) {
       healthBarScript.healthWidth = healthBarScript.healthWidth + 1;
   }
}`}</code></pre>

                <h2>How it Works</h2>

                <p>You may notice that we declared our global variables as private this time.</p>

                <pre><code class="language-javascript">{`private var guiHealth : GameObject;
private var healthBarScript: HealthBarScript;`}</code></pre>

                <p>By declaring them global (outside of any function in the script), they are available for use by any function in the script. By declaring them private, we ensure that they will not create properties in the Unity Inspector panel that might distract you or other developers on your team. For this script, they’re not mean to be used in the Inspector.</p>

                <p>Next, we have the Start() method.</p>

                <p>Oh, by the way…</p>

                <p>Did you notice that sometimes we use the word function and sometimes we use the word method? The two words mean essentially the same thing. In JavaScript lingo, they’re commonly referred to as functions. Unity documentation calls them methods. So, the words are interchangeable.</p>

                <p>Back to the Start() method…</p>

                <pre><code class="language-javascript">{`function Start() {
    guiHealth = GameObject.Find("GUI Health");
    healthBarScript = guiHealth.GetComponent("HealthBarScript");
    ...
}`}</code></pre>

                <p>When you use a Start() method in a behavior script, it gets called only once in the lifetime of the behavior. So, it’s a good place to initialize objects. In this case, we’re making guiHealth represent the GameObject that can be found in the game by the name ‘GUI Health’. The we make healthBarScript represent the script named ‘HealthBarScript’ that we expect to be attached to the guiHealth GameObject that we just found. Since the HealthBarScript is attached to a GameObject, we need to access the GameObject in the scene first. The, once we have access to it, we can use .getComponent() to get components attached to that object.</p>

                <p>Now the next lines are just there to set the initial health. You can comment one out and uncomment the other and vise-versa.</p>

                <pre><code class="language-javascript">{`// Uncomment the line below and call reduceHealth() in the Update() method to watch health decrease
healthBarScript.healthWidth = 199;
// Uncomment the line below and call increaseHealth() in the Update() method to watch health increase
// healthBarScript.healthWidth = -8;`}</code></pre>

                <p>You also want to toggle the comments on the reduceHealth() and increaseHealth() calls respectively.</p>

                <pre><code class="language-javascript">{`function Update() {
     reduceHealth();
     //increaseHealth();
}`}</code></pre>

                <p>By toggling those comments, you can watch the health shrink or grow; just a simple acid-test to prove that it works.</p>

                <p>The reduceHealth() and increaseHealth() methods simply add to or subtract from the width of the healthWidth property. They are surrounded by an if condition, which just ensures that the green status bar cannot shrink or grow beyond the decorative frame.</p>

                <h2>Conclusion</h2>

                <p>In this post, we taught you how to change the health in the status indicator through code. In particular, we should you how to access properties in one behavior script from another by first accessing the GameObject the script is attached to.</p>

                <p>In this three part series, we’ve given you the essential knowledge you need to indicate your player’s health. Of course, you’ll have to take it from here and integrate these principles into your working game. If you have any questions or suggestions for something else you’d like us to cover, please comment.</p>

                <p>Until next time, enjoy the craft!</p>

            </ion-content>

        ];
    }
}