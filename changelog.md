# Changelog
All notable changes to this project will be documented in this file.

The format is loosely based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [unreleased]

- **Added** [#57](https://github.com/codyburleson/cburleson-pwa/issues/57) Page: are-mashups-the-new-portals-and-gadgets-the-new-portlets
- **Added** [#58](https://github.com/codyburleson/cburleson-pwa/issues/58) Page: avoid-tracking-ga-page-views-in-atlassian-confluence
- **Added** [#59](https://github.com/codyburleson/cburleson-pwa/issues/59) Page: awesome-power-of-the-link-in-linked-data
- **Added** [#60](https://github.com/codyburleson/cburleson-pwa/issues/60) Page: base22-consultants-creed
- **Added** [#67](https://github.com/codyburleson/cburleson-pwa/issues/67) Page: eclipse-tip-format-source-code-on-save
- **Added** [#61](https://github.com/codyburleson/cburleson-pwa/issues/61) Page: better-error-messages-from-gulp-using-gulp-util
- **Added** [#62](https://github.com/codyburleson/cburleson-pwa/issues/62) Page: binding-to-a-zsphere-armature
- **Added** Page: user-impersonation-programming-in-websphere-portal
- **Added** [#63](https://github.com/codyburleson/cburleson-pwa/issues/63) Page: book-review-more-than-everything-by-vanessa-foster

## [1.1.3] - 2019-12-26

- **Added** [#66](https://github.com/codyburleson/cburleson-pwa/issues/66) Pages: memories-of-momma-1 through 6

## [1.1.2] - 2019-12-25

- **Added** [#49](https://github.com/codyburleson/cburleson-pwa/issues/49) Page: access-the-was-console-from-websphere-portal-server
- **Added** [#45](https://github.com/codyburleson/cburleson-pwa/issues/45) Page: resolving-404-errors-accessing-wcm-content-through-poc-servlet
- **Added** [#44](https://github.com/codyburleson/cburleson-pwa/issues/44) Page: notes-on-zbrush-slicecurve-brush/
- **Added** [#38](https://github.com/codyburleson/cburleson-pwa/issues/38) Page from legacy site: identifying-large-object...uming-memory-in-java-heap
- **Added** [#37](https://github.com/codyburleson/cburleson-pwa/issues/37) Page from legacy blog: about-zsphere-smoothing-brushes
- **Added** [#55](https://github.com/codyburleson/cburleson-pwa/issues/55) Page: about-polygroups-in-zbrush
- **Added** [#56](https://github.com/codyburleson/cburleson-pwa/issues/56) Page: a-look-at-sparql-sql-for-semantic-web
- **Changed** `app-root.tsx` routing code; simplified how it handles Page Not Found cases based on the `<ion-route url=":any" component="app-404"/>` solution suggested [here](https://github.com/ionic-team/ionic/issues/18687).
- **Changed** Google Analytics code so that it does not track when running in prod mode on localhost.
- **Removed** unused `app-root.css` file and reference

## [1.1.1] - 2019-12-25

- **Added** `robots.txt` file allowing all agents to crawl all resources, and pointing to the `sitemap.txt` file.
- **Added** 3 `<link rel="preconnect" href="..."/>` tags based on performance improvement suggestion from Lighthouse.
- **Changed** About page: Next to site version number, added a link to this changelog on Github.
- **Fixed** [#54](https://github.com/codyburleson/cburleson-pwa/issues/54) - URLs that end with fwd slash load appropriate page, but do not render

## [1.1.0] - 2019-12-24

- **Added** New Node.js script, `appGenSitemap.js` generates sitemap.txt file from `src/assets/data/site-data.json` file. `stencil.config.ts` is configured to copy the generated txt file into the `www` deployment folder.
- **Added** Pages from legacy WordPress blog: 
    - `notes-on-zbrush-sculptris-pro`
    - `accessing-the-authentica...r-from-a-separate-web-app`
- **Changed** Defer offscreen images (based on Lighthouse performance test); changed some uses of `img` to `ion-img`, which defers offscreen images.
- **Fixed** [#50](https://github.com/codyburleson/cburleson-pwa/issues/50) Create a sitemap.xml (or other format) for Google

## [1.0.2] - 2019-12-22

- **Added** pages from legacy WordPress site: 
    - `display-user-attributes-in-a-websphere-portal-theme`
    - `how-to-check-user-access-role-in-a-websphere-portal-theme`

- **Changed** For testing purposes, added Google Adsense ad spot to single existing page, `zbrush-keyboard-shortcuts`; seems to work.

## [1.0.1] - 2019-12-20

- **Added** Pages from legacy WordPress site: 
    - `story-structure-diagram`
    - `show-both-sides-of-a-plane-in-zbrush`
    - `glossary-of-ldap-acronyms-and-terms`

## [1.0.0] - 2019-12-19

Initial release. A working static site built with Ionic 4 and Stencil.js. It has three main sections: Blog, Books, and About. It has several blog posts and pages which were carried over from my legacy WordPress blog.

