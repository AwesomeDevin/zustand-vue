---
title: TypeScript Usage
---

Basic typescript usage doesn't require anything special except for writing `create<State>()(...)` instead of `create(...)`
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