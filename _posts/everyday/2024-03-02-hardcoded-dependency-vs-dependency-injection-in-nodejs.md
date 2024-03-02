---
title: Hardcoded Dependency vs Dependency Injection in Nodejs
tags: ["nodejs"]
date: 2024/03/02
slug: 2024-03-02-hardcoded-dependency-vs-dependency-injection-in-nodejs
---

Both are the patterns for wiring modules in Nodejs

## 1. Hardcoded Dependency

This is obtained when a client module explicitly loads another module using `require()`.

```js
const database = require("./database");

function getUsers() {
  // using the database dependency directly
  return database.query("SELECT * FROM users");
}
```

We export each dependency and require it directly in another module.

- **Pros:** Intuitive, easy to understand.
- **Cons:** Less reusable (especially with stateful modules), difficult to replace dependencies for testing or swapping implementations.,...

## 2. Dependency Injection (DI)

The main idea behind the Dependency Injection pattern is the dependencies of a component being **provided as input** by an external entity.

```js
function getUsers(database) {
  // using the injected database dependency
  return database.query("SELECT * FROM users");
}
```

There are 2 types of DI:

- Constructor injection:

```js
const service = new Service(dependencyA, dependencyB);
```

- Property injection:

```js
const service = new Service(); //works also with a factory
service.dependencyA = anInstanceOfDependencyA;
```

Let's take a look the pros and cons:

- **Pros:** Decouple modules, reusability, easily to mock a dependency when testing,...
- **Cons:** Hard to understand the relationship between modules, complexity,...

One popular framework in the Node.js ecosystem that utilizes dependency injection is **NestJS** as showed below:

```js
// user.controller.ts
import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): string[] {
    return this.userService.getUsers();
  }
}
```

**Refs:**

[Book] Node.js Design Patterns by _Mario Casciaro_
