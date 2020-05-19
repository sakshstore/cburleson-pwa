# Apply Source Code Syntax Highlighting

To apply syntax highlighting of source code examples within content, we use the 
DeckDeckGo Highlight Code web component. To use the component in content, follow 
this general procedure and refer to the Reference Resources for more details.

## Import the component

Atop the page/post type component, add the following import statement:

`import '@deckdeckgo/highlight-code';`

Then, wherever you are writing JSX in the component to `render()` output,
you  can use the `deckgo-highlight-code` component in a manner similar to 
the following:

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

## Escaping JSX

Some characters or character sequences are reserved for JSX, but they can be escaped with 
a back-slash. Here's an example:

```
<deckgo-highlight-code><code slot="code">{`<#assign m = myMap>
<#assign keys = m?keys>
         
<ul>
     <#list keys as key>
     <li>$\{key\}</li>
     </#list>
</ul>`}</code></deckgo-highlight-code>
```

## Commonly Used Attributes

- `line-numbers` : `true` | `false`

## Reference Resources

- [DeckDeckGo Highlight Code Documentation](https://docs.deckdeckgo.com/components/code/)
- [deckdeckgo/webcomponents/highlight-code/](https://github.com/deckgo/deckdeckgo/tree/master/webcomponents/highlight-code) source on GitHub
- [Component Usage Examples](https://github.com/deckgo/deckdeckgo/blob/master/webcomponents/highlight-code/src/index.html)