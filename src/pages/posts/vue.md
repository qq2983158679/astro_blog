---
title: "我的第一个博客VUE"
pubDate: 2022-07-01
description: "astro初体验"
author: "是呆龙没错了"
image:
  url: "https://mp-c7d1b689-cd39-420a-83f9-733c744450c6.cdn.bspapp.com/cloudstorage/8cac1bad-a45a-48f6-b1bf-c2ba6c1efb4e.jpg"
  alt: "标签图片"
tags: ["Vue"]
layout: ../../layouts/layoutsMd.astro
---

**If you know HTML, you already know enough to write your first Astro component.**

Astro component syntax is a superset of HTML. The syntax was [designed to feel familiar to anyone with experience writing HTML or JSX](#differences-between-astro-and-jsx), and adds support for including components and JavaScript expressions.


## JSX-like Expressions

You can define local JavaScript variables inside of the frontmatter component script between the two code fences (`---`) of an Astro component. You can then inject these variables into the component's HTML template using JSX-like expressions!

:::note[dynamic vs reactive]
Using this approach, you can include **dynamic** values that are calculated in the frontmatter. But once included, these values are not **reactive** and will never change. Astro components are templates that only run once, during the rendering step.

See below for more examples of [differences between Astro and JSX](#differences-between-astro-and-jsx).
:::

### Variables

Local variables can be added into the HTML using the curly braces syntax:

```javascript
    const response = await fetch("https://v1.hitokoto.cn/?c=j&c=b");
    yiyan.value = await response.json();
    setInterval(async () => {
      isYiyan.value = true;
      const response = await fetch("https://v1.hitokoto.cn/?c=j&c=b");
      yiyan.value = await response.json();
      guanbi()
    }, 5000)
  
```

### Dynamic Attributes

Local variables can be used in curly braces to pass attribute values to both HTML elements and components:

```astro title="src/components/DynamicAttributes.astro" "{name}" "${name}"
---
const name = "Astro";
---
<h1 class={name}>Attribute expressions are supported</h1>
<MyComponent templateLiteralNameAttribute={`MyNameIs${name}`} />
```

:::caution
HTML attributes will be converted to strings, so it is not possible to pass functions and objects to HTML elements.
For example, you can't assign an event handler to an HTML element in an Astro component:

```astro
---
// dont-do-this.astro
function handleClick () {
    console.log("button clicked!");
}
---
<!-- ❌ This doesn't work! ❌ -->
<button onClick={handleClick}>Nothing will happen when you click me!</button>
```

Instead, use a client-side script to add the event handler, like you would in vanilla JavaScript:

```astro
---
// do-this-instead.astro
---
<button id="button">Click Me</button>
<script>
  function handleClick () {
    console.log("button clicked!");
  }
  document.getElementById("button").addEventListener("click", handleClick);
</script>
```
:::

### Dynamic HTML

Local variables can be used in JSX-like functions to produce dynamically-generated HTML elements:

```astro title="src/components/DynamicHtml.astro" "{item}"
---
const items = ["Dog", "Cat", "Platypus"];
---
<ul>
  {items.map((item) => (
    <li>{item}</li>
  ))}
</ul>
```

Astro can conditionally display HTML using JSX logical operators and ternary expressions.

```astro title="src/components/ConditionalHtml.astro" "visible"
---
const visible = true;
---
{visible && <p>Show me!</p>}
{visible ? <p>Show me!</p> : <p>Else show me!</p>}
```

### Dynamic Tags

You can also use dynamic tags by setting a variable to an HTML tag name or a component import:

```typescript
---
import MyComponent from "./MyComponent.astro";
const Element = 'div'
const Component = MyComponent;
---
<Element>Hello!</Element> <!-- renders as <div>Hello!</div> -->
<Component /> <!-- renders as <MyComponent /> -->
```

When using dynamic tags:

- **Variable names must be capitalized.** For example, use `Element`, not `element`. Otherwise, Astro will try to render your variable name as a literal HTML tag.

- **Hydration directives are not supported.** When using [`client:*` hydration directives](/en/core-concepts/framework-components/#hydrating-interactive-components), Astro needs to know which components to bundle for production, and the dynamic tag pattern prevents this from working.

### Fragments & Multiple Elements

An Astro component template can render multiple elements with no need to wrap everything in a single `<div>` or `<>`, unlike JavaScript or JSX.

```astro title="src/components/RootElements.astro"
---
// Template with multiple elements
---
<p>No need to wrap elements in a single containing element.</p>
<p>Astro supports multiple root elements in a template.</p>
```

However, when using an expression to dynamically create multiple elements, you should wrap these elements inside a **fragment** as you would in JavaScript or JSX. Astro supports using either `<Fragment> </Fragment>` or the shorthand `<> </>`.

```astro title="src/components/FragmentWrapper.astro" "<>" "</>"
---
const items = ["Dog", "Cat", "Platypus"];
---
<ul>
  {items.map((item) => (
    <>
      <li>Red {item}</li>
      <li>Blue {item}</li>
      <li>Green {item}</li>
    </>
  ))}
</ul>
```

Fragments can also be useful to avoid wrapper elements when adding [`set:*` directives](/en/reference/directives-reference/#sethtml), as in the following example:

```astro title="src/components/SetHtml.astro" "Fragment"
---
const htmlString = '<p>Raw HTML content</p>';
---
<Fragment set:html={htmlString} />
```

### Differences between Astro and JSX

Astro component syntax is a superset of HTML. It was designed to feel familiar to anyone with HTML or JSX experience, but there are a couple of key differences between `.astro` files and JSX.

#### Attributes

In Astro, you use the standard `kebab-case` format for all HTML attributes instead of the `camelCase` used in JSX. This even works for `class`, which is not supported by React.

```jsx del={1} ins={2} title="example.astro"
<div className="box" dataValue="3" />
<div class="box" data-value="3" />
```

#### Comments

In Astro, you can use standard HTML comments or JavaScript-style comments.

```astro title="example.astro"
---
---
```

:::caution
HTML-style comments will be included in browser DOM, while JS ones will be skipped. To leave TODO messages or other development-only explanations, you may wish to use JavaScript-style comments instead.
:::