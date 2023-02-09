---
title: 组件外部读取/写入状态并做出响应
---
有时需要以非响应式的方式访问状态，或者对存储进行操作。对于这些情况，生成的 `hook` 具有附加在其原型上的实用函数。

## 基础写法
```js
const useDogStore = create(() => ({ paw: true, snout: true, fur: true }))

// 获取非反应性最新状态
const paw = useDogStore.getState().paw
// 监听所有更改，对每个更改同步触发
const unsub1 = useDogStore.subscribe(console.log)
// 更新状态，将触发监听器
useDogStore.setState({ paw: false })
// 取消监听
unsub1()

// 当然，你可以像往常一样使用钩子
const Component = () => {
  const paw = useDogStore((state) => state.paw)
  ...
```

## 订阅 `selector`
你可以用到 `subscribeWithSelector` 中间件。

使用这个中间件, `subscribe` 新增了一些额外的功能。
```js
subscribe(selector, callback, options?: { equalityFn, fireImmediately }): Unsubscribe
```

```js
import { subscribeWithSelector } from 'zustand/middleware'
const useDogStore = create(
  subscribeWithSelector(() => ({ paw: true, snout: true, fur: true }))
)

// 仅限 `paw` 修改时，触发监听
const unsub2 = useDogStore.subscribe((state) => state.paw, console.log)
// subscribe 还可以监听到旧值
const unsub3 = useDogStore.subscribe(
  (state) => state.paw,
  (paw, previousPaw) => console.log(paw, previousPaw)
)
// subscribe 也支持自定义相等函数
const unsub4 = useDogStore.subscribe(
  (state) => [state.paw, state.fur],
  console.log,
  { equalityFn: shallow }
)
// 立即订阅并触发
const unsub5 = useDogStore.subscribe((state) => state.paw, console.log, {
  fireImmediately: true,
})
```