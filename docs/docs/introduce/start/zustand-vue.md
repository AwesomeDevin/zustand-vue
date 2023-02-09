---
title: Vue（zustand-vue）
tags:
  - zustand-vue
  - vue
---


[![Build Size](https://img.shields.io/bundlephobia/minzip/zustand-vue?label=bundle%20size)](https://bundlephobia.com/result?p=zustand-vue)
[![Version](https://img.shields.io/npm/v/zustand-vue?style=flat)](https://www.npmjs.com/package/zustand-vue)
<!-- [![Downloads](https://img.shields.io/npm/dt/zustand-vue.svg?style=flat)](https://www.npmjs.com/package/zustand-vue) -->

:::tip
### Vue Live Demo
- #### [Vue3](https://codesandbox.io/s/sleepy-feynman-fwqhoe?file=/src/components/Action2.vue)
- #### [Vue2](https://codesandbox.io/s/strange-agnesi-zzwpzg?file=/src/components/Action.vue)

### Vue Demo Source
- #### [Vue3](https://github.com/AwesomeDevin/zustand-vue/tree/main/demos/vue3)
- #### [Vue2](https://github.com/AwesomeDevin/zustand-vue/tree/main/demos/vue2) 
:::
### Step 1: 安装 
```shell
npm install zustand-vue # or yarn add zustand-vue
```

### Step 2: Store 初始化
创建的 store 是一个 `hook`，你可以放任何东西到里面：基础变量，对象、函数，状态必须不可改变地更新，`set` 函数合并状态以实现状态更新。
```js
import create from "zustand-vue";

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  setBears: (val)=>set({ bears: value })
  removeAllBears: () => set({ bears: 0 }),
}))

export default useBearStore
```

### Step 3: Store 绑定组件，就完成了!
基于 `selector` 获取您的目标状态，组件将在状态更改时重新渲染。 

:::caution
Store 绑定组件在 `vue3` 与 `vue2` 中有所不同。
:::

<details>
<summary>Vue3</summary>

#### 选择目标状态：bears
方式1：在 `setup` 中选择状态
```js
<template>
  <div>store.bears: {{ bears }}</div>
</template>
<script setip>
import useBearStore from "./store";
const bears = useBearStore((state) => state.bears)
</script>
```

方式2: 基于 `useBearStore` 初始化 data
```js
<template>
  <div>store.bears: {{ bears }}</div>
</template>
<script>
import useBearStore from "./store";
export default {
  data() {
    return {
      store: useBearStore(),
      bears: useBearStore((state) => state.bears),
    };
  }
};
</script>
```

#### 更新目标状态：bears
- 方式1: 在 `setup` 中触发更新
```js
<script setup lang="ts">
import useBearStore from "./store";
const increasePopulation = useBearStore((state) => state.increasePopulation);
const removeAllBears = useBearStore((state) => state.removeAllBears);
</script>

<template>
  <button @click="increasePopulation">increasePopulation</button>
  <button @click="removeAllBears">removeAllBears</button>
</template>
```

- 方式2: 基于 `store` 初始化 `methods` 触发更新
```js
<script>
import useBearStore from "./store";
const increasePopulation = useBearStore((state) => state.increasePopulation);
const removeAllBears = useBearStore((state) => state.removeAllBears);

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

- 方式3: 基于 `methods` 调用函数进行更新
```js
<script>
import useBearStore from "./store";

const increase = useBearStore((state) => state.increasePopulation);
const remove = useBearStore((state) => state.removeAllBears);

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

#### 选择目标状态：bears

:::warning
vue2 环境下，由于兼容性问题，不推荐 `selector`，建议采用 `useBearStore()` 获取状态
:::

```js
<template>
  <div>store.bears: {{ Store.bears }}</div>
</template>

<script>
import useBearStore from "./store";
export default {
  data() {
    return {
      Store: useBearStore(),
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
import useBearStore from "./store";
export default {
  data() {
    return {
      Store: useBearStore(),
    };
  },
  computed: {
    bears() {
      return this.store.bears;
    },
  },
};
</script>
```

#### 更新目标状态：bears

- 方式1: 基于 `store` 初始化 `methods` 触发更新
```js
<script>
import useBearStore from "./store";
const increasePopulation = useBearStore((state) => state.increasePopulation);
const removeAllBears = useBearStore((state) => state.removeAllBears);

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


- 方式2: 基于 `methods` 调用函数进行更新
```js
<script>
import useBearStore from "./store";

const increase = useBearStore((state) => state.increasePopulation);
const remove = useBearStore((state) => state.removeAllBears);

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

:::caution
由于 zustand-vue 遵循 `flux` 模型，其 state 具备`不可变更新`特性，当你绑定 Input(表单) 组件时，`v-model` 语法糖将失效，必须用 `set` 来更新 `state`，以下根据 vue2、vue3 分别例举不同的方式：

<details>
<summary>Vue3</summary>

- 方式1
```js
<template>
  <input v-model="bears" @input="handleChange" />
  {/* or <input :bind="bears" @input="handleChange" /> */}
</template>

<script setup>
  import useBearStore from "./store";
  const setBears = useBearStore((state) => state.setBears);
  const handleChange = (e) => { setBears(e.target.value) }
</script>
```

- 方式2
```js
<template>
  <input v-model="bears" @input="handleChange" />
  {/* or <input :bind="bears" @input="handleChange" /> */}
</template>
<script>
import useBearStore from "./store";

const setBears = useBearStore((state) => state.setBears);

export default {
  data() {
    return {
      bears: useBearStore((state) => state.bears),
    };
  },
  methods: {
    handleChange(e){
      setBears(e.target.value)
    }
  }
};
</script>
```
</details>



<details>
<summary>Vue2</summary>

- 方式1
```js
<template>
  <input v-model="bears" />
</template>
<script>
import useBearStore from "./store";

const setBears = useBearStore((state) => state.setBears);

export default {
  data() {
    return {
      store: useBearStore(),
    };
  },
  computed:{
    bears:{
      get(){
        return this.store.bears
      },
      set(val){
        setBears(val)
      }
    }
  }
};
</script>
```

- 方式2
```js
<template>
  <input v-model="store.bears" @input="handleChange" />
  {/* or <input :bind="bears" @input="handleChange" /> */}
</template>
<script>
import useBearStore from "./store";

const setBears = useBearStore((state) => state.setBears);

export default {
  data() {
    return {
      store: useBearStore(),
    };
  },
  methods:{
    handleChange(e){
      setBears(e.target.value)
    }
  }
};
</script>
```
</details>
:::
