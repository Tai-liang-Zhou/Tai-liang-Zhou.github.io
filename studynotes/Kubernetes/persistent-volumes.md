---
id: persistent-volumes
title: Persistent volumes
sidebar_position: 2
---

為了不讓儲存資料隨著 POD 的刪除而消失，就需要使用 Persistent Volumes (PVs) 和 Persistent Volume Claims (PVCs) 來管理和分配儲存資源

## Persistent Volumes

- PV ( PersistentVolume，PV ): 是 kubernetes 群集中的儲存資源。 有著獨立於 POD 的生命週期，並且可以在不同 POD 之間共享。 PV 可以是物理儲存，網路儲存，雲端儲存，或本地儲存。

## Persistent Volumes Claims

- PVC (Persistent Volume Claims，PVC): 是 user 對於 PV 的儲存資源請求。定義出對 PV 的儲存需求，儲存模式和其他參數，以便 kubernetes 對根據設定動態綁定適合的 PV。

## Lifecycle

PVs 和 PVC 之間的互相作用遵循以下生命週期

Provisioning ——-> Binding ——–>Using——>Releasing——>Recycling

- Provisioning: 有兩種方法提供儲存資源

  - Static: 由 admin 創建多個 PV 提供給 PVC 使用
  - Dynamic: 動態創建給 PVC 特定的 PV 並動態綁定

- Binding: 當 PVC 被創建將會進入等待綁定狀態。直到 kubernetes 將符合 PVC 需求的 PV 進行綁定，並進入已綁定狀態。
- Using: 一但 PVC 與 PV 绑定，Pod 可以使用該 PVC 進行掛載，從而訪問持久化儲存。Pod 可以在其生命周期内使用該 PVC 和與之绑定的 PV。
- Releasing and Recycling: 一但 PVC 被刪除，綁定的 PV 將被釋放。 根據 PV 的回收策略，可以選擇性的對底層儲存資源進行清理或重置，以供後續的的 PVC 重新使用。

## Types of Persistent Volumes

Kubernetes 支援的幾種 PV

PersistentVolume types are implemented as plugins. Kubernetes currently supports the following plugins:

- cephfs - CephFS volume
- nfs - Network File System (NFS) storage
- rbd - Rados Block Device (RBD) volume
- csi - Container Storage Interface (CSI)
- fc - Fibre Channel (FC) storage
- hostPath - HostPath volume (for single node testing only; WILL NOT WORK in a multi-node cluster; consider using local volume instead)
- iscsi - iSCSI (SCSI over IP) storage
- local - local storage devices mounted on nodes.

---

## Reference

- [Persistent Volumes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/)
- [kubernetes 系列 11—PV 和 PVC 详解](https://www.cnblogs.com/along21/p/10342788.html)
- [k8s 中的 PV 和 PVC 理解](https://boilingfrog.github.io/2021/07/01/k8s%E4%B8%AD%E7%9A%84PV%E5%92%8CPVC%E7%90%86%E8%A7%A3/)
