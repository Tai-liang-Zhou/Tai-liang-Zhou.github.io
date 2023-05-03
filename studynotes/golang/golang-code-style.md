---
id: golang-code-style
title: Golang Code Style
sidebar_position: 1
---
# golang code style

## ERROR

---

### Returning errors

- 用 error 表示一個 function 可能會處理失敗狀況
- error 通常放在回傳的最後一個參數

```go
func Good() error { /* ... */ }
```

- 如果有回傳 error，請用 `error` type 不然容易造成 bug

```go
// Bad:
func Bad() *os.PathError { /*...*/ }
```
:::tip
**Tip** : 如果 function arg 包含 `context.Context` 通常都會 return `error` ， caller 可以使用此 error 來判斷 context 是否需要 cancel
:::
### Error strings

- error string 不應該是大寫

```go
// Bad:
err := fmt.Errorf("Something bad happened.")
// Good:
err := fmt.Errorf("something bad happened")
```

- logging, test failure, API response, or other UI 應該為大寫

```go
// Good:
log.Infof("Operation aborted: %v", err)
log.Errorf("Operation aborted: %v", err)
t.Errorf("Op(%q) failed unexpectedly; err=%v", args, err)
```

### Handle errors

處理 error 的時候使用 `_` 變數是不適當的
如果一個 function 會 return 一個 error ， 以下是適當的處理方法

1. 立即處理這個 error
2. return errro 給 caller
3. 如果發生預期之外的狀況，請使用 `panic` or `fatal`

- 有些罕見狀況會忽略掉 error ， 這時候必須加上適當的 commend 解釋為什麼不用處理 error

```go
// Good:
var b *bytes.Buffer

n, _ := b.Write(p) // never returns a non-nil error
```

## Language

---

### Nil slices

- 如果想要宣告一個 空值 slice

```go
// Good:
var t []string
// Bad:
t := []string{}
```

- 不應該讓 client 自己判斷 return 回來的值是否為空

```go
// Good:
// Ping pings its targets.
// Returns hosts that successfully responded.
func Ping(hosts []string) ([]string, error) { ... }

// Bad:
// Ping pings its targets and returns a list of hosts
// that successfully responded. Can be empty if the input was empty.
// nil signifies that a system error occurred.
func Ping(hosts []string) []string { ... }
```

- 在 design an interface 時，盡量避免區分 `nil` or non-`nil`, zero-length slice

```go
// Good:
// describeInts describes s with the given prefix, unless s is empty.
func describeInts(prefix string, s []int) {
    if len(s) == 0 {
        return
    }
    fmt.Println(prefix, s)
}
```

### Indentation confusion

當同一行 code 過長需要換行時造成的 `縮排混淆`

可以用下面三種方法處理

- [Function formatting](#function-formatting)
- [Conditionals and loops]
- [Literal formatting]

### Function formatting

當 function arg 參數過過多時造成的 `縮排混淆`

```go
// Bad:
func (r *SomeType) SomeLongFunctionName(foo1, foo2, foo3 string,
    foo4, foo5, foo6 int) {
    foo7 := bar(foo1)
    // ...
}
```

可以宣告一個 [Option structure](https://google.github.io/styleguide/go/best-practices#option-structure) 處理

```go
// Good:
good := foo.Call(long, CallOptions{
    Names:   list,
    Of:      of,
    The:     parameters,
    Func:    all,
    Args:    on,
    Now:     separate,
    Visible: lines,
})
```

如果 call-site 更長的話嘗試 refactoring:

```go
// Good:
// Sometimes variadic arguments can be factored out
replacements := []string{
    "from", "to", // related values can be formatted adjacent to one another
    "source", "dest",
    "original", "new",
}

// Use the replacement struct as inputs to NewReplacer.
replacer := strings.NewReplacer(replacements...)
```

### Conditionals and loops

if 判斷式不應該被打斷，會造成 `縮排混淆`

```go
// Bad:
// The second if statement is aligned with the code within the if block, causing
// indentation confusion.
if db.CurrentStatusIs(db.InTransaction) &&
    db.ValuesEqual(db.TransactionKey(), row.Key()) {
    return db.Errorf(db.TransactionError, "query failed: row (%v): key does not match transaction key", row)
}
```

boolean operands 可以先進行提取 :

```go
// Good:
inTransaction := db.CurrentStatusIs(db.InTransaction)
keysMatch := db.ValuesEqual(db.TransactionKey(), row.Key())
if inTransaction && keysMatch {
    return db.Error(db.TransactionError, "query failed: row (%v): key does not match transaction key", row)
}
```

### Copy

當 copy 一個 struct 的時候需要特別小心，可能會造成意想不到的 bug

```go
// Bad:
b1 := bytes.Buffer{}
b2 := b1
```

上面這段例子，b2 copy b1 struct ，buffer 包含了 bytes 的 slice ，有可能改動 b2 的值會連 b1 的值也一起改動

如果要避免這種狀況 在 `receiver` 裡面使用 return pointer 可以避免這種狀況：

```go
// Good:
type Record struct {
  buf bytes.Buffer
  // other fields omitted
}

func New() *Record {...}

func (r *Record) Process(...) {...}

func Consumer(r *Record) {...}
```

### [Pass values](https://google.github.io/styleguide/go/decisions#pass-values)

==Do not pass pointers as function arguments==

`但此建議不適用於比較大的 struct 或者是 可能增大的 小型 struct`

### Receiver type

- 如果 receiver 是一個 slice 而且 method 不會 reslice 和 reallocate the slice， receiver 用 `value`:

```go
// Good:
type Buffer []byte

func (b Buffer) Len() int { return len(b) }
```

- 如果 receiver 裡的 method 會改變 receiver 的值，那 receiver 一定要用 `pointer`:

```go
// Good:
type Counter int

func (c *Counter) Inc() { *c++ }

// See https://pkg.go.dev/container/heap.
type Queue []Item

func (q *Queue) Push(x Item) { *q = append([]Item{x}, *q...) }
```

- 如果 receiver 是一個 包含 field 是 cannot safely be copied，需要用 pointer:

```go
// Good:
type Counter struct {
    mu    sync.Mutex
    total int
}

func (c *Counter) Inc() {
    c.mu.Lock()
    defer c.mu.Unlock()
    c.total++
}
```

- 如果 receiver 是一個 struct ，而且包含 可能被改變的 pointer element， 則使用 pointer:

```go
// Good:
type Counter struct {
    m *Metric
}

func (c *Counter) Inc() {
    c.m.Add(1)
}
```

- 如果 receiver 是一個 build-in type 像是 string or int，且不會被改變，則用 value:

```go
// Good:
type User string

func (u User) String() { return string(u) }
```

- 如果 receiver 是一個 map, function, or channel，則用 value :

```go
// Good:
// See https://pkg.go.dev/net/http#Header.
type Header map[string][]string

func (h Header) Add(key, value string) { /* omitted */ }
```

- 如果 receiver 是一個很小的 array or struct 並且 value 不會被改變，則使用 value :

```
// Good:
// See https://pkg.go.dev/time#Time.
type Time struct { /* omitted */ }

func (t Time) Add(d Duration) Time { /* omitted */ }
```

### Use %q

使用 %q 來表示 雙引號的 輸出

```go
// Good:
fmt.Printf("value %q looks like English text", someText)
```

## Common libraries

---

### Flags

- flag 名稱盡量用 sanke case
- 變數用 camel case

```go
// Good:
var (
    pollInterval = flag.Duration("poll_interval", time.Minute, "Interval to use for polling.")
)
```

### Contexts

- 通常當第一個參數
- contexts 通常當作 參數 傳入 function
  > When designing an API with context, remember the advice: pass `context.Context` in as an argument; don’t store it in structs.

```go
// Worker fetches and adds works to a remote work orchestration server.
type Worker struct { /* … */ }

type Work struct { /* … */ }

func New() *Worker {
  return &Worker{}
}

func (w *Worker) Fetch(ctx context.Context) (*Work, error) {
  _ = ctx // A per-call ctx is used for cancellation, deadlines, and metadata.
}

func (w *Worker) Process(ctx context.Context, work *Work) error {
  _ = ctx // A per-call ctx is used for cancellation, deadlines, and metadata.
}
```

- context 放進 structs 裏面是不好的行為

- 會有模糊不清的呼叫時機
  > the user is unable to provide a deadline just for `(*Worker).Fetch`, or cancel just the `(*Worker).Process` call.

```go
type Worker struct {
  ctx context.Context
}

func New(ctx context.Context) *Worker {
  return &Worker{ctx: ctx}
}

func (w *Worker) Fetch() (*Work, error) {
  _ = w.ctx // A shared w.ctx is used for cancellation, deadlines, and metadata.
}

func (w *Worker) Process(work *Work) error {
  _ = w.ctx // A shared w.ctx is used for cancellation, deadlines, and metadata.
}
```

- An API example with context time out

```go
package main

import (
	"context"
	"fmt"
	"net/http"
	"time"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		ctx, cancel := context.WithTimeout(r.Context(), 1*time.Second)
		defer cancel()

		select {
		case <-time.After(2 * time.Second):
			w.Write([]byte("Slow operation complete"))
		case <-ctx.Done():
			w.Write([]byte("Request timed out"))
		}
	})

	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		fmt.Println(err)
	}
}
```

### Table-driven tests

有不同的測試子集需要被測試時

> Use table-driven tests when many different test cases can be tested using similar testing logic.
