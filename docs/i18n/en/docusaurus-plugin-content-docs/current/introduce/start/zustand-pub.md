---
title: Cross-Application/Cross-Framework State Management And Sharing（zustand-pub）
tags:
  - zustand-pub
---


[![Build Size](https://img.shields.io/bundlephobia/minzip/zustand-pub?label=bundle%20size)](https://bundlephobia.com/result?p=zustand-pub)
[![Version](https://img.shields.io/npm/v/zustand-pub?style=flat)](https://www.npmjs.com/package/zustand-pub)


### Ability

It is suitable for business scenarios such as modularization, componentization, and micro-front-end, and provides state management and sharing capabilities across applications and frameworks。


### Install
```shell
npm install zustand-pub # or yarn add zustand-pub
```


## Usage

### Step 1： Initialize state isolation container `pubStore` (App A)
```js
// react
import ReactPubStore from 'zustand-pub/dist/react.mjs'

const pubStore = new ReactPubStore('Store')

// vue
// import VuePubStore from 'zustand-pub/dist/vue.mjs' 
// const pubStore = new VuePubStore('Store')
```

### Step 2： Fill the isolation container `pubStore` with data `platformStore` (App A)
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
`defineStore` return value `usePlatformStore` is `hook`, you can get the corresponding state through state `selector`
```js
// react
function AppA() {
  const name = usePlatformStore((state) => state.appInfo.name);
  const setAppName = usePlatformStore((state) => state.setAppName);
  return <div>{name}</div>
}
``` 

### Step 3： Get data `platformStore` under the isolated container `pubStore` across applications (App B)
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
Used to create state isolation containers, the data `key` inside different isolation containers can have the same name and do not affect each other
```js
const pubStore = new ReactPubStore() 

// const pubStore = new VuePubStore() 
```

### defineStore(key,fn)
Used to fill data into isolated containers

Parameter | Desc | Type 
--- | --- | --- 
key | data unique identifier | string
fn | callback | (set, get) => Object


```js
interface IStore {
  ...
}

// useStore is `hook`, and the corresponding state can be obtained through state `selector`
const useStore = pubStore.defineStore<IStore>('Key', (set, get) => ())
```


### getStore(key)

Used to fetch data from isolated containers

Parameter | Desc | Type 
--- | --- | --- 
key | data unique identifier | string

```js
const store = pub.getStore("platformStore");
```
Return value `store` can be used to create `hook`
```js
import create from "zustand";
// import create from "zustand-vue";
const useStore = create(store || {});
```



