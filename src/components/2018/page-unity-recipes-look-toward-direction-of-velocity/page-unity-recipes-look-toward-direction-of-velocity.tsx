import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
    tag: 'page-unity-recipes-look-toward-direction-of-velocity'
})
export class PageUnityRecipesLookTowardDirectionOfVelocity {

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

                            <p>The following C# script for Unity can be used to make an object look toward the direction of its current velocity.</p>

<deckgo-highlight-code language="csharp"><code slot="code">{`using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MyController : MonoBehaviour {
     
    private void Update() {
        lookTowardDirectionOfVelocity();
    }
    
    void lookTowardDirectionOfVelocity() {
        transform.rotation = Quaternion.LookRotation(player.GetComponent().velocity);
    }
}`}</code></deckgo-highlight-code>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}