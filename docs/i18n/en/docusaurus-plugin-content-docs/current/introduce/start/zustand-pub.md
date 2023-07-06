---
title: zustand-pub (Cross-Application/Cross-Framework State Management And Sharing)
description: Cross-Application/Cross-Framework State Management And Sharing（zustand-pub）
keywords: [zustand, zustand-vue, zustand-pub, react, vue, components, ts, typescript, Cross-Application, module federation, mf, Cross-Framework, share state, share data, js, javascript]
tags:
  - zustand-pub
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

## Introduce

`zustand-pub` can provides cross-application and cross-framework `state management and sharing` capabilities for these scenarios, such as `iframe`, `micro-frontend`, `modularization`, `componentization`, `multiple technology stacks exist at the same time`, and `gradual migration of project frameworks`.

## Why do you need zustand-pub ？
1. Applications/Components can `mutually call/modify state` and `trigger component rendering`, if in iframe, you can discard the hard-to-maintain `postMessage + addeventlistener + action`, if in micro-frontend, you don’t need it anymore `eventCenter + action`, just call `action` directly to modify the state。
2. `Data Persistence Caching Scheme` based on external state storage, application/component/iframe/micro-frontend,etc. `state can be cached`.
3. Usually, when we refer to the global `store` in business components, it will lead to the problem that the anthor application cannot be reused, which reduces the reusability of the component. However, based on `zustand-pub`, such problems will no longer exist, reusability and development efficiency exist at the same time.
4. Based on [devtools](https://github.com/AwesomeDevin/zustand-pub/blob/main/demo/iframe/main-app/vue-app/src/platformStore.ts), you can `debug/trace stores between multiple applications at the same time`, which can greatly reduce the difficulty of debugging when communicating between applications.
5. If you are using zustand or zustand-vue, it will be very convenient to use zustand-pub.

## Install
```shell
npm install zustand-pub # or yarn add zustand-pub
```


## Usage

### Step 1： Initialize state isolation container `pubStore` (Scene A)
```js
import PubStore from 'zustand-pub'

const pubStore = new PubStore('key')
```

### Step 2： Fill the isolation container `pubStore` with data `platformStore` (Scene A)
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
return value `usePlatformStore` is `hook`,in scenario A, you can get the corresponding state through state `selector`
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

### Step 3： Get the `platformStore` under the isolated container `pubStore` and bind the Component (Scene B)
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
 [The Usage of React to bind Component](/docs/introduce/start/zustand#step-3-store-binds-the-component-and-its-done) 
    
 [The Usage of Vue to bind Component](/docs/introduce/start/zustand-vue#step-3-store-binds-the-component-and-its-done)
:::

## API

### PubStore(str) 
Used to create state isolation containers, the data `key` inside different isolation containers can have the same name and do not affect each other

:::info
 In the same application, `key` is unchanged and the `pubStore` is returned unchanged
:::

```js
const pubStore = new PubStore() 
```

### defineStore(key,fn)
Used to fill data into isolated containers

:::info
 In the same application, `key` is unchanged and the defined `store` will be merged in the order of loading

 that is `defineStore(key,()=>({a:1,c:1})) defineStore(key,()=>({b:2,c:2}))` works like `defineStore(key,()=>({a:1,b:2,c:1}))`
:::

Parameter | Desc | Type 
--- | --- | --- 
key | data unique identifier | string
fn | callback | (set, get) => Object


```js
interface IStore {
  ...
}

// usePlatformStore is `hook`, and the corresponding state can be obtained through state `selector`
const usePlatformStore = pubStore.defineStore<IStore>('platformStore', (set, get) => ({}))
```


### getStore(key)

Used to fetch data from isolated containers

Parameter | Desc | Type 
--- | --- | --- 
key | data unique identifier | string

```js
const platformStore = pubStore.getStore("platformStore");
```
Return value `platformStore` can be used to create `hook`
```js
import create from "zustand";

//vue
// import create from "zustand-vue";

const usePlatformStore = create(platformStore || {});
```



