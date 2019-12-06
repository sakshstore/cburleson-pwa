import { Component, h } from '@stencil/core';

import Prism from "prismjs"
import 'prismjs/components/prism-csharp.min.js';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-unity-recipes-look-toward-direction-of-velocity'
})
export class PageUnityRecipesLookTowardDirectionOfVelocity {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageUnityRecipesLookTowardDirectionOfVelocity.componentWillLoad');
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

<p>The following C# script for Unity can be used to make an object look toward the direction of its current velocity.</p>

        <pre><code class="language-csharp">{`using System.Collections;
using System.Collections.Generic;
using UnityEngine;
public class MyController : MonoBehaviour
{
    private void Update()
    {
        lookTowardDirectionOfVelocity();
    }
    void lookTowardDirectionOfVelocity() {
        transform.rotation = Quaternion.LookRotation(player.GetComponent().velocity);
    }
}`}</code></pre>



            </ion-content>

        ];
    }
}