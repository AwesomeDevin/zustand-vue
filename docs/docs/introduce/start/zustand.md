---
title: React（zustand）
tags:
  - zustand
  - react
---


[![Build Size](https://img.shields.io/bundlephobia/minzip/zustand?label=bundle%20size)](https://bundlephobia.com/result?p=zustand)
[![Version](https://img.shields.io/npm/v/zustand?style=flat)](https://www.npmjs.com/package/zustand)
:::tip
### [React Live Demo](https://codesandbox.io/s/github/pmndrs/zustand/tree/main/examples/demo?file=/src/App.js)
:::
### Step 1: 安装 
```shell
npm install zustand # or yarn add zustand
```

### Step 2: Store 初始化
创建的 store 是一个 `hook`，你可以放任何东西到里面：基础变量，对象、函数，状态必须不可改变地更新，`set` 函数合并状态以实现状态更新。
```js
import { create } from 'zustand'

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
```
### Step 3: Store 绑定组件，就完成了!
可以在任何地方使用钩子，不需要提供 `provider`。  
基于 `selector` 获取您的目标状态，组件将在状态更改时重新渲染。

##### 选择目标状态：bears
```js
function BearCounter() {
  const bears = useBearStore((state) => state.bears)
  return <h1>{bears} around here ...</h1>
}
```

##### 更新目标状态：bears
```js
function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}
```

