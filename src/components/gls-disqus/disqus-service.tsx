import { DISQUS_SHORTNAME } from '../../helpers/utils';
// import { DISQUS_SHORTNAME } from './disqus.model';


declare global {
    interface Window {
        // disqusLoaded: boolean;
        DISQUS: any;
        disqus_config: any;
    }
}

class DisqusService {

    shortname: string = DISQUS_SHORTNAME;

    get DISQUS(): any {
        // In browsers, document.defaultView returns the window object associated with a document
        return document.defaultView.DISQUS;
    }

    get disqus_config(): any {
        return document.defaultView.disqus_config;
    }

    set disqus_config(config: any) {
        document.defaultView.disqus_config = config;
    }

    //constructor( @Inject(DISQUS_SHORTNAME) public shortname: string, @Inject(DOCUMENT) private _document: any) {
    //}

}

// Singleton. See: https://www.joshmorony.com/using-services-providers-to-share-data-in-a-stencil-js-application/
export const dService = new DisqusService();
