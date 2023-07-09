---
title: A quick note about rendering behavior in React
tags: ["react.js"]
date: 2023/07/09
slug: 2023-07-09-a-quick-note-about-rendering-behavior-in-react
---

## 1. Overview

JSX (normally) -> `React.createElement()` -> React elements -> new tree of object (Virtual DOM) -> Diffing to make real DOM based on virtual DOM (synchronous)

The diffing algorithm is called `reconciliation` which is explain more detail below.

Note: `Virtual DOM` term is not used by React team anymore because it's somewhat misleading. While React does use a lightweight copy of the real DOM to keep track of changes before updating the actual browser DOM, this is just one part of how React works.

## 2. Reconciliation process

In React, the rendering process is divided into two main phases:

- **Render phase** contains all the work of rendering components and calculating changes
- **Commit phase** is the process of applying those changes to the DOM

Checkout **[this interactive React hook timeline](https://julesblom.com/writing/react-hook-component-timeline)**.

The reconciliation algorithm is based on a `diffing algorithm` that compares the previous and current virtual DOMs to determine which parts of the DOM need to be updated.

1. The `type` of the element (e.g., `"div"`, `"span"`, etc.).
2. The `key` of the element (if present) -> be aware when using array indices in list that may reordering.
3. The `props` of the element (e.g., `"style"`, `"className"`, etc.).
4. The `children` of the element.

## 3. Render batching

In React 17 and earlier, React only did batching in React event handlers such as `onClick()` callbacks. But React 18 now does **automatic batching**.

State updates may be asynchronous (sort of true), but there's a bit more nuance than that, new React docs described state as [a snapshot](https://react.dev/learn/state-as-a-snapshot).

## 4. Improve performance

The primary method is `React.memo()`, a built-in HOC type.

Others:

- `React.Component.shouldComponentUpdate`
- `React.PureComponent`
- `props.children` -> stay the same if component re-render
- Wrap some elements with `useMemo()`

Passing reference props also make the child component to re-render even if the child is wrapped with `React.memo()`.

**Eg:** `onClick()` and `data` are created new reference every ParentComponent re-render, then it needs to be wrapped by `useCallback()/useMemo()`

```Javascript
function ParentComponent() {
  const onClick = () => {
    console.log('Button clicked');
  };

  const data = { a: 1, b: 2 };

  return <NormalChildComponent onClick={onClick} data={data} />;
}
```

But optimizing with `React.memo()` is mostly unnecessary, eg: the props is always change reference like function, object props. But some cases `React.memo()` is worth to use.

## 5. Immutability

- State updates in React should always be done immutably.

- `useState()` and `useReducer()` always trigger re-render if the value's reference changes.

**Eg:** this will not trigger re-render, instead we can use `slice()` for array or `spread operator` to create new reference.

```Javascript
const [todos, setTodos] = useState(someTodosArray);

const onClick = () => {
  todos[3].completed = true;
  setTodos(todos);
};
```

Similarly, others libs using React ecosystem tend to encourage the use of immutability to avoid confused, unexpected bugs.

## 6. React's Context

The problem with React's context is the context provider receives a single `value` prop.

Then, all the consumers using `useContext` might re-render whenever value get a new reference even if only using `value.a`.

We should use `React.memo()` in the component right under context provider to prevent re-render, only those using `useContext()` and it's descendants will re-render.

```Javascript
return (
  <MyContext.Provider value={contextValue}>
    <MemoizedChildComponent />
  </MyContext.Provider>
)

const MemoizedChildComponent = React.memo(ChildComponent);
```

**Redux** can do a better job somehow, It subscriptions to the Redux store to check for updates, instead of passing store state values by context.

**Refs:**

[https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/#what-is-rendering](https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/#what-is-rendering)
