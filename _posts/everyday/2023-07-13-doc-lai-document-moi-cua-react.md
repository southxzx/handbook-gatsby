---
title: Đọc lại document mới của React
tags: ["react.js"]
date: 2023/07/13
slug: 2023-07-13-doc-lai-document-moi-cua-react
---

Nhìn chung, doc mới dễ đọc và chi tiết hơn, các thành phần chính cơ bản của React thì same nhau, nhưng ở doc mới mình thấy có phần Pitfall và Deepdive ở mỗi phần cũng khá hay, giúp hiểu sâu hơn.

Ngoài ra, doc mới cũng thêm vào 1 số phần khá hay như:

## Event propagation trong React

Cái này mình có viết 1 bài blog trước về mục này rồi, làm sao để dùng `e.stopPropagation()` and `e.preventDefault()` hợp lý.

React cũng nói thêm `render` trong React luôn luôn pure, còn event handlers thì phải thay đổi một cái gì đó nên không nhất thiết phải pure.

## State 

React giải thích khá chi tiết về useState và còn cho cả 1 ví dụ hay ho về useState internally (simplified): https://codesandbox.io/s/hqrhcm?file=/index.js&utm_medium=sandpack.

Ngoài ra, React còn mô tả State as a snapshot kiểu như khi setState sẽ trigger re-render thì function sẽ return về 1 JSX snapshot, React sau đó update screen để match cái snapshot đó.

> Setting state only changes it for the next render / Setting a state variable will queue another render

```Javascript
const [number, setNumber] = useState(0);

<button onClick={() => {
  setNumber(number + 1);
  setNumber(number + 1);
  setNumber(number + 1);
}}>+3</button>
```

Ở ví dụ trên dù `setNumber()` run 3 lần nhưng number chỉ tăng 1 vì snapshot state của lần render này ban đầu là 0. Hơn nữa, `batching` cũng là một yếu tố cần được nhắc tới ở case này.

Nhưng nếu `setNumber()` bằng một `updater function` thì sẽ khác, lúc này state luôn được update dựa trên state trước đó.

```Javascript
const [number, setNumber] = useState(0);

<button onClick={() => {
  setNumber(n => n + 1);
  setNumber(n => n + 1);
  setNumber(n => n + 1);
}}>+3</button>
```

React cũng nói rõ hơn về cách để quản lý state như nào cho hợp lý, preserve state hoạt động như nào nếu cùng hoặc khác position, nếu state nhiều logic quá thì có thể tách ra 1 file Reducer riêng, bla bla.

React nói đi nói lại **"In React, state updates are queued"** tức là phải đợi render sau mới update nên có 1 hàm hay ho được chính React gợi ý để làm setState synchronous với `flushSync()`.

```Javascript
import { flushSync } from 'react-dom';

flushSync(() => {
  setTodos([ ...todos, newTodo]);
});

listRef.current.lastChild.scrollIntoView();
```

Lúc này `lastChild` sẽ được scroll đúng vị trí mà todo mới được add vào.

## Render và Commit

Một điểm hay nữa là React nói nhiều hơn về **Render** và **Commit** phase.

Tưởng tượng Component là món ăn trong nhà hàng (dishes) thì React sẽ là phục vụ (waiters) nhận order và đem ra như kiểu nhận request và render UI của React. Quá trình này gồm 3 steps:
- **Triggering** a render (nhận order)
- **Rendering** the component (chuẩn bị order đó trong bếp)
- **Committing** to the DOM (đem đồ ăn ra)

Note: Commit phase bắt đầu sau quá trình reconciliation, tức là lúc mà nó apply changes vô DOM thật.

## Ref

Có vẻ ref được nói nhiều hơn ở doc mới và còn gọi nó là một **"escape hatch"** (cửa thoát hiểm), React mention khá nhiều ví dụ với ref chẳng hạn như dùng để store timerID như `setTimeout()` hay `setInterval()`.

React cũng không quên nhắc nhở rằng `ref.current` chỉ được set ở **Commit phase** sau khi DOM đã update, trước đó thì ref.current sẽ được set `null`.

Với lại cũng không nên modify DOM bằng ref kiểu `ref.current.remove()` nhất là với DOM được managed bởi React.

## Effect

React compare dependencies change bằng Object.is (một kiểu shallow comparison)

React cũng đề cập việc clean up trong useEffect để tránh bugs hay memory leaks, và clean up này được run mỗi lần mà Effect chạy lại.

HTTP fetch trong Effect cũng có nhiều downsides như: không run dưới server, không preload hay cache được data,... có một vài library hay ho làm tốt việc này hơn như React-query, SWR,...

**Refs:**

[https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/#what-is-rendering](https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/#what-is-rendering)
