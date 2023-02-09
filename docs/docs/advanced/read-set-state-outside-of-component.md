---
title: 组件外部读取/写入状态，并对外部的变化做出反应
---
有时需要以非响应式的方式访问状态，或者对存储进行操作。对于这些情况，生成的 `hook` 具有附加在其原型上的实用函数。
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