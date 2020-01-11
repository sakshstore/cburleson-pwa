# Embedded video

## YouTube videos

- The whole embed code (iframe element) must be wrapped within the following container: `<div class="video-container">...</div>`.
- The embed code iframe must have the CSS class .video. For example: `<iframe class="video" ...`
- If the attribute, `allowfullscreen` exists on the iframe element, it must be changed to: `allowFullScreen` and just made to standalone with no equals sign and value (e.g. `allowFullScreen>`).
- If the attribute `allow` exists, it must be changed to `data-allow`
- If `allow` is not there, you may add `data-allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"`
- Size attributes should be removed from the iframe so that the video just fills as wide as its parent container.
- The iframe SHOULD contain a `title` attriubute and the title should match the title that is also given to the content of the iframe.

**Example**

```
<div class="video-container">
    <iframe class="video" src="https://www.youtube.com/embed/BTOOJotDnCE" frameborder="0" data-allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>
```