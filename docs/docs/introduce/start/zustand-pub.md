---
title: zustand-pub (跨应用/跨框架 状态管理及共享)
description: 跨应用/跨框架 状态管理及共享（zustand-pub），用于应用状态共享及管理
keywords: [zustand,zustand-vue,zustand-pub,react,vue,components,ts,typescript,跨框架,前端状态管理,状态分享, share data, js, javascript, iframe]
tags:
  - zustand-pub
  - 业务组件跨应用状态共享
  - 微前端组件跨应用状态共享
---


[![Build Size](https://img.shields.io/bundlephobia/minzip/zustand-pub?label=bundle%20size)](https://bundlephobia.com/result?p=zustand-pub)
[![Version](https://img.shields.io/npm/v/zustand-pub?style=flat)](https://www.npmjs.com/package/zustand-pub)

:::note
<details open>
<summary>Iframe.gif</summary>

![](https://raw.githubusercontent.com/AwesomeDevin/zustand-pub/main/public/zustand-pub-iframe.gif)
</details>

### [Iframe Demo Source](https://github.com/AwesomeDevin/zustand-pub/tree/main/demo/iframe)

<details>
<summary>Micro-Frontend.gif</summary>

![](https://raw.githubusercontent.com/AwesomeDevin/zustand-pub/main/public/zustand-pub-micro-app.gif)
</details>

### [Micro-FrontEnd Demo Source](https://github.com/AwesomeDevin/zustand-pub/tree/main/demo/micro-frontend)

:::

## 介绍
`zustand-pub` 为 **Iframe、微前端、Module Fedetation、模块化、组件化** 等业务场景，提供 **跨应用、跨框架** 的 **状态管理** 及 **状态共享** 能力。

## 为什么你需要 zustand-pub ？
1.  `跨组件、跨应用通信的另一种方案`：应用/组件(也可以理解为支持跨应用场景) 间可以相互调用/修改 state，并触发组件渲染, 减少维护成本及研发心智负担。
	- 如果你是iframe，则可以抛弃掉难维护的`postMessage + addeventlistener + action`了，
	- 如果你是微前端，也不再需要`eventCenter + action`了，直接通过状态管理中的 `action` 行为修改 state 即可。
3.  `应用/组件间状态可以被缓存`：包括 iframe、微前端等场景，当你的应用被内嵌时，不再需要重新请求/处理状态。
4.  `提升组件库中直接引用全局状态管理的可行性`: 平时我们在业务组件引用全局 `store` 时会导致该组件换一个应用无法复用的问题，降低了组件的可复用性，而基于`zustand-pub`则不会再存在此类问题，复用性与开发效率并存。
5.  `提升 store 模块化管理的可行性，减少重复代码`：以往模块化管理的 store，在不同仓库（应用）下复用时，状态无法同步更新，而基于zustand-pub 模块化管理的 store，状态将能够同步更新，提升了研发过程中 store 逻辑复用的可行性及研发效率。
6.  `预请求`：某些 iframe / 微前端 场景因为`接口请求过多导致页面渲染慢的`，可以基于该方案进行`子应用状态预请求`，优化用户体验
7.  `调试体验好`：基于 [devtools](https://github.com/AwesomeDevin/zustand-pub/blob/main/demo/iframe/main-app/vue-app/src/platformStore.ts) 可以 `同时调试/追踪多个应用间的 store`，能够极大地降低应用间通信时的调试难度。
8.  `迁移成本低`：如果你正在使用 zustand 或 zustand-vue，那么使用 zustand-pub 将很简单。


## 安装 
```shell
npm install zustand-pub # or yarn add zustand-pub
```


## 用法

### Step 1： 初始化状态隔离容器 `pubStore` (场景 A)
```js
import PubStore from 'zustand-pub'

const pubStore = new PubStore('key')
```

### Step 2： 往隔离容器 `pubStore` 内填装数据 `platformStore` (场景 A)
```js
// vue
import create from "zustand-vue";

//react
// import create from "zustand";

interface IState {
  appInfo: {
    name: string
  }
}

interface IAction {
  setAppName: (val: string) => void
}

const platformStore = pubStore.defineStore<IState & IAction>('platformStore', (set) => ({
  appInfo: { name: '' },
  setAppName(val: string) {
    set({
      appInfo: {
        name: val
      }
    })
  }
}))

const usePlatformStore = create(platformStore)
```
返回值 `usePlatformStore` 为 `hook`，场景 A 下，可通过状态 `selector` 获取对应状态
```js
// vue3
<template>
  <div>{name}</div>
</template>

<script>
const name = usePlatformStore((state) => state.appInfo.name);
const setAppName = usePlatformStore((state) => state.setAppName);

export default {
  name: "AppA",
  data(){
    return {
      name
    }
  },
  methods:{
    setAppName
  }
}
</script>


// react
// function AppA() {
//   const name = usePlatformStore((state) => state.appInfo.name);
//   const setAppName = usePlatformStore((state) => state.setAppName);
//   return <div>{name}</div>
// }
``` 

### Step 3： 获取隔离容器 `pubStore` 下的数据 `platformStore` 并绑定组件 (场景 B)
```js
// vue3
<template>
  <div>{name}</div>
</template>

<script setup lang="ts">

interface IState {
  appInfo: {
    name: string
  }
}

interface IAction {
  setAppName: (val: string) => void
}

import PubStore from "zustand-pub";
import create from "zustand-vue";

const pubStore = new PubStore('key')
const store = pubStore.getStore<IState & IAction>("platformStore");
const usePlatformStore = create(store || {});

const name = usePlatformStore((state) => state.appInfo.name);
const setAppName = usePlatformStore((state) => state.setAppName);

</script>

// react
// import PubStore from "zustand-pub";
// import create from "zustand";

// const pubStore = new PubStore('key')
// const store = pubStore.getStore<IState & IAction>("platformStore");
// const usePlatformStore = create(store || {});

// function AppB() {
//  const name = usePlatformStore((state) => state.appInfo.name);
//  const setAppName = usePlatformStore((state) => state.setAppName);
//  return <div>{name}</div>
// }
```
:::info
 [使用 React 绑定组件教程](/docs/introduce/start/zustand#step-3-store-%E7%BB%91%E5%AE%9A%E7%BB%84%E4%BB%B6%E5%B0%B1%E5%AE%8C%E6%88%90%E4%BA%86) 

 [使用 Vue 绑定组件教程](/docs/introduce/start/zustand-vue#step-3-store-%E7%BB%91%E5%AE%9A%E7%BB%84%E4%BB%B6%E5%B0%B1%E5%AE%8C%E6%88%90%E4%BA%86)
:::

## API

### PubStore(str) 
用于创建状态隔离容器, 不同隔离容器内部的数据 `key` 可重名且互不影响

:::info
 同一应用下，`key` 不变，返回的 `pubStore` 不变
:::

```js
const pubStore = new PubStore() 
```

### defineStore(key,fn)
用于往隔离容器填装数据

:::info
 同一应用下，`key` 不变，被定义的 `store` 会按加载的先后顺序进行合并，先定义的 store，优先级更高  

 即 `defineStore(key,()=>({a:1,c:1})) defineStore(key,()=>({b:2,c:2}))` 作用类似于 `defineStore(key,()=>({a:1,b:2,c:1}))`
:::

参数 | 说明 | 类型 
--- | --- | --- 
key | 数据唯一标识 | string
fn | callback | (set, get) => Object


```js
interface IStore {
  ...
}

// usePlatformStore 为 `hook`，可通过状态 `selector` 获取对应状态
const usePlatformStore = pubStore.defineStore<IStore>('platformStore', (set, get) => ({}))
```


### getStore(key)
用于从隔离容器获取数据

参数 | 说明 | 类型 
--- | --- | --- 
key | 数据唯一标识 | string

```js
const platformStore = pubStore.getStore("platformStore");
```
返回值 `platformStore` 可用于构建 `hook`
```js
import create from "zustand";

//vue

const usePlatformStore = create(platformStore || {});
```



