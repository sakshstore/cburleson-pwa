import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-quotes-for-writers'
})
export class PageQuotesForWriters {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageQuotesForWriters.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + SITENAME;
    }

    // Use this if using source code blocks to be formatted by prism.js...
    // componentDidLoad() {
    // setTimeout(() => Prism.highlightAll(), 0)
    // }

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

                            <p>A list of quotes for writers &#8211; most often from writers, most often inspiring.</p>

                            <blockquote>
                                <p>The first sentence can’t be written until the final sentence is written.</p>
                                <footer>Joyce Carol Oates</footer>
                            </blockquote>

                            <blockquote>
                                <p>Creativity and ego cannot go together. If you free yourself from the comparing and jealous mind, your creativity opens up endlessly.</p>
                                <footer>Some Asian dude on Chef&#8217;s Table, Season 3, Episode 1</footer>
                            </blockquote>

                            <blockquote>
                                <p>Editing while writing is a terrible idea. Reviewing while writing is a terrible idea. Making retrospective story changes while writing is a terrible idea. There are cases where you might feel that you have to do some of those things, but you’d be better off if you didn’t. Just write the thing. That’s the single most valuable lesson I learned. Get the words out, almost without regard to what those words are. Keep going, at all costs.</p>
                                <footer>Unknown</footer>
                            </blockquote>

                            <blockquote>
                                <p>Habit is the bed of creativity. Tuck yourself in.</p>
                                <footer>Steven King</footer>
                            </blockquote>

                            <blockquote>
                                <p>Time constraints sharpen the mind.</p>
                                <footer>F. Scott Fitzgerald</footer>
                            </blockquote>

                            <blockquote>
                                <p>Inspiration is everywhere. Carry a notebook.</p>
                                <footer>Victor Hugo</footer>
                            </blockquote>

                            <blockquote>
                                <p>The difference between the almost right word and the right word is the difference between the lightning bug and the lightening.</p>
                                <footer>Mark Twain</footer>
                            </blockquote>

                            <blockquote>
                                <p>Serious writers write, inspired or not. Over time they discover that routine is a better friend than inspiration.</p>
                                <footer>Ralph Keyes</footer>
                            </blockquote>

                            <blockquote>
                                <p>The two most engaging powers of a writer are to make new things familiar and familiar things new.</p>
                                <footer>unknown</footer>
                            </blockquote>

                            <blockquote>
                                <p>It is the function of art to renew our perception. What we are familiar with we cease to see. The writer shakes up the familiar scene, and, as if by magic, we see a new meaning in it.</p>
                                <footer>Anais Nin</footer>
                            </blockquote>

                            <blockquote>
                                <p>It&#8217;s hell writing and it&#8217;s hell not writing. The only tolerable state is having just written.</p>
                                <footer>Robert Hass</footer>
                            </blockquote>

                            <blockquote>
                                <p>Good dialog illuminates what people are not saying.</p>
                                <footer>Robert Towne</footer>
                            </blockquote>

                            <blockquote>
                                <p>My presecription for writer&#8217;s block is to face the fact there is no such thing. It&#8217;s an invented condition, a literary version of the judicial &#8216;abuse excuse&#8217;. Writing well is difficult, but one can always write something. And then, with a lot of work, make it better. It&#8217;s a question of having enough will and ambition, not of hoping to evade this mysterious hysteria people are always talking about.</p>
                                <footer>Thomas Mallon</footer>
                            </blockquote>

                            <blockquote>
                                <p>One of the biggest, and possibly the biggest, obstacle to becoming a writer is learning to live with the fact that the wonderful story in your head is infinitely better, truer, more moving, more fascinating, more perceptive, than anything you&#8217;re going to get down on paper.</p>
                                <footer>Robin McKinley</footer>
                            </blockquote>

                            <blockquote>
                                <p>Be an unstoppable force. Write with an imaginary machete strapped to your thigh. This is not a wishy-washy, polite, drinking-tea-with-your-pinkie-sticking-out stuff. It&#8217;s who you want to be, your most powerful self. Write your books. Finish them, then make them better. Find the way. No one will make this dream come true for you but you.</p>
                                <footer>Laini Taylor</footer>
                            </blockquote>

                            <blockquote>
                                <p>If you intend to write as truthfully as you can, your days as a member of polite society are numbered.</p>
                                <footer>Steven King</footer>
                            </blockquote>

                            <blockquote>
                                <p>When in doubt, make trouble for your character. Don&#8217;t let her stand on the edge of the pool, dipping her toe. Come up behind her and give her a good hard shove. That&#8217;s my advice to you now. Make trouble for your character. In life, we try to avoid trouble. We chew on our choices endlessly. We go to shrinks., we talk to our friends. In fiction, this is deadly. Protagonists need to screw up, act impulsively, have enemies, get into trouble.</p>
                                <footer>Janet Fitch</footer>
                            </blockquote>

                            <blockquote>
                                <p>The first draft is just you telling yourself the story.</p>
                                <footer>Terry Pratchet</footer>
                            </blockquote>

                            <blockquote>
                                <p>You don&#8217;t really understand an antagonist until you understand why he&#8217;s a protagonist in his own version of the world.</p>
                                <footer>John Rogers</footer>
                            </blockquote>

                            <blockquote>
                                <p>Stopping a piece of work just because it&#8217;s hard is a bad idea. Sometimes you have to go on when you don&#8217;t feel like it and sometimes you&#8217;re doing good work when it feels like all you&#8217;re managing to do is shovel shit from a sitting position.</p>
                                <footer>Steven King</footer>
                            </blockquote>

                            <blockquote>
                                <p>A good writer is always a people watcher.</p>
                                <footer>Judy Blume</footer>
                            </blockquote>

                            <blockquote>
                                <p>If you don&#8217;t see the book you want on the shelf, write it.</p>
                                <footer>Beverly Cleary</footer>
                            </blockquote>

                            <blockquote>
                                <p>I want your loves to be multiple. I don’t want you to be a snob about anything. Anything you love, you do it. It’s got to be with a great sense of fun. <strong>Writing is not a serious business.</strong> It’s a joy and a celebration. You should be having fun at it. Ignore the authors who say, oh my god, what work, oh Jesus Christ, you know. No, to hell with that. It is not work. If it’s work, stop it, and do something else.</p>
                                <footer>Ray Bradbury</footer>
                            </blockquote>

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