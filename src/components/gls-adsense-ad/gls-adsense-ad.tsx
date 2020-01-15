import { Component, h } from '@stencil/core';
import { isLocal } from '../../helpers/utils';

declare global {
    interface Window { adsbygoogle: any; }
}

@Component({
    tag: 'gls-adsense-ad',
})
export class GlsAdsenseAd {

    adsbygoogle:any;

    componentWillRender() {
        if( ! isLocal ) {
            this.injectScriptIntoHead();
            (this.adsbygoogle = window.adsbygoogle || []).push({});
        }
    }

    injectScriptIntoHead() {
        var scriptElm = document.createElement('script'); scriptElm.type = 'text/javascript'; scriptElm.async = true;
        scriptElm.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        scriptElm.setAttribute('data-ad-client', 'ca-pub-7370676338719207');
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(scriptElm);
    }

    render() {
        return (
            <div>
            <ins class="adsbygoogle"
                style={{ display: `block` }}
                data-ad-client="ca-pub-7370676338719207"
                data-ad-slot="5178955087"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            </div>
        );
    }
}