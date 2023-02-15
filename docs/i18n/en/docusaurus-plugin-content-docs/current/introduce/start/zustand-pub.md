---
title: Cross-Application/Cross-Framework State Management And Sharing（zustand-pub）
tags:
  - zustand-pub
---

[![Build Size](https://img.shields.io/bundlephobia/minzip/zustand-pub?label=bundle%20size)](https://bundlephobia.com/result?p=zustand-pub)
[![Version](https://img.shields.io/npm/v/zustand-pub?style=flat)](https://www.npmjs.com/package/zustand-pub)

:::tip
### [Micro-FrontEnd Demo Source](https://github.com/AwesomeDevin/zustand-pub)
:::

### Ability

It is suitable for business scenarios such as modularization, componentization, micro-frontend, multiple technology stacks exist at the same time, and gradual migration of project frameworks, `zustand-pub` can provides cross-application and cross-framework state management and sharing capabilities for these scenarios.


### Install
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
// vue
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
:::tip
 [The Usage of React to bind Component](https://awesomedevin.github.io/zustand-vue/en/docs/introduce/start/zustand#step-3-store-binds-the-component-and-its-done)
 [The Usage of Vue to bind Component](https://awesomedevin.github.io/zustand-vue/en/docs/introduce/start/zustand-vue#step-3-store-binds-the-component-and-its-done)
:::

## API

### PubStore(str) 
Used to create state isolation containers, the data `key` inside different isolation containers can have the same name and do not affect each other

:::tip
 In the same application, `key` is unchanged and the `pubStore` is returned unchanged
:::

```js
const pubStore = new PubStore() 
```

### defineStore(key,fn)
Used to fill data into isolated containers

:::tip
 In the same application, `key` is unchanged and the defined `store` will be merged in the order of loading

 that is `defineStore(key,()=>({a:1})) defineStore(key,()=>({b:2}))` works like `defineStore(key,()=>({a:1,b:2}))`
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



