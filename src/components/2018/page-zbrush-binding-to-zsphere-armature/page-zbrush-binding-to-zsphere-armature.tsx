import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, isLocal, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-binding-to-a-zsphere-armature',
})
export class PageZbrushBindingToZsphereArmature {

    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('>> PageZbrushBindingToZsphereArmature.componentWillLoad');
        }
        
        
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

                            <p>An armature is like the wire or metal skeleton that a clay sculptor would use to build form upon &#8211; or the posable skeleton used under the surface of stop-motion characters in film. With ZSPheres, we can quickly create such armatures. We can then go into ZSphere sketch mode (SHIFT + A) and build up form atop the armature.</p>

                            <p>Here, for example, I&#8217;ve created a basic armature for a xenomorph (Alien species). Creating such an armature is just a matter of starting with a single ZSphere from the tools palette. You drag on the canvas to create the initial ZSphere. Click to go into Edit mode and then use a combination of Draw, Move, Scale, and Rotate to build out the armature.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zsphere-binding-1.png" alt="" /></p>

                            <p>Once you&#8217;ve got an armature, you can press <strong>SHIFT + A</strong> to go into ZSphere sketch mode and paint additional ZSpheres onto the armature to build out form.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zsphere-binding-2.png" alt="" /></p>

                            <p>Pressing SHIFT + A to toggle in and out of sketch mode is the equivalent of pressing Edit Sketch button under ZSketch in the Tools palette.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zsphere-binding-3.png" alt="" width="211" height="175" /></p>

                            <p>When not in the sketch mode, we can still pose the armature. But notice that after we&#8217;ve painted some ZSpheres onto the armature in sketch mode, reposing the armature does not automatically carry the sketched form we added on top.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zsphere-binding-4.png" alt="" /></p>

                            <p>Press SHIFT + A and CTRL + Z to undo this change. We&#8217;ll learn how to bind the sketched ZSpheres in a bit. But first, take a look at the ShowSketch button under Tools &gt; ZSketch. Pressing this displays a ghosted view of the form surrounding the armature.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zsphere-binding-5.png" /></p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zsphere-binding-6.png" /></p>

                            <p>Now, at this stage, we can also click the Bind button under Tools &gt; ZSketch.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zsphere-binding-7.png" alt="" /></p>

                            <p>Now, when we rotate the ZSphere on the shoulder to move the arm, we can see that the form is bound to the armature and moves with it.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zsphere-binding-8.png" alt="" /></p>

                            <p>If you continue to sketch in more form with additional ZSpheres in sketch mode, you&#8217;ll have to click the Tools &gt; ZSketch &gt; Reset Binding button to get those new ZSpheres bound to the armature for posing.</p>

                            <p>The SoftBind slider, beside the Bind button allows us to soften the bind to the underlying armature. The value 0 specifies the hardest bind, while higher values soften the bind, giving a looser transition of the sketched ZSpheres on the underlying armature.</p>

                            <h2>References</h2>

                            <ul>
                                <li><a href="http://pixologic.com/zclassroom/lesson/binding" rel="nofollow">BINDING</a></li>
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