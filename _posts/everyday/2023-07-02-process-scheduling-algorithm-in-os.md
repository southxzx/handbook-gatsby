---
title: Process Scheduling algorithm in OS
tags: ["os", "algorithm"]
date: 2023/07/02
slug: 2023-07-02-process-scheduling-algorithm-in-os
---

`Process` is a running program, to run the process we need a OS scheduler to allocate CPU time for each process (run concurrently).

`Process scheduling` enables efficient and fair allocation of CPU to multiple processes, and ensures that the system can run multiple tasks concurrently without sacrificing performance or responsiveness.

Scheduling metrics: _`Tturnaround = Tcompletion − Tarrival`_

## First-Come, First-Serve (FCFS)

Basic as it's name. But if the completion time of the preceding job (process) takes longer time, the remain would have to wait --> [Convoy effect](https://www.tutorialspoint.com/convoy-effect-in-fcfs#:~:text=The%20Convoy%20Effect%20is%20a,to%20use%20those%20same%20resources.)

## Shortest Job First (SJF)

Take the least arrive time & completion time job to put on first. But if the arrive time is small but completion time is large then it fall to Convoy effect again.

## Shortest Time-to-Completion First (STCF)

![STCF_OS_algorithm](https://raw.githubusercontent.com/southxzx/handbook-gatsby/main/_posts/everyday/_meta/STCF_OS_algorithm.png)

This is a `preemptive scheduler`: Preemptive scheduling is used when a process switches from the `running state` -> `ready state` or `waiting state` -> `ready state`.

This does nothing but add `preemption` to SJF. A job is preempted means that it's time is taken away by other jobs.

## Round Robin

Assume that each process now has response time, then we have new metric: _`Tresponse = Tfirstrun − Tarrival`_

Instead of running jobs to completion, RR runs a job for a `time slice` (scheduling quantum).

Compare with STFC, if all arrive time are equal, then the longer jobs will defer the behind jobs.

But this algorithm is worse when there's no response time comparing with STCF, sadly.

## Conclusion

There are 2 approaches:

- Run the shortest job -> optimizing `turnaround time`
- Alternate between jobs -> optimizing `response time`

Both are bad where the other is good, it's a trade-off common in systems.

**Refs:**

[Book] Operating Systems: Three Easy Pieces - _Remzi H. Arpaci-Dusseau_
