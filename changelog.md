# Changelog
All notable changes to this project will be documented in this file.

The format is loosely based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- **Added** New content: [/delete-node-modules-folder-on-windows](https://codyburleson.com/delete-node-modules-folder-on-windows)
- **Added** Pages from legacy WordPress blog:
    - [/classnotfound-does-not-always-mean-class-not-found](https://codyburleson.com/classnotfound-does-not-always-mean-class-not-found)
    - [/musing-on-nostalgia](https://codyburleson.com/musing-on-nostalgia)
    - [/how-to-adjust-zsphere-sketch-depth-in-zbrush](https://codyburleson.com/how-to-adjust-zsphere-sketch-depth-in-zbrush)
    - [/trim-fat-from-your-content](https://codyburleson.com/trim-fat-from-your-content)
    - [/ldap-error-codes](https://codyburleson.com/ldap-error-codes)
    

## [1.2.6] - 2019-12-30

- **Added** Pages from legacy WordPress blog: 
    - [/build-a-rendering-plugin-ibm-wcm-part-1](https://codyburleson.com/build-a-rendering-plugin-ibm-wcm-part-1)
    - [/build-a-rendering-plugin-ibm-wcm-part-2](https://codyburleson.com/build-a-rendering-plugin-ibm-wcm-part-2)
    - [/use-spring-for-stardog-in-a-spring-boot-application](https://codyburleson.com/use-spring-for-stardog-in-a-spring-boot-application)
    - [/i-dare-you-to-touch-her](https://codyburleson.com/i-dare-you-to-touch-her)
- **Fixes** [#53](https://github.com/codyburleson/cburleson-pwa/issues/53) Create component for adsense and apply to all pages.

## [1.2.5] - 2019-12-29

- **Modified** new `gls-adsense-ad` component for testing on page [/automatically-build-and-include-one-eclipse-project-into-another](https://codyburleson.com/automatically-build-and-include-one-eclipse-project-into-another); attempt using `componentWillRender` did not work. This is a production test of `componentDidRender`.

## [1.2.4] - 2019-12-29

- **Added** new `gls-adsense-ad` component for testing on page [/automatically-build-and-include-one-eclipse-project-into-another](https://codyburleson.com/automatically-build-and-include-one-eclipse-project-into-another)
- **Added** Page from legacy WordPress blog: [/vs-code-cheat-sheet](https://codyburleson.com//vs-code-cheat-sheet)

## [1.1.4] - 2019-12-28

- **Added** Pages from my legacy WordPress blog...
    - [/are-mashups-the-new-portals-and-gadgets-the-new-portlets](https://codyburleson.com/are-mashups-the-new-portals-and-gadgets-the-new-portlets)
    - [/avoid-tracking-ga-page-views-in-atlassian-confluence](https://codyburleson.com/avoid-tracking-ga-page-views-in-atlassian-confluence)
    - [/awesome-power-of-the-link-in-linked-data](https://codyburleson.com/awesome-power-of-the-link-in-linked-data)
    - [/base22-consultants-creed](https://codyburleson.com/base22-consultants-creed)
    - [/eclipse-tip-format-source-code-on-save](https://codyburleson.com/eclipse-tip-format-source-code-on-save)
    - [/better-error-messages-from-gulp-using-gulp-util](https://codyburleson.com/better-error-messages-from-gulp-using-gulp-util)
    - [/binding-to-a-zsphere-armature](https://codyburleson.com/binding-to-a-zsphere-armature)
    - [/user-impersonation-programming-in-websphere-portal](https://codyburleson.com/user-impersonation-programming-in-websphere-portal)
    - [/book-review-more-than-everything-by-vanessa-foster](https://codyburleson.com/book-review-more-than-everything-by-vanessa-foster)

## [1.1.3] - 2019-12-26

- **Added** Pages from my legacy WordPress blog:
    - [/memories-of-momma-1](https://codyburleson.com/memories-of-momma-1)
    - [/memories-of-momma-2](https://codyburleson.com/memories-of-momma-2)
    - [/memories-of-momma-3](https://codyburleson.com/memories-of-momma-3)
    - [/memories-of-momma-4](https://codyburleson.com/memories-of-momma-4)
    - [/memories-of-momma-5](https://codyburleson.com/memories-of-momma-5)
    - [/memories-of-momma-6](https://codyburleson.com/memories-of-momma-6)

## [1.1.2] - 2019-12-25

- **Added** Pages from my legacy WordPress blog...
    - [/access-the-was-console-from-websphere-portal-server](https://codyburleson.com/access-the-was-console-from-websphere-portal-server)
    - [/resolving-404-errors-accessing-wcm-content-through-poc-servlet](https://codyburleson.com/resolving-404-errors-accessing-wcm-content-through-poc-servlet)
    - [/notes-on-zbrush-slicecurve-brush](https://codyburleson.com/notes-on-zbrush-slicecurve-brush)
    - [/identifying-large-object...uming-memory-in-java-heap](https://codyburleson.com/identifying-large-objects-consuming-memory-in-java-heap)
    - [/about-zsphere-smoothing-brushes](https://codyburleson.com/about-zsphere-smoothing-brushes)
    - [/about-polygroups-in-zbrush](https://codyburleson.com/about-polygroups-in-zbrush)
    - [/a-look-at-sparql-sql-for-semantic-web](https://codyburleson.com/a-look-at-sparql-sql-for-semantic-web)
- **Changed** `app-root.tsx` routing code; simplified how it handles Page Not Found cases based on the `<ion-route url=":any" component="app-404"/>` solution suggested [here](https://github.com/ionic-team/ionic/issues/18687).
- **Changed** Google Analytics code so that it does not track when running in prod mode on localhost.
- **Removed** unused `app-root.css` file and reference

## [1.1.1] - 2019-12-25

- **Added** `robots.txt` file allowing all agents to crawl all resources, and pointing to the `sitemap.txt` file.
- **Added** 3 `<link rel="preconnect" href="..."/>` tags based on performance improvement suggestion from Lighthouse.
- **Changed** About page: Next to site version number, added a link to this changelog on Github.
- **Fixed** [#54](https://github.com/codyburleson/cburleson-pwa/issues/54) - URLs that end with fwd slash load appropriate page, but do not render

## [1.1.0] - 2019-12-24

- **Added** new Node.js script, `appGenSitemap.js` generates sitemap.txt file from `src/assets/data/site-data.json` file. `stencil.config.ts` is configured to copy the generated txt file into the `www` deployment folder.
- **Added** Pages from legacy WordPress blog: 
    - [/notes-on-zbrush-sculptris-pro](https://codyburleson.com/notes-on-zbrush-sculptris-pro)
    - [/accessing-the-authentica...r-from-a-separate-web-app](https://codyburleson.com/accessing-the-authenticated-websphere-portal-user-from-a-separate-web-app)
- **Changed** Defer offscreen images (based on Lighthouse performance test); changed some uses of `img` to `ion-img`, which defers offscreen images.
- **Fixed** [#50](https://github.com/codyburleson/cburleson-pwa/issues/50) Create a sitemap.xml (or other format) for Google

## [1.0.2] - 2019-12-22

- **Added** pages from legacy WordPress site: 
    - [/display-user-attributes-in-a-websphere-portal-theme](https://codyburleson.com/display-user-attributes-in-a-websphere-portal-theme)
    - [/how-to-check-user-access-role-in-a-websphere-portal-theme](https://codyburleson.com/how-to-check-user-access-role-in-a-websphere-portal-theme)

- **Changed** For testing purposes, added Google Adsense ad spot to single existing page, `zbrush-keyboard-shortcuts`; seems to work.

## [1.0.1] - 2019-12-20

- **Added** pages from legacy WordPress site: 
    - [/story-structure-diagram](https://codyburleson.com/story-structure-diagram)
    - [/show-both-sides-of-a-plane-in-zbrush](https://codyburleson.com/show-both-sides-of-a-plane-in-zbrush)
    - [/glossary-of-ldap-acronyms-and-terms](https://codyburleson.com/glossary-of-ldap-acronyms-and-terms)

## [1.0.0] - 2019-12-19

Initial release. A working static site built with Ionic 4 and Stencil.js. It has three main sections: Blog, Books, and About. It has several blog posts and pages which were carried over from my legacy WordPress blog.

