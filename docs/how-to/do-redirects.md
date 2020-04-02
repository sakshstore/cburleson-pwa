# How to do redirects

Redirects are defined in `netlify.toml`

## Redirect for Single Page Applications (SPAs)
Another common use case for having redirects with an explicit status code in Netlify is in enabling history pushstate for clean URLs in single page applications (SPAs). In a setup without redirects, a url like, outrageous-penguin.netlify.com/about is routed to a 404: Not Found error page on page refresh. In a SPA, routes are client side rendered, meaning that route changes only correspond to changes in page content. Without an explicit redirect, the Netlify bots assume you’re requesting a page separate from /index.html and since that page doesn’t actually exist, it returns an error. To enable clean URLs in your Netlify deployed SPAs, add the following rule to your redirects file.

`/* /index.html 200`
