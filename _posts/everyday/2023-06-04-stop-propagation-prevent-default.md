---
title: Event bubbling in JavaScript and React.js
tags: ["javascript", "web", "react.js"]
date: 2023/06/05
slug: 2023-06-04-stop-propagation-prevent-default
---

## 1. Event Delegation

A technique in JS where you attach an event listener to a parent element (top-level) and listen for events that occur on its child element --> avoid adding event listener to each child.

Then, one event in child is called --> all element above/below will be called (bubbling/capturing).

## 2. Event Propagation

Refers to the process of an event traveling through the DOM tree.

Event Propagation is the order in which event handlers are called when an event occurs on a webpage.

![Event Propagation](https://raw.githubusercontent.com/southxzx/handbook/main/_posts/everyday/_meta/event-propagation.png)

There are 3 phases of event flow in the DOM: capturing -> target -> bubbling phase.

- **Capturing phase**: captures first through the topmost event **window** object -> **document** -> **html** element until it reaches the **event.target**.
- **Target phase**: when we have arrived at the **event.target**.
- **Bubbling phase**: event starts from **event.target** and propagates up until it reaches the top parent again.

All above is about Javascript matter, then what about **React**?

**React** has created something called **SyntheticEvent** that wrap around the native DOM's event object that can work consistently across all browsers.

```html
<button onClick={() => console.log("clicked")}>Click me</button>
```

--> **onClick** is a synthetic event, is a normalized cross-browser event that similar to onclick in DOM. Internally, **React** will convert the synthetic event into a native DOM event and pass it to the event listener.

In **React 17+**, the **Bubbling phase** is only reach up to the root element instead of the window object.

## 3. Stop Event bubbling

The event object from **React** will have the same interface with native DOM, and includes methods such as: **stopPropagation**, **preventDefault**.

### \* event.stopPropagation()

Stop the bubbling phase (propagate further up the tree) -> no firing in any parent element.

### \* event.preventDefault()

Prevent the default actions from browser:

- Hyperlink with a element
- Form submission
- Checkbox/radio elements
- ect...

Refs:

[https://blog.logrocket.com/event-bubbling-capturing-react/](https://blog.logrocket.com/event-bubbling-capturing-react/)

[https://www.freecodecamp.org/news/event-propagation-event-bubbling-event-catching-beginners-guide/#what-is-event-bubbling](https://www.freecodecamp.org/news/event-propagation-event-bubbling-event-catching-beginners-guide/#what-is-event-bubbling)
