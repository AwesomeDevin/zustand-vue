---
title: 修改层级很深的内部状态 ？
description: zustand-vue、zustand 更新状态、更新对象
---
object 层级过深，厌倦了手动进行状态不可变更新(immutably)来修改内部状态？

如果你有一个层级很深的 `object` ,就像这样：
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
更新该嵌套状态需要费一些力，以确保该状态修改过程为不可变更新(immutably)。


## 正常操作
与 `React` 或 `Redux` 类似，正常的方法是复制状态对象的每一层。这是通过扩展运算符完成的`...`，并手动将其合并到新的状态值中。像这样:
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
这太繁琐了!让我们来探索一些可以让你的编码生活更美好，且少掉一些头发的方法。


## [immer](https://github.com/immerjs/immer)
许多人使用 [Immer](https://github.com/immerjs/immer) 来更新嵌套值。Immer 可以随时使用，你需要更新嵌套状态，如在React, Redux，当然，还有 Zustand!

可以使用 Immer 缩短嵌套深度对象的状态更新。让我们来看一个例子:
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
多简单啊！是不是保住了你的头发，请注意这里列出的[陷阱](https://github.com/pmndrs/zustand/blob/main/docs/integrations/immer-middleware.md)。


## [optics-ts](https://github.com/akheron/optics-ts/)
另一种方式是用 [optics-ts](https://github.com/akheron/optics-ts/)
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
还有 [Ramda](https://ramdajs.com/)
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