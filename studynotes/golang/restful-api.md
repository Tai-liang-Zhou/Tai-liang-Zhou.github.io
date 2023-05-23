---
id: restapi
title: Design Effective and Secure REST APIs
sidebar_position: 3
---

To master the art of crafting REST APIs, we need to follow certain guidelines to ensure that we design efficient, user-friendly APIs.

## 3 種 api 需要 redesign 的情況

1. we have thoroughly studied the API documentation, but we are still struggling to understand the nuances of its functionality.
2. If it feels like we are always tweaking and adjusting our APIs, it might suggest that they are not as robust or flexible as they need to be.
3. Consider another example where API parameters and results are vaguely defined. This lack of clarity can lead to confusion and potential errors.

### API Maturity Levels

The Richardson Maturity Model (RMM)
![](assets/Maturity%20Levels.png)

#### Level 0: The Swamp of POX

舊的 XML 沼澤 (The Swamp of POX (Plain Old XML))
single URI and a single HTTP method

#### Level 1: Resources

resource is uniquely identified by a URI, creating an easier way to manage and interact with different elements of a system.
However, it still uses only one HTTP method, POST

#### Level 2: HTTP Verbs

The services at this level not only use unique URIs for resources but also take advantage of different HTTP methods (like GET, POST, PUT, DELETE)

#### Level 3: HATEOAS

HATEOAS (Hypermedia as the Engine of Application State).
we request to query account 12345, not only do we receive the account balance ($100), but the response also guides us on the next steps and how to execute them via URIs.

### HTTP Verbs

1. Map custom operations to standard HTTP verbs.
2. Define a custom HTTP method. For example, in online games, we might need to reset a match. We can define a custom method, such as RESET, for this purpose.

![](assets/HTTP%20Verbs.png)

### Status Codes

![](assets/Status%20Codes.png)

---

ref

- [Design Effective and Secure REST APIs](https://blog.bytebytego.com/p/design-effective-and-secure-rest?utm_source=substack&utm_medium=email)
