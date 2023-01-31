---
title: Vue 应用（zustand-vue）
tags:
  - zustand 
  - vue
---

## 安装 
```shell
npm install zustand-vue # or yarn add zustand-vue
```
## Vue3

### [Vue3 Live Demo](https://codesandbox.io/s/sleepy-feynman-fwqhoe?file=/src/components/Action2.vue)

### store 初始化
创建的 store 是一个 hook，你可以放任何东西到里面：基础变量，对象、函数，状态必须不可改变地更新，set 函数合并状态以实现该目标。
```js
import create from "zustand-vue";

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
```
### 然后绑定组件，就完成了!
选择您的状态，组件将在状态更改时重新渲染。
##### 选择目标状态 bears
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

##### 修改目标状态 bears
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

## Vue2

### [Vue2 Live Demo](https://codesandbox.io/s/strange-agnesi-zzwpzg?file=/src/components/Action.vue)

### store 初始化
```js
import create from "zustand-vue";

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
```

### 然后绑定组件，就完成了!

##### 选择目标状态 bears
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

##### 修改目标状态 bears

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