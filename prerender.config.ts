// Documentation: https://stenciljs.com/docs/prerender-config

import { PrerenderConfig } from '@stencil/core';

console.log('\n>> prerender.config.ts\n');

export const config: PrerenderConfig = {
    hydrateOptions(url) {
        console.log('>> prerender.config.ts.hydrateOptions(url) > url: %s', url);
        return {
            prettyHtml: true
        };
    }
};
