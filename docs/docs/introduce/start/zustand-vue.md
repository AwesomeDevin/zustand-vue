---
title: zustand-vue
tags:
  - zustand 
  - vue
---

## Vue3
### store 初始化
创建的 store 是一个 hook，你可以放任何东西到里面：基础变量，对象、函数，状态必须不可改变地更新，set函数合并状态以实现该目标。
```js
import { create } from 'zustand'

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
```
### 然后绑定组件，就完成了!
可以在任何地方使用钩子，不需要提供 provider。选择您的状态，组件将在状态更改时重新渲染。
```js
// 选择目标状态 bears
function BearCounter() {
  const bears = useBearStore((state) => state.bears)
  return <h1>{bears} around here ...</h1>
}

// 修改目标状态 bears
function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}
```

### Demo


## Vue2