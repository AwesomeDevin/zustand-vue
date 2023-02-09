---
title: 将 Store 与 React Context 绑定
---

在 react 环境中，您想将 store 与 react Context 绑定。

用 `create` 创建的 store 不需要 `context provider`，但如果你想这样做， zustand 允许这样做。

```js
import { createContext, useContext } from 'react'
import { createStore, useStore } from 'zustand'

const store = createStore(...) // vanilla store without hooks

const StoreContext = createContext()

const App = () => (
  <StoreContext.Provider value={store}>
    ...
  </StoreContext.Provider>
)

const Component = () => {
  const store = useContext(StoreContext)
  const slice = useStore(store, selector)
  ...
```
