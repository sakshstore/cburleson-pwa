# Hyperlinks

## External hyperlinks

All external hyperlinks must include the `rel="nofollow"`. For example:

```
<a href="http://docs.pixologic.com/user-guide/keyboard-shortcuts/" rel="nofollow">Keyboard Shortcuts</a>
```

## ion-router-link

They seem to be more performant than classic anchor tags:

<ion-router-link href="/cage" routerDirection="forward">The Cage</ion-router-link>