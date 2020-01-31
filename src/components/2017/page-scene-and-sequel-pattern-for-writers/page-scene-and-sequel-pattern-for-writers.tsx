import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-scene-and-sequel-pattern-for-writers',
})
export class PageSceneAndSequelPatternForWriters {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageSceneAndSequelPatternForWriters.componentWillLoad');
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

                            <h2>Aliases</h2>

                            <ul>
                                <li>ACTION SCENE AND REACTION SCENE</li>
                            </ul>

                            <h2>Context</h2>

                            <p>Whether you’re a pantser or a plotter, you need to carry the reader through your story with a purposeful progression of logically connected events that ultimately lead to the resolution of a climax. How can you advance through your scenes in a way that creates a steady and consistent reading speed, or&nbsp;<em>pacing,</em> while also accounting for important factors such as building tension, developing characters, and describing setting? The Scene and Sequel technique developed by Dwight Swain in his book, <em><a href="https://www.amazon.com/gp/product/0806111917/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&amp;tag=burtecgrollc-20&amp;camp=1789&amp;creative=9325&amp;linkCode=as2&amp;creativeASIN=0806111917&amp;linkId=25eb41e3d6e1d419a47cdf2bb9215f80" rel="nofollow">Techniques of the Selling Writer</a>,</em> is one that can help you create a solid pacing with the powerful and emotional experience that readers crave.</p>

                            <p class="aligncenter"><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/pattern-diamond-rule.gif" alt="" /></p>

                            <h2>Problem</h2>

                            <p><strong>Portions of your novel may have the tendency to lag or drag and fail to create a deep emotional connection with the characters of your story.&nbsp;</strong></p>

                            <h2>Forces</h2>

                            <ul>
                                <li>Humans like patterns and readers like a pattern that establishes solid pacing through a novel while building tension, developing characters, describing setting, and advancing plot lines.</li>
                                <li>As a writer, you must use a pacing that helps create and maintain an illusion strong enough to deliver the powerful and emotional experience that readers crave – one that allows them to escape from the drudgery of the real world and a way to live vicariously through others.</li>
                            </ul>

                            <h2>Solution</h2>

                            <p>Therefore:</p>

                            <p><strong>Alternate between the two variant types of scenes known as SCENE and SEQUEL. The SCENE is driven by a goal, conflict, and disaster. It is then followed by a SEQUEL, which contains a reaction, dilemma, and decision. The decision leads to a new goal which begets the next SCENE and, as such, the cycle repeats.</strong></p>

                            <p class="aligncenter"><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/scene-and-sequel.gif" alt="" /></p>

                            <h2>Rationale</h2>

                            <p>Scene and Sequel is a technique developed by Dwight Swain in his book,&nbsp;<em><a href="https://www.amazon.com/gp/product/0806111917/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=burtecgrollc-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0806111917&linkId=25eb41e3d6e1d419a47cdf2bb9215f80" rel="nofollow">Techniques of the Selling Writer</a>.&nbsp;</em>It&nbsp;help you create and maintain solid pacing while also guiding you to account for the factors that build tension, develop characters, describe setting, and advance plot lines.</p>

                            <p>A <strong><em>scene</em></strong> has the following pattern:</p>
                            <ul>
                                <li>Goal – what the character wants. Must be clearly definable</li>
                                <li>Conflict – an obstacle or series of obstacles that keep the character from the goal</li>
                                <li>Disaster – makes the character fail to get the goal</li>
                            </ul>
                            <p>And a <strong><em>sequel</em></strong> has the following pattern:</p>
                            <ul>
                                <li>Reaction – emotional follow through of the disaster</li>
                                <li>Dilemma – a situation with no good options</li>
                                <li>Decision – character makes a choice (which sets up the new goal)</li>
                            </ul>

                            <h2>Example</h2>

                            <p>For a brief example, see <em><a href="http://writershelpingwriters.net/2015/01/writing-patterns-fiction-scene-sequel" rel="nofollow">Writing Patterns Into Fiction: Scene and Sequel</a></em>.</p>

                            <p class="aligncenter"><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/pattern-diamond-rule.gif" alt="" /></p>

                            <h2>Related patterns</h2>

                            <ul>
                                <li>SCENE</li>
                                <li>SWAIN SCENE</li>
                                <li>SWAIN SEQUEL</li>
                            </ul>

                            <h2>References and related external resources</h2>

                            <ul>
                                <li>Ackerman, Angela (2015).&nbsp;<em><a href="http://writershelpingwriters.net/2015/01/writing-patterns-fiction-scene-sequel" rel="nofollow">Writing Patterns Into Fiction: Scene and Sequel</a></em>. Retrieved: 2017-10-07.</li>
                                <li>Swain, Dwight V. (1965).&nbsp;<a href="https://www.amazon.com/gp/product/0806111917/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=burtecgrollc-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0806111917&linkId=25eb41e3d6e1d419a47cdf2bb9215f80" rel="nofollow"><em>Techniques of the Selling Writer</em></a>. University of Oklahoma Press.</li>
                                <li>Weiland, K.M. (2013).&nbsp;<em><a href="https://www.amazon.com/gp/product/0985780401/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=burtecgrollc-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0985780401&linkId=1f15354c2ac166ccb06fc109dcd91555" rel="nofollow">Structuring Your Novel: Essential Keys for Writing an Outstanding Story</a>.&nbsp;&nbsp;</em>Published by&nbsp;PenForASword<em>.</em><em><br />
                                </em></li>
                                <li>Weiland, K.M. (2012).&nbsp;<em><a href="https://www.helpingwritersbecomeauthors.com/structuring-your-storys-scenes-pt-1">Structuring Your Story’s Scenes, Pt. 1: Mastering the Two Different Types of Scene</a>. Retrieved: 2017-10-07.</em></li>
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
