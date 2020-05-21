import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
    tag: 'page-script-for-rotating-unity-game-object-90-degrees',
})
export class PageScriptForRotatingUnityGameObject90Degrees {

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

                            <p>This Unity behavior script rotates the object it’s attached to by 90 degrees when the script’s rotate function is called. Just copy and paste the contents into a new JavaScript in Unity.</p>

                            <deckgo-highlight-code language="javascript"><code slot="code">{`#pragma strict
public var seconds: float = .2;
private var rotating = false;
function rotateObject (thisTransform : Transform, degrees : Vector3) {
    if (rotating) return;
    rotating = true;
    var startRotation : Quaternion = thisTransform.rotation;
    var endRotation : Quaternion = thisTransform.rotation * Quaternion.Euler(degrees);
    var t : float = 0.0;
    var rate : float = 1.0/seconds;
    while (t < 1.0) {
      t += Time.deltaTime * rate;
      thisTransform.rotation = Quaternion.Slerp(startRotation, endRotation, t);
      yield;
  }
  rotating = false;
}
function rotate() {
  rotateObject(transform, Vector3.forward*-90);
}`}</code></deckgo-highlight-code>

                            <p>One way to call the rotate function from some other script is as follows:</p>

                            <deckgo-highlight-code language="javascript"><code slot="code">{`var cube : GameObject = GameObject.Find("Cube");
cube.SendMessage("rotate");`}</code></deckgo-highlight-code>

                            <p>Cheers!</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>


        ];
    }
}