---
title: Want Reducers And Action Types Like Redux ?
---
```js
const types = { increase: 'INCREASE', decrease: 'DECREASE' }

const reducer = (state, { type, by = 1 }) => {
  switch (type) {
    case types.increase:
      return { grumpiness: state.grumpiness + by }
    case types.decrease:
      return { grumpiness: state.grumpiness - by }
  }
}

const useGrumpyStore = create((set) => ({
  grumpiness: 0,
  dispatch: (args) => set((state) => reducer(state, args)),
}))

const dispatch = useGrumpyStore((state) => state.dispatch)
dispatch({ type: types.increase, by: 2 })
```

Or, just use our redux-middleware. It wires up your main-reducer, sets initial state, and adds a dispatch function to the state itself and the vanilla API.

```js
import { redux } from 'zustand/middleware'

const useGrumpyStore = create(redux(reducer, initialState))
```

