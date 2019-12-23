Start by getting your ad unit code like this...


Sidebar2 (vertical; long from top to bottom)

```
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Sidebar2 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7370676338719207"
     data-ad-slot="5178955087"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```
\Remove the first line because that is done globally in idex.html. You should then have this left:

```
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7370676338719207"
     data-ad-slot="5178955087"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

Next, remove the last script block. You then have only this:

```
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7370676338719207"
     data-ad-slot="5178955087"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
```

Place that `ins` tag wherever you want the ad to display.

Befoire the page's class derfinition, put this:

```
declare global {
  interface Window { adsbygoogle: any; }
}
```

That extends the window object interface so that you don't get errors about the adsbygoogle namespace.

Finally add this method to the component's page code:

```
  componentDidRender() {
    (this.adsbygoogle = window.adsbygoogle || []).push({});
  }
```