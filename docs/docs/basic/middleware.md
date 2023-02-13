---
title: 中间件
---

你可以用任何你喜欢的方式来构建你的 `store`。
```js
// state 每次发生变化都将输出日志
const log = (config) => (set, get, api) =>
  config(
    (...args) => {
      console.log('  applying', args)
      set(...args)
      console.log('  new state', get())
    },
    get,
    api
  )

const useBeeStore = create(
  log((set) => ({
    bees: false,
    setBees: (input) => set({ bees: input }),
  }))
)
```

## Persist middleware
你可以基于你能想到的任何方式(localStorage/cookie/数据库等)将 `store` 中的 `state` 进行持久化存储。
```js

import { create } from 'zustand-vue'

// import { create } from 'zustand'


import { persist, createJSONStorage } from 'zustand/middleware'

const useFishStore = create(
  persist(
    (set, get) => ({
      fishes: 0,
      addAFish: () => set({ fishes: get().fishes + 1 }),
    }),
    {
      name: 'food-storage', // unique name
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)
```
查看这个中间件的[完整文档](https://github.com/pmndrs/zustand/blob/main/docs/integrations/persisting-store-data.md)

## Immer middleware

`Immer` 也可以作为中间件使用。
```js
import { create } from 'zustand-vue'

// import { create } from 'zustand'

import { immer } from 'zustand/middleware/immer'

const useBeeStore = create(
  immer((set) => ({
    bees: 0,
    addBees: (by) =>
      set((state) => {
        state.bees += by
      }),
  }))
)
```


## Redux Middleware
让你像写 `redux` 一样，来写 `zustand`
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

const initialState = {
  grumpiness: 0,
  dispatch: (args) => set((state) => reducer(state, args)),
}

const useReduxStore = create(redux(reducer, initialState))
```