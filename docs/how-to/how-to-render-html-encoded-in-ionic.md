# How to render HTML encoded in Ionic

Use the innerHTML attribute. Instead of this, for example:

`<p>{item.teaser}</p>`

Use this:

`<p innerHTML={item.teaser}></p>`

