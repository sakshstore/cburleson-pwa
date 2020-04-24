import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-stories-of-slavery-as-told-by-ex-slaves',
})
export class PageTreasureWebStoriesSlavery {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageTreasureWebStoriesSlavery.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substring( document.location.pathname.lastIndexOf('/') + 1 );
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

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/11/slavery-1.jpg" /></p>


                            <blockquote>"My mind hinder comes and goes, but I can always 'member 'bout slav'ry time."</blockquote>

                            <p>Uncle Ant'ny sat dozing in the early morning sunshine on his rickety front porch. He was a thin little old man with patches of white wool here and there on his bald head, and an expression of kindness and gentleness on his wrinkled old face.</p>

                            <p>As Susie O'Brien went cautiously up the steps, which appeared none too safe, the cane against his chair fell to the floor with a clatter. He awoke, startled, and began fumbling around for it with his trembling and bony hands.</p>

                            <p>"Uncle Ant'ny, you don't see so well, do you?" she asked as she recovered the stick for him.</p>

                            <p>"No ma'am, I sho' don't," he replied. "I aint seed none outen one of my eyes in near 'bout sixty years, and de doctor say I got a catiac on de uther one; but I knows you is white folks. I always is been puny, but I reckon I does purty well considerin' I is a hundred years old."</p>

                            <p>"How do you know you are that old?" she inquired of him.</p>

                            <p>Without hesitation, he answered. "I knows I's dat old 'cause my mistis put it down in de Bible. I was born on de fourth day and I was a full growed man when de war come on in '61."</p>

                            <p>"Yessum," he said. "My mind hinder comes and goes, but I can always 'member 'bout slav'ry time. Emt's the things what happen in those days dat's so hard for me to disremember."</p>

                            <div class="slate-resizable-image-embed slate-image-embed__resize-full-width">
                                <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/11/slavery-2.jpg" />
                            </div>

                            <p>And so it went on the Alabama morning of August 4th, 1937 that old Anthony Abercrombie, an ex-slave, began to tell his story. Susie O'Brien, Anthony's biographer, was employed by The Federal Writers' Project of the Works Progress Administration, which provided work for historians, teachers, writers, librarians, and other white-collar workers during the Great Depression. As per instruction, she recorded his story with meticulous faith to his own account, capturing even the cultural dialect from "the days of local color" with phonetic spelling.</p>

                            <p><img class="alignright" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/11/slavery-3.jpg" /></p>

                            <p>Other informants, like Susie O'Brien, worked across several of the Southern United States during the years of 1936-1938 with a shared realization that the last generation of slaves would soon be gone. As such, they transcribed authentic recollections from the ex-slaves for posterity. The project resulted in 2,300 first-person accounts and 500 black-and-white photographs of former slaves. The collection, <a href="https://www.loc.gov/collections/slave-narratives-from-the-federal-writers-project-1936-to-1938/" target="_blank" rel="nofollow noopener">Born in Slavery: Slave Narratives from the Federal Writers' Project, 1936 to 1938</a>, is from the Library of Congress and <a href="https://www.loc.gov/collections/slave-narratives-from-the-federal-writers-project-1936-to-1938/" target="_blank" rel="nofollow noopener">available online</a>.</p>

                            <p><br /></p>

                            <blockquote class="clear">
                                "Tisn’t he who has stood and looked on, that can tell you what slavery is–’tis he who has endured.”
                                <footer>John Little, a fugitive slave, 1855</footer>
                            </blockquote>

                            <p>There are many great works that recount the history of slavery in the United States and my guess is that many of those have drawn from the Slave Narratives as a source. You may find, like me, that going back to that original source is engaging in its own unique way and probably as authentic a telling as one can find. You will find yourself fascinated by the people who told their stories as much as the stories themselves. It's like going back in time to the days of the Great Depression, sitting down on a rickety front porch in Alabama, and listening along as some wise old man or woman takes you back in time to some place from whence the winds came that now whisper in the leaves of the ancient oak on the lawn. Back to the Civil War and before.</p>

                            <p>I could sit there with Uncle Antn'y all through the Autumn day, just listening. Yet there are more states to visit, more porches and more people. We can <a href="https://www.loc.gov/collections/slave-narratives-from-the-federal-writers-project-1936-to-1938/" target="_blank" rel="nofollow noopener">visit them</a> anytime and share the memories of what it truly meant, each to their own, to be born in slavery. What a treasure!</p>

                            <div class="slate-resizable-image-embed slate-image-embed__resize-middle">
                                <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2017/11/cody-burleson-at-lincoln-memorial-2017.jpg" />
                            </div>

                            <p><em>At the Lincoln Memorial in 2017 - only yards away from the spot where Martin Luther King Jr. stood and said, "I have a dream." King's speech was given 100 years after Lincoln's Emancipation Proclamation promised freedom to the slaves. </em></p>

                            <h2>Citations</h2>

                            <ul>
                                <li>Federal Writers' Project: Slave Narrative Project, Vol. 1, Alabama, Aarons-Young. to 1937, 1936. Manuscript/Mixed Material. Retrieved from the Library of Congress, <a href="https://www.loc.gov/item/mesn010/" target="_blank" rel="nofollow noopener">https://www.loc.gov/item/mesn010/</a>. (Accessed November 25, 2017.)</li>
                                <li>Image: A Union soldier stands with African Americans on the plantation Thomas F. Drayton, Hilton Head Island, South Carolina, 1862. Photo by Henry P. Moore, May 1862. Shutterstock stock illustration ID: 242290462</li>
                                <li>Image: Grave of Uncle Joe; died 1888; tombstone erected by B.J. Hoole, son-in-law of General John L. Hunter; "In memory of a trusted slave who continued as a servant after he was freed"; Fairview Cemetery, Eufaula, Alabama</li>
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