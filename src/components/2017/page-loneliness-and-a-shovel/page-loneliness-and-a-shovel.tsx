import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-loneliness-and-a-shovel',
})
export class PageLonelinessAndAShovel {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageLonelinessAndAShovel.componentWillLoad');
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

                            <h2>Writing prompt</h2>

                            <p><em>Prompt by&nbsp;Cameron Graham, Oct 25 2017,&nbsp;<a href="https://www.facebook.com/groups/WritingPromptsGroup/" rel="nofollow">Writing Prompts Group</a>, Facebook</em></p>

                            <p>The loneliness was crushing. For six weeks, since the fever had taken her, there had been no one to talk to. The walls would not reply; the looming trees around the cabin had nothing to say; the winds only whipped his words away.</p>

                            <p>Why did she have to be gone?</p>

                            <p>He realized she did not have to be gone. Taking up his pick and shovel, he returned to the clearing where he had made her grave.</p>

                            <h2>Writing</h2>

                            <p>He dug madly into the earth. The moon watched over him throughout the night and then finally retired. As the sun rose, he carried her frail and withered body back to rest in her favorite chair beside the hearth where she had sat for all the years of his life. It was from that chair she&#8217;d taught him all the most important things to know.</p>

                            <p>&#8220;You can&#8217;t keep that sweet young girl here, Jimmy,&#8221; Mama would say. And then she would wait patiently as he pinched his ears and shook his head and moaned and groaned in a fit of anger. She was always so patient. Always so gentle and wise.</p>

                            <p>Jimmy picked maggots from her flesh and tossed them into the fire. He fetched her crochet needles and placed them gently in her hands. Laid the roll of yarn in her lap and arranged the blanket snug upon her shoulders.</p>

                            <p>&#8220;I know, Mama,&#8221; he said. &#8220;Someone might a come lookin&#8217; for that girl.&#8221;</p>

                            <p>He waited for her to answer as she had done so many times before. He waited for her to say what she always said, and what he always hated to hear.&nbsp;<em>That&#8217;s right, Jimmy. And you ought not have her in your bed when they come a knockin&#8217;.</em></p>

                            <p>&#8220;But Mama,&#8221; he would whine.</p>

                            <p>And &#8220;Now, Jimmy,&#8221; she would say, &#8220;you know better. You get that girl on outta here now.&#8221;</p>

                            <p>He peeked through the door in his bedroom at the child. In the soft glow of the firelight, he could see that she was still there. Still sleeping. So, he sat on the floor by his mama and waited for her to tell him when it was time.</p>

                            <p>As the day went on, she said many things, but never a sharp word. She never told him to take the girl on out. She had changed. The fever had softened her heart.</p>
                            <p>And Jimmy&#8217;s heart grew full. His loneliness was gone. He had someone to talk to. Like wise old friends, even the trees around the cabin had much to say. The winds sang like a jubilent chorus in their leaves.</p>

                            <p>If she can stay, why do the others have to be gone too?</p>

                            <p>He realized they did not have to be gone. Taking up his pick and shovel, he returned to the clearing where he had buried them.</p>

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