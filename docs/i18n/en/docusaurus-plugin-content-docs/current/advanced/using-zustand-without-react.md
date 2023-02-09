---
title: Using Zustand/Zustand-Vue Without Vue/React
---


`zustand/zustand-vue` core can be imported and used without `React/Vue`. The only difference is that the `create` function no longer returns a hook, and instead returns the API utilities.
```js
import { createStore } from 'zustand-vue'

// import { createStore } from 'zustand/vanilla'

const store = createStore(() => ({ ... }))
const { getState, setState, subscribe } = store

export default store
```