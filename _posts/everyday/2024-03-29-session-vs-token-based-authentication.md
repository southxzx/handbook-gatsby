---
title: Session vs Token Based Authentication
tags: ["web", "http", "nodejs"]
date: 2024/03/29
slug: 2024-03-29-session-vs-token-based-authentication
---

We'all know that **HTTP is stateless**. That's why Web apps need to make use of session, by using HTTP cookie that can be available on both Client & Server creates a stateful protocol on top of HTTP.

## 1. Session-based

- Server creates a session for each authenticated user upon successful login.
- Server stores the session information (usually in memory or a database) and associates it with the user's **Session ID**.
- **Session ID** is typically stored in Cookie of browser.
- Subsequent requests from the client include the **Session ID**, the Server will use that to retrieve the session data of the authenticated user.

## 2. Token-based

- When login successfully, Server creates a token (often JWT) --> send to Client.
- Client stores this info (localstorage/cookie) --> includes in subsequent calls.
- Server will verify the token of each request and extract the user info.

Nowadays, most web applications is using token-based authentication, in **Nodejs** we can have some options:

- express + jsonwebtoken
- express + passport-jwt
- express + passport-auth0

 
_👉🏼 **passport** is a popular middleware framework that is used with expressjs. It offers multiple authentication strategies._

**Refs:**

https://viblo.asia/p/session-va-token-based-authentication-yMnKMNbNZ7P


