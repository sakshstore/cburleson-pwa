import { Component, h } from '@stencil/core';

import Prism from "prismjs"
import 'prismjs/components/prism-csharp.min.js';

import { BlogData } from '../../../services/blog-data';


import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-unity-recipes-head-bob-or-breathe',
})
export class PageUnityRecipesHeadBobOrBreathe {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageUnityRecipesHeadBobOrBreathe.componentWillLoad');
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

                <app-entry-meta header={this.header} />

                <p>Here’s a handy Unity script that, when applied to a game object, will give the object a repetitive, but smooth upward and downward movement. This effect is often used to make a “head bob” or to make a player object look like it’s breathing; especially when it’s in idle state. This kind of effect can be achieved by animating the object before importing it (in a program like Blender, for example), but it can also be achieved with a sine wave function as provided by this script. The same or a similar script can also be used to make a main menu camera bob or to make lights breathe. Here it is:</p>

                <pre><code class="language-csharp">{`using System.Collections;
using System.Collections.Generic;
using UnityEngine;
public class Breathe : MonoBehaviour
{
    Vector3 startPos;
    public float amplitude = 10f;
    public float period = 5f;
    protected void Start()
    {
        startPos = transform.position;
    }
    protected void Update()
    {
        float theta = Time.timeSinceLevelLoad / period;
        float distance = amplitude * Mathf.Sin(theta);
        transform.position = startPos + Vector3.up * distance;
    }
}`}</code></pre>

                <p>After applying the script, you will need to adjust the float values for the amplitude and period to your liking.</p>
                <h2>References</h2>
                <ul>
                    <li><a href="https://chicounity3d.wordpress.com/2014/05/23/how-to-lerp-like-a-pro/" rel="nofollow">How to Lerp like a pro</a> by Robert Utter</li>
                </ul>

            </ion-content>

        ];
    }
}