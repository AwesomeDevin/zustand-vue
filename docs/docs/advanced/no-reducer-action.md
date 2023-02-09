---
title: 想要 redux 一样的 reducers 以及 action types ?
---

想添加像 redux 一样的 reducers 以及 action types ?

```js
const types = { increase: 'INCREASE', decrease: 'DECREASE' }

const reducer = (state, { type, by = 1 }) => {
  switch (type) {
    case types.increase:
      return { grumpiness: state.grumpiness + by }
    case types.decrease:
      return { grumpiness: state.grumpiness - by }
  }
}

const useGrumpyStore = create((set) => ({
  grumpiness: 0,
  dispatch: (args) => set((state) => reducer(state, args)),
}))

const dispatch = useGrumpyStore((state) => state.dispatch)
dispatch({ type: types.increase, by: 2 })
```
或者，使用中间件 `redux-middleware` 。它连接你的 `reducer`，设置初始状态，并向 `state` 本身 和 `Store` API 添加 `dispatch` 函数` 。