---
title: Change Deeply Nested State？
---

Deeply nested object, Sick of reducers and changing nested state？

If you have a Deeply `object` like this：
```js
type State = {
  deep: {
    nested: {
      obj: { count: number },
      ...{} // more
    }
  }
}
```
Updating nested state requires some effort to ensure the process is completed immutably.


## Normal
Similar to React or Redux, the normal approach is to copy each level of the state object. This is done with the spread operator `...`, and by manually merging that in with the new state values. Like so:
```js
  normalInc: () =>
    set((state) => ({
      deep: {
        ...state.deep,
        nested: {
          ...state.deep.nested,
          obj: {
            ...state.deep.nested.obj,
            count: state.deep.nested.obj.count + 1
          }
        }
      }
    })),
```
It's too Long! Let's explore some ways you can make your coding life better, easier, and less hair-shedding.


## [immer](https://github.com/immerjs/immer)
Many people use Immer to update nested values. Immer can be used anytime you need to update nested state such as in React, Redux and of course, Zustand!

You can use Immer to shorten your state updates for deeply nested object. Let's take a look at an example:
```js
import produce from 'immer'

const useStore = create((set) => ({
  deep: {
    nested: {
      obj: { count: 0 },
    }
  },
  immerInc: () =>
    set(
      produce((state: State) => {
        ++state.deep.nested.obj.count
      })
    ),
}))

const immerInc = useStore((state) => state.immerInc)
immerInc()
```
What a reduction! I think it saved your hair，Please take note of the gotchas listed here.(https://github.com/pmndrs/zustand/blob/main/docs/integrations/immer-middleware.md)。


## [optics-ts](https://github.com/akheron/optics-ts/)
There is another option with [optics-ts](https://github.com/akheron/optics-ts/)
```js
import * as O from 'optics-ts'

const useStore = create((set) => ({
  deep: {
    nested: {
      obj: { count: 0 },
    }
  },
  opticsInc: () =>
    set(
      O.modify(O.optic<State>().path("deep.nested.obj.count"))((c) => c + 1)
    ),
}))

const opticsInc = useStore((state) => state.opticsInc)
opticsInc()
```

## [Ramda](https://ramdajs.com/)
You can also use [Ramda](https://ramdajs.com/)
```js
import * as O from 'optics-ts'

const useStore = create((set) => ({
  deep: {
    nested: {
      obj: { count: 0 },
    }
  },
  ramdaInc: () =>
    set(
      R.over(R.lensPath(["deep", "nested", "obj", "count"]), (c) => c + 1)
    ),
}))

const ramdaInc = useStore((state) => state.ramdaInc)
ramdaInc()
```

[Code Demo](https://codesandbox.io/s/zustand-normal-immer-optics-ramda-updating-ynn3o?file=/src/App.tsx)