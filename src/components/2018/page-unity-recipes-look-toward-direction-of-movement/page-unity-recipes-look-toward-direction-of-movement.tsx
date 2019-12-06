import { Component, h } from '@stencil/core';

import Prism from "prismjs"
import 'prismjs/components/prism-csharp.min.js';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-unity-recipes-look-toward-direction-of-movement'
})
export class PageUnityRecipesLookTowardDirectionOfMovement {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageUnityRecipesLookTowardDirectionOfMovement.componentWillLoad');
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

<p>The following C# script for Unity can be used to make an object look (turn smoothly) toward the direction it is being moved.</p>

        <pre><code class="language-csharp line-numbers">{`using System.Collections;
using System.Collections.Generic;
using UnityEngine;
public class MyController : MonoBehaviour
{
    private void Update()
    {
        smoothLookTowardDirectionOfMovement();
    }
    void smoothLookTowardDirectionOfMovement()
    {
        float moveHorizontal = moveHorizontal = Input.GetAxis("Horizontal");
        float moveVertical = moveVertical = Input.GetAxis("Vertical");
        Vector3 movement = new Vector3(moveHorizontal, 0.0f, moveVertical);
        if (moveHorizontal != 0 || moveVertical != 0)
        {
            transform.rotation = Quaternion.Slerp(transform.rotation, Quaternion.LookRotation(movement), 0.15F);
        }
    }
}`}</code></pre>

<p>In line 23, <code>Quaternion.Slerp</code> takes three arguments: two quaternions and a float. It interpolates the rotation between the two quaternions with the speed of the given float value (0.0 is no movement while 1.0 is instant movement). The code interpolates the rotation between the current rotation (<code>transform.rotation</code>) and the movement rotation(<code>Quaternion.LookRotation</code>) with a speed of 0.15F. This gives the object a smooth turn instead of an instant turn. The <code>if</code> statement that wraps the code at line 21 keeps the object from instantly flipping or reverting direction when no inputs are being applied.</p>

<p>For instant (non-smooth) rotation, line 23 can be replaced with the following:</p>

<p><code>transform.rotation = Quaternion.LookRotation(movement);</code></p>


            </ion-content>

        ];
    }
}