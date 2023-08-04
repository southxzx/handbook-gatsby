---
title: How does a image carousel work?
tags: ["web"]
date: 2023/08/04
slug: 2023-08-04-how-does-a-image-carousel-work
---

> The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript.

There are many types of carousel you would possibly see.

It can be a slide of images or a single image at the time.

![Carousel Type](https://raw.githubusercontent.com/southxzx/handbook-gatsby/main/_posts/everyday/_meta/common-carousel-type.png)

With the first one, you can easily achieve with combo `"max-width: {number}"` and `"overflow-x: scroll"`. Maybe you should use another CSS property `"scroll-snap-align: center"` to enhance the scroll behavior.

The second one is a bit trickier and somehow requires Javascript to work.

We need a container and child elements like below:

```html
<div class="container">
  <!-- slide 1 -->
  <div class="slide"></div>
  <!-- slide 2 -->
  <div class="slide"></div>
  <!-- slide 3 -->
  <div class="slide"></div>
  <!-- slide 4 -->
  <div class="slide"></div>

  <!-- control buttons -->
  <button class="btn-next">></button>
  <button class="btn-prev"><</button>
</div>
```

We set the `slider` to `"position: relative"` and other `slide` to `"position: absolute"`.

Each child `slide` will need to use a CSS property like `"transform"` or `"left/right"` to calculate it's position (prev/next).

```css
.container {
  position: "relative";
  width: "100%";
  height: "100%";
}
.slide.prev {
  position: "absolute";
  left: "-100%";
}
.slide.next {
  position: "absolute";
  left: "100%";
}
```

Then it's time to use Javascript to navigate.

If we use **React Js** we could define a state variable to hold the current index:

```js
const [currentIndex, setCurrentIndex] = useState(0);
```

Upon clicking on the button `<` or `>` then we will update the `currentIndex` and update left/right CSS property.

We need to combine the CSS with the update from `currentIndex` to make it's transition looks nice with some CSS properties such as: `"opacity"`, `"transition-duration"`, `"scale"`,...
