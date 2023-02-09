---
title: 瞬时更新
---

瞬时更新经常发生在状态变化时

`subscribe` 函数允许组件绑定到状态部分，而不必强制在更改时重新呈现。最好与 `useEffect` 结合使用，以便在卸载时自动取消订阅。当允许您直接更改视图时，这种方式将`极大地优化`你的应用性能。

```js
const useScratchStore = create(set => ({ scratches: 0, ... }))

const Component = () => {
  // 获取初始状态
  const scratchRef = useRef(useScratchStore.getState().scratches)
  // 挂载时连接到 store ，卸载时断开连接，捕获引用中的状态变化
  useEffect(() => useScratchStore.subscribe(
    state => (scratchRef.current = state.scratches)
  ), [])
  ...
```