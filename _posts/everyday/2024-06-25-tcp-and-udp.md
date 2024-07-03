---
title: "TCP and UDP"
tags: ["network"]
date: 2024/06/25
slug: 2024-06-25-tcp-and-udp
---

In the Transport Layer of OSI model we have 2 major protocols are TCP and UDP.

![OSI Model](https://raw.githubusercontent.com/southxzx/handbook-gatsby/main/_posts/everyday/_meta/osi-model.jpg)

## 1. TCP

TCP is using the "three-way handshake" that form a connection (SYN-ACK)

- Features:

  - Keep track of the segments that being transmitted/receiving.
  - Implement the error control mechanism --> Reliable.
  - Slow, using more bandwidth.
  - Can be sequencing (order of data)

- Ex: WWW, Email (SMTP), FTP, SSH,...

## 2. UDP

UDP works by immediately firing data and doesn't care about the delivery part. So it's connectionless compared with TCP.

- Features:

  - Fast but not reliable.
  - Support multicast and broadcast (live, real-time data).
  - Don't have mechanism to track the sequence of data.

- Ex: Online gaming, Video chat, DNS,...

## 3. Difference

A picture can say it all.

![TCP vs UDP](https://raw.githubusercontent.com/southxzx/handbook-gatsby/main/_posts/everyday/_meta/tcp-udp.jpg)

Refs:

https://www.geeksforgeeks.org/differences-between-tcp-and-udp/

https://www.avast.com/c-tcp-vs-udp-difference
