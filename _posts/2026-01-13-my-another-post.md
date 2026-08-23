---
date: 2026-01-13
generator: intaglio
layout: post
share: true
title: This is another post
---

The [first post]({{ site.baseurl }}{% link _posts/2026-01-13-my-main-post.md %}) shows what gets converted. This one shows the harder half: text that *looks* convertible and must be left completely alone.

Everything below reached this page byte-for-byte as it was typed. If any of it had been processed, you would be looking at a broken page instead of a code block.

## Code Blocks

A fenced block is a promise that its contents are literal. Every construct the tool understands appears below, and none of them fired.

```
Wikilinks inside a code block:
A [[Wikilink inside a code block]] is not turned into a link.
An ![[image-link-inside-code-block.png]] is not copied or rewritten.

Math inside a code block:
$$
a^2 + b^2 = c^2
$$

Inline math $a^2 + b^2 = c^2$ stays as dollar signs.

A callout inside a code block:

> [!note] A Callout
> This stays as literal Markdown, not HTML.

Obsidian syntax that would otherwise vanish:
==this is not highlighted== and %%this comment is not stripped%%
```

### Fences Inside Fences

A code block demonstrating code blocks is the case that breaks naive fence matching. The outer block is opened with four backticks, so the parser has to count them rather than stop at the first closing fence it meets.

````
Here is how you write a Python block in Markdown:

```python
def hello():
    print("Hello World")
```

And these are still inert: [[Wikilink]] and $math$
````

### Inline Code

The same protection applies mid-sentence, which is what makes the first post able to show its own source: `[[My Main Post]]`, `$e = mc^2$`, `![[img.png|500]]`, `==mark==` and `%%comment%%` all appear here as characters, not features.

## Liquid Tags

Jekyll executes any Liquid tag it finds at build time. A post that merely *mentions* Liquid — a tutorial, a config snippet, a bug report — would otherwise be executed rather than displayed.

```liquid
{% raw %}{% for post in site.posts %}{% endraw %}
  <a href="{% raw %}{{ post.url }}{% endraw %}">{% raw %}{{ post.title }}{% endraw %}</a>
{% raw %}{% endfor %}{% endraw %}
```

That block rendered as text instead of looping over this site's posts.

## URLs

URLs are a minefield of characters that mean something else in Markdown.

This link contains two dollar signs, which is exactly the shape of an inline math span: [a search URL with $ signs](https://www.google.com/search?q=a-fake-url$with-two$dollar-signs)
{: #secidd34e3b}

If the dollar signs had been read as math, the URL would have been cut in half and the link would point somewhere that doesn't exist.

## Math That Looks Like Something Else

Double square brackets are Obsidian's link syntax. They are also ordinary notation for a nested list or a matrix, and inside math they must stay that way.


$$
\text{This is a matrix literal, not a link:} \\
[[1, 2], [3, 4]]
$$


## Tables

A pipe is a table's column separator. It is also `\vert` in LaTeX, so a table of pipe notation is a table whose cells are full of the character that would end them early.

| Symbol  | Meaning  | Equation                     |
| :------ | :------- | :--------------------------- |
| \\(\Vert\\) | Norm     | \\(\Vert x \Vert = \sqrt{x^2}\\) |
| \\(\vert\\) | Absolute | \\(\vert -5 \vert = 5\\)         |

## Math Inside a Link

Display text is Markdown, so it can contain math, and the link still has to survive being rewritten around it:

[Read about \\(\pi\\) and \\(e^x\\) here](https://en.wikipedia.org/wiki/Pi)

---

Go back to [the first post]({{ site.baseurl }}{% link _posts/2026-01-13-my-main-post.md %}).

<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js"></script>