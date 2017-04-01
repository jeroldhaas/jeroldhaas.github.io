# Markdown Test File

This is a test file for conversion from markdown to html content files. A
master template file will handle the outer wrapping, but these files
will handle the inner content


## Tests

These separate sections should test various aspects of markdown.

### Default Formatting Tests

Font styles such as **bold text**, *italic text*, etc. ...

> quoted text

![example image](content/images/bkg.png)

- first
- second
- third

1. first
2. second
3. third

__broken__

- [ ] tickbox one
- [ ] tickbox two
- [ ] tickbox three

```
let github_codeblock = false
type WhyIsItSometimesWorking () =
    member x.Reason = None
    member x.Cause = Some "mystery"
```

----------

### Code Tests

Github-style code blocks won't work with the default dialect: indentation will.

    let foo = 1.2f

    type DiscUnion =
        | Success of Choice1Of2 * result
        | Failure of Choice2Of2 * errorMessage
        | Unkown of mysteryValueReason


The above, hopefully, will display formatted (further testing will 
demonstrate success). It seems that indentation-style code blocks
are a little more reliable than the triple-backtick style - not
sure why yet. Inline examples, such as `let foo = "test"`
will exemplify itself.

### Emoji Conversion / Graceful Handling

I'm not sure if the `markdown` library can gracefully handle emoji characters
or not, so I'll include a few in this paragraph just in case there's an issue
with doing so: \u231B 
