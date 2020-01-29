import { Component, h, Prop } from '@stencil/core';
import { isLocal } from '../../helpers/utils';
import { dService } from './disqus-service';

//declare global {
//    interface Window {
//        disqusLoaded: boolean;
//        DISQUS: any;
//    }
//}

// REFERENCE: https://github.com/MurhafSousli/ngx-disqus/blob/master/projects/ngx-disqus/src/lib/disqus.component.ts
// THIS COMPONENT DEPENDS ON STUFF THAT'S IN app-root.tsx!!!
@Component({
    tag: 'gls-disqus',
})
export class GlsDisqus {

    @Prop() identifier: string;
    @Prop() title: string;
    @Prop() category: string;
    @Prop() language: string;
    @Prop() url: string;

    /** DISQUS events */
    // @Output() newComment = new EventEmitter<DisqusComment>(true);
    // @Output() ready = new EventEmitter<DisqusReady>(true);
    // @Output() paginate = new EventEmitter<any>(true);

    render() {
        return (
            <div id="disqus_thread" style={{border:`1px solid red`}}></div>
        );
    }

    componentWillRender() {
      if(isLocal()) {
        console.log('> GlsDisqus.componentWillRender');
      }
    }

    componentDidRender() {
      if(isLocal()) {
        console.log('> GlsDisqus.componentDidRender');
        //console.log('> GlsDisqus.componentDidRender > this.identifier: %s', this.identifier);
        //console.log('> GlsDisqus.componentDidRender > this.title: %s', this.title);
        //console.log('> GlsDisqus.componentDidRender > this.url: %s', this.url);
      }

      /*
      var elem = document.querySelector('#disqus_thread');
      var container = elem.parentNode;
      container.removeChild(elem);

      var div = document.createElement('div');
      div.setAttribute('id', 'disqus_thread');
      container.appendChild(div);
      */

      if (!dService.DISQUS) {
        if(isLocal()) {
          console.log('> GlsDisqus.componentDidRender > adding Disqus script....');
        }
        this.addDisqusScript();
      } else {
        if(isLocal()) {
          console.log('> GlsDisqus.componentDidRender > Disqus script exists; calling reset....');
        }
        this.reset();
      }

    }

    componentWillUpdate() {
      if(isLocal()) {
        console.log('>> GlsDisqus.componentWillUpdate');
      }
    }

    componentDidUpdate() {
      if(isLocal()) {
        console.log('>> GlsDisqus.componentDidUpdate');
      }
    }

    /** Add DISQUS script */
    addDisqusScript() {
        /** Set DISQUS config */
        dService.disqus_config = this.getConfig();
        const disqusScript = document.createElement('script');
        disqusScript.src = `//${dService.shortname}.disqus.com/embed.js`;
        disqusScript.async = true;
        disqusScript.type = 'text/javascript';
        disqusScript.setAttribute('data-timestamp', new Date().getTime().toString());
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(disqusScript);
    }

    /** Reset DISQUS with the new config */
  reset() {
    console.log('>> GlsDisqus.reset()');
    const self = this;
    setTimeout(
      () => {
        console.log('-- GlsDisqus.reset() > Hello after 2 seconds');
        dService.DISQUS.reset({
          reload: true,
          config: self.getConfig()
        });
      },
      2 * 1000
    );
  }

  /** Create DISQUS config from the inputs */
  getConfig() {
    const self = this;
    return function () {
      this.page.identifier = self.identifier;
      this.page.url = self.validateUrl(self.url);
      this.page.title = self.title;
      //this.category_id = self.category;
      //this.language = self.language;

      /* Available callbacks are afterRender, onInit, onNewComment, onPaginate, onReady, preData, preInit, preReset */
      //this.callbacks.onNewComment = [(e) => {
        //self.newComment.emit(e);
      //}];

      //this.callbacks.onReady = [(e) => {
        //self.ready.emit(e);
      //}];

      //this.callbacks.onPaginate = [(e) => {
        //self.paginate.emit(e);
      //}];
    };

  }

  validateUrl(url: string) {
    console.log(">> GlsDisqus.validateUrl('%s')", url);
    /** Validate URL input */
    if (url) {
      const r = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

      if (r.test(url)) {
        return url;
      } else {
        console.warn('[Disqus]: Invalid URL');
      }
    }
    /** DISQUS will fallback to "Window.location.href" when URL is undefined */
    return undefined;
  }
}