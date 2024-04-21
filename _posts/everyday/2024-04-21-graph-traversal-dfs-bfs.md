---
title: "Graph traversal: DFS & BFS"
tags: ["algorithm", "leetcode"]
date: 2024/04/21
slug: 2024-04-21-graph-traversal-dfs-bfs
---

**Depth-First Search (DFS)** and **Breadth-First Search (BFS)** are the two most popular methodologies to perform **Graph/Tree traversal**.

## 1. DFS:

DFS explores as far as possible along each branch before backtracking.

Data structure used: **Stack**

```
  Input:
        A
       / \
      B   D
     /   / \
    C   E   F

    -> A, B, C, D, E, F
```

## 2. BFS

BFS explore all neighbor nodes at the current node before moving on to the next node at the next depth level.

Data structure used: **Queue**

```
  Input:
        A
       / \
      B   D
     /   / \
    C   E   F

    -> A, B, D, C, E, F
```

## 3. In Action

Let's assess the two algorithms by solving this problem on Leetcode: **Number of Islands (200)**

The requirement is we need to find the number of islands `"1"` which is covered by water `"0"`.

Ex: 

```
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
```

The idea is we're going to find the first node with value of `"1"` and try to expand until we met water `"0"`. We mark each visited node as `"0"`. Keep repeat and increase the result value.

- With DFS:

```python
def numIslands(self, grid: List[List[str]]) -> int:
    island = 0

    def dfs(row, col):
        if row < 0 or col < 0 or row >= len(grid) or col >= len(grid[0]) or grid[row][col] == "0":
            return
        grid[row][col] = "0"
        dfs(row,col+1)
        dfs(row+1,col)
        dfs(row,col-1)
        dfs(row-1,col)

    for i, row in enumerate(grid):
        for j, col in enumerate(row):
            if col == "1":
                island += 1
                dfs(i,j)
    
    return island
```

- With BFS:

```python
def numIslands(self, grid: List[List[str]]) -> int:
    island = 0

    def bfs(row, col):

        grid[row][col] = "0"
        queue = deque([(row, col)])

        while queue:
            x, y = queue.popleft()
            for dx, dy in [(0,-1), (1,0), (0,1), (-1,0)]:
                nx = x + dx
                ny = y + dy
                if nx < len(grid) and nx >= 0 and ny < len(grid[0]) and ny >= 0 and grid[nx][ny] == "1":
                    queue.append((nx,ny))
                    grid[nx][ny] = "0"

    for i, row in enumerate(grid):
        for j, col in enumerate(row):
            if col == "1":
                island += 1
                bfs(i,j)
    
    return island
```

Refs:

https://www.geeksforgeeks.org/difference-between-bfs-and-dfs/

[Depth First Search Algorithm | Graph Theory](https://www.youtube.com/watch?v=7fujbpJ0LB4)

[Breadth First Search Algorithm | Shortest Path | Graph Theory](https://youtu.be/oDqjPvD54Ss?si=He3q3Bls52g67aSC)
