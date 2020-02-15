import { Component, h } from '@stencil/core';
import { isLocal } from '../../helpers/utils';

declare global {
    interface Window { adsbygoogle: any; }
}

@Component({
    tag: 'gls-adsense-ad'
})
export class GlsAdsenseAd {

    adsbygoogle:any;

    componentDidRender() {
        if( ! isLocal() ) {
            window.onload = function() {
                (this.adsbygoogle = window.adsbygoogle || []).push({});
            }
        }
    }

    render() {
        return (
            <div class="ad-container">
            <ins class="adsbygoogle rightbar-unit"
                data-ad-client="ca-pub-7370676338719207"
                data-ad-slot="5178955087" 
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            </div>
        );
    }
}