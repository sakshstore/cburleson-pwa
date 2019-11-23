
Copy the YouTube iframe embed snippet from the YouTube website's share feature.

Wrap the whole embed code in the following container...

```
<div class="video-container">

</div>
```

Put `class="video"` on the iframe....

`<iframe class="video" ...`

Make the following changes to the iframe attributes...

- `allowfullscreen` to: `allowFullScreen`
- `allow` to: `data-allow`

If allow is not there, you can add this:

`data-allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"`

Examples:

```
<iframe class="video" src="https://www.youtube.com/embed/BTOOJotDnCE" frameborder="0" data-allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
```