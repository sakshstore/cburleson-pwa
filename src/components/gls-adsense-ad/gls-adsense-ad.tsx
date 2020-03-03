// import { Component, h, Prop } from '@stencil/core';
import { Component, Prop } from '@stencil/core';
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

    /** Any of horizontal, vertical, rectangle or a comma separated list of multiple (e.g. rectangle, vertical)*/
    @Prop() adFormat: string = "rectangle";

    componentDidRender() {
        
        if( ! isLocal() ) {
            // (this.adsbygoogle = window.adsbygoogle || []).push({});
        }
    
    }

    render() {
        /*
        return (
            <div class="ad-container">
            <ins class="adsbygoogle rightbar-unit"
                data-ad-client="ca-pub-7370676338719207"
                data-ad-slot="5178955087" 
                data-ad-format={this.adFormat}
                data-full-width-responsive="true"></ins>
            </div>
        );
        */
    }
}