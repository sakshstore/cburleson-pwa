import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-unity-freebies-game-timer-cinematic-letterbox-and-fade-in-scripts',
})
export class PageUnityFreebiesGameTimerCinematicLetterboxAndFadeInScripts {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageUnityFreebiesGameTimerCinematicLetterboxAndFadeInScripts.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
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

                            <p><img src="https://codyburleson.com/wp-content/uploads/2012/11/GUIGameTimerWithGUILetterbox.png" class="img-fluid " alt="GUI Game Timer with GUI Letterbox" /></p>

                            <p>Two awesome Unity behavior scripts that you can download and use for free right now!</p>

                            <p><strong><a href="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2012/11/GUIGameTimerAndGUILetterbox.zip">GUIGameTimerAndGUILetterbox.zip</a></strong> (3 KB ZIP)</p>

                            <p>The GUI Gamer Timer runs a timer during the life of your game. You can display the timer on the screen or simply have it running behind the scenes so that you can determine the elapsed minutes and seconds from other scripts in the game.</p>

                            <p>The GUI Letterbox script draws a cinematic letterbox on the screen which can open up to expose the full view of your game at the time you specify. Along with some good music, this can help you set a very interesting mood! The letterbox script also contains fade-in functionality which you can use alone or in combination with the letterbox.</p>

                            <p><img title="GameTimeAndLetterboxOnGameObject" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2012/11/GameTimeAndLetterboxOnGameObject-1024x674.png" alt="" /></p>

                            <p>Create a new GameObject and name it ‘GameController’. Drag both scripts onto a GameObject that’s in the scene.&nbsp;Select the GameObject that holds the script and then look in the Inspector panel.</p>

                            <p><span id="more-1607"></span>Following is a definition of each attribute that you can change in the inspector:</p>

                            <h2>GUI Game Timer</h2>

                            <ul>
                                <li><strong>Position X</strong> – Specifies where to draw the timer from the left-hand side of the screen.</li>
                                <li><strong>Position Y</strong> – Specifies where to start drawing the timer from the top-most side of the screen.</li>
                                <li><strong>Gui Depth</strong> – Specifies the depth to render the timer on the GUI plane. A lower number, such as zero can help ensure the timer draws atop any other GUI you might be rendering.</li>
                                <li><strong>Show Time</strong> – Specifies whether or not to show the timer on screen. If the behavior is active, the timer will still be running whether it’s shown on screen or not. This will allow you to access the timer from other scripts &nbsp;and call the script’s getMinutes() and getSeconds() methods to determine elapsed time.</li>
                            </ul>

                            <h2>GUI Letterbox</h2>

                            <ul>
                                <li><strong>Use Letterbox</strong> – Specifies whether or not to use the letterbox feature.</li>
                                <li><strong>Use Fade In</strong> – Specifies whether or not to use the fade-in feature.</li>
                                <li><strong>Black Solid Texture</strong> – You need to drag and drop the included blackSolid.gif file on this property in the inspector!</li>
                                <li><strong>Start Fade In Minutes</strong> – When, in minutes, to start fading in from black (can be zero to use seconds only)</li>
                                <li><strong>Start Fade In Seconds</strong> – When, in seconds, to start fading in from black (combines with minutes if minutes is set greater than zero).</li>
                                <li><strong>Start Open Letterbox Minutes</strong> –&nbsp;When, in minutes, to start opening the cinematic letterbox (can be zero to use seconds only)</li>
                                <li><strong>Start Open Letterbox Seconds</strong> –&nbsp;When, in seconds, to start opening the cinematic letterbox (combines with minutes if minutes is set greater than zero).</li>
                            </ul>

                            <p>If you like these free goodies, please give us a +1, Tweet and share with your friends!</p>


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