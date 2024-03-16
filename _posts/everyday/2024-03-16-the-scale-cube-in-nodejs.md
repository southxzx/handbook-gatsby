---
title: The scale cube in Nodejs
tags: ["nodejs"]
date: 2024/03/16
slug: 2024-03-16-the-scale-cube-in-nodejs
---

To scale an application, we have 3 dimensions that need to be scaled as described below with the cubic model from [AKF Scale Cube](https://akfpartners.com/growth-blog/scale-cube):

![Scale cube](https://raw.githubusercontent.com/southxzx/handbook-gatsby/main/_posts/everyday/_meta/nodejs-scale-cube.jpeg)

## 1. X-AXIS: Cloning/Replicating

> X-axis scaling consists of running N instances of a cloned application or replicated database. Proxied by a load balancer, each instance handles 1/Nth the load.

Load-balancing is the key of it. There are some ways that can be implemented:

- **Cluster module**: core library --> distribute work to the workers (child processes) --> but it's stateless.
- **Reverse proxy/Gateway**: act as a load balancer (**Nginx**).

## 2. Y-AXIS: Splitting different things

> Functional decomposition, monoliths are separated along functional or resource oriented boundaries to create macro and microservices. This allows you to scale each service independently and apply more resources only to the services that need them.

Microservice Architecture (MA) is the key of this:

![Microservice Architecture](https://raw.githubusercontent.com/southxzx/handbook-gatsby/main/_posts/everyday/_meta/monolithic-vs-microservices-architecture.jpg)

But there's also pros and cons:

- Pros:
  + Every service is expendable: having it's own context.
  + Reusability across different platforms, languages.

- Cons: hard to manage, deployment, code sharing,..

To make all the services to collab in MA, we need some patterns such as: API Proxy (API Gateway), API orchestration, Message broker.

## 3. Z-AXIS: Splitting similar things

> It is quite similar to X- Scaling and hence confused a lot. Here, each replica runs the same copy of code. But each replica is not doing exactly the same thing. The workload is distributed amongst them. One replica only works on a subset of data. A part of the application routes each request to the appropriate server. It can be done on a geographical basis to increase the response speed. It is also done on the basis of customer. For example, a privilege customer of an application will be routed to a faster set of servers. Just like there are a lot of download servers which limit download speed for non-paying customers.

We're not gonna mention much about this for Nodejs applications.


**Refs:**

[Book] Node.js Design Patterns by _Mario Casciaro_

https://akfpartners.com/growth-blog/scale-cube