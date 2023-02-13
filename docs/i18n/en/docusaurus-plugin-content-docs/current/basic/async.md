---
title: Async Actions
---


Call `set` in async actions when you have data ready, `zustand/zustand-vue` doesn't care if your action is asynchronous or not.
```js
const useFishStore = create((set) => ({
  fishies: {},
  fetch: async (pond) => {
    const response = await fetch(pond)
    set({ fishies: await response.json() })
  },
}))
```


There are two ways to get `state` in async actions：

- Method 1: based on fn-function: `set(state => result)`
```js
const useFishStore = create((set) => ({
  fishies: {},
  fetch: async (pond) => {
    const response = await fetch(pond)
    set((state)=>{
      console.log(state.fishies)
    })
  },
}))
```

Method 2: based on `get` function
```js
const useFishStore = create((set, get) => ({
  fishies: {},
  fetch: async (pond) => {
    const response = await fetch(pond)
    set(()=>{
      console.log(get().fishies)
    })
  },
}))
```

