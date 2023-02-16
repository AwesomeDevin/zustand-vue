---
title: 脱离 React/Vue 情况下使用 Zustand/Zustand-vue
description: 跨框架的前端状态管理工具
---

`zustand/zustand-vue`核心可以在没有`React / Vue`依赖的情况下导入和使用。唯一的区别是 `create` 函数不再返回钩子，而是返回 `API`。
```js
import { createStore } from 'zustand-vue'

// import { createStore } from 'zustand/vanilla'

const store = createStore(() => ({ ... }))
const { getState, setState, subscribe } = store

export default store
```