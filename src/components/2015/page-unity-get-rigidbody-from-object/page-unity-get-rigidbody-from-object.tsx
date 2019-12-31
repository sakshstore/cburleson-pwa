import { Component, h } from '@stencil/core';

import Prism from "prismjs"
import 'prismjs/components/prism-csharp.min.js';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-unity-get-rigidbody-from-object',
})
export class PageUnityGetRigidbodyFromObject {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (debug) {
            console.log('> PageUnityGetRigidbodyFromObject.componentWillLoad');
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

                <ion-grid>
                    <ion-row>
                        <ion-col size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="7">
                            <h1>{this.header.title}</h1>
                            <app-entry-meta header={this.header} />

                            <p>Here’s how to get the rigidbody from an object the script is applied to in Unity. The example shown is in C#.</p>

                            <pre><code class="language-csharp">{`using UnityEngine;
using System.Collections;
public class PlayerController : MonoBehaviour {
  private Rigidbody rb;
  // Use this for initialization
  void Start () {
    rb = GetComponent ();
  }
  
  // Update is called once per frame
  void Update () {
  }
  // Called before any physics calculations.
  // This is where you put your physics code.
  // We apply forces to the rigid body, which is physics, so this is where it goes.
  void FixedUpdate() {
    // Pressing arrow keys on keyboard will apply force to rigidbody 
    float moveHorizontal = Input.GetAxis ("Horizontal");
    float moveVertical = Input.GetAxis ("Vertical");
    Vector3 movement = new Vector3 (moveHorizontal,0.0f,moveVertical);
    rb.AddForce (movement);
  }
}`}</code></pre>


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