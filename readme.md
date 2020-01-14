# cburleson-pwa

[![Netlify Status](https://api.netlify.com/api/v1/badges/5e6d062e-d4fe-496b-b3c2-978ca2ab080a/deploy-status)](https://app.netlify.com/sites/serene-saha-07d9e0/deploys)

This is the source code for my static Ionic and Stencil.js blog, live at https://codyburleson.com. My goal for the blog has been to see what I can actually accomplish in a static site with no "fad" framework like Angular, React, or Vue. All that is used is standards-compliant web components and small helper libraries. Currently, managing the site is done manually, but I hope to start creating some Node.js scripts to help.

- [Changelog](changelog.md)

## Developer getting started...

To run:

- `npm install` - Run this first to install the dependencies defined in `package,json`
- `npm start` - Starts the development server and runs in dev mode using `global/app-dev.ts` configuration instead of `global/app.ts` config.
- `npm run build` - Builds your components/app for production.
- `npm run prod` -  Builds your components/app for production and runs locally in production mode (for testing prod mode prior to deployment).
- `npm run prod.prerender` - EXPERIMENTAL; builds and runs the app in prod mode, prerendered.
- `npm test` - Starts the test runner.
- `stencil build --prerender` - Prerendering generates static HTML files at build time that can then be served to the browser and asynchronously hydrated on the client-side. See: [Stenil.js Prerendering](https://stenciljs.com/docs/prerendering)

Further reading:
- https://beta.ionicframework.com    

October 4, 2019

Reference: https://ionicframework.com/pwa/toolkit

Features
- Push notifications
- Routing
- Pre-rendering
- Update toasts
- Unit Tests
- Zero-config lazy loading
- Zero-config code splitting
- ES6 by default
- On-demand polyfills
- Lazy image loading
- Add-to-homescreen
- UI Components
- Fast Startup
- Native ES Modules
- CSS Variables
- Shadow DOM

## Deployment

Commits to Github master branch automatically get deployed to netlify, currently at:

https://serene-saha-07d9e0.netlify.com

