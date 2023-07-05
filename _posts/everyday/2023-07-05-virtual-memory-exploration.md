---
title: Virtual Memory exploration
tags: ["os"]
date: 2023/07/05
slug: 2023-07-05-virtual-memory-exploration
---

## 1. A first look

Virtual memory (VM) is a memory management technique used by operating systems to give each process the illusion of having its own dedicated memory space.

Let's examine 3 problems of a physical memory:

- Not enough RAM to run Program
- Programs writing/reading over each other's data (security)
- Programs may not fit together

To solve this -> Virtual Memory. Each program will have their own virtual memory space, separate from others program

But the downside is they can't share data between program (icons,...).

## 2. How does it works?

- Virtual Memory: program sees
- Physical Memory: RAM
- Virtual Addresses (VA): program uses
- Physical Addresses (PA): hardware uses to talk to RAM (eg. 2GB RAM -> 0 - 2^31-1 physical addresses)

Here's how does a program access memory:

1. Program executes a load with VA
2. Computer translates VA -> PA **(Address translation)**
3. If PA is not in RAM -> seeking in Disk
4. Computer then reading RAM using PA -> return data to the program

![Virtual Memory](https://raw.githubusercontent.com/southxzx/handbook-gatsby/main/_posts/everyday/_meta/virtual_memory_mapping.png)

The data structure to map from VA to PA is called **Page Table**

**Refs:**

[Virtual Memory playlist by David Black-Schaffer](https://youtube.com/playlist?list=PLiwt1iVUib9s2Uo5BeYmwkDFUh70fJPxX)
