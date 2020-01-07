import { Component, h } from '@stencil/core';

@Component({
    tag: 'gls-gcse-searchbox-only',
    styleUrl: 'gls-gcse-searchbox-only.css'
})
export class GlsGcseSearchboxOnly {

    render() {
        return (
        <ion-toolbar color="medium">
        <div class="pad-lr">
        <script async src="https://cse.google.com/cse.js?cx=partner-pub-7370676338719207:9067256876"></script>
<div class="gcse-searchbox-only" data-resultsUrl="/search"></div></div>
        </ion-toolbar>
        );
    }

}