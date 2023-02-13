---
title: React/Vue Component Reading/Writing State Externally And Responds
---
Sometimes you need to access state in a non-reactive way, or act upon the store. For these cases the resulting hook has utility functions attached to its prototype.

### Normal

```js
const useDogStore = create(() => ({ paw: true, snout: true, fur: true }))

// Getting non-reactive fresh state
const paw = useDogStore.getState().paw
// Listening to all changes, fires synchronously on every change
const unsub1 = useDogStore.subscribe(console.log)
// Updating state, will trigger listeners
useDogStore.setState({ paw: false })
// Unsubscribe listeners
unsub1()

// You can of course use the hook as you always would
const Component = () => {
  const paw = useDogStore((state) => state.paw)
  ...
```

### Using subscribe with selector
If you need to subscribe with selector, subscribeWithSelector middleware will help.

With this middleware subscribe accepts an additional signature:
```js
subscribe(selector, callback, options?: { equalityFn, fireImmediately }): Unsubscribe
```

```js
import { subscribeWithSelector } from 'zustand/middleware'
const useDogStore = create(
  subscribeWithSelector(() => ({ paw: true, snout: true, fur: true }))
)

// Listening to selected changes, in this case when "paw" changes
const unsub2 = useDogStore.subscribe((state) => state.paw, console.log)
// Subscribe also exposes the previous value
const unsub3 = useDogStore.subscribe(
  (state) => state.paw,
  (paw, previousPaw) => console.log(paw, previousPaw)
)
// Subscribe also supports an optional equality function
const unsub4 = useDogStore.subscribe(
  (state) => [state.paw, state.fur],
  console.log,
  { equalityFn: shallow }
)
// Subscribe and fire immediately
const unsub5 = useDogStore.subscribe((state) => state.paw, console.log, {
  fireImmediately: true,
})
```