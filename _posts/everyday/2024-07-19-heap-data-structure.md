---
title: "Heap Data Structure"
tags: ["leetcode", "algorithm", "data-structure"]
date: 2024/07/19
slug: 2024-07-19-heap-data-structure
---

## 1. What the heck is Heap:

A **Heap** is a complete binary tree DS that satisfies the heap property: for every node, the value of its children is less than or equal to its own value.

A Heap is often used to implement Priority Queue (another DS that based on Heap).

There are 2 types of Heap:
- Min-Heap
- Max-Heap

![HeapTypes](https://raw.githubusercontent.com/southxzx/handbook-gatsby/main/_posts/everyday/_meta/MinHeapAndMaxHeap1.png)

There are also some common operations:
- Insert
- Extract Max/Min: remove and return.
- Heapify: convert a binary tree -> heap.

## 2. Usage to solve the Leetcode problems:

We have this problem on leet code: **215. Kth Largest Element in an Array**

We can solve it by **Sort** or **QuickSelect** but **Heap** is also another choice because we can utilize the library.

```python
# Python3
def findKthLargest(self, nums: List[int], k: int) -> int:
    return heapq.nlargest(k, nums)[-1]
```

```java
// Java
import java.util.PriorityQueue;

public class KthLargestElement {
    public static int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        for (int num : nums) {
            minHeap.add(num);
            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }
        return minHeap.peek();
    }

    public static void main(String[] args) {
        int[] nums = {3, 2, 1, 5, 6, 4};
        int k = 2;
        System.out.println(findKthLargest(nums, k));  // Kết quả: 5
    }
}
```

Refs:

https://www.geeksforgeeks.org/heap-data-structure/