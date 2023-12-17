---
title: Github internals (part 1)
tags: ["git"]
date: 2023/12/17
slug: 2023-12-17-github-internals-part-1
---

Notes from this talk: [Git Internals by John Britton of GitHub - CS50 Tech Talk](https://www.youtube.com/watch?v=lG90LZotrpo&ab_channel=CS50)

## 1. What is Git?

Git is a version control system that is used for:
- Tracking changes in source code --> collaborate.
- As a document with all the history.

The key concept of Git is **distributed**, **decentralized** that you can have a local copy of the entire development history and then later synced with the central repo.

All the information needed to represent the history of a project is a **SHA1 Hash** with 40-digit.

## 2. .git

We'll talk more about local with the folder `.git`

We can examine the `.git` folder by using `tree` command:

```
.git
...
├── objects
│   ├── 00
│   │   └── 1e6e4e7ab92de5459d79c511dee9ded198a9db
│   ├── 01
│   │   └── 0d0a0d38bd1075d13bb47c3857d76efe443aeb
│   ├── 02
│   │   ├── 5052cd3b2fbd4097ff24f9c7a1a276a21ab50a
│   ├── info
│   └── pack
└── refs
    ├── heads
    │   ├── about
    │   ├── main
    │   └── maps
    ├── remotes
    │   └── origin
    │       ├── about
    │       ├── main
    │       └── maps
    └── tags
```

### 2.1 Git Object Model

Git Object model is a foundational aspect of Git. Every object consist of 3 things: **type, size, content**.

There are 4 types of objects:
- **Blob**: file data
- **Tree**: basically like a directory. It references to others tree/blob
- **Commit**:
  + A snapshot of the repo at the given time
  + Commit reflects a tree, a tree reflects sub tree or blob file
- **Tag**: mark specific points in history --> used for release

Let's look at the sketch about git stages:

![Git stage](https://raw.githubusercontent.com/southxzx/handbook-gatsby/main/_posts/everyday/_meta/git-stages.png)

- `git add`: This command stages changes for the next commit. Copy it to **Staging**
- `git commit`: Commit them to repository, this commit object contains a snapshot of your staged changes, author, message, committer.

>What `git commit` does is creating a moment in time, that said that person creating a snapshot with this message. And that snapshot is represented by tree

![Git commit process](https://raw.githubusercontent.com/southxzx/handbook-gatsby/main/_posts/everyday/_meta/objects-example.png)

- `git reset`: Opposite with git add. It throws everything that is not committed and go back to the latest version that we're working on.

- `git reset --hard`: Is more powerful that it also discards the changes on Staging.

### 2.2 Git refs

Here's come the **branch**, we commonly mistake branch as a divergence that we go into different directions. But what is actually do is to point to any commits in our repo. Think it like a bookmark which is a tool for navigating around the repo history.

**Branch --> pointer (refs) --> any commits in the repo.**

The term **"being on the branch"** is actually that the next commit on that branch should be moved forward automatically to point to the new commit that we just created.

What's inside a branch is just a hash (a commit hash) that is mutable.

`git commit`: When we perform this command, git also points that commit to its parent (the commit before)

![Git commit refs](https://raw.githubusercontent.com/southxzx/handbook-gatsby/main/_posts/everyday/_meta/advance-testing.png)

`git checkout`: Specify a commit (a snapshot of our project when update the working directory to reflect that project). 

`git diff`: Comparing working directory with Staging.

`git diff --staged`: Comparing the changes we've jst staged with our last commit.

**Refs:**

[Git Internals by John Britton of GitHub - CS50 Tech Talk](https://www.youtube.com/watch?v=lG90LZotrpo&ab_channel=CS50)
https://shafiul.github.io/gitbook/1_the_git_object_model.html




