---
title: Notes for sorting algorithm
tags: ["algorithm"]
date: 2023/07/25
slug: 2023-07-25-notes-for-sorting-algorithm
---

These sorting algorithms are classified by their **efficiency increasing**.

## 1. Selection sort

Select the smallest --> swap with the first item in list.

```js
function selectionSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    // find the index of the minimum
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // swap the minimum value with the first element
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}
```

Space Complexity: O(n) - Time Complexity: O(n2)

## 2. Bubble sort

Traverse a list, compare 2 adjacent --> swap.

```js
function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (arr[j] < arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}
```

Space Complexity: O(1) - Time Complexity: O(n2)

## 3. Insertion sort

Choose the `key` (usually index 1). Compare `key` with `previous`.

If `previous` > `key` --> shift `previous` to the right and keep continue until `previous` <= `key`.

Then, increase `key` index.

```js
Copy;
function insertionSort(arr) {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    const key = arr[i];
    let j = i - 1;
    // shift elements that are larger than key to the right
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
```

Space Complexity: O(1) - Time Complexity: O(n2).

## 4. Merge sort

**Divide and Conquer** algorithm.

- Divide the array into two halves.
- Sort the left half and the right half using the same recurring algorithm.
- Merge the sorted halves.

```js
function mergeSort(arr) {
  const len = arr.length;

  if (len <= 1) {
    return arr;
  }

  const mid = Math.floor(len / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left, right);
}
```

Space Complexity: O(n) - Time Complexity: O(n\*log(n)).
