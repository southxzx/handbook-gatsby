---
title: Efficient algorithm to reverse string/array
tags: ["algorithm"]
date: 2023/06/19
slug: 2023-06-19-efficient-algorithm-to-reverse-string-array
---

To efficiently reverse a string or array, we can use the two pointers approach.

Which means that you just need to swap elements from both ends until meets in the middle.

### Reverse a string:

```Javascript
var reverseString = function(s) {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        [s[l], s[r]] = [s[r], s[l]];
        l++;
        r--;
    }
};
```

### Rotate an array by K times:

```Javascript
var rotate = function(nums, k) {
    k = k % nums.length;
    let l = 0
    let r = nums.length - 1;

    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]];
        r--;
        l++;
    }

    l = 0;
    r = k - 1;

    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]];
        r--;
        l++;
    }

    l = k;
    r = nums.length - 1;

    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]];
        r--;
        l++;
    }
};
```

Note that 2 above examples using the `destructuring` technique in ES6 to swap 2 elements.

We can use this pattern in Python, Ruby, Swift, Rust. In other languages we might need to use the 3rd variable `temp`
