---
title: 选择 State
---

### 基础用法
您可以这样做，但是请记住，这会导致组件在每次状态更改时都进行更新!
```js
...
const state = useBearStore()
```

### 基于选择器进行状态选择
默认情况下，它检测严格相等的变化（`old === new` 即 `新值全等于旧值`）。
```js
const nuts = useBearStore((state) => state.nuts)
const honey = useBearStore((state) => state.honey)
```
如果您想构造一个内部有多个状态选择的单一对象，类似于 `redux` 的 `mapStateToProps` ，您可以通过传递 `shallow` 相等函数告诉 `zustand` 您希望对象被浅拆分。
```js
import { shallow } from 'zustand/shallow'

// 选择 Object, 当`state.nuts`或`state.honey`发生变化后，组件重新渲染
const { nuts, honey } = useBearStore(
  (state) => ({ nuts: state.nuts, honey: state.honey }),
  shallow
)

// 选择 Array, 当`state.nuts`或`state.honey`发现变化后，组件重新渲染
const [nuts, honey] = useBearStore(
  (state) => [state.nuts, state.honey],
  shallow
)

// 选择 Map, 当`state.treats`的排序、数量和 key 发生变化后, 组件重新渲染
const treats = useBearStore((state) => Object.keys(state.treats), shallow)
```
为了更好地控制组件重新渲染，你可以提供任何自定义的对比函数。
```js
const treats = useBearStore(
  (state) => state.treats,
  (oldTreats, newTreats) => compare(oldTreats, newTreats)
)
```