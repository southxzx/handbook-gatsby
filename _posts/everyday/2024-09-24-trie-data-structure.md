---
title: "Trie Data Structure"
tags: ["python", "algorithm"]
date: 2024/09/24
slug: 2024-09-24-trie-data-structure
---
## 1. Understand Trie

> The Trie data structure is a tree-like data structure used for storing a dynamic set of strings (also called prefix tree).

![Trie DS](https://raw.githubusercontent.com/southxzx/handbook-gatsby/main/_posts/everyday/_meta/triedatastructure.png)

There are 2 widely used method of Trie: **Insert**, **Search**.

## 2. Implementation

Let's implement a Trie class with Python:

Define a `TrieNode`:

```python
class TrieNode:
  def __init__(self):
    self.children: dict[str, TrieNode] = {}
```

Define a `Trie` with 2 methods:

```python
class Trie:
  def __init__(self):
    self.root = TrieNode()

  def insert(self, word: str) -> None:
    node: TrieNode = self.root
    for c in word:
      node = node.children.setdefault(c, TrieNode())
    node.isWord = True

  def search(self, word: str) -> int:
    prefixLength = 0
    node = self.root
    for c in word:
      if c not in node.children:
        break
      node = node.children[c]
      prefixLength += 1
    return prefixLength
```

The `search` method can be modified for each usage purpose. 

***Refs:***

https://www.geeksforgeeks.org/trie-insert-and-search/

