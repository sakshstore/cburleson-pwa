# Developer Guidelines

## Before issuing a commit without push to master...

- Run Format Document (Right-click > Format Document or SHIFT + ALT + F) on all changed files to be commited.
- Run `npm start` and do a visual click-through test

## Before issuing a push to master

Pushing to master deploys the app on Netlify. If the build fails on Netlify, it will not deploy, so...

- Run `npm run prod` and spot check everything locally before committing with a push to prod.
- Complete spot check in Chrome, Firefox, and Edge (on PC).
- Change the version number in `package.json`
- Change the `SITEVERSION` const in `src/helpers/utils.ts`
- Make sure to run the `SiteDataMinifier` java app that is in the `platform` java project.

