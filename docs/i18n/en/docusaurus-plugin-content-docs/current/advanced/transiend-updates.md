---
title: Transient Updates
---
Transient updates often occur when the state changes

The subscribe function allows components to bind to a state-portion without forcing re-render on changes. Best combine it with useEffect for automatic unsubscribe on unmount. This way will [`greatly optimize`](https://codesandbox.io/s/peaceful-johnson-txtws?file=/src/index.js) your application's performance when you are allowed to mutate the view directly.

```js
const useScratchStore = create(set => ({ scratches: 0, ... }))

const Component = () => {
  // Fetch initial state
  const scratchRef = useRef(useScratchStore.getState().scratches)
  // Connect to the store on mount, disconnect on unmount, catch state-changes in a reference
  useEffect(() => useScratchStore.subscribe(
    state => (scratchRef.current = state.scratches)
  ), [])
  ...
```