---
id: services
title: Services
sidebar_position: 3
---

有 image.png 四種不同的 services

- ClusterIP Services
- Headless Services
- NodePort Services
- LoadBalancer Services

## ClusterIP Services

request 會傳到哪些 POD ?

- 符合 `selector` & label 條件

![img](assets/Screenshot%202023-06-10%20at%2011.01.59%20AM.png)

## Headless Services

使用於兩種狀況

1. client wants to communicate with 1 specific Pod
1. Pods want to talk with specific Pod
   ![](assets/headless-services.png)

## NodePort Services

![img](assets/NodePort.png)
![img](assets/NodePort2.png)

## LoadBalancer Services

![img](assets/loadbalancer.png)
![img](assets/loadbalancer2.png)

---

## Reference

- [Kubernetes Services explained | ClusterIP vs NodePort vs LoadBalancer vs Headless Service](https://www.youtube.com/watch?v=T4Z7visMM4E)
