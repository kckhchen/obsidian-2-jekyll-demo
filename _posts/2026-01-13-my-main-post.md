---
date: 2026-01-13
generator: intaglio
layout: post
share: true
title: Main Title
---

This page is the output. It was written as an ordinary Obsidian note and published by [Intaglio](https://github.com/kckhchen/intaglio) with no manual edits.

Every section below is a case where a naive find-and-replace gets it wrong. Each one shows the Obsidian source first, then the result you are looking at. The source is written in `inline code` — which survives untouched, and is itself the first thing being demonstrated.

The original note lives in the `Example-Vault` folder of [this demo's repo](https://github.com/kckhchen/intaglio-demo), if you want to diff it against what you see here.

## The Title and the Filename

This note is called `My Main Post.md` and its frontmatter says `date: 2026-01-13`. It was published as `2026-01-13-my-main-post.md`, because Jekyll demands that shape.

The note opened with `# Main Title`. That became the page title above, and the heading itself was deleted — otherwise the title would appear twice, once from the layout and once from the body. You keep writing `h1` the way Obsidian expects; the duplicate never reaches the page.

## Math

Inline math written as `$a^2 + b^{2} = c^{2}$` renders as \\(a^2 + b^{2} = c^{2}\\).
{: #secid10d1e3}

Display blocks survive as-is:


$$
\mathbb{E}\left[ \bar{X} \right] = \mathbb{E}\left[ \frac{1}{n} \sum_{i=1}^{n} X_{i} \right] = \frac{1}{n} \mathbb{E}\left[ \sum_{i=1}^{n} X_{i} \right] = \frac{1}{n} \sum_{i=1}^{n} \mathbb{E} \left[ X_{1} \right] = \frac{1}{n} n\mu = \mu
$$
{: #secid0f5bab}

So do multi-line environments, where the `\\` line breaks and `&` alignment markers are easy to mangle:


$$
\begin{align}
\mathbb{E} \left[ \frac{1}{n} \sum_{i=1}^{n} (X_{i} - \bar{X})^{2} \right]
&= \frac{1}{n} \mathbb{E} \left[ \sum_{i=1}^{n} X_{i}^{2} - n\bar{X}^{2} \right] \\
&= \frac{1}{n} \left( \sum_{i=1}^{n} \mathbb{E} \left[ X_{i}^{2} \right] - n\mathbb{E} \left[ \bar{X}^{2} \right] \right) \\
&= \frac{1}{n}\left( n(\sigma^{2} + \mu^{2}) - n \left( \frac{\sigma^{2}}{n} + \mu^{2} \right) \right) \\
&= \sigma^{2} + \mu^{2} - \frac{\sigma^{2}}{n} - \mu^{2} \\
&= \frac{n-1}{n} \sigma^{2}
\end{align}
$$
{: #secid2d1a9f}

### Text That Only Looks Like Math

This is where most converters break. A dollar sign is not an invitation.

The book costs $5 and the pen costs $10 — two dollar signs in one sentence, and the text between them is untouched. A converter that pairs dollar signs greedily would swallow "and the pen costs" into a math span and render it in italics.

An escaped `\$100` also stays literal: \$100.

The rule is that an opening `$` cannot be followed by a space and a closing `$` cannot be preceded by one, so prose spacing disqualifies accidental pairs before they ever match.

## Images

Obsidian's embed syntax `![[random-image-abc.gif|500]]` carries a width Jekyll knows nothing about:

![]({{ site.baseurl }}{% link assets/images/obsidian/random-image-abc.gif %}){: width="500" }

The standard Markdown form with alt text, `![A generated placeholder image|260](random-image-abc.gif)`, works too — alt text preserved, width applied:

![A generated placeholder image]({{ site.baseurl }}{% link assets/images/obsidian/random-image-abc.gif %}){: width="260" }

In both cases the file itself is copied out of the vault into the site's image folder. Images not referenced by any published note are left behind, so publishing one note doesn't drag your entire vault along with it.

## Internal Links

Obsidian links point at note _names_. Jekyll needs _paths_, and the path depends on a date prefix that didn't exist when you wrote the note.

- `[[My Another Post]]` → [My Another Post]({{ site.baseurl }}{% link _posts/2026-01-13-my-another-post.md %})
- `[[My Another Post|with different display text]]` → [with different display text]({{ site.baseurl }}{% link _posts/2026-01-13-my-another-post.md %})
- `[[#Math]]` (a heading in this note) → [jump to Math](#math)
- `[[#^10d1e3]]` (a specific paragraph) → [jump to the inline math paragraph](#secid10d1e3)
- `[[#^0f5bab]]` (a specific math block) → [jump to the expectation block](#secid0f5bab)
- `[[My Another Post#Code Blocks]]` → [a heading in another note]({{ site.baseurl }}{% link _posts/2026-01-13-my-another-post.md %}#code-blocks)
- `[[My Another Post#^d34e3b]]` → [a paragraph in another note]({{ site.baseurl }}{% link _posts/2026-01-13-my-another-post.md %}#secidd34e3b)

### Links That Should Not Exist

This sentence was a link in the source — to a note that was never published. Rather than emit a link that 404s, the tool strips it to plain text and warns you at build time. Nothing silently rots.

## Callouts

Obsidian callouts are not Markdown. They are converted to styled HTML with the matching icon. The button under the panel below re-renders just that section on a dark background, so you can check the callout colors both ways.

<div class="theme-preview" markdown="1">

<div class="callout callout-info" markdown="1"><div class="callout-title"><i class="callout-icon" data-lucide="info"></i><span class="callout-title-text">Info</span></div>
An untitled callout uses its type as the title.

</div>
<div class="callout callout-warning" markdown="1"><div class="callout-title"><i class="callout-icon" data-lucide="circle-alert"></i><span class="callout-title-text">A Warning Callout with Title</span></div>
Any text after the type becomes the title.

</div>
<div class="callout callout-quote" markdown="1"><div class="callout-title"><i class="callout-icon" data-lucide="quote"></i><span class="callout-title-text">A Quote Callout</span></div>

</div>
<div class="callout callout-error" markdown="1"><div class="callout-title"><i class="callout-icon" data-lucide="zap"></i><span class="callout-title-text">An Error Callout</span></div>
A callout can also have a title and no body.

</div>
<div class="callout callout-example" markdown="1"><details markdown="1">
<summary class="callout-title"><i class="callout-icon" data-lucide="list"></i><span class="callout-title-text">A Foldable Example Callout</span></summary>
A `-` after the type makes it foldable, collapsed by default. Click the title to open it.
</details>
</div>
<div class="callout callout-success" markdown="1"><details open markdown="1">
<summary class="callout-title"><i class="callout-icon" data-lucide="check"></i><span class="callout-title-text">A Foldable Callout, Open by Default</span></summary>
A `+` makes it foldable but open on arrival.
</details>
</div>
<div class="callout callout-note" markdown="1"><div class="callout-title"><i class="callout-icon" data-lucide="pen"></i><span class="callout-title-text">Callouts Are Not Dead Ends</span></div>
Everything else still works inside them: inline math \\(e^{i\pi} + 1 = 0\\), a link to [another post]({{ site.baseurl }}{% link _posts/2026-01-13-my-another-post.md %}), `inline code`, and **bold text**. The conversion is not a special case that opts out of the rest of the pipeline.

</div>
<div class="callout callout-random" markdown="1"><div class="callout-title"><i class="callout-icon" data-lucide="book-check"></i><span class="callout-title-text">An Unrecognised Callout Type</span></div>
Unknown types fall back to this neutral style instead of failing. Add your own in `obsidian-callouts.html` and `callout_styles.py`.

</div>
</div>

## Quiet Conversions

Three things on this page changed without announcing themselves.

Obsidian's `==highlight==` syntax has no Markdown equivalent, so it becomes a `<mark>` element: <mark>this text is highlighted</mark>.

Obsidian comments written as `%%...%%` are private notes to yourself.  There was one between this sentence and the last, and you cannot see it.

And this table had no blank line before it in the source, which kramdown requires — so one was inserted:

| Wrote in Obsidian   | Got on the site |
| :------------------ | :-------------- |
| `==mark==`          | `<mark>`        |
| `%%note%%`          | nothing         |
| an image embed with a width | sized `<img>` |

Continue to [the second post]({{ site.baseurl }}{% link _posts/2026-01-13-my-another-post.md %}), which is entirely about text that must _not_ be converted.

{% include obsidian-callouts.html %}

<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js"></script>