---
title: Set
---

## 更新与合并状态
`zustand` / `zustand-vue` 中的 `state` 都需要触发 `set` 函数实现更新 ，它将与存储中的现有状态进行浅合并。需要注意的是：关于[嵌套状态](https://awesomedevin.github.io/zustand-vue/docs/advanced/sickof-changing-nested-state)。
```js
const useStore = create((set) => ({
  salmon: 1,
  tuna: 2,
  setSalmon: (newVal) => set(() => ({ salmon:1 })),  // 不会抹除掉 tuna，将得到 {salmon, tuna, setSalmon }
}))
```

## 删除及覆盖状态
`set` 函数有第二个参数，默认为 false。如果为 true，它将取代(覆盖)状态模型，而不是合并。小心不要抹掉你所依赖的部分，比如 `actions`。

```js
import omit from 'lodash-es/omit'

const useStore = create((set) => ({
  salmon: 1,
  tuna: 2,
  deleteTuna: () => set((state) => omit(state, ['tuna']), true), // 将删除 state.tuna ，保留其它 state、actions
  deleteEverything: () => set({}, true), // 将清除掉完整的 store，包括 state、actions
}))
```