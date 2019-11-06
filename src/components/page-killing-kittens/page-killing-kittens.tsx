import { Component, h } from '@stencil/core';

@Component({
    tag: 'page-killing-kittens',
})
export class AppTemplatePage {

    title = 'Killing Kittens';

    componentWillLoad() {
        document.title = this.title;
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

            <ion-content>
                <ion-grid fixed>
                    <ion-row>
                        <ion-col size-xs="12" size-sm="12" size-md="12" size-lg="12" size-xl="12">

                            <h1>{this.title}</h1>

<p>Think back as far as you can possibly remember. All the way back to your very first memory. I bet it’s somewhat unusual. At least for a child.</p>

<p>According to science, our brains don’t keep what’s mundane. It keeps the stuff that’s surprising and unusual. We tend to forget all the ordinary days and we remember what’s extraordinary or out of the ordinary.</p>

<p>So, I guess my life was pretty ordinary up until the day my mother came out of the bedroom with a thirty-five caliber revolver in her hand.</p>

<p>The memory is in black and white and a bit fuzzy. Kind of like the Saturday morning cartoons my sister and I were watching on a piece-of-shit TV. You know, the kind with a cathode ray tube and a UHF dial. Rabbit ear antenna with a flag of tin foil hangin’ off the bent side.</p>

<p>My legs are so small that my untied sneakers barely reach the edge of the couch cushion. I have to crawl over to plant them on the white linoleum floor below. This must be the me with the bleach-blonde hair. The one that wore a plastic cap gun on his hip in the old photo. No shirt. Barely out of diapers.</p>

<p>“Mom,” my bigger sister exclaims. “What are you doing?”</p>

<p>Mom turns the cylinder on the revolver – checking the brass in each chamber.</p>

<p>“Nothing,” she says. “Stay inside.”</p>

<p>And then she walks out into the back yard and the screen door slams behind her. My sister looks at me quizzically – her eyes wide and blinking like Wile E. Coyote after an ACME TNT blast.</p>

<p>She jumps off the couch and darts after Mom into the back yard. I can hear the Road Runner BEEP BEEP as I crawl over the edge of the couch to follow.</p>

<p>Just outside in the dirt and the shade in the corner where the concrete of the back porch meets the house lies our momma cat. There’s a sticky wet mess of material hanging out of her tail end. It reminds me of the liver we use to catch catfish – the same stuff Mom batters like chicken and fries with onions. All slimy and bloody.</p>

<p>“What is that?” My sister asks.</p>

<p>“That’s her placenta,” Mom says. “It’s the sack that her babies were inside of. Inside of her tummy.”</p>

<p>“She’s eating it,” my sister says. “Is she alright?”</p>

<p>“I think so,” Mom says. “But the babies are premature. They won’t survive.”</p>

<p>I’d been so preoccupied by the momma cat licking and chewing on the mess beneath her tail that I hadn’t yet noticed the tiny little creatures squirming around in it. They didn’t look like the kittens I’d hoped for. No furry hair. Not even wet hair. No hair at all. Big skin-coated bulbs on their tiny little heads where their eyes were forming.</p>

<p>“Mom,” my sister whispers, watching the pistol in her hand. “What are you going to do?”</p>

<p>“They’re dying,” she says. “I’ve got to put them out of their misery.”</p>

<p>“Are you going to shoot them? Momma?”</p>

<p>She looked at both of us and we could see the sorrow in her eyes. Then she just stared out a across the yard for a while. And then down at the pistol in her hand.</p>

<p>“Kids,” she said firmly. “Go back inside.”</p>

<p>***</p>

<p>I’d like to say that I sat on the couch and listened to that gun fire. Hands pressed against my ears – my tiny little shoulders jumping with each thundering crack. That would be a nice dramatic touch to the story, but it wouldn’t be true.</p>

<p>Truth is, I don’t remember hearing her shooting that gun and I can’t be sure she ever did. Perhaps she drowned those kittens. Maybe she buried them alive. Or maybe she just sat there on the back porch with momma cat and let nature take its course.</p>

                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-content>

        ];
    }
}