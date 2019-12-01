Use:

http://static.decontextualize.com/lines-to-json/


Then wrap it all with:

```
{
    "body": [
        // paste result here; an array of lines [...]
    ]
}
```

Be sure to test that embedded images are fluid (for mobile)! In some cases, you just need to remove the width and height.
And put class="img-fluid" on the images; in JSON converted, that's...

```
class=\"img-fluid\"
```

