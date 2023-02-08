import createStore, { StateCreator, StoreApi, StoreMutatorIdentifier, Mutate } from "zustand/vanilla";
import * as Vue  from "vue";
import { defineProxy, defineSet, defineReactive } from "./proxy";


export type ExtractState<S> = S extends {
  getState: () => infer T;
} ? T : never;

type WithVue<S extends StoreApi<unknown>> = S & {
  getServerState?: () => ExtractState<S>;
};

export type UseBoundStore<S extends WithVue<StoreApi<unknown>>> = {
  (): ExtractState<S>;
  <U>(selector: (state: ExtractState<S>) => U, equals?: (a: U, b: U) => boolean): U;
} & S;

export type Create = {
  <T, Mos extends [StoreMutatorIdentifier, unknown][] = []>(initializer: StateCreator<T, [], Mos>): UseBoundStore<Mutate<StoreApi<T>, Mos>>;
  <T>(): <Mos extends [StoreMutatorIdentifier, unknown][] = []>(initializer: StateCreator<T, [], Mos>) => UseBoundStore<Mutate<StoreApi<T>, Mos>>;
  /**
   * @deprecated Use `useStore` hook to bind store
   */
  <S extends StoreApi<unknown>>(store: S): UseBoundStore<S>;
};

export type TObject = Record<string, any>


export type TSubscribeCache = Record<string, () => void>





function defineDep<T>( api: StoreApi<T>, selection?: (state: T) => ExtractState<T> ) {
  const externalState = api.getState();
  const store = selection ? selection(externalState) : externalState;
  const isObject = store?.constructor === Object;
  const isFunction = store instanceof Function;
  const subscribeCache:TSubscribeCache = {}

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

  
  if(typeof store === 'undefined'){
    return undefined
  } else if (isObject) {
    if (typeof Proxy !== 'undefined') {
      defineReactive<T, typeof store>(store, subscribeCache, api, selection);
      return Vue.reactive(store as object);
    }
    return defineProxy<T, typeof store>(store, subscribeCache, api, selection)
  } else {
    const res = Vue.ref(store);
    api.subscribe((state) => {
      //@ts-ignore
      res.value = selection ? selection(state) : state;
    });
    return isFunction ? res.value as (Vue.UnwrapNestedRefs<T> | Vue.UnwrapNestedRefs<ExtractState<T>>) : res;
  }
}

const create = (<T extends TObject>(createState: StateCreator<T, [], [], T>) => {
  const api =
    typeof createState === "function" ? createStore(createState) : createState;
  const useStore = (selection?: (state: T) => ExtractState<T>) => {
    return defineDep<T>(api, selection)
  };
  // const res = Object.assign({ useStore }, api);
  const res = useStore
  return res;
}) as Create

export {
  createStore as store,
  StateCreator,
  StoreApi,
  create,
  defineProxy,
  defineSet,
}