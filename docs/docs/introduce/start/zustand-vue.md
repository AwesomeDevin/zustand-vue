---
title: Vue（zustand-vue）
tags:
  - zustand 
  - vue
---


[![Build Size](https://img.shields.io/bundlephobia/minzip/zustand-vue?label=bundle%20size)](https://bundlephobia.com/result?p=zustand-vue)
[![Version](https://img.shields.io/npm/v/zustand-vue?style=flat)](https://www.npmjs.com/package/zustand-vue)
<!-- [![Downloads](https://img.shields.io/npm/dt/zustand-vue.svg?style=flat)](https://www.npmjs.com/package/zustand-vue) -->

### Vue Live Demo
- #### [Vue3](https://codesandbox.io/s/sleepy-feynman-fwqhoe?file=/src/components/Action2.vue)
- #### [Vue2](https://codesandbox.io/s/strange-agnesi-zzwpzg?file=/src/components/Action.vue)

### Vue Demo Source
- #### [Vue3](https://github.com/AwesomeDevin/zustand-vue/tree/main/demos/vue3)
- #### [Vue2](https://github.com/AwesomeDevin/zustand-vue/tree/main/demos/vue2) 


### Step 1: 安装 
```shell
npm install zustand-vue # or yarn add zustand-vue
```

### Step 2: store 初始化
创建的 store 是一个 `hook`，你可以放任何东西到里面：基础变量，对象、函数，状态必须不可改变地更新，`set` 函数合并状态以实现状态更新。
```js
import create from "zustand-vue";

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
```

### Step 3: store 绑定组件，就完成了!
基于 `选择器` 获取您的目标状态，组件将在状态更改时重新渲染。  
状态的应用在 `vue3` 与 `vue2` 中有所不同。
<details>
<summary>Vue3</summary>

#### 选择目标状态 bears
```js
<template>
  <div>store.bears: {{ bears }}</div>
</template>
<script>
import Store from "./store";
export default {
  data() {
    return {
      bears: Store.useStore((state) => state.bears),
    };
  }
};
</script>
```

#### 修改目标状态 bears
- 方式一: 基于 `setup` 触发修改
```js
<script setup lang="ts">
import Store from "./store";
const increasePopulation = Store.useStore((state) => state.increasePopulation);
const removeAllBears = Store.useStore((state) => state.removeAllBears);
</script>

<template>
  <button @click="increasePopulation">increasePopulation</button>
  <button @click="removeAllBears">removeAllBears</button>
</template>
```

- 方式二: 基于 `store` 初始化 `methods` 触发修改
```js
<script>
import Store from "./store";
const increasePopulation = Store.useStore((state) => state.increasePopulation);
const removeAllBears = Store.useStore((state) => state.removeAllBears);

export default {
  methods: {
    increasePopulation,
    removeAllBears,
  },
};
</script>

<template>
  <button @click="increasePopulation">increasePopulation</button>
  <button @click="removeAllBears">removeAllBears</button>
</template>

```

- 方式三: 基于 `methdos` 调用函数进行修改
```js
<script>
import Store from "./store";

const increase = Store.useStore((state) => state.increasePopulation);
const remove = Store.useStore((state) => state.removeAllBears);

export default {
  methods: {
    increasePopulation() {
      increase();
    },
    removeAllBears() {
      remove();
    },
  },
};
</script>

<template>
  <button @click="increasePopulation">increasePopulation</button>
  <button @click="removeAllBears">removeAllBears</button>
</template>
```
</details>

<details>
<summary>Vue2</summary>

#### 选择目标状态 bears
vue2 环境下，由于兼容性问题，不推荐 `选择器`，建议采用 `Store.useStore()` 获取状态
```js
<template>
  <div>store.bears: {{ Store.bears }}</div>
</template>

<script>
import Store from "./store";
export default {
  data() {
    return {
      Store: Store.useStore(),
    };
  },
};
</script>
```
也可以配合 `computed` 进行使用
```js
<template>
  <div>store.bears: {{ bears }}</div>
</template>

<script>
import Store from "./store";
export default {
  data() {
    return {
      Store: Store.useStore(),
    };
  },
  computed: {
    bears: this.Store.bears
  },
};
</script>
```

#### 修改目标状态 bears

- 方式一: 基于 `store` 初始化 `methods` 触发修改
```js
<script>
import Store from "./store";
const increasePopulation = Store.useStore((state) => state.increasePopulation);
const removeAllBears = Store.useStore((state) => state.removeAllBears);

export default {
  methods: {
    increasePopulation,
    removeAllBears,
  },
};
</script>

<template>
  <button @click="increasePopulation">increasePopulation</button>
  <button @click="removeAllBears">removeAllBears</button>
</template>
```


- 方式二: 基于 `methdos` 调用函数进行修改
```js
<script>
import Store from "./store";

const increase = Store.useStore((state) => state.increasePopulation);
const remove = Store.useStore((state) => state.removeAllBears);

export default {
  methods: {
    increasePopulation() {
      increase();
    },
    removeAllBears() {
      remove();
    },
  },
};
</script>

<template>
  <button @click="increasePopulation">increasePopulation</button>
  <button @click="removeAllBears">removeAllBears</button>
</template>
```
</details>