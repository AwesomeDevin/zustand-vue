---
title: Set
---


## Update And Merge State
The `state` in `zustand` / `zustand-vue` needs to trigger the `set` function to implement the update, which will do a shallow merge with the existing state in the store. Note: About [Nested State](/docs/advanced/sickof-changing-nested-state)

```js
const useStore = create((set) => ({
  salmon: 1,
  tuna: 2,
  setSalmon: (newVal) => set(() => ({ salmon:1 })),  // won't delete tuna, will get {salmon, tuna, setSalmon }
}))
```

## Delete And Overwrite State
The `set` function has a second parameter, which defaults to false. If true, it will replace (overwrite) the state model, not merge. Be careful not to wipe out parts you rely on, such as `actions`。

```js
import omit from 'lodash-es/omit'

const useStore = create((set) => ({
  salmon: 1,
  tuna: 2,
  deleteTuna: () => set((state) => omit(state, ['tuna']), true), // state.tuna will be deleted, other state, actions will be kept
  deleteEverything: () => set({}, true), // Will clear the complete store, including state, actions
}))