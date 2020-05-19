
- Documentation: https://docs.deckdeckgo.com/components/code/
- Source code repository: https://github.com/deckgo/deckdeckgo/tree/master/webcomponents/highlight-code
- Some usage examples: https://github.com/deckgo/deckdeckgo/blob/master/webcomponents/highlight-code/src/index.html

Simple in-component example:

```
<deckgo-highlight-code language="html">
<code slot="code">
{`<tr *ngFor="#item of data">
     <td><a href="#">{{ item.invoiceNo }}</a></td>
     <td>{{ item.invoiceDate }}</td>
     <td>{{ item.invoiceStatus }}</td>
     <td class="right aligned">{{ item.invoiceTotal | currency:'USD':true:'1.2-2' }}</td>
</tr>`}
</code>
</deckgo-highlight-code>
```

Here's a template you can copy/paste:

```
<deckgo-highlight-code language=""><code slot="code">{``}</code></deckgo-highlight-code>
```