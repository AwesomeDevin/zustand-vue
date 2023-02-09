---
title: Bind A Store With React Context
---
In the react rnvironment, you want to bind a store with react context.

The store created with `create` doesn't require context providers，But if you want to do that, and zustand allow that.

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
