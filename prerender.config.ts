// Documentation: https://stenciljs.com/docs/prerender-config

import { PrerenderConfig } from '@stencil/core';

const fs = require('fs');

console.log('\n>> prerender.config.ts\n');

let siteData: any = [];

export const config: PrerenderConfig = {

    entryUrls : ['/', '/cage/beaver-cage-command-chron'],

    // For each given page, you can return different individual page hydrate options...
    hydrateOptions(url) {
        console.log('>> prerender.config.ts.hydrateOptions(url) > url: %s', url);
        return {
            prettyHtml: true
        };

    }

};
