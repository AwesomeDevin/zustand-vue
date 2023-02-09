---
title: 与 typescript 一起使用
---

基础的 typescript 用法不需要任何特殊的东西，除了写 `create<State>()(…)` 而不是 `create(…)`
```js
import { create } from 'zustand-vue'

// import { create } from 'zustand'

// if you need middleware
// import { devtools, persist } from 'zustand/middleware'

interface BearState {
  bears: number
  increase: (by: number) => void
}

const useBearStore = create<BearState>()(
  
  (set) => ({
    bears: 0,
    increase: (by) => set((state) => ({ bears: state.bears + by })),
  })

  // if you need middleware
  // devtools(
  //   persist(
  //     (set) => ({
  //       bears: 0,
  //       increase: (by) => set((state) => ({ bears: state.bears + by })),
  //     }),
  //     {
  //       name: 'bear-storage',
  //     }
  //   )
  // )

)
```
A more complete TypeScript guide is [here](https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md).