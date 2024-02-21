import createStore, { StateCreator, StoreApi, StoreMutatorIdentifier, Mutate } from "zustand/vanilla";
import * as Vue  from "vue";
import { defineProxy, defineSet, defineReactive, executeEqualityFn } from "./proxy";


export type ExtractState<S> = S extends {
  getState: () => infer T;
} ? T: never;
declare type Primitive =
  | string
  | number
  | boolean
  | bigint
  | symbol
  | Date
  | Error;

type TIsFunction<T> = T extends Function
  ? T
  : T extends Primitive
  ? Vue.Ref<T>
  : Vue.UnwrapNestedRefs<T>;


type WithVue<S extends StoreApi<unknown>> = S & {
  getServerState?: () => ExtractState<S>;
};

export type UseBoundStore<S extends WithVue<StoreApi<unknown>>> = {
  (): TIsFunction<ExtractState<S>>;
  <U>(selector: (state: ExtractState<S>) => U, equals?: (a: U, b: U) => boolean): TIsFunction<U>;
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




function defineDep<T, S>( api: WithVue<StoreApi<T>>, selection?:(state: T) => S, equalityFn?: (a: S, b: S) => boolean ) {
  const externalState = api.getState();
  const store = selection ? selection(externalState) : externalState;
  const isObject = store?.constructor === Object;
  // const isFunction = Object.prototype.toString.call(store) === '[object Function]'
  const isFunction = typeof store === 'function'

  const subscribeCache:TSubscribeCache = {}

  // @ts-ignore
  if (Vue.set || Vue.default?.set) {
    let observableStore;
    return defineSet<T, S>(
      externalState,
      observableStore,
      subscribeCache,
      api,
      selection,
      equalityFn
    );
  }

  
  if(typeof store === 'undefined'){
    return Vue.ref(undefined)
  } else if (isObject) {
    if (typeof Proxy === 'undefined') {
      defineReactive<T, typeof store>(store, subscribeCache, api, selection, equalityFn);
      return Vue.reactive(store as object);
    }
    return defineProxy<T, typeof store>(store, subscribeCache, api, selection, equalityFn)
  } else {
    const res = Vue.ref(store);
    api.subscribe((state, prevState) => {
      if(!executeEqualityFn(state, prevState, selection, equalityFn)) return
      res.value = (selection ? selection(state) : state) as Vue.UnwrapRef<S>
    });
    return isFunction ? res.value : res;
  }
}

const create = (<T extends TObject>(createState: StateCreator<T, [], [], T>) => {
  const api =
    typeof createState === "function" ? createStore(createState) : createState;
  const useStore = <S>(selection?: (state: T) => S, equalityFn?: (a: S, b: S) => boolean ) => {
    return defineDep<T, S>(api, selection, equalityFn)
  };
  const res = Object.assign(useStore, api);
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
