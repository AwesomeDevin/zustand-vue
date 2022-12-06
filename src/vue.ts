import createStore, { StateCreator, StoreApi, StoreMutatorIdentifier } from "zustand/vanilla";
import { reactive, ref, UnwrapNestedRefs } from "vue";

type Selection<T> = (state: T) => any

type Create = {
  <T, Mos extends [StoreMutatorIdentifier, unknown][] = []>(initializer: StateCreator<T, [], Mos>): {
    useStore: (selection?: Selection<T>) => ReturnType<Selection<T>>;
  } & StoreApi<T>;
  <T>(): <Mos extends [StoreMutatorIdentifier, unknown][] = []>(initializer: StateCreator<T, [], Mos>) => {
    useStore: (selection?: Selection<T>) => ReturnType<Selection<T>>;
  } & StoreApi<T>;
  <T extends StoreApi<unknown>>(store: T): {
    useStore: (selection?: Selection<T>) => ReturnType<Selection<T>>;
  } & StoreApi<T>;
};

type ExtractState<S> = S extends ((state: S) => infer T) ? T : S

interface ISubscribeCache {
  [key: string]: () => void
}

const defineReactive = <T, S>(store: S, subscribeCache: ISubscribeCache, api: StoreApi<T>, selection: (state: T) => S) => {
  const keys = Object.keys(store);
  keys.forEach((key) => {
    let value = store[key as keyof S];
    Object.defineProperty(store, key, {
      enumerable: true,
      configurable: true,
      get: () => {
        if (keys.includes(key)) {
          if (!subscribeCache[key]) {
            subscribeCache[key] = api.subscribe((state) => {
              //@ts-ignore
              store[key as keyof S] = selection ? selection(state)[key as keyof S] : state[key as keyof S];
            });
          }
        }
        return value;
      },
      set: (newVal) => {
        if (newVal !== value) {
          value = newVal;
        }
      }
    });
  });
};

const create = (<T extends object>(createState: StateCreator<T, [], [], T>) => {
  const subscribeCache: {
    [key: string]: () => void
  } = {};
  const api =
    typeof createState === "function" ? createStore(createState) : createState;
  const useStore = (selection?: (state: T) => ExtractState<T>) => {
    const externalState = api.getState();
    const store = selection ? selection(externalState) : externalState;
    const isObject = store?.constructor === Object;
    const isFunction = store instanceof Function;
    if (isObject) {
      defineReactive<T, typeof store>(store, subscribeCache, api, selection);
      return reactive(store);
    } else {
      const res = ref<T | ExtractState<T>>(store);
      api.subscribe((state) => {
        res.value = selection ? selection(state) : state;
      });
      return isFunction ? res.value as (UnwrapNestedRefs<T> | UnwrapNestedRefs<ExtractState<T>>) : res;
    }
  };
  const res = Object.assign({ useStore }, api);
  return res;
}) as Create

export {
  createStore,
  StateCreator,
  StoreApi,
  create
}