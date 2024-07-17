---
title: "Processes and threads in Android"
tags: ["android"]
date: 2024/07/17
slug: 2024-07-17-processes-and-threads-in-android
---

## 1. Processes:

By default, each component of an android app is run in the same process.

But, we can change that so different components can run in separate processes --> This is done by modifying the manifest file.

## 2. Threads:

When an application is launched, the system creates a thread of execution called **main thread**.

The **main thread** will deal with stuff like user interface, drawing events,.. so it can be called **UI thread**.

If we run everything on the **main thread**, sometimes it can yield a poor performance when handling tasks such as network access, images loading, DB queries,... --> Any of these tasks can block the **main thread** and cause lagging or even the "Application Not Responding" error.

The Android UI toolkit is not *thread-safe*, then don't use something related to the UI on the worker thread.

There are 2 rules:
- Don't block the UI thread
- Don't access the Android UI toolkit from outside the UI thread

Android offers several ways to access the UI thread from other threads:

- `Activity.runOnUiThread(Runnable)`
- `View.post(Runnable)`
- `View.postDelayed(Runnable, long)`

Ex: we load the image in the worker thread but only update it on the UI in the **UI thread** only.

```java
fun onClick(v: View) {
    Thread(Runnable {
        // A potentially time consuming task.
        val bitmap = processBitMap("image.png")
        imageView.post {
            imageView.setImageBitmap(bitmap)
        }
    }).start()
}
```

Refs:

https://developer.android.com/guide/components/processes-and-threads#kotlin
