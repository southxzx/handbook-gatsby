---
title: Notes for Linked list implement with Js
tags: ["javascript", "algorithm"]
date: 2023/06/25
slug: 2023-06-25-notes-for-linked-list-implement-with-js
---

We can create a linked list in Javascript by using a custom class or an object structure.

```Javascript
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

### To delete a node:

```Javascript
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
```

### To reverse a linked list in a recursive way:

```Javascript
var reverseList = function(head) {
    if (head.next === null) {
        return head;
    }
    let result = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return result;
};
```

### A common technique usually use in linked list is to declare 2 pointers `slow` and `fast`

It's can be use to find the half:

```Javascript
while (fast.next != null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
}
```

Or to determine if the linked list has cycle:

```Javascript
var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }

    return false;
};
```

And when we do `console.log(head)`. It will always print out the rest of the head like an array, but it actually just refer to one node at the time.
