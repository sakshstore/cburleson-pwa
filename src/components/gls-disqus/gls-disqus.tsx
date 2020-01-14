import { Component, h, Prop } from '@stencil/core';

declare global {
    interface Window {
        disqusLoaded:boolean;
        DISQUS: any;
    }
}

// THIS COMPONENT DEPENDS ON STUFF THAT'S IN app-root.tsx!!!
@Component({
    tag: 'gls-disqus',
})
export class GlsDisqus {

    @Prop() shortname;
    @Prop() disable = false;

    componentDidRender() {
        console.log('> GlsDisqus.componentDidRender');
        if(! this.disable) {
            this.enableDisqus();
        }
    }

    enableDisqus() {
        let thiz = this;
        if (window.disqusLoaded) {
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
            window.disqusLoaded = true;
        }
    }

    render() {
        return (
            <div id="disqus_thread"></div>
        );
    }
}