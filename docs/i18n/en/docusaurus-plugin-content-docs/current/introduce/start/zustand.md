---
title: zustand (React)
description: Lightweight, easy to use, strong scalability compatible with vue front-end state management solution - zustand
keywords: [zustand,zustand-vue,zustand-pub,react,vue,components,ts,typescript,Cross-Application,Cross-Framework,share state,share data,js, javascript]
tags:
  - zustand
  - react
---


[![Build Size](https://img.shields.io/bundlephobia/minzip/zustand?label=bundle%20size)](https://bundlephobia.com/result?p=zustand)
[![Version](https://img.shields.io/npm/v/zustand?style=flat)](https://www.npmjs.com/package/zustand)
:::tip
### [React Live Demo](https://codesandbox.io/s/github/pmndrs/zustand/tree/main/examples/demo?file=/src/App.js)
### [Pmnd's Document](https://docs.pmnd.rs/zustand/getting-started/introduction)

:::
### Step 1: Install 
```shell
npm install zustand # or yarn add zustand
```

### Step 2: Store Initialization
The created store is a `hook`, you can put anything in it: basic variables, objects, functions, state must be updated immutably, `set` function merges state to achieve state update.
```js
import { create } from 'zustand'

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
```
### Step 3: Store binds the component and it's done!
Hooks can be used anywhere, no `provider` required。  
Get your target state based on the `selector` and the component will re-render on state change。

##### Get target state：bears
```js
function BearCounter() {
  const bears = useBearStore((state) => state.bears)
  return <h1>{bears} around here ...</h1>
}
```

##### Update target state：bears
```js
function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}
```

