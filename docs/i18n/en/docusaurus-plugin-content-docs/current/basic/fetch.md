---
title: Select State
---

## Do not use 'selector' data Fetching everything
You can do this, but keep in mind that this will cause the component to update on every state change!
```js
...
const state = useBearStore()
```

## Select state based on `selector`
By default, it detects strict equality changes (`old === new` i.e. `new value is exactly equal to old value`)。
```js
const nuts = useBearStore((state) => state.nuts)
const honey = useBearStore((state) => state.honey)
```
If you want to construct a single object with multiple state-picks inside, similar to redux's mapStateToProps, you can tell zustand that you want the object to be diffed shallowly by passing the shallow equality function.。
```js
import { shallow } from 'zustand/shallow'

// Object pick, re-renders the component when either state.nuts or state.honey change
const { nuts, honey } = useBearStore(
  (state) => ({ nuts: state.nuts, honey: state.honey }),
  shallow
)

// Array pick, re-renders the component when either state.nuts or state.honey change
const [nuts, honey] = useBearStore(
  (state) => [state.nuts, state.honey],
  shallow
)

// Mapped picks, re-renders the component when state.treats changes in order, count or keys
const treats = useBearStore((state) => Object.keys(state.treats), shallow)
```
For more control over re-rendering, you may provide any custom equality function.
```js
const treats = useBearStore(
  (state) => state.treats,
  (oldTreats, newTreats) => compare(oldTreats, newTreats)
)
```