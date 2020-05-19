import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-memories-of-momma-4',
    styleUrl: 'page-memories-of-momma-4.css'
})
export class PageMemoriesOfMomma4 {

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

                            <div class="leftImageContainer">
                                <img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2019/05/mommas-pill-bottle-of-things.jpg" alt="My mother's actual pill bottle full of things." width="225" />
                            </div>

                            <p>I know Mother's Day has passed, but since I've started down this path, I want to capture a little more before the memories are lost to me forever. These memories are so old, they've fermented and we all know about those thought goblins; how they love to party.</p>

                            <p>One day, when Momma was out of the house, I nosied into her room and rummaged through her medicine tray - a silver serving platter covered with little amber bottles full of SSRIs, SNRIs, TCAs, MAOIs, muscle relaxers and what-not.</p>

                            <p>One odd member of this medicinal family was labeled "FIORINAL W/ CODEINE," and it was for chronic tension headaches. Inside the bottle, she kept a little medallion I’d won for journalism in school. She was at least as proud of that as a grimy old tooth with the silver filling still in it. She also kept a little bracelet with five silver pieces affixed to it, which represented her and her siblings. </p>

                            <p>&quot;Charms,&quot; she told me later. &quot;Sentimental things. They’re for remembering.&quot;</p>

                            <p>Etched on the back of one charm was her own name, Donna, and then Eddie, Al, Lynn and Debra on the others. Debra, my “aunt Debbie,” had been very religious and she’d cut both her wrists to expedite the meeting with her maker. She'd been sure enough to cut vertically down the vein line instead of horizontally across it, but evidently, that wasn't good enough and she survived. But it was just long enough to get a sheet thrown over the hospital room door, tied to the knob, and then to her neck. She timed it carefully around the nurse rotations, it seems, because we’d lost her by the time they pushed that heavy door open. Proof enough for Jesus, I guess.</p>

                            <p>Held upright on the dresser by the edge of the medicine platter was one of Momma's frameless oil paintings. It was a self-portrait she'd painted of herself standing naked on a cliff and overlooking a vast expanse of forrested country - a little window into her soul and how she imagined heaven. Mother Nature was Momma's god and she worshipped her with a mystical reverence.</p>

                            <p>She took me to the forest once and walked me quietly through beams of sunlight that cut through the canopy like spotlights. She whispered as if the place were an art museum or a library.</p>

                            <p>&quot;Whenever I'm troubled,&quot; she said, &quot;I like to walk in the woods. There's not a worry in the world that a good walk in the forest won't fix.&quot;</p>

                            <p> If only we had lived in the forest. </p>

                            <p>She scooped up a snapping turtle from the side of a little stream and I watched, astonished, as its arms and head retracted into the shell. She knelt down with a smile and pointed at its head tucked back in its little shell house. The turtle’s mouth remained open in a dare, so Momma obliged it with a stick.</p>

                            <p>&quot;Never put your finger near a turtle's mouth,&quot; she warned. </p>

                            <p>The turtle snapped down onto the stick and I could swear I heard a crunch. Then she held the mass of its body in the air by just the stick alone.</p>

                            <p>&quot;If it ever gets hold of your finger, it won't let go 'till lightning strikes,&quot; she said.</p>

                            <p>Since that magical day, I've seen plenty of those little creatures. I'm pretty sure the old wive's tale about the lightning strike can't be true, but I can assure you, I never put a finger anywhere near enough to find out. Those old southern quips were designed for stupid little creek dwellers like me and let me tell you...they work.</p>

                            <p>They work like a charm.</p>

                            <p><ion-button color="primary" href="/memories-of-momma-3">&lt;&lt; Previous: Part 3</ion-button> <ion-button color="primary" routerDirection="forward" href="/memories-of-momma-5">Next: Part 5 &gt;&gt;</ion-button></p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">

                            <ion-card>
                                <ion-card-header>
                                    <ion-card-subtitle>Memories of Momma</ion-card-subtitle>
                                    <ion-card-title>Series content</ion-card-title>
                                </ion-card-header>
                                <ion-card-content>
                                    <ion-list>
                                        <ion-item href="/memories-of-momma-1">
                                            <ion-label>Part 1</ion-label>
                                        </ion-item>
                                        <ion-item href="/memories-of-momma-2">
                                            <ion-label>Part 2</ion-label>
                                        </ion-item>
                                        <ion-item href="/memories-of-momma-3">
                                            <ion-label>Part 3</ion-label>
                                        </ion-item>
                                        <ion-item href="/memories-of-momma-4">
                                            <ion-icon name="chevron-forward-outline" slot="start"></ion-icon>
                                            <ion-label>Part 4</ion-label>
                                        </ion-item>
                                        <ion-item href="/memories-of-momma-5">
                                            <ion-label>Part 5</ion-label>
                                        </ion-item>
                                        <ion-item href="/memories-of-momma-6">
                                            <ion-label>Part 6</ion-label>
                                        </ion-item>
                                    </ion-list>
                                </ion-card-content>
                            </ion-card>

                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}