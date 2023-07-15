---
title: Middleware trong Redux
tags: ["react.js"]
date: 2023/07/15
slug: 2023-07-15-middleware-trong-redux
---

Middleware đã được dùng ở những server-side framework như **Express**, mục đích là để chèn code vào giữa quá trình nhận `request` và gửi `response`.

Còn trong Redux thì chèn vào giữa quá trình dispatch một action và action đó được đưa tới reducer xử lý.

> It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.

Middleware trong Redux được dùng cho các tác vụ như: logging, crash report, talking to synchronous API, routing,...

## Async logic

Async logic chắc là phần quan trọng nhất để chúng ta consider dùng middleware.

Chúng ta biết Reducer trong redux là một pure function tức không perform bất kỳ side effects nào như: logging, HTTP request, modify values bên ngoài function.

Tuy nhiên, ta hoàn toàn có thể perform async task xong sau đó mới dispatch action như ở đây: ["Why do we need middleware for async flow?"](https://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux/34599594#34599594)

Lấy ví dụ 2 cách tạo action creator dưới đây:

Không dùng middleware:

```javascript
// action creator
function loadData(dispatch, userId) { // needs to dispatch, so it is first argument
  return fetch(`http://data.com/${userId}`)
    .then(res => res.json())
    .then(
      data => dispatch({ type: 'LOAD_DATA_SUCCESS', data }),
      err => dispatch({ type: 'LOAD_DATA_FAILURE', err })
    );
}
// component
componentWillMount() {
  loadData(this.props.dispatch, this.props.userId); // don't forget to pass dispatch
}
```

Còn với **Thunk** middleware:

```javascript
// action creator
function loadData(userId) {
  return dispatch => fetch(`http://data.com/${userId}`) // Redux Thunk handles these
    .then(res => res.json())
    .then(
      data => dispatch({ type: 'LOAD_DATA_SUCCESS', data }),
      err => dispatch({ type: 'LOAD_DATA_FAILURE', err })
    );
}
// component
componentWillMount() {
  this.props.dispatch(loadData(this.props.userId)); // dispatch like you usually do
}
```

Rõ ràng có sự khác biệt, ở ví dụ thứ 2 để dispatch một **action creator** ta không cần care tới liệu nó là async hay không và không cần truyền dispatch vào parameter của action. Ở những app lớn và phức tạp với việc phải dispatch chung action ở nhiều nơi thì dùng middleware hẳn là hiệu quả hơn (cũng có thể hiểu middleware giúp centralize các logic lại).

**Thunk** sẽ nhận dạng được là `dispatch` một **object** hay **function**. Nếu là function thì sẽ intercept vào function với 2 methods là `dispatch` & `getState`. Nên ta không cần care xem **action creator** là async hay không 😌.

**Thunk** và **Saga** thực ra đều có nghĩa, `thunk` tức là **"a piece of code that does some delayed work"**, `saga` thì tức là các **"sagas"** (cuộc chiến dài 😂).

## Redux Toolkit

Ngày nay đa số đã chuyển sang dùng redux-toolkit, bản nâng cấp của redux và có include luôn những middleware cơ bản như: Thunk, Saga,...

## Deep dive

Thử viết middleware kiểu logger + crash report.

```javascript
const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

const crashReporter = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch (err) {
    console.error("Caught an exception!", err);
    Raven.captureException(err, {
      extra: {
        action,
        state: store.getState(),
      },
    });
    throw err;
  }
};
```

Middleware được viết dạng **currying function** để tận dụng được chaining.

Viết hàm `applyMiddleware`:

```javascript
// Warning: Naïve implementation!
// That's *not* Redux API.
function applyMiddleware(store, middlewares) {
  middlewares = middlewares.slice();
  middlewares.reverse();
  let dispatch = store.dispatch;
  middlewares.forEach((middleware) => (dispatch = middleware(store)(dispatch)));
  return Object.assign({}, store, { dispatch });
}
```

Sau đó dùng trong `store`:

```javascript
import { createStore, combineReducers, applyMiddleware } from "redux";

const todoApp = combineReducers(reducers);
const store = createStore(
  todoApp,
  // applyMiddleware() tells createStore() how to handle middleware
  applyMiddleware(logger, crashReporter)
);
```

Có thể đọc thêm chi tiết [ở đây](https://redux.js.org/understanding/history-and-design/middleware).
