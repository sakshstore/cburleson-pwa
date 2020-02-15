import { Component, h } from '@stencil/core';
import { isLocal } from '../../helpers/utils';

declare global {
    interface Window { adsbygoogle: any; }
}

@Component({
    tag: 'gls-adsense-ad',
    styleUrl: 'gls-adsense-ad.css'
})
export class GlsAdsenseAd {

    adsbygoogle:any;

    componentDidRender() {
        if( ! isLocal() ) {
            (this.adsbygoogle = window.adsbygoogle || []).push({});
        }
    }

    render() {
        return (
            <div class="ad-container">
                <p>MOJO</p>
            <ins class="adsbygoogle"
                style={{ display: `block` }}
                data-ad-client="ca-pub-7370676338719207"
                data-ad-slot="5178955087"></ins>
            </div>
        );
    }
}