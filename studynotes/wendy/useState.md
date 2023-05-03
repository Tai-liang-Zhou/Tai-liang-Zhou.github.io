---
id: wendy-second-study-page
title: useState
sidebar_position: 1
---

### 簡述

當在 react 裡要設置變數，並對他進行更新，會發生變數一直不會更新的狀態是因為：

**<label style={{color:"var(--ifm-color-primary)"}}>1. 變數不會在渲染中保存：</label>**  
當其他變數更新後重新渲染整個組件，其他沒有此次要更動的變數會一起重新渲染變回預設值

**<label style={{color:"var(--ifm-color-primary)"}}>2. 數值不會自動重新渲染：</label>**  
數值只是 javascript 的一個變數，並不是 react 的一部分，所以變數更改後 react 也不會重新渲染

使用 useState：  
1.在重新渲染時仍保持變數的改變狀態  
2.在變數更新時觸發重新渲染

---

### 使用範例

#### **<span style={{color:"var(--ifm-color-primary)"}}>useState(initialState/預設值)</span>**

```js
//React import
import { useState } from "react";

//原始變數寫法
// This will error
let index = 0;

//使用useState寫法
// This will correct
const [index, setIndex] = useState(0);

//使用set，改變變數值
function handleClick() {
  // This will correct
  setIndex(index + 1);
}
```

- index 是目前的變數
- setIndex 是執行更新的 function

<a href="https://react.dev/learn/state-a-components-memory">學習資源</a>

---

### vue 的相似觀念

在變數的處理上，vue 是使用 data 屬性來定義各個變數，並透過直接賦予值的方式來更新變數

#### vue 的範例

```js
<script>
    export default{
        data:()=>({
            index:0
        })
    }
</script>
```
