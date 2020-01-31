import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-memories-of-momma-5',
})
export class PageMemoriesOfMomma5 {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageMemoriesOfMomma5.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + SITENAME;
        if(this.header.teaser) {
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

                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2019/05/memories-of-momma.jpg" alt="Photos of my mother, Donna Nobles." /></p>

                            <p>I want to tell you about the time my mom went batshit crazy.</p>

                            <p>She was never physically violent with me, but one day after school on a trash day, she lunged at me as soon as I'd turned the corner into the living room. She threw me onto the couch like a rag doll, got both hands choked around my neck and shook me with the ferocity of an an attack dog. My stepdad, Bill, who was usually the aggressive one, had to get her by the leash and pull her off. </p>

                            <p>Well, this wasn't that time. No, that was another thing. Besides, I had it coming. It was like she said (somewhere in between the curse words and behind all that rabbid spittle on my face) - it really SHOULD be simple to remember that trash went out on Mondays and Thursdays. That week, I'd missed them both. I think she was just going for a bit of dramatic effect anyway. It was effective, I'll give her that.</p>

                            <p>It was also not the time she bought me a quartz crystal so that I could amplify the energy from my seven chakra centers. Or twelve. Or whatever. Quartz has the unique ability to absorb negative karma, did you know that? Yes, and evidently, all that bad juju builds up over time, but you can cleanse it if you hold the crystal under running tap water for five minutes. You have to hold it there with a specific hand though - left or right; I don't remember which.</p>

                            <p>No, it wasn't that either. That was just a little weird and Momma was always a little weird. A little weird is good, I think, because it keeps things interesting. She was always interesting, to say the least.</p><p> Mom lunged at me again after some other school day, but this time she grabbed me by the shoulders instead of the neck.</p>

                            <p>"I want you to try this herbal tea I made," she said, with unusual enthusiasm. She took my hand and led me to the kitchen. I tossed my textbook from Science class on the table along the way.</p><p> I watched curiously as she picked up a spoon and stirred greenish water in a sauce pan on the stove.</p>

                            <p>"It has special healing powers," she said. "I made it with medicinal plants and exotic herbs from the garden."</p><p> The air was filled with the smell of East Indian incense that she'd been burning, so I leaned over to get a good whiff of the tea.</p>

                            <p>"Mmmmmm," I said, "That smells... good."</p><p> It smelled like grass, actually. In fact, I thought the little green blades floating in the water looked quite like lawn grass.</p><p> She scooped up a spoonfull and gave me a sip. Yep. Lawn grass it was. Just lawn grass and water.</p>

                            <p>"That IS good,” I lied. ”Very... interesting."</p>

                            <p>Interesting, especially because we didn't have a garden, much less any herbs or medicinal plants. We did have a dog that lived in the backyard though and, of course, he did his business there.</p>

                            <p>When my sister, Dawn, got home, Momma put her through the taste test, which I delightfully assisted. Only, I gave Dawn a nice big cupful of the stuff.</p>

                            <p>"What is that?" she said, "Is that grass?"</p><p> "No, just taste it," I said. "It's really good."</p>

                            <p>Of course, the evil brother in me just wanted to see the expression on her face when she got a throat-full of lawn grass and collie piss. But also, I needed Dawn to confirm what I'd been thinking: Momma was acting a little more than a little weird. This was beyond the usual new age metaphysical business. The way Momma looked, the way she acted, the way she spoke all giddy like a child... something was off. Her chakras were misaligned or whatever.</p>

                            <p>The way Dawn looked at me, I could see that she concurred.</p>

                            <p>That evening after Momma retired to her bedroom, Dawn and I whispered our concerns and then went to our own rooms before my stepdad got home. Then, sometime around 2:00 AM, I was woken by Momma who’d sat on the edge of my bed and was stroking my hair with a wet hand. She’d been sobbing.</p>

                            <p>"Momma, whats wrong?"</p>

                            <p>"I just took a walk up to the church at the top of the hill and when I went inside, I was given a vision," she said.</p>

                            <p>"What church?" </p>

                            <p>There was no church at the top of our hill. There was an old white mansion that always reminded me of a Southern plantation home, but definitely no church. No church for miles.</p>

                            <p>"You know," she said. "The one with the big swinging doors and the lion knockers. The doors were unlocked, so I went inside. "</p><p> "Wait. What? You went inside?"</p>

                            <p>"Yes, and I was heading up to the alter to pray when I felt something under my feet."</p>

                            <p>When she looked down at her feet, she told me, she noticed that she'd been walking on human bones. Hundreds of thousands of human bones. The dead were in the aisle, in between the pews - everywhere. </p><p> “And then the wall behind the place for the choir fell away, but the big crucifix remained there floating in the air.”</p>

                            <p>Blood red clouds. Crowds of anguished souls for as far as the horizon. Something like one of the circles of hell from Dante’s Inferno.</p>

                            <p>As she was describing all of this in explicit detail, I was trying to remember whether or not the house at the top of the hill had double doors like she'd described. Had Momma just broken into someone's home? Had she been zombying around downstairs while someone upstairs tried frantically to wake her husband?</p>

                            <p>I imagined some terrified old lady in a nightgown. “Get the shotgun, Joe, there’s someone downstairs!”</p>

                            <p>" ... and then the clouds opened up and I saw Jesus there," Momma continued, "He opened his arms and then I knew..."</p><p> She looked off into space as if she were still having the vision right then and there.</p>

                            <p>"You knew what, Mom?"</p>

                            <p>"I knew everything was going to be okay," she said. She kissed me on the forehead. "Everything is going to be okay."</p>

                            <p>The next day, it was me who did the lunging as my stepdad entered the living room. I told him about Mom's vision at the so-called church at the top of the hill. I told him about the lawn-grass tea. I told him about the size of mom’s pupils and the sweat on her face.</p>

                            <p>He paused only for a minute to think and then went straight to the bedroom where Momma kept the tray of drugs on her dresser. He re-emerged with a handful of amber colored bottles and rushed to the kitchen.  He picked up the telephone, called the doctor, and then read from each label, one by one.</p>

                            <p>As he paced around nervously waiting for a callback, I told him of several other strange things Mom had done that week.</p>

                            <p>"Strange," I said, "even for Momma."</p>

                            <p>When the phone rang, Dad grabbed it quickly and then sat down for the doctor's report.</p>

                            <p>As it turns out, unbeknownst to the doctor on the phone, Mom had been mixing doctors and drugs. Two of the drugs, prescribed by two different doctors, had been well-known to cause intense hallucinations when crossed.</p>

                            <p>Somewhere in the fine print of some piece of paper that Momma never read was a clinical trials report the doctor explained to Dad. Do not take THIS if you are also taking THAT.</p>

                            <p>At the doctor's instruction, Dad flushed one of the prescriptions down the toilet and a couple of days later, all the bats were clear from the belfry. Momma was back on planet earth. She was back to being just a little weird, which for Momma, was normal and for the rest of us, comfortable and good.</p>

                            <p>I got a zero for missing my homework on Science that week, but I learned a little lesson about chemistry, nevertheless.</p>

                            <p><ion-button color="primary" routerDirection="back" href="/memories-of-momma-4">&lt;&lt; Previous: Part 4</ion-button> <ion-button color="primary" routerDirection="forward" href="/memories-of-momma-6">Next: Part 6 &gt;&gt;</ion-button></p>
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