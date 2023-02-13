---
title: 异步操作
---

异步操作中当你准备好数据了就调用`set`, `zustand/zustand-vue`并不关心你的动作是否是异步的。
```js
const useFishStore = create((set) => ({
  fishies: {},
  fetch: async (pond) => {
    const response = await fetch(pond)
    set({ fishies: await response.json() })
  },
}))
```


异步操作中获取 `state`，有两种方式：

方式1：基于 `set(state => result)` 更新函数
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

方式2: 基于 `get` 函数
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

