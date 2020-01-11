import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-story-structure-diagram',
})
export class PageStoryStructureDiagram {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageStoryStructureDiagram.componentWillLoad');
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

                            <p>Here is a story structure diagram to help you visualize, plan, and plot your novel.</p>

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/Story-Structure.png" alt="" /></p>

                            <p><em>LEGEND</em>: <strong><span style={{ color: `#000000` }}>Acts, </span></strong><strong style={{ color: `#333399` }}><span style={{ color: `#800080` }}>Periods</span>, </strong><strong><span style={{ color: `#008000` }}>Events, </span></strong><strong><span style={{ color: `#ff6600` }}>Points</span></strong></p>



                            <h2>Details</h2>

                            <ul>
                                <li><strong>ACT I </strong>&#8211; The Beginning
<ul>
                                        <li><span style={{ color: `#008000` }}><strong>Hook</strong></span> &#8211; Grab the reader, provoke interest,and cause questions to be asked.</li>
                                        <li><span style={{ color: `#008000` }}><strong>Inciting Event</strong></span> &#8211; The event that sets the story in motion, and will lead to the Key Event.</li>
                                        <li><span style={{ color: `#008000` }}><strong>Key Event</strong></span> &#8211; The event that causes the protagonist to be caught up in the story.</li>
                                        <li><span style={{ color: `#ff6600` }}><strong>Plot Point 1</strong></span> &#8211; A change of surroundings. A personal turning point. The point of no return for the protagonist.</li>
                                    </ul>
                                </li>
                                <li><strong>ACT II </strong>&#8211; The Middle
<ul>
                                        <li><span style={{ color: `#008000` }}><strong>Strong Reaction</strong></span> &#8211; The protagonist has a strong response to the 1st Plot Point.</li>
                                        <li><span style={{ color: `#ff6600` }}><strong>Pinch 1</strong></span> &#8211; The antagonist’s presence and power are displayed.</li>
                                        <li><span style={{ color: `#ff6600` }}><strong>Plot Point 2</strong></span> &#8211; The midpoint. The turning point of the novel. A change of direction for the characters. A push from reaction to action. A personal catalyst for the protagonist. A move to dramatic, new, fresh, different circumstances. The true midpoint is not a scene. It&#8217;s a moment within a scene. It&#8217;s like the earth&#8217;s core. The true center. Find it in your novel, and everything will radiate from it.</li>
                                        <li><span style={{ color: `#008000` }}><strong>Strong Action</strong></span> &#8211; The protagonist takes a strong action after the Turning Point.</li>
                                        <li><span style={{ color: `#ff6600` }}><strong>Pinch 2</strong></span> &#8211; The antagonist’s presence and power are reaffirmed.</li>
                                        <li><span style={{ color: `#ff6600` }}><strong>Plot Point 3</strong></span> &#8211; We are setup on our inexorable course towards the Climax. A low point for the protagonist. Perhaps a meeting between protagonist and antagonist? A decision? An upheaval? An unexpected event?</li>
                                    </ul>
                                </li>
                                <li><strong>ACT III </strong>&#8211; The End
<ul>
                                        <li><span style={{ color: `#800080` }}><strong>Increased Pace</strong></span> &#8211; The pacing will naturally increase (and chapter length will decrease) as we approach the Climax.</li>
                                        <li><span style={{ color: `#800080` }}><strong>Climax</strong></span> &#8211; The final 10% of the novel, where the core conflict between the protagonist and antagonist is brought to a conclusion.
<ul>
                                                <li>Climactic Moment &#8211; The critical moment that fulfills the dramatic promise of the story.</li>
                                            </ul>
                                        </li>
                                        <li><span style={{ color: `#800080` }}><strong>Resolution</strong></span> &#8211; A brief hint (a scene or two) of how the story continues beyond the novel’s scope. A period of emotional recovery. A chance to spend another brief moment with the protagonist.</li>
                                    </ul>
                                </li>
                            </ul>

                            <h2>Sources</h2>

                            <p>Although this is pretty standard for story structure, it is based primarily on a study of the book, <a href="http://www.amazon.com/gp/product/0985780401/ref=as_li_tl?ie=UTF8&amp;camp=1789&amp;creative=9325&amp;creativeASIN=0985780401&amp;linkCode=as2&amp;tag=burtecgrollc-20&amp;linkId=F75C456FXBYSPVDY" rel="nofollow">Structuring Your Novel: Essential Keys for Writing an Outstanding Story</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=burtecgrollc-20&amp;l=as2&amp;o=1&amp;a=0985780401" width="1" height="1" data-image-src="http://ir-na.amazon-adsystem.com/e/ir?t=burtecgrollc-20&amp;l=as2&amp;o=1&amp;a=0985780401" />, by K.M. Weiland. She also has an excellent blog called <a href="https://www.helpingwritersbecomeauthors.com/" rel="nofollow">Helping Writers Become Better Authors</a> where you can find a treasure trove of tips on writing.</p>

                            <p>Inspiration also came from Matt Gemmell&#8217;s own study on Weiland&#8217;s structure, which he documented in the article, <a href="http://mattgemmell.com/structuring-your-novel/" rel="nofollow">Structuring Your Novel</a>.</p>

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