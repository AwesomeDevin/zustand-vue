# zustand-vue
[![Build Size](https://img.shields.io/bundlephobia/minzip/zustand-vue?label=bundle%20size)](https://bundlephobia.com/result?p=zustand-vue)
[![Version](https://img.shields.io/npm/v/zustand-vue?style=flat)](https://www.npmjs.com/package/zustand-vue)
<!-- [![Downloads](https://img.shields.io/npm/dt/zustand-vue.svg?style=flat)](https://www.npmjs.com/package/zustand-vue) -->

🐻 State-management for Vue based on zustand.

A small, fast and scalable bearbones state-management solution using simplified `flux` principles. Has a comfy API based on `hooks`, isn't boilerplatey or opinionated.

If you have good ideas, Welcome to build together ! 👏👏👏

##### [Official Document](https://awesomedevin.github.io/zustand-vue/en/)   [Chinese Document](https://awesomedevin.github.io/zustand-vue/docs/introduce/start/zustand-vue)


:::tip
### Vue Live Demo
- #### [Vue3](https://codesandbox.io/s/sleepy-feynman-fwqhoe?file=/src/components/Action2.vue)
- #### [Vue2](https://codesandbox.io/s/strange-agnesi-zzwpzg?file=/src/components/Action.vue)

### Vue Demo Source
- #### [Vue3](https://github.com/AwesomeDevin/zustand-vue/tree/main/demos/vue3)
- #### [Vue2](https://github.com/AwesomeDevin/zustand-vue/tree/main/demos/vue2) 
:::
### Step 1: Install 
```shell
npm install zustand-vue # or yarn add zustand-vue
```

### Step 2: Store Initialization
The created store is a `hook`, you can put anything in it: basic variables, objects, functions, state must be updated immutably, `set` function merges state to achieve state update.
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

### Step 3: Store binds the component and it's done!
Get your target state based on the `selector` and the component will re-render on state change。

:::caution
Store binds components are different in `vue3` vs `vue2`。
:::

<details>
<summary>Vue3</summary>

#### Get target state：bears
- Method 1： Select the state in `setup`
```js
<template>
  <div>store.bears: {{ bears }}</div>
</template>
<script setup>
import useBearStore from "./store";
const bears = useBearStore((state) => state.bears)
</script>
``` 

- Method 2：Initialize data based on `useBearStore`
```js
<template>
  <div>store.bears: {{ bears }}</div>
</template>
<script>
import useBearStore from "./store";
export default {
  data() {
    return {
      bears: useBearStore((state) => state.bears),
    };
  }
};
</script>
```

#### Update target state：bears
- Method 1: Triggers changes in `setup`
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

- Method 2: Triggers changes based on `store` initialize `methods`
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

- Method 3: Changes based on `methods` call function
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

#### Get target state：bears

:::warning
In the vue2 environment, due to compatibility issues, `selector` is not recommended. It is recommended to use `useBearStore()` to get the state
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
It can also be used with `computed`
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

#### Update target state：bears

- Method 1: Triggers changes based on `store` initialize `methods`
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


- Method 2: Changes based on `methods` call function
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
Since zustand-vue follows the `flux` model, its state has the feature of `immutable update`, when you bind Input(Form) components, `v-model` syntactic sugar will be invalid, `set` must be used to update `state`, as follows Examples of different methods according to vue2 and vue3：

<details>
<summary>Vue3</summary>

- Method 1
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

- Method 2
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

- Method1 1
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

- Method 2
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
