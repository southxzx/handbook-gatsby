---
title: "Dijkstra + Python's heapq"
tags: ["python", "algorithm"]
date: 2024/08/27
slug: 2024-08/27-dijkstra-python-heapq
---
## 1. Heap

**Heapq** in Python is a built-in module that help us with the **heap** data structure.

Some of **heapq** functions:
- `heapq.heappush(heap, item)`: Push the value item onto the heap, maintaining the heap invariant.
- `heapq.heappop(heap)`: Pop and return the smallest item from the heap.
- `heapq.heapify(x)`: Transform list x into a heap, in-place, in linear time. (not sorted)

```python
heap = []

# Push tuples into the heap
heapq.heappush(heap, (2, 'B'))
heapq.heappush(heap, (1, 'A'))
heapq.heappush(heap, (3, 'C'))
heapq.heappush(heap, (1, 'D'))

#(1, 'A')
#(1, 'D')
#(2, 'B')
#(3, 'C')
```

## 2. Dijkstra

A popular algorithm to solve a problem about finding smallest path of a graph.

Couple things needed:
- Graph: can be a dictionary which stores each node with tuples of it's neighbor node and weight.

```python
graph = {
        0: [(1, 10), (2, 20)],
        1: [(2, 30), (3, 50), (4, 10)],
        2: [(3, 20), (4, 33)],
        3: [(4, 2)],
        4: []
    }
```

- Heap: store tuples of `(distance, node)`
- Distance Array: keep track of the shortest known distance from the start to this node.
- Main Loop: 
    + Start with the start node, push it into the heap with a distance of 0.
    + Pop the node with the smallest distance in the heap.
    + Calculate the new distance for each neighbor node and push to heap if it's smaller than the previously known distance.

```python
import heapq

def dijkstra(graph, source):
    # Number of vertices in the graph
    V = len(graph)
    
    # Initialize distances with infinity
    distances = [float('inf')] * V
    distances[source] = 0
    
    # Priority queue to hold vertices to explore, initialized with the source node
    priority_queue = [(0, source)]  # (distance, vertex)
    
    while priority_queue:
        current_distance, u = heapq.heappop(priority_queue)
        
        # Skip any outdated entries in the priority queue
        if current_distance > distances[u]:
            continue
        
        # Explore neighbors
        for v, weight in graph[u]:
            distance = current_distance + weight
            
            # If a shorter path is found
            if distance < distances[v]:
                distances[v] = distance
                heapq.heappush(priority_queue, (distance, v))
    
    return distances
```

***Refs:***

Chat GPT

https://docs.python.org/3/library/heapq.html

