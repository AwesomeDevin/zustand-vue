---
title: 跨应用/跨框架 状态管理及共享（zustand-pub）
tags:
  - zustand-pub
  - 业务组件跨应用状态共享
  - 微前端组件跨应用状态共享
---


[![Build Size](https://img.shields.io/bundlephobia/minzip/zustand-pub?label=bundle%20size)](https://bundlephobia.com/result?p=zustand-pub)
[![Version](https://img.shields.io/npm/v/zustand-pub?style=flat)](https://www.npmjs.com/package/zustand-pub)


### 应用场景

适合模块化、组件化、微前端等业务场景，提供跨应用、跨框架的状态管理及共享能力。


### 安装 
```shell
npm install zustand-pub # or yarn add zustand-pub
```


## 用法

### Step 1： 初始化状态隔离容器 `pubStore` (App A)
```js
// react
import ReactPubStore from 'zustand-pub/dist/react.mjs'

const pubStore = new ReactPubStore('Store')

// vue
// import VuePubStore from 'zustand-pub/dist/vue.mjs' 
// const pubStore = new VuePubStore('Store')
```

### Step 2： 往隔离容器 `pubStore` 内填装数据 `platformStore` (App A)
```js
interface IState {
  appInfo: {
    name: string
  }
}

interface IAction {
  setAppName: (val: string) => void
}

const usePlatformStore = pubStore.defineStore<IState & IAction>('platformStore', (set) => ({
  appInfo: { name: '' },
  setAppName(val: string) {
    set({
      appInfo: {
        name: val
      }
    })
  }
}))
```
`defineStore` 返回值 `usePlatformStore` 为 `hook`，可通过状态 `选择器` 获取对应状态
```js
// react
function AppA() {
  const name = usePlatformStore((state) => state.appInfo.name);
  const setAppName = usePlatformStore((state) => state.setAppName);
  return <div>{name}</div>
}
``` 

### Step 3： 跨应用获取隔离容器 `pubStore` 下的数据 `platformStore` (App B)
```js
interface IState {
  appInfo: {
    name: string
  }
}

interface IAction {
  setAppName: (val: string) => void
}

// react
import ReactPubStore from "zustand-pub/dist/react.mjs";
import create from "zustand";
const pubStore = new ReactPubStore('Store')

// vue
// import VuePubStore from "zustand-pub/dist/vue.mjs";
// import create from "zustand-vue";
// const pubStore = new VuePubStore('Store')


const store = pubStore.getStore<IState & IAction>("platformStore");
const usePlatformStore = create(store || {});

// react
function AppB() {
  const name = usePlatformStore((state) => state.appInfo.name);
  const setAppName = usePlatformStore((state) => state.setAppName);
  return <div>{name}</div>
}

```

## API

### ReactPubStore(str) / VuePubStore(str)
用于创建状态隔离容器, 不同隔离容器内部的数据 `key` 可重名且互不影响
```js
const pubStore = new ReactPubStore() 

// const pubStore = new VuePubStore() 
```

### defineStore(key,fn)
用于往隔离容器填装数据

参数 | 说明 | 类型 
--- | --- | --- 
key | 数据唯一标识 | string
fn | callback | (set, get) => Object


```js
interface IStore {
  ...
}

// useStore 为 `hook`，可通过状态 `选择器` 获取对应状态
const useStore = pubStore.defineStore<IStore>('Key', (set, get) => ())
```


### getStore(key)
用于从隔离容器获取数据

参数 | 说明 | 类型 
--- | --- | --- 
key | 数据唯一标识 | string

```js
const store = pub.getStore("platformStore");
```
返回值 `store` 可用于构建 `hook`
```js
import create from "zustand";
// import create from "zustand-vue";
const useStore = create(store || {});
```



