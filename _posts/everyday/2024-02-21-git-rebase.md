---
title: Git rebase
tags: ["git"]
date: 2024/02/21
slug: 2024-02-21-git-rebase
---

### Git Rebase: Reapply commits on top of another base tip.

### --> Maintain a clear history (linear).

## 1. How does it work?

Let's take an example with this following tree, current branch is **"topic"**:

          A---B---C topic
         /
    D---E---F---G master

From this point, the result of either of the following commands:

```

git rebase master
git rebase master topic (git checkout topic + git rebase master)
```

would be:

                  A'--B'--C' topic
                 /
    D---E---F---G master

*Note: The `git rebase master` command is used to rebase your current branch onto the tip of the **local** master branch. Otherwise, you need to specify the remote branch*

```
git rebase origin/master
```

## 2. Conflicts

Incase of conflicts while rebasing, we can resolve it with VScode and then use these following commands:

```

git rebase --continue (continue rebasing process)
git rebase --abort (stop it, undo the git rebase)
```

## 3. Git Rebase vs Git Pull

As we already known, **Git Pull** is a combination of **Git Fetch + Git Merge**. Then it will create a merge commit and preserve the commit history of both branches.

But with **Git Rebase**, we just simply rebase our branch onto the tip of the target branch, rewrite the commit history of our branch and place our commits on top (Linear).

--> That means we can get rid of the merge commit that is generated auto by Git when doing **Git Pull**:

`Merge pull request #12 from ABC/release/1.0.1`


**Refs:**

https://git-scm.com/docs/git-rebase




