import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-use-fibermesh-in-zbrush',
})
export class PageZBrushUseFibermesh {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageZBrushUseFibermesh.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + SITENAME;
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

                            <p>FiberMesh™&nbsp;is a specialized mesh generation tool in ZBrush that allows you the create fur, grass, fibers, weeds and hair.&nbsp;Unlike the Fiber material, FiberMesh is not a render process. Instead, FiberMesh creates real geometry which can be added to an existing model as a new SubTool. These are my notes taken from early experimentation, which can help beginners understand the basics of using FiberMesh™.</p>

                            <h1>Workflow</h1>

                            <h2>Setup Phase</h2>

                            <p>PolyPaint the source model with the colors of your choice. When the fibers are generated, they will (depending on the Fibers settings) draw their coloration from that of the underlying surface.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-fibermesh-1.jpg" alt="" /></p>

                            <p>With Colorize on (so the polypaint shows) turn on Tool &gt; FiberMesh &gt; Preview…</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-fibermesh-2.jpg" alt="" /></p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-fibermesh-3.jpg" alt="" /></p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-fibermesh-4.jpg" alt="" /></p>

                            <p>In the Tool &gt; FiberMesh &gt; Modifiers set the TColor (Tip Colorize) slider to 0 and the BColor (Base Colorize) slider to 1. The fibers should now take on the polypaint color.</p>

                            <p>As the color in the Base Color selector (the icon to the left of the BColor slider) can affect the fibers color set this to black/white, although the BColor setting can be adjusted if you want to tint the fibers. Any BColor setting greater than zero should show the polypaint color.</p>

                            <p>Note: if you change the settings, or turn off Colorize, sometimes you need to move the BColor slider to get the fibers color to update.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-fibermesh-5.jpg" alt="" /></p>

                            <p>Draw a Mask (hold down CTRL while painting) to define where you wish to have your fibers grow from on the model.</p>

                            <p><img src="https://codyburleson.com/wp-content/uploads/2018/07/zbrush-fibermesh-6.jpg" alt="" /></p>

                            <p>The intensity of the Mask will modulate the density and the length of the fibers. It is advised to change the Mask intensity by modifying the RGB Intensity of the Mask brush and/or by blurring your Mask after it has been drawn. Lower intensity will create a less dense area of fibers with a short length. At full Mask intensity the fibers will take on the full attributes defined in the Tool &gt; Fibers sub-palette. In the image above, I’ve masked the red area where I want the fibers. In the image below, I’ve turned on FiberMesh &gt; Preview and you can see that the fibers now only grow from the masked area.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-fibermesh-7.jpg" alt="" /></p>

                            <p>Once the surface’s PolyPaint and Mask have been defined, modify the Fibers settings according to the style you are looking for. Now press the Preview button. Your fibers will appear as a non-editable preview. At this stage, if you move your point of view or orientation of the model, the fibers will disappear until you release your mouse cursor. While in Preview mode, changing any of the Fibers settings will instantaneously update the fibers on your model without the need to cancel your operation and start from scratch.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-fibermesh-8.jpg" alt="" /></p>

                            <p>To evaluate your Fiber with complete shading, press the BPR button at the top right of the interface or use the Shift+R hotkey. This will render your FiberMesh so that you can be sure you’re happy with the results before proceeding to the sculpting and styling phase. Picking the right Material is also a key factor in your FiberMesh render.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-fibermesh-9.jpg" alt="" /></p>

                            <p>Once you are satisfied with your results, press the Tool &gt; FiberMesh &gt; Accept button to generate your FiberMesh as a new SubTool. You should now be able to see the generated SubTool in the SubTool palette as shown below.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-fibermesh-10.jpg" alt="" /></p>

                            <p>You may now repeat the above steps with a different Masked area or different settings. In this way, a single surface can have many different types of Fibers effects.</p>

                            <p>Here, I’ve inverted the mask so that previously masked area becomes unmasked and the previously unmasked area becomes masked…</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-fibermesh-11.jpg" alt="" /></p>

                            <p>I pressed SHIFT + R for a Best Preview Render and adjusted the Tool &gt; FiberMesh &gt; Coverage until I got something I liked…</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-fibermesh-12.jpg" alt="" /></p>

                            <p>I then clicked Accept to generate the second SubTool. Now, I have two FiberMesh subtools.</p>

                            <p>Preview…</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-fibermesh-13.jpg" alt="" /></p>

                            <p>Best Preview Render (BPR)…</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-fibermesh-14.jpg" alt="" /></p>

                            <p>Once your fibers have been generated, select the resulting SubTool in the Tool &gt; SubTool sub-palette. You may now start using the different sculpting brushes to alter the fibers, including their colors. That is to say, you can move on to the grooming phase of the workflow. But first, you may wish to save your FiberMesh settings to get the same look again at a later date.</p>

                            <h2>Save Your FiberMesh Presets</h2>

                            <p>By clicking the Save button located at the top of the FiberMesh sub-palette, you can save all the current settings for your FiberMesh Preview so that they can be reused later. Saved presets make an excellent starting point for any new model, saving you time by duplicating a specific “look” that you really liked on an earlier model.</p>

                            <p>To save your current settings, simply click the Save button and select a location of your choice. It is advised to save them in the ZFibersPresets folder located at the root of the ZBrush folder. This allows you to browse through and select from them quickly using LightBox, which now has a FiberMesh section.</p>

                            <h2>Grooming Phase</h2>

                            <p>ZBrush includes a wide variety of predefined Groom brushes dedicated to FiberMesh sculpting. These allow you to style the FiberMesh to the exact form and aspect that you wish. New settings have also been added to the Brush Palette for these brushes.</p>

                            <p>In addition, all traditional sculpting brushes like Inflate, Pinch, Soft Concrete, Nudge (with the Picker set to Once Origin) and Move can be used to produce interesting results. Be aware that as these brushes were not designed specifically for use with Fibers, they can affect the shape of the fibers and the deformation can become extreme.</p>

                            <p>To restore your fibers to their default width or length (but not position) you can use the new Tool &gt; Morph Target &gt; Morph width slider and Tool &gt; Morph Target &gt; Morph length slider. Please refer to the ZBrush documentation’s Morph Target section for more information.</p>

                            <p>As with a traditional PolyMesh 3D, you can use the Mask brushes to protect certain fibers. A unique feature when Masking fibers is that when the Mask is painted on any portion of a fiber, ZBrush will Mask off the fiber’s entire length.</p>

                            <h3>Groom Brushes</h3>

                            <p>To complement the FiberMesh feature, there is a series of Groom brushes. These brushes are dedicated to the sculpting of FiberMesh objects. These brushes are derived from traditional sculpting brushes and have their behavior optimized to avoid unexpected results when working with Fibers.</p>

                            <p>FiberMesh Groomed (Preview)…</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-fibermesh-15.jpg" alt="" /></p>

                            <p>FiberMesh Groomed (BPR)…</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-fibermesh-16.jpg" alt="" /></p>

                            <p>Some of the groom brushes:</p>

                            <ul>
                                <li><strong>Groom Hairtoss</strong>&nbsp;– A standard grooming brush that is Mmost useful when sculpting fibersfor moving long hair with a smooth sweeping. This brush is taking advantage of the new Brush&gt;Modifiers&gt;Strength Multiplier which is multiplying the brush strength by what is set in this slider. especially long fibers to create hair. The length of the fiber is preserved when using this brush.</li>
                                <li><strong>Groomer Strong&nbsp;</strong>–&nbsp;Similar to the Groomer brush, but with a stronger effect on the fibersA standard groom brush with no forward or inverse propagation. This brush will influence most of the fiber to be implemented with only the root to be protected.</li>
                                <li><strong>Groom Blower</strong>&nbsp;–&nbsp;Simulates a hair dryer on the fibers by separating the fibers as if they were being blown around by wind.</li>
                                <li><strong>Groom Clumps –&nbsp;</strong>This brush will clump the tips of the fibers together or cause the tips to flare out, depending on the brush modifiers.</li>
                                <li><strong>Groom Turbulence</strong>&nbsp;–&nbsp;Deforms the fibers to have a slight turmoil. This is great to put a little of bit mess to hair.</li>
                                <li><strong>Groom Fast Lengthen</strong>&nbsp;–&nbsp;Deforms and moves your fibers in the direction of your stroke. This brush also changes the length of your fibers without increasing the number of segments.Similar to Groom Lengthen, but produces less accurate deformation. . Use this for “quick and dirty” shaping.</li>
                                <li><strong>Groom Root Colorize</strong>&nbsp;–&nbsp;This brush will only Polypaint the roots of the selected fibers.</li>
                                <li><strong>GroomerMagnet</strong>&nbsp;–&nbsp;Deforms the tip of fibers to assimilate together.</li>
                                <li><strong>GroomerTwist</strong>&nbsp;–&nbsp;Rotates the fibers around the brush, exactly like twisting a lock of hair.</li>
                                <li><strong>Groom Twist Slow</strong>&nbsp;–&nbsp;Similar to the Groomer Twist brush except that it operates more slowly. It is best with low speed strokes.</li>
                                <li><strong>Groom Hair Ball</strong>&nbsp;–&nbsp;Creates a ball-like clump at the tips of the fibers.</li>
                                <li><strong>Groom Spike</strong>&nbsp;–&nbsp;Squeezes the majority of the affected fibers’ lengths together to create spikes.</li>
                                <li><strong>Groom Spin Knot&nbsp;</strong>–&nbsp;Similar to Groom Spike except that the Twist settings in the Brush palette are set to a low rate to create a smoother effect. Great for creating sweeps in the fibers.</li>
                                <li><strong>Groom Spin Knot Strong</strong>&nbsp;–&nbsp;Similar to the Groom Spin Knot brush, but with a stronger effect.</li>
                            </ul>

                            <h1>References</h1>

                            <ul>
                                <li><a href="http://docs.pixologic.com/user-guide/3d-modeling/fibermesh/workflow/" rel="nofollow">FiberMesh Workflow</a>, ZBrush 4R7 User Guide</li>
                                <li><a href="http://docs.pixologic.com/user-guide/3d-modeling/fibermesh/groom-brushes/" rel="nofollow">FiberMesh Groom Brushes</a>,&nbsp;ZBrush 4R7 User Guide</li>
                            </ul>


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