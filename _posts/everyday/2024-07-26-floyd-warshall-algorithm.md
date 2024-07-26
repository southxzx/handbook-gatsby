---
title: "Floyd Warshall Algorithm"
tags: ["leetcode", "algorithm"]
date: 2024/07/26
slug: 2024-07-26-floyd-warshall-algorithm
---

This algorithm is used to find the shortest paths between all pairs of nodes in a weighted graph.

It's different with **Dijkstra** and **Bellman Ford** because those are single source. Meanwhile, **Floyd Warshall** can work for every nodes.

**Floyd Warshall** is based on **Dynamic Programming**.

## 1. The idea

If we want to find the shortest path between `i` and `j` then we will have some `k` number of intermediate nodes (k can be 0). The idea of this algorithm is that we will try to treat every nodes as the intermediate node one by one.

`i ----> k ----> j (while k is each and every vertice of our graph).`

## 2. Pseudo code

```
let dist be a |V| × |V| array of minimum distances initialized to ∞ (infinity)
for each edge (u, v) do
    dist[u][v] ← w(u, v)  // The weight of the edge (u, v)
for each vertex v do
    dist[v][v] ← 0
for k from 1 to |V|
    for i from 1 to |V|
        for j from 1 to |V|
            if dist[i][j] > dist[i][k] + dist[k][j] 
                dist[i][j] ← dist[i][k] + dist[k][j]
            end if
```

## 3. Real problem

Let's solve this problem on Leetcode: ["1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance"](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/description/)


```python
class Solution:
    def findTheCity(self, n: int, edges: List[List[int]], distanceThreshold: int) -> int:
        arr = [[float("inf")] * n for _ in range(n)]

        for [a,b,w] in edges:
            arr[a][b] = w
            arr[b][a] = w

        for i in range(n):
            arr[i][i] = 0

        for k in range(n):
            for i in range(n):
                for j in range(n):
                    arr[i][j] = min(arr[i][j], arr[i][k] + arr[k][j])

        ans = [0] * n
        for i in range(n):
            for j in range(n):
                if i == j: continue
                if arr[i][j] <= distanceThreshold:
                    ans[i] += 1
        
        res = 0
        for i in range(n):
            if ans[i] <= ans[res]:
                res = i

        return res
```

Refs:

https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/

https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm

