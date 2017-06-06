# lib-ass

Use Agile Semantics Syntax (ASS) to describe and parse any syntax in a convenient nested structure.

ASS originated from [language-markdown](https://atom.io/packages/language-markdown/) as a solution to make the automated testing of language-packs less dependent on Jasmine, increase speed and flexibility in writing tests, and simply less tedious.

**Notes**
- The file format is not final yet
- Syntax highlighting isn't final either

## What can I do with ASS?

`.ass` is a simple file format, in which you specify some input, and an expected (nested) output. The `ASS` class can then parse this file, and present `ASStest` objects which you can easily integrate into your automated testing workflow.

### The .ass file-format

The structure of an `.ass` file is kept as simple as possible. Not really, but it is quite simple. It looks a bit as the love-child of `json` and `css`. I think that's because the concept of nesting came from css, and it eventually becomes a json object.

Anyway, I think an example and its result should be enough to give you an idea of how it all works. Because ASS can be used to describe any syntax (I think), the example below uses a simple English sentence. I hope I got the names for the grammatical stuff right.

If you install [language-ass](https://atom.io/packages/language-ass) you'll get nice syntax highlighting as a bonus!

```ass
# Comments are optional, and can only start a the beginning of a line.
# The @id below is optional too.

@sentence
"This is a sentence." {
  english.text {
    sentence {
      "This": subject
      " "
      "is": verb
      " "
      object {
        "a": article
        " "
        "sentence": noun
      }
      ".": punctuation
    }
  }
}
```

turns into an `ASStest` json object, which looks something like

```json
{
  "id": "example",
  "input": "This is a sentence.",
  "tokens": [
    {
      "scopes": ["english.text", "sentence", "subject"],
      "value": "This"
    },
    {
      "scopes": ["english.text", "sentence"],
      "value": " "
    },
    {
      "scopes": ["english.text", "sentence", "verb"],
      "value": "is"
    },
    {
      "scopes": ["english.text", "sentence"],
      "value": " "
    },
    {
      "scopes": ["english.text", "sentence", "object", "article"],
      "value": "a"
    },
    {
      "scopes": ["english.text", "sentence", "object"],
      "value": " "
    },
    {
      "scopes": ["english.text", "sentence", "object", "noun"],
      "value": "sentence"
    },
    {
      "scopes": ["english.text", "sentence", "punctuation"],
      "value": "."
    }
  ]
}
```

#### Another example

Something a bit more programmy, something that is actually used at this moment, is the following description of a bit of `Markdown` which intentionally shows how to deal with multiple lines as input as well.

```ass
"- alpha"+
"- beta"+
"- gamma" {
  text.md {
    unordered.list.markup.md {
      "-": punctuation.md
      " "
      "alpha"
      "-": punctuation.md
      " "
      "beta"
      "-": punctuation.md
      " "
      "gamma"
    }
  }
}
```

and the accompanying json

```json
{
  "id": 0,
  "input": "- alpha\n- beta\n- gamma",
  "tokens": [
    {
      "scopes": ["text.md", "unordered.list.markup.md", "punctuation.md"],
      "value": "-"
    },
    {
      "scopes": ["text.md", "unordered.list.markup.md"],
      "value": " "
    },
    {
      "scopes": ["text.md", "unordered.list.markup.md"],
      "value": "alpha"
    },
    {
      "scopes": ["text.md", "unordered.list.markup.md", "punctuation.md"],
      "value": "-"
    },
    {
      "scopes": ["text.md", "unordered.list.markup.md"],
      "value": " "
    },
    {
      "scopes": ["text.md", "unordered.list.markup.md"],
      "value": "beta"
    },
    {
      "scopes": ["text.md", "unordered.list.markup.md", "punctuation.md"],
      "value": "-"
    },
    {
      "scopes": ["text.md", "unordered.list.markup.md"],
      "value": " "
    },
    {
      "scopes": ["text.md", "unordered.list.markup.md"],
      "value": "gamma"
    }
  ]
}
```
