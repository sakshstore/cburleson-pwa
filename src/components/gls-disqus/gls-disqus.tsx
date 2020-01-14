import { Component, h, Prop } from '@stencil/core';

//declare global {
    //interface Window { adsbygoogle: any; }
//}
declare global {
    interface Window { 
        disqus_config: any;
        DISQUS: any;
    }
}

@Component({
    tag: 'gls-disqus',
})
export class GlsDisqus {

    @Prop() shortname;
    @Prop() pageId;
    @Prop() disable = false;

    disqusLoaded = false;

    //adsbygoogle:any;
    /*
    disqus_config = {
        this.page.identifier = 'create-player-health-status-indicator-for-unity-gui-part-1';
        this.page.url        = 'http://localhost:3333/create-player-health-status-indicator-for-unity-gui-part-1';
        this.page.title      = 'Create a player health status indicator for the Unity GUI';
    }
    */

    disqus_config: any;

    componentDidRender() {
        this.disqus_config = function disqus_config() {
            this.page.identifier = this.pageId;
            this.page.url        = 'https://codyburleson.com/' + this.pageId;
            // this.page.title      = 'Create a player health status indicator for the Unity GUI';
        }
        //(this.adsbygoogle = window.adsbygoogle || []).push({});
        this.disqus_config = window.disqus_config || {};
        // Try also...
        // window.disqus_config = window.disqus_config || {...};
        if( ! this.disable) {
            //console.log('*********** NOT DISABLED ***************');
            this.enableDisqus();
        }
    }

    enableDisqus() {
        let thiz = this;
        if (this.disqusLoaded) {
            window.DISQUS.reset({
                reload: true
            });
        } else {
            (function () {
                var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;                
                dsq.src = 'https://' + thiz.shortname + '.disqus.com/embed.js';
                dsq.setAttribute('data-timestamp', new Date().toString());
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            })();
            this.disqusLoaded = true;
        }
    }

    render() {
        return (
            <div id="disqus_thread"></div>
        );
    }
}