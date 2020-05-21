import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-work-life-balance-is-overrated',
})
export class PageWorkLifeBalance {

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

                            <p><img class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/08/work-life-balance.png" alt="" style={{ maxWidth: `150px` }} />There was a time when the concept of <em>Work/Life Balance</em> was good, but it’s starting to sound like corporate HR bullshit now. The concept was invented to help address new conflicts that rose when technology blurred the boundaries of the traditional workday and workplace. And that’s all well and good, but there’s a flip-side to it that can actually <em>hurt</em> rather than <em>help</em> you.</p>

                            <p class="clear">Work/Life Balance brings attention to whether or not your work and life are balanced. And it should, of course; that’s what it was designed to do.</p>

                            <ul>
                                <li>When your email comes home with you, is it bringing the stresses of work with it?</li>
                                <li>Which turns you on more: your spouse or the phone that’s going off in your pocket?</li>
                                <li>Are you thinking so much about the client who’s screaming for help that you can’t see your own children are doing the same?</li>
                            </ul>

                            <p>Gag me with a spoonful of depression why don’t you?</p>

                            <p>One problem with the concept of Work/Life Balance is that it inherently implies an <em>imbalance</em> and this, in turn, can misguide you into thinking negatively about your work. Especially when your plate is really full, your manager’s urging you to finish it, and the dish of the day is all beets and broccoli. The concept suggests a scale upon which two separate and distinct things are compared – as if that slash between <em>Work</em> and <em>Life</em> is a line in the sand that you should not have crossed – only you <em>have</em> crossed and now you’re screwed.</p>

                            <p>But work and life are <em>not</em> two separate things. According to somebody on the Internet who has the quote that supports my argument, we spend at least 33% of our lives working – some of us as much as 50%. Now, who in the hell wants to cut a 33% slice out of their life and call it the part that’s '<em>not life</em>'? <em>Oh, that piece is rotten; just throw it away.</em> What are we trying to say here? That it’s common and perfectly normal for your job to suck? And as long as you balance that suckiness with not-suckiness, you’ll be OK?</p>

                            <p>Well, it’s not OK with me.</p>

                            <p>How you feel depends on how you frame things. You can only achieve great things when you’re standing on a platform of strength, which is a positive outlook and attitude. Negativity about anything creates weakness and it blinds you from the ability to see opportunity and the good. It’s a hole to fall into, not a platform to stand upon. So, I’d like to suggest a new frame for this whole concept…</p>

                            <h2>Work/Life Integration</h2>

                            <p>The concept of Work/Life Integration embraces the fact that your work is an integral part of your life. I’d even go so far as to say that it suggests work <em>should</em> be an integral part of your life if it isn’t. That is to say, if your job sucks, you are either in the wrong job, or you need to fix your current job, or you simply need to fix your sorry attitude and then watch how things change when you do.</p>

                            <p>Now, maybe I just love the word '<em>integration</em>' because I’m a software Solution Architect, but to me it just sounds more positive. It’s the glass half-full. Instead of asking the question, “What’s out of balance?”, it asks “What can be integrated better?” Instead of saying to <em>run away from work</em> it says to <em>embrace your work and love it</em>. (Or…<em>leave it</em>; <em>if it won’t integrate, tear it down and replace it with a modern system that will.)</em></p>

                            <p>If your work really does consume 33% or more of your lifetime, then I’d say integration is a far better strategy. Life is far too short for a large chunk of it to be drudgery. And about technology blurring the boundaries of the traditional workday and workplace? That’s exactly what it’s supposed to do. Technology brings down walls, bridges chasms, and unites people and things. It’s supposed to be a good thing and it <em>is</em> a good thing – a damn good thing. If there’s a problem, its not with the technology – it’s with us and how we’ve been using it.</p>

                            <p>Work should not suck in such that you merely slog through each pathetic day longing for your next vacation. It should not be drudgery in such that you must separate it from life and all things good. And if it honestly interferes with your ability to be present with your family or other responsibilities, then you should think about quitting that Industrial Age job and find a company that’s more interested in your results than your time.</p>

                            <p>Easier said than done, you say?</p>

                            <p>I dunno. I can’t think of anything that’s harder than being unhappy. I think there’s a better way and I think that the technology is actually enabling it. But if we have our minds stuck in a gutter, we ain’t gonna see it. Let’s change the frame and see how we might use technology to embrace things and bring them together <em>better</em> – rather than continuing to try to juggle and balance all those things that are apart.</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                            
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}