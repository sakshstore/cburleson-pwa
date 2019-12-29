import { Component, h } from '@stencil/core';

declare global {
    interface Window { adsbygoogle: any; }
}

@Component({
    tag: 'gls-adsense-ad',
})
export class GlsAdsenseAd {

    adsbygoogle:any;

    // Indicate that name should be a public property on the component
    // @Prop() name: string;

    componentWillRender() {
        (this.adsbygoogle = window.adsbygoogle || []).push({});
    }

    /*
    componentDidRender() {
        (this.adsbygoogle = window.adsbygoogle || []).push({});
    }
    */

    render() {
        return (
            <ins class="adsbygoogle"
                style={{ display: `block` }}
                data-ad-client="ca-pub-7370676338719207"
                data-ad-slot="5178955087"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
        );
    }
}