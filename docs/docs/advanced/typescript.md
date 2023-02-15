---
title: 完备的 Typescript 支持
---

## zustand / zustand-vue
基础的 Typescript 用法不需要任何特殊的东西，除了写 `create<State>()(…)` 而不是 `create(…)`
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

## zustand-pub

### defineStore
```js
import PubStore from 'zustand-pub'
import { create } from 'zustand-vue'

// import { create } from 'zustand'

interface BearState {
  bears: number
  increase: (by: number) => void
}

const Pub = new PubStore('key')

const bearStore = Pub.defineStore<BearState>('bearStore', (set, get, store) => {
  return ({
    bears: 0,
    increase: (by) => set((state) => ({ bears: state.bears + by })),
  })
})

const useBearStore = create(bearStore)
```


### getStore
```js
import PubStore from "zustand-pub";
import create from 'zustand-vue'

interface BearState {
  bears: number
  increase: (by: number) => void
}

const pub = new PubStore('key')
const store = pub.getStore<BearState>("bearStore");


const useBearStore = create(bearStore);
```


A more complete TypeScript guide is [here](https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md).
