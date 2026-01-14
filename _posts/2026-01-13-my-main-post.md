---
layout: post
title: Main Title
---

This is a demo website for my tool [Obsidian-2-Jekyll](https://github.com/kckhchen/obsidian-2-jekyll).

The file name will be `2026-01-13-my-main-post.md`, since the original file name is `My Main Post` and the creation date is 13th January, 2026. The `h1` header "Main Title" will be treated as post title on the website, and the header will be removed to prevent duplicate titles.

If you want to see the original Obsidian article, you can find them in the `Example-Vault` folder at the [repo for this demo site](https://github.com/kckhchen/obsidian-2-jekyll-demo).

## Math Processing

Any inline math like \\(a^2 + b^{2} = c^{2}\\) will be rendered correctly, as well as math blocks:
{: #secid10d1e3}


$$
\mathbb{E}\left[ \bar{X} \right] = \mathbb{E}\left[ \frac{1}{n} \sum_{i=1}^{n} X_{i} \right] = \frac{1}{n} \mathbb{E}\left[ \sum_{i=1}^{n} X_{i} \right] = \frac{1}{n} \sum_{i=1}^{n} \mathbb{E} \left[ X_{1} \right] = \frac{1}{n} n\mu = \mu
$$
{: #secid0f5bab}

This also works with multi-line math block with `\begin{...}` environments:


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


If you have dollar signs \$ (e.g. The apple costs 10\$ and the banana costs 5\$), please escape them with \\ so that they won't get mistaken as math environments.

### Image Links and Wikilinks

A Wikilink to [Another Post, where you can see how shielding works]({{ site.baseurl }}{% link _posts/2026-01-13-my-another-post.md %}) will be transformed into a Markdown link, with the link replaced by a Liquid tag `{% raw %}{% link _posts/path/to/post %}{% endraw %}`, which will be taken care of by Jekyll. 

Embedded images such as

![]({{ site.baseurl }}{% link assets/images/random-image-abc.gif %}){: width="500" }

will be rendered to be compatible with Jekyll (also via Liquid tags), along with the specified `width` (if provided). The actual image file will be copied to Jekyll's `assets/images` folder (or a folder of your choice).

The `.md` files found in the `_posts` folder might look broken and won't be rendered by most Markdown editors correctly, but they are compatible with Jekyll's requirements.

### Some Links to Sections/Blocks

[This links back to the header "Math Processing"](#math-processing)

[Block link to a paragraph in this post](#secid10d1e3)

[Block link to a math block in this post](#secid0f5bab)

### Links to Other Posts

[Link to another post on shielding]({{ site.baseurl }}{% link _posts/2026-01-13-my-another-post.md %})

[Link to a h3 section of that post.]({{ site.baseurl }}{% link _posts/2026-01-13-my-another-post.md %}#code-block-shielding)

[Block link to a paragraph in another post]({{ site.baseurl }}{% link _posts/2026-01-13-my-another-post.md %}#secidd34e3b)

## Callouts

<div class="callout callout-info" markdown="1">
<div class="callout-title"><i class="callout-icon" data-lucide="info"></i>Info</div>
If a callout does not have a title, the callout type will be the title.

</div>
<div class="callout callout-warning" markdown="1">
<div class="callout-title"><i class="callout-icon" data-lucide="circle-alert"></i>A Warning Callout with Title</div>
Optionally, a callout can have a title.

</div>
<div class="callout callout-quote" markdown="1">
<div class="callout-title"><i class="callout-icon" data-lucide="quote"></i>A Quote Callout</div>

</div>
<div class="callout callout-error" markdown="1">
<div class="callout-title"><i class="callout-icon" data-lucide="zap"></i>An Error Callout</div>
Just like the callout above, a callout can have no messages.

</div>
<div class="callout callout-hint" markdown="1">
<div class="callout-title"><i class="callout-icon" data-lucide="flame"></i>A Hint Callout</div>
Just to show you it supports every callout.

</div>
<div class="callout callout-example" markdown="1">
<details>
    <summary class="callout-title"><i class="callout-icon" data-lucide="list"></i>A Foldable Example Callout</summary>
    Just like how you use it in Obsidian, a callout type followed be a +/- sign will make the callout foldable.

</details>
</div>
<div class="callout callout-success" markdown="1">
<details open>
    <summary class="callout-title"><i class="callout-icon" data-lucide="check"></i>A Foldable Success Callout But Default Open</summary>
    Callout type followed by a + will make the callout open by default.

</details>
</div>
<div class="callout callout-random" markdown="1">
<div class="callout-title"><i class="callout-icon" data-lucide="book-check"></i>A not yet support callout</div>
A non-standard callout type or a callout type not yet supported will be in this default style.
</div>

{% include obsidian-callouts.html %}

<script src="https://unpkg.com/lucide@latest"></script>
<script>
    lucide.createIcons({
    attrs: {
        'stroke-width': 2.5,
        stroke: 'currentColor',
    },
    });
</script>


<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js"></script>