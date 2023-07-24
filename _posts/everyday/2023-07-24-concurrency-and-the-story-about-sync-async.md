---
title: Concurrency and the story about Sync/Async
tags: ["os", "javascript"]
date: 2023/07/24
slug: 2023-07-24-concurrency-and-the-story-about-sync-async
---

## 1. Concurrency/Parallelism

To handle multiple tasks at the same time in OS we have:

- **Concurrency:** running/managing the multiple computations --> the same time (interleaving operation).

- **Parallelism:** running multiple computations --> simultaneously.

![concurrency-vs-parallelism](https://raw.githubusercontent.com/southxzx/handbook-gatsby/main/_posts/everyday/_meta/concurrency-vs-parallelism.png)

_Source: baeldung.com_

Most modern programming language support **concurrency** --> Improve performance/responsiveness (long-running I/O, blocking tasks, ...).

While **parallelism**, multiple tasks are executed simultaneously on different processors/cores --> More challenging.

## 2. Event-based concurrency

Let's go with concurrency for now, there're generally two approaches with concurrency:

- **Thread-based**: using multiple threads of execution to perform different tasks concurrently.

- **Event-based**: using a single thread of execution that processes events as they occur.

There're many languages support **event-based concurrency** such as: JavaScript, Python, Ruby,...

**Event-based concurrency** is mostly based on a construct known as **Event Loop**.

```javascript
while (1) {
  events = getEvents();
  for (e in events) processEvent(e);
}
```

The main loop simply waits for something to do --> for each event re-turned, processes them (**Event handler**).

## 3. Event Loop

Now, let's dig a bit deeper to Event Loop.

We call it **'loop'** because it tends to infinitely loop checks for events in the **event queue** --> If there's any, then process them --> **Event handler** will execute them.

The event queue can be implemented using a variety of data structures: linked list, a priority queue, or a circular buffer...

![event-loop-visualization](https://raw.githubusercontent.com/southxzx/handbook-gatsby/main/_posts/everyday/_meta/event-loop-visualization.gif)

_Source: Medium / Event loop in JS_

Event Loop runs on single threads:

- Pros: Shared resources, resolve most problems with concurrency:

  - No needs to implement **locks**.
  - Can not interrupted by others threads.

- Cons: Blocking system calls (events such as: HTTP request, I/O tasks,... may take long-running time --> block Event Loop --> Unable to process other events).

To solve the above problems, here's come the **Asynchronous I/O**.

## 4. Asynchronous I/O

Asynchronous I/O is implemented in most modern OS --> helps programs to perform `I/O operations` without blocking the main thread of execution.

As we known, `I/O operations` include:

- **Sync (Blocking I/O)**: do all the works --> return the caller.
- **Async (Non-blocking I/O)**: do some works --> return immediately (**get work done in background**).

Asynchronous I/O is also known as Non-blocking I/O.

How it works:

- I/O operation is initiated --> the program will register a **callback function** or **event handler** --> get execute when operations are completed in background.

This is widely used in many programming languages. JavaScript with `callback`, Python/C# with `async/await` syntax.

## 5. Asynchronous Programming

**Asynchronous Programming** is well-suited in applications programming compared with **Synchronous Programming**.

Asynchronous Programming relies on **Asynchronous I/O** to perform I/O operations in a non-blocking way.

As described above, `callback` is the key of Asynchronous Programming.

## 6. Promise in JavaScript

We all known that use `callback` somehow will lead to **callback hell**.

Then, **promise** was introduced in ECMAScript 2015 (ES6) --> more organized and structured way than `callback`.

- Create promise:

```javascript
const promise = new Promise((resolve, reject) => {
  // Do some asynchronous operation, such as making an HTTP request
  fetch("https://example.com/api/data")
    .then((response) => response.json())
    .then((data) => {
      // If the operation completes successfully, call resolve with the result
      resolve(data);
    })
    .catch((error) => {
      // If the operation fails, call reject with an error object
      reject(error);
    });
});
```

Actually, the `fetch()` function above returns a promise itself 😅.

- Consume promise:

```javascript
promise
  .then((result) => {
    // Handle the successful outcome of the Promise
    console.log(result);
  })
  .catch((error) => {
    // Handle any errors that occur during the Promise
    console.error(error);
  });
```

But with chain promise, we need to use `.then()` a lot --> hard to read, maintain. And promise is not cancellable as well.

## 7. Here's come Async/Await

Remember that it just **a syntactical sugar to consume Promise**, so instead of using `.then()` and `.catch()` --> `async/await`. It's built on top of Promise.

--> **Write asynchronous code in a more synchronous, readable way.**

**Async/Await** was introduced in ECMAScript 2017 (ES8). Meanwhile, this syntax was introduced sooner by other languages: Python, C#.

```javascript
async function getData() {
  try {
    const response = await fetch("https://example.com/api/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
}
```

In order to handle errors we need to wrap them inside a `try/catch` block.

**Refs:**

[Asynchronous Programming in JavaScript – Guide for Beginners](https://www.freecodecamp.org/news/asynchronous-programming-in-javascript/#:~:text=In%20summary%2C%20asynchronous%20programming%20is,async%2Fawait%2C%20and%20promises.)

Book: Operating Systems: Three Easy Pieces - Remzi H. Arpaci-Dusseau
