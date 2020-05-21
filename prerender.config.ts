// Documentation: https://stenciljs.com/docs/prerender-config

import { PrerenderConfig } from '@stencil/core';

const fs = require('fs');

console.log('\n>> prerender.config.ts\n');

let siteData: any = [];

export const config: PrerenderConfig = {    
    //crawlUrls: false,
    entryUrls: [
        '/'
        // '/blog',
        // '/books',
        // '/about',
        // '/contact',
        // '/cage',
        // '/cage/beaver-cage-command-chron'
        // To restore to last testing state:
        // uncomment crawlUrls: false line
        // leave '/blog', commented out
        // uncomment the rest to restore last test state.
        // set prettyHtml: back to true
        // Don't forget when testing again that URLs ending in fwd slash may be where we need to go too!
    ],

    // For each given page, you can return different individual page hydrate options...
    hydrateOptions(url) {
        console.log('>> prerender.config.ts.hydrateOptions(url) > url: %s', url);
        return {
            prettyHtml: false
        };

    }

};
