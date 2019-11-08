import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  outputTargets: [{
    type: 'www',
    serviceWorker: null
  }],
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css',
  copy: [{
    src: '../node_modules/prismjs/themes/prism-okaidia.css',
    dest: 'assets/prismjs/prism.css'
  }]
};
