import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
    tag: 'page-create-player-health-status-indicator-for-unity-gui-part-1',
})
export class PageCreatePlayerHealthStatusIndicatorForUnityGuiPart1 {

    header: any;

    async componentWillLoad() {
        let id = extractIdFromDocumentPath();
        this.header = BlogData.getPostHeaderById(id);

        document.title = this.header.title + ' | ' + SITENAME;
        if (this.header.teaser) {
            document.getElementById("meta-desc").setAttribute("content", this.header.teaser);
        }

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

                            <p>This is the first of a multi-part series that will teach you how to build a player health status indicator for the <a href="http://unity3d.com/" target="_blank" rel="noopener noreferrer">Unity</a> GUI.</p>

                            <p><img title="Health Status Bar" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2012/10/healthStatusBar.png" alt="" /></p>

                            <h2>Introduction</h2>

                            <p>In this series, we’ll build a cartoon-styled health status indicator and you will learn how to create one with a style that suits your game. What we want to do in this part of the series is to simply give you a starting point that will get you results fast. We’ll focus on finer details in follow-on posts.</p>

                            <p>If you <strong><a href="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2012/10/Health-Status-Bar-Assets.zip">download the Health Status Indicator assets</a></strong>, you can have the health status indicator that’s shown above in your game’s GUI very quickly. Though it will not yet be fully functional, it will give you a good base from which to start. So, let’s get on with it…</p>

                            <h2>Draw the health status bar on 3 layers</h2>

                            <p>Start by drawing your health status bar using any graphics tool that supports layers. We used Adobe Illustrator to get the cartoon style that we wanted. We then used Adobe Photoshop to crop and save each layer as a transparent GIF and PNG-24 files.</p>

                            <p><img title="Health Status Bar Layers" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2012/10/HealthBarLayers.png" alt="" /></p>

                            <p>The layers are going to be stacked and properly aligned in the Unity GUI. As the player loses health, the background and top frame layers remain static, but the middle layer will be reduced in size horizontally.</p>

                            <p>When preparing the image assets from the layers, crop the background layer and the frame layer exactly the same size so they will align easily when placed in the GUI.</p>

                            <p>The green layer, which represents health, must be cropped exactly around the dimensions of the green bar with no transparent space around it. This is because it will be resized horizontally to represent the player’s health being reduced or increased. If the image had transparency around it, you can get unexpected results in the GUI that are not easily fixed by the math in your code.</p>

                            <p>Be sure to save the images with their transparency so that you’ll be able to see through the transparent parts to the game world behind the health status bar.</p>

                            <p>We saved the foreground and background images as GIF files because that file format is good for images that don’t have a lot of photographic detail or gradients. With a GIF, we were able to get the file size as small as possible. For the frame, we used a transparent PNG-24, which was necessary for the semi-transparent effect that mimiks the reflection of light on glass.</p>

                            <p>You can import your image assets by right-clicking in the Unity Project panel and choosing Import New Asset… from the context menu (shown below). In our case, we created a folder to help keep our assets organized.</p>

                            <p><img title="Import Image Assets" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2012/10/ImportHealthStatusBarAssets.png" alt="" /></p>

                            <h2>Create a simple script to start with</h2>

                            <p>Now, we’re going to need a Unity script to represent and control our health status widget. You can create a new script by right-clicking in the Project panel and choosing Create &gt; Javascript. Name the script ‘HealthStatusBarScript’.</p>

                            <p>Below you will find a simple starter script that will allow us to get something showing in the GUI quickly. We’ll explain this code line-by-line in the next article of this series and then later, we’ll improve it.</p>

                            <deckgo-highlight-code language="javascript"><code slot="code">{`#pragma strict
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
}`}</code></deckgo-highlight-code>

                            <h2>Create an empty GameObject, attach the Javascript and associate the textures</h2>

                            <p>In order for the script to do anything, it needs to be attached to a GameObject, so create a new GameObject by selecting from the menu: GameObject &gt; Create Empty. Once the GameObject is made you can right-click on it and rename it to something meaningful like ‘HealthStatusBarGUI’. Drag the script onto the GameObject. You should then see the script’s global variables in the Inspector panel where you must add each of the textures to the appropriate slot.</p>

                            <p><img title="Initial Health Bar Setup" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2012/10/InitalHealthBarSetup.png" alt="" /></p>

                            <p><em>Tip: You can add the textures to each slot by simply dragging and dropping each image asset from the Project panel onto the appropriate texture slot in the Inspector.</em></p>

                            <h2>Run the game and admire your progress</h2>

                            <p>At this point, you can run the game and see your new health status bar on the screen!</p>

                            <p><img title="Drag Health Width to Test" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2012/10/DragHealthWidthToTest.png" alt="" /></p>

                            <p>To get a feel for how the indicator will work during game play, drag the Health Width item left and right in the Inspector panel while the game is playing.</p>

                            <h2>Conclusion</h2>

                            <p>In this article, we provided the assets and a few tips for getting you started on building a player health status indicator for your game. What we wanted to do was give you a starting point that would get you results fast. We discussed how you can prepare the graphics for your GUI in layers which will allow the green health bar to shrink and expand beneath the indicator’s glass and frame. We also provided a starting script and a way to manually drag a control to preview how the widget’s going to move during game play.</p>

                            <p>In <strong><a title="How to Create a Player Health Status Indicator for the Unity GUI, Part 2" href="/create-player-health-status-indicator-for-unity-gui-part-2">Part 2</a></strong>, we’ll examine the Javascript line by line so that you can learn how the script works and hopefully also improve your programming skills.</p>

                            <p>Until next time, enjoy the craft!</p>

                            <p><ion-button color="primary" routerDirection="forward" href="/create-player-health-status-indicator-for-unity-gui-part-2">Next: Part 2 &gt;&gt;</ion-button></p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}