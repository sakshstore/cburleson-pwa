import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
    tag: 'page-unity-recipes-follow-object',
})
export class PageUnityRecipesFollowObject {

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

                            <p>The following C# script for Unity can be used to make an object follow another. It can be used, for example, to make a camera follow the player.</p>

                            <deckgo-highlight-code language="csharp"><code slot="code">{`using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraController : MonoBehaviour {

    public GameObject player;
    private Vector3 offset;

    void Start () {
        offset = transform.position - player.transform.position;
    }

    void LateUpdate () {
        transform.position = player.transform.position + offset;
    }

}`}</code></deckgo-highlight-code>

                            <p>In the case of a camera follow, this script should be attached to the camera. A reference to the object to follow (player) should then be dragged into the Player slot in the Unity editor.</p>

                            <p><code>LateUpdate</code> is used because it is guaranteed to run after all items have been processed in Update and we know absolutely the player has moved for the given frame. The <code>offset</code> is used to maintain whatever distance is set between the objects.</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>


        ];
    }
}