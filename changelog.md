# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.0] - 2019-12-24

### Added

- New Node.js script, `appGenSitemap.js` generates sitemap.txt file from `src/assets/data/site-data.json` file. `stencil.config.ts` is configured to copy the generated txt file into the `www` deployment folder.
- Page from legacy WordPress blog: `notes-on-zbrush-sculptris-pro`

### Changed

- Defer offscreen images (based on Lighthouse performance test); changed some uses of `img` to `ion-img`, which defers offscreen images.

### Fixed

- [#50](https://github.com/codyburleson/cburleson-pwa/issues/50) Create a sitemap.xml (or other format) for Google

## [1.0.2] - 2019-12-22

### Added

- Pages from legacy WordPress site: 
    - `display-user-attributes-in-a-websphere-portal-theme`
    - `how-to-check-user-access-role-in-a-websphere-portal-theme`

### Changed

- For testing purposes, added Google Adsense ad spot to single existing page, `zbrush-keyboard-shortcuts`; seems to work.

## [1.0.1] - 2019-12-20

### Added

- Pages from legacy WordPress site: 
    - `story-structure-diagram`
    - `show-both-sides-of-a-plane-in-zbrush`
    - `glossary-of-ldap-acronyms-and-terms`

## [1.0.0] - 2019-12-19

Initial release. A working static site built with Ionic 4 and Stencil.js. It has three main sections: Blog, Books, and About. It has several blog posts and pages which were carried over from my legacy WordPress blog.

