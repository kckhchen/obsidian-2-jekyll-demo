# This is another post

## Some Examples on Shielding

### Code Block Shielding
```
URLs inside a code block:
https://stackoverflow.com/

Wikilinks inside a code block:
A [[Wikilink inside a code block]] will not be processed.
An ![[image-link-inside-code-block.img]] will not be processed.

Some random math block inside a code block:
$$
a^2 + b^2 = c^2
$$

Callouts inside a code block:

> [!note] A Callout
> Some text
```

You can even use code blocks inside code blocks (with 4 backticks "\`" on the outer code block):

````
Here is how you write a code block in Markdown:

```python
def hello():
    print("Hello World")
```

[[Wikilink]]
$math$
````

## URL Shielding

An non-functional artificial URL, just to show you could have two \$'s in an URL and it will not be mistaken for math blocks:
[A Google Search URL](https://www.google.com/search?q=a-fake-url$with-two$dollar-signs) ^d34e3b


## Math Shielding

$$
\text{Wikilink-like math will not be mistaken for Wikilinks. For example:} \\
[[1, 2], [3,4]]
$$


## Other Random Examples

### Table With Math

| Symbol | Meaning | Equation |
| :--- | :--- | :--- |
| $\Vert$ | Norm | $\Vert x \Vert = \sqrt{x^2}$ |
| $\vert$ | Absolute | $\vert -5 \vert = 5$ |


### Math Inside Displayed Text of a MD Link

[Read about $\pi$ and $e^x$ here](https://en.wikipedia.org/wiki/Pi)

Go back to [[My Main Post]].