---
title: Let's talk about Divide and Conquer (Algorithmic technique)
tags: ["algorithm"]
date: 2023/06/26
slug: 2023-06-26-let-s-talk-about-divide-and-conquer-algorithmic-technique
---

Yes, we're talking about one of the algorithmic techniques: Divide and conquer

The others algorithmic techniques which are:

- Brute Force
- Greedy Algorithm
- Dynamic Programming
- Backtracking
- Graph Algorithms
- Heuristic Algorithms
- Randomized Algorithms

Divide and conquer is used to solve problems by breaking them down into smaller sub-problems, solving each independently and then combine the results to obtain the final result.

The divide and conquer approach is widely used in various algorithms:

### Binary Search

```Javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
```

Note the `+/- 1` to `mid` value to avoid unwanted infinite loops or missing target value.

### Merged Sort

![Merged Sort](https://raw.githubusercontent.com/southxzx/handbook/main/_posts/everyday/_meta/300px-Merge_sort_algorithm_diagram.svg.png)

Source: Wikipedia

```Javascript
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}
```

Quick Sort is also using Divide and Conquer technique.
