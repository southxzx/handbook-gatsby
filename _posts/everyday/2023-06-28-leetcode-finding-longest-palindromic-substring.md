---
title: (Leetcode) Finding Longest Palindromic Substring
tags: ["algorithm", "leetcode"]
date: 2023/06/28
slug: 2023-06-28-leetcode-finding-longest-palindromic-substring
---

Longest Palindromic Substring on Leetcode is a `dynamic programming` problem.

## 1. A glimpse of Dynamic Programming

Dynamic programming is an algorithmic technique that involves breaking a problem down into smaller sub-problems and solving each subproblem only once. The solutions to the sub-problems are then used to solve the original problem.

The key idea is to store sub-problems into array/table so that it can be reused rather than recomputing each time are need.

Usually used as an optimization over plain `recursion`, for an example with `Fibonacci Numbers`:

![Fibonacci Numbers Dynamic Programming](https://raw.githubusercontent.com/southxzx/handbook/main/_posts/everyday/_meta/Dynamic-Programming-1.png)

Source: GeeksForGeeks

## 2. Get back to Longest Palindromic Substring

### Approach 1: Dynamic programming

We use a 2D boolean table where each cell `(i,j)` represents where the substring from index `i` to `j` is a palindrome or not.

```Javascript
var longestPalindrome = function(s) {
    const n = s.length;
    const dp = Array(n).fill(false).map(() => Array(n).fill(false));
    let maxLen = 0;
    let start = 0;

    // Base case: single character is a palindrome
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
        maxLen = 1;
    }

    // Check for palindromic substrings of length 2 and more
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i < n - len + 1; i++) {
            const j = i + len - 1;
            if (s[i] === s[j]) {
                if (len === 2 || dp[i+1][j-1]) {
                    dp[i][j] = true;
                    if (len > maxLen) {
                        maxLen = len;
                        start = i;
                    }
                }
            }
        }
    }
    return s.substring(start, start + maxLen);
};
```

This approach has the Time complexity O(n^2) and Space complexity O(n^2).

### Approach 2: Expand around center

Note that there are 2 types of palindrome: odd & even (length). With even, there's always 2 same adjacent characters in the middle like `"abba"`.

```Javascript
var longestPalindrome = function(s) {
    let start = 0;
    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(s, i, i);
        const len2 = expandAroundCenter(s, i, i+1);

        if (len1 > maxLen) { // odd
            maxLen = len1;
            start = i - Math.floor(len1/2);
        }
        if (len2 > maxLen) { // even
            maxLen = len2;
            start = i - (Math.floor(len2/2) - 1);
        }
    }
    return s.substring(start, start + maxLen);
};

var expandAroundCenter = function(s, left, right) {
    while (left >= 0 && right < s.length && (s[left] === s[right])) {
        left--;
        right++;
    }
    return right - left - 1;
}
```

This approach has the Time complexity O(n^2) and Space complexity O(1).

In general this approach seems to be faster than the Dynamic programming approach, but in the context of the very large input sizes the Dynamic programming approach may be faster.

Refs:

[https://www.geeksforgeeks.org/dynamic-programming/](https://www.geeksforgeeks.org/dynamic-programming/)
