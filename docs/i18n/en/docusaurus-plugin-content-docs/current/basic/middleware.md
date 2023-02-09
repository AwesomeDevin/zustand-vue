---
title: Middleware
---

You can functionally compose your `store` any way you like.。
```js
// Log every time state is changed
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

### Persist middleware
You can persist your store's data using any kind of storage. (localStorage/cookie/database, etc.)。
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


### Immer middleware

`Immer` is available as middleware too.
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
[See the full documentation for this middleware.](https://github.com/pmndrs/zustand/blob/main/docs/integrations/persisting-store-data.md)