---
title: Threads vs Process in OS
tags: ["os"]
date: 2023/07/23
slug: 2023-07-23-threads-vs-process-in-os
---

## 1. First look

- **Process** is a running program.
- **Thread** is a single sequence stream within a process (light-weight process).

Another way to think of this is that each thread is very much like a separate process, except for one difference: **they share the same address space and thus can access the same data**.

## 2. Key Differences

| Process                                               | Thread                               |
| ----------------------------------------------------- | ------------------------------------ |
| Process means any program is in execution.            | Thread means a segment of a process. |
| Take more time to terminate/create/context switching. | Take less time.                      |
| The process is isolated.                              | Threads share memory.                |

## 3. E.g.

Imagine if a process is a **chrome.exe** running.

Threads can be: Handle downloading task, handle display the page, handle user's interactions. (Multi-threads).

## 4. Thread vs Multi-threads

![Multi-threads example](https://raw.githubusercontent.com/southxzx/handbook-gatsby/main/_posts/everyday/_meta/multi-threads-example-visualization.png)

_Source: Neso Academy._

Multi-threads have **4 key advantages**: Responsiveness, Resource sharing, Economy (create/context switching), Utilization of multi-processor architectures.
