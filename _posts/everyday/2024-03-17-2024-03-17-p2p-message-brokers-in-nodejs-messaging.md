---
title: P2P & Message brokers in Nodejs messaging
tags: ["nodejs"]
date: 2024/03/17
slug: 2024-03-17-p2p-message-brokers-in-nodejs-messaging
---

If scalability is about splitting, then systems integration is about rejoining. Generally, there are 2 main techniques for integrating distributed applications:

- **Shared storage**: shared repository of data and state information -> SQL/NoSQL databases.
- **Messaging**: disseminate data, events, and commands across the nodes of the system.

With messaging technique, we will divide into 2 approaches also:

- **Peer-to-Peer (P2P)**.
- **Message Broker**.

![P2P vs Message Broker](https://raw.githubusercontent.com/southxzx/handbook-gatsby/main/_posts/everyday/_meta/nodejs-p2p-vs-message-broker.png)

## 1. Message Queue

For messaging communications, it's the same story with handling asynchronous operations in Nodejs.

![Message Queue](https://raw.githubusercontent.com/southxzx/handbook-gatsby/main/_posts/everyday/_meta/nodejs-message-queue.png)

With Message Queue, messages can be stored and then delivered asap or later. This is useful when the receiver is too busy or we want to guarantee the delivery.

## 1. P2P

> Nodes (computers or devices) communicate directly with each other without the need for a centralized server. Each node can act both as a client and a server, capable of sending and receiving messages to and from other nodes in the network.

Example: socket.io, RESTful HTTP,...

## 2. Message Broker

> Act as an intermediary component that facilitates communication between different parts of a distributed system by routing messages from producers to consumers. It acts as a centralized hub where messages are temporarily stored and then forwarded to the appropriate destination based on predefined rules or routing criteria.

Example: RabbitMQ, Apache Kafka, Redis publish/subscribe,...

**Refs:**

[Book] Node.js Design Patterns by _Mario Casciaro_
