import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
    tag: 'page-unity-recipes-head-bob-or-breathe',
})
export class PageUnityRecipesHeadBobOrBreathe {

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

                            <p>Here’s a handy Unity script that, when applied to a game object, will give the object a repetitive, but smooth upward and downward movement. This effect is often used to make a “head bob” or to make a player object look like it’s breathing; especially when it’s in idle state. This kind of effect can be achieved by animating the object before importing it (in a program like Blender, for example), but it can also be achieved with a sine wave function as provided by this script. The same or a similar script can also be used to make a main menu camera bob or to make lights breathe. Here it is:</p>

<deckgo-highlight-code language="csharp">
<code slot="code">
{`using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Breathe : MonoBehaviour {
    
    Vector3 startPos;
    public float amplitude = 10f;
    public float period = 5f;
    
    protected void Start() {
        startPos = transform.position;
    }
    
    protected void Update() {
        float theta = Time.timeSinceLevelLoad / period;
        float distance = amplitude * Mathf.Sin(theta);
        transform.position = startPos + Vector3.up * distance;
    }

}`}
</code>
</deckgo-highlight-code>

                            <p>After applying the script, you will need to adjust the float values for the amplitude and period to your liking.</p>
                            <h2>References</h2>
                            <ul>
                                <li><a href="https://chicounity3d.wordpress.com/2014/05/23/how-to-lerp-like-a-pro/" rel="nofollow">How to Lerp like a pro</a> by Robert Utter</li>
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