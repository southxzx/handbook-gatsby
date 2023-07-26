---
title: Binary Search in action
tags: ["algorithm", "leetcode"]
date: 2023/07/26
slug: 2023-07-26-binary-search-in-action
---

We can use **Binary Search** to search for an element with just O(n\*log(n)) time complexity. --> belongs to **Divide and Conquer** algorithmic technique.

Let take an example with the problem 34 on Leetcode:

> Find First and Last Position of Element in Sorted Array

Input: nums = `[5,7,7,8,8,10]`, target = `8`

Output: `[3,4]`.

## The first approach - O(n)

Which is simply loop over an array and find the index, but the worst-case will lead to O(n) time complexity.

```js
var searchRange = function (nums, target) {
  if (!nums.length) {
    return [-1, -1];
  }
  const result = [];
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] === target) {
      if (result.length === 0) {
        result.push(i);
      }
      if (nums[i + 1] !== target) {
        result.push(i);
        return result;
      }
    }
  }

  return [-1, -1];
};
```

## The second approach - O(log n)

Now we'll use **Binary Search** to solve this problem.

The pseudo-code template for **Binary Search**:

```js
FUNCTION binarySearch(array, target):
    left = 0
    right = length(array) - 1

    WHILE left <= right:
        mid = left + (right - left) / 2

        IF array[mid] == target:
            RETURN mid
        ELSE IF array[mid] < target:
            left = mid + 1
        ELSE:
            right = mid - 1

    RETURN -1
END FUNCTION
```

**Remember the `+1 to left` and `-1 to right` to avoid infinite loop** (especially when the loop condition has the `=` sign).

Then, let's apply this to the real code:

```js
var searchRange = function (nums, target) {
  if (!nums.length) {
    return [-1, -1];
  }

  let start = -1;
  let end = -1;

  // find left
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      r = mid - 1;
      start = mid;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  // find right
  l = 0;
  r = nums.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      l = mid + 1;
      end = mid;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return [start, end];
};
```

This approach will take O(log n) time complexity even in the worst-case.
