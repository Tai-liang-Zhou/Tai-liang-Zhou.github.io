---
id: filebeat
title: Filebeat
sidebar_position: 2
---

## 使用 filebeat 目的

以往將 log 搬運到 ELK 會遇到以下問題

1. Elastic 空間效能有限，大量的 log 將會把 Server 打爆
1. Logstash 吃大量資源和效能會對 Server 造成負擔 (CPU or MEM High)

Filebeat、Logstash 都是用於收集、轉換和傳輸日誌數據的工具，它們各有優缺點，具體比較如下：

## filebeat 使用簡單

| Tool     | Pros                                                     | Cons                                                          |
| -------- | -------------------------------------------------------- | ------------------------------------------------------------- |
| Filebeat | Lightweight<br/>Less system resources                    | Does not have data processing and transformation capabilities |
| Logstash | Multiple data processing and transformation capabilities | Requires more system resources and occupies more memory       |

## Filebeat 怎麼運作的

filebeat 包含兩個主要部份 `harvesters` 和 `inputs` 會一起運作將 log 做輸出

### harvester

harvester 讀取每一份檔案 line by line 並把內容作輸出。
在 harvester 開啟與關閉檔案時，如果檔案被移除或改名 Filebeat 還是會持續讀取檔案
這個會造成一個 side effect ， 就是檔案會被保存在 disk 中，直到 harvester 讀取完檔案

### inputs

input 是用來管理 harvesters 和找尋可以用來讀取的資料源

### Filebeat 怎麼保存每個檔案的狀態？

Filebeat 保存讀取狀態到 registry file. 最後讀取的位置將會保存用以確保每一筆資料都有被上傳。 當 elastic 或 logstash 變得不可服務時，Filebeat 會保存最後讀取位置並持續讀取資料，直到服務回歸，Filebeat 會繼續將未上傳的資料上傳。Filebeat 用一組 unique id 代表讀取過的檔案名稱。

### Filebeat 怎麼確保每筆資料都有上傳

當 Filebeat 在傳送中被關閉時，他不會等待 elastic 確認收到之後才關閉。任何沒有收到確認的 event，Filebeat 會都重新傳送一次。這種方法有可能會造成有重複的資料出現。

## filestream input

調整 filebeat 的各種 input 設定

### harvester_limit

用於設定單個 input 平行運行的 harvester 數量，每一個 harvester 用來處理一個檔案，如果增加 `harvester_limit` 的數量可以讓 Filebeat 同時處理更多文件。提高處理效率，default value 為 0，表示不設定 harvester 數量上限，很可能讓ＣＰＵ過高。

```yaml
filebeat.inputs:
  - type: filestream
    enabled: true
    paths:
      - /path/to/log/*.log
    harvester_limit: 8
```

### check_interval

用來設定 file scan 頻率，較小的值將使 filebeat 更頻繁的掃描檔案，也會增加 CPU 和 IO 的負擔

```yaml
filebeat.inputs:
  - type: filestream
    enabled: true
    paths:
      - /path/to/log/*.log
    prospector.scanner.check_interval: 5s
```

### ignore_older

`ignore_older` 用來設定忽略舊檔案的時間。減少文件處理的數量提高文件掃描效率。 在 Filebeat init 時期大量減少 cpu 非常有用。

```yaml
filebeat.inputs:
  - type: filestream
    enabled: true
    paths:
      - /path/to/log/*.log
    ignore_older: 1d
```

### close_renamed & close_removed

> The close_renamed and close_removed options can be useful on Windows to resolve issues related to file rotation. ref: [Open file handlers cause issues with Windows file rotation.](https://www.elastic.co/guide/en/beats/filebeat/7.17/windows-file-rotation.html)

- `close_removed` default 情況下，當 filebeat 處理的文件被刪除的時候，filebeat 還是會持續打開文件，並嘗試讀取文件。通過將 `close_removed` 設定為 true ，可以讓 filebeat 在偵測到文件被刪除之後關閉文件讀取。
- `close_renamed` default 情況下，當 filebeat 處理的文件被 rename 的時候，filebeat 還是會持續打開文件，並嘗試讀取文件。通過將 `close_renamed` 設定為 true ，可以讓 filebeat 在偵測到文件被 rename 之後關閉文件讀取。

```yaml
filebeat.inputs:
  - type: filestream
    enabled: true
    paths:
      - /path/to/log/*.log
    close_removed: true
    close_renamed: true
```

## filestream output

filebeat 上傳頻率是由 filebeat 自己管理的，會根據 config yaml 設定控制上傳頻率。

bulk_max_size 用于設定發送到 Elasticsearch 的每個 batch 的 event 數量 default 為 50。較大的 size 會減少 request 的頻率。相反，較小的 size 增加 request 頻率。

```yaml
output.elasticsearch:
  hosts: ["localhost:9200"]
  bulk_max_size: 2048
```

以上範例將 `bulk_max_size` 設定為 2048。調整調整越大的值代表較高的傳送效率。但也可能吃更多的記憶體或 ＩＯ

## Add fields

增加自定義的 fields 到 filebeat example

```yaml
filebeat.inputs:
  - type: log
    paths:
      - /var/log/nginx/access.log
    fields:
      type: nginx_access
    processors:
      - add_fields:
          target: ""
          fields:
            log_source: "nginx"
```

這個 example 用來處理 nginx 的 access.log，並將一個 fields 是 `type` 覆寫為 nginx_access。還使用了 add_fields 增加了一個 `log_source` 的 field，並設定為 `nginx`

## Log filter

以下 example 使用了 process 來做 log 篩選和轉換

- `drop_event`: 將 log message 裏面包含 "debug" 的 log 刪除
- `dissect`: 將 log message 拆分為 "log_level" 和 "message" 兩個 field
- `add_fields`: 添加一個 "log_source" field 並設定為 system_logs
- `rename`:"log_level" 重新命名為 "severity"
- `convert`: 將 severity 轉成 int
- `drop_event`: 將 log message 符合包含文字或者 regexp 條件的刪除
- `drop_event` source: 將來自於某 source file 的 log message 刪除

```yaml
filebeat.inputs:
- type: log
    paths:
    - /var/log/messages
    fields:
    log_type: system
    processors:
    - drop_event:
        when:
          contains:
          message: "debug"
    - dissect:
        tokenizer: "%{log_level} %{message}"
        target_prefix: "log_"
        field: "message"
    - add_fields:
        target: ""
        fields:
          log_source: "system_logs"
    - rename:
        fields:
          log_level: severity
    - convert:
        fields:
          severity: integer
    - drop_event:
        when:
          contains:
            message: "debug"
    - drop_event:
        when:
          regexp:
            message: "^WARN:"
    - drop_event:
        when:
          contains:
            source: "test"
```
