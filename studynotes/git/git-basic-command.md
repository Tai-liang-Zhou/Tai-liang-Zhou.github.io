## 版本回退

HEAD 指向的版本就是當前版本，因此，Git 允許我們在版本的歷史之間穿梭，使用命令

```bash
git reset --hard commit_id。
```

穿梭前，用 git log 可以查看提交歷史，以便確定要回退到哪個版本。

要重返未來，用 git reflog 查看命令歷史，以便確定要回到未來的哪個版本。

撤銷修改

1. `git checkout -- file` 回歸當前頁面的修改
1. 已經 add 到 temp 區之後想要丟棄修改 `git reset HEAD <file>` 就會回到 step 1

## Git stash

- `git stash` 來儲存目前修改
- `git stash list` 列出所有儲存的 stash
- `git stash apply` 恢復儲存的 stash 但是 stash 的內容並沒有被刪除
- `git stash drop` 刪除 stash
- `git stash pop` 恢復儲存的 stash 並刪除
- `git cherry-pick <hash id>` 複製一個 commit 到當前的 branch

---

### Reference

[Git 教程](https://www.liaoxuefeng.com/wiki/896043488029600)
