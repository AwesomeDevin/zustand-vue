---
title: 需要像 Redux 一样的 Reducers 以及 ActionTypes?
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
```js
import { redux } from 'zustand/middleware'

const useReduxStore = create(redux(reducer, initialState))
```

更新存储的另一种方法是通过封装了状态函数的函数。这些也可以处理动作的副作用。例如，在 http 请求中调用。要以非 hooks 的方式使用请[查看](https://awesomedevin.github.io/zustand-vue/docs/advanced/read-set-state-outside-of-component)