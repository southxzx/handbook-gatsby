---
title: (Leetcode) Maximum Rectangle Area
tags: ["leetcode"]
date: 2024/04/14
slug: 2024-04-14-leetcode-maximum-rectangle-area
---

We got 2 problems labeled as **"Hard"** in Leetcode 84, 85.

## Largest Rectangle in Histogram (84)

![Largest Rectangle in Histogram](https://raw.githubusercontent.com/southxzx/handbook-gatsby/main/_posts/everyday/_meta/histogram.jpg)

This problem is well explained in this [video](https://www.youtube.com/watch?v=zx5Sw9130L0) from Neetcode:

To be short:

- We will use stack to hold the `index` and `value` of each bar.
- If the topmost stack is larger the current index, pop that bar.
- Re-calculate the `max`.
- When we traverse all the bars, we will again re-calculate the `max` based on the remain elements in the stack.

Below is the code snippet to solve this problem written in Python:

```python
def largestHistogram(self, heights: List[int]) -> int:
        m = 0
        stack = []

        for i, h in enumerate(heights):
            start = i
            while stack and stack[-1][1] > h:
                index, val = stack.pop()
                m = max(m, val * (i - index))
                start = index
            stack.append((start, h))

        for i, v in stack:
            m = max(m, v * (len(heights) - i))

        return m
```

T: O(n) - Mem: O(n)

## Maximal Rectangle (85)

![Maximal Rectangle](https://raw.githubusercontent.com/southxzx/handbook-gatsby/main/_posts/everyday/_meta/maximal.jpg)

This is the extended version of the last problem. We'll find the maximal rect in the matrix instead of the histogram.

One trick to solve this is:

- Go through all row of the matrix, each row we'll assume it as a base of the histogram.
- If the cell value is `0`, we need to reset the bar of the histogram.
- Re-calculate the `max` of each histogram that we found.

```python
class Solution:
    def maximalRectangle(self, matrix: List[List[str]]) -> int:
        m = 0
        sum = []
        sum.extend([0] * len(matrix[0]))

        for i, col in enumerate(matrix):
            for j, row in enumerate(matrix[i]):
                sum[j] = sum[j] + int(row)
                if row == "0": sum[j] = 0
            m = max(m, self.largestHistogram(sum))
        return m

    def largestHistogram(self, heights: List[int]) -> int:
        m = 0
        stack = []

        for i, h in enumerate(heights):
            start = i
            while stack and stack[-1][1] > h:
                index, val = stack.pop()
                m = max(m, val * (i - index))
                start = index
            stack.append((start, h))

        for i, v in stack:
            m = max(m, v * (len(heights) - i))

        return m
```

Refs:

https://www.youtube.com/watch?v=zx5Sw9130L0
