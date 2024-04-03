---
title: Singleton with JS
tags: ["javascript"]
date: 2024/04/03
slug: 2024-04-03-singleton-with-js
---

Apparently, we use **Singleton Pattern** to restrict the instantiation of a class into only one.

With Javascript, we can implement Singleton in this way:

### Class

```js
class Singleton {
  static instance;
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

export const singleton = Object.freeze(new Singleton());
```

### Function

It can be said Closure function or IIFE which utilizes the memorable `instance` value.

```js
var mySingleton = (function() {
  var instance;
  function init() {
    // Initialization logic
  }
  return {
    getInstance: function() {
      // Return or create instance
    }
  };
})();

var instA = mySingleton.getInstance();
```

Both approaches are considered as **Module Pattern** as well. Since it's encapsulated and exported to use outside.

All modules in JS have a singleton-like behavior:
- When you import a module into your code, the JavaScript runtime typically executes the module code only once and caches the result.
- Subsequent imports of the same module will return the cached instance, rather than re-executing the module code. 


