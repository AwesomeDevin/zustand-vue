import createStore, { StateCreator, StoreApi, StoreMutatorIdentifier } from "zustand/vanilla";
import * as Vue  from "vue";
import { defineProxy, defineSet } from "./proxy";

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

export type TObject = Record<string, any>

export type ExtractState<S> = S extends ((state: S) => infer T) ? T : S

export type TSubscribeCache = Record<string, () => void>


const defineReactive = <T, S extends object>(store: S, subscribeCache: TSubscribeCache, api: StoreApi<T>, selection?: (state: T) => S) => {
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
              // @ts-ignore
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


function defineDep<T extends TObject>( subscribeCache: TSubscribeCache, api: StoreApi<T>, selection?: (state: T) => ExtractState<T> ) {
  const externalState = api.getState();
  const store = selection ? selection(externalState) : externalState;
  const isObject = store?.constructor === Object;
  const isFunction = store instanceof Function;

  // @ts-ignore
  if (Vue.set || Vue.default?.set) {
    let observableStore;
    return defineSet.call(
      this,
      externalState,
      observableStore,
      subscribeCache,
      api,
      selection
    );
  }

  if (isObject) {
    if (typeof Proxy !== 'undefined') {
      defineReactive<T, typeof store>(store, subscribeCache, api, selection);
      return Vue.reactive(store);
    }
    return defineProxy<T, typeof store>(store, subscribeCache, api, selection)
  } else {
    const res = Vue.ref(store);
    api.subscribe((state) => {
      res.value = selection ? selection(state) : state;
    });
    return isFunction ? res.value as (Vue.UnwrapNestedRefs<T> | Vue.UnwrapNestedRefs<ExtractState<T>>) : res;
  }
}

const create = (<T extends TObject>(createState: StateCreator<T, [], [], T>) => {
  const subscribeCache: {
    [key: string]: () => void
  } = {};
  const api =
    typeof createState === "function" ? createStore(createState) : createState;
  const useStore = (selection?: (state: T) => ExtractState<T>) => {
    return defineDep<T>(subscribeCache, api, selection)
  };
  const res = Object.assign({ useStore }, api);
  return res;
}) as Create

export {
  createStore,
  StateCreator,
  StoreApi,
  create,
  defineProxy,
  defineSet,
}