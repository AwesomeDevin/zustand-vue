import { StoreApi } from "zustand/vanilla";
// @ts-ignore
import * as Vue from "vue";
import { TObject, TSubscribeCache } from "./vue";

export const executeEqualityFn = <T, S>(nextState: T, previousState: T, selection?: (state: T) => S, equalityFn?: (a: S, b: S) => boolean) => {
  if(!selection || !equalityFn) return true
  const prevStateSlice = selection(previousState)
  const nextStateSlice = selection(nextState)
  if (equalityFn !== undefined && !equalityFn(prevStateSlice, nextStateSlice)) {
    return true
  }
  return false
}


export function defineProxy<T, S>(
  store: S,
  subscribeCache: TSubscribeCache, 
  api: StoreApi<T>, 
  selection?: (state: T) => S, equalityFn?: (a: S, b: S) => boolean) {
  const vueInternalkeys = ['__v_raw', '__v_isReadonly', '__v_isRef', 'toJSON', 'toString', 'valueOf', Symbol.toStringTag, 'Symbol(Symbol.toStringTag)']
  // @ts-ignore
  const reactiveStore = Vue.reactive(store);
  const val = new Proxy(reactiveStore, {
    get: (obj, prop: string) => {
        if (!subscribeCache[prop] && !vueInternalkeys.includes(prop)) {
          subscribeCache[prop] = api.subscribe((state, prevState) => {
            if(!executeEqualityFn(state, prevState, selection, equalityFn)) return
            console.log(selection ? selection(state)[prop as keyof S] : state[prop as keyof T], prop)
            // @ts-ignore
            reactiveStore[prop as keyof typeof reactiveStore] = selection ? selection(state)[prop as keyof S] : state[prop as keyof T];
          });
      }
      return obj[prop as keyof typeof reactiveStore];
    }
  });
  return val;
};

export  function defineSet<T extends TObject, S> (
  rootState: T, 
  observableStore: T,
  subscribeCache: TSubscribeCache,
  api:  StoreApi<T>,
  selection: (state: T) => S,
  equalityFn?: (a: S, b: S) => boolean
) {
  const keys = Object.keys(rootState);
  if (!observableStore) {
    observableStore = {} as T;
    // @ts-ignore
    // observableStore = new Vue.default({ data: rootState });


    keys.forEach((key) => {
      if(subscribeCache[key]) return 
      
      let value = rootState[key];
      subscribeCache[key] = api.subscribe((state, prevState) => {
        if(!executeEqualityFn(state, prevState, selection, equalityFn)) return
        if (state[key] === observableStore[key]) return;
        const isArray = state[key] instanceof Array;
        const isObject = state[key] instanceof Object
        // @ts-ignore
        // const set = Vue.set || Vue.default?.set
        if (isArray) {
          // @ts-ignore
          if (!observableStore[key]) observableStore[key] = [];
          observableStore[key].splice(
            0,
            observableStore[key].length,
            ...state[key]
          );
        } else if (!isObject) {
          // set(observableStore, key, state[key])
          observableStore[key  as keyof T] = state[key];
        } else {
          observableStore[key  as keyof T] = state[key]
          // if(set){
          //   set(observableStore, key, state[key]);
          // }else{
          //   console.error('Vue.set Not Fount', Vue)
          // }
        }
      });

      Object.defineProperty(observableStore, key, {
        enumerable: true,
        configurable: true,
        get: () => {
          return value;
        },
        set: (newVal) => {
          if (newVal !== value) {
            value = newVal;
          }
        }
      });
    });
  }

  const value = selection ? selection(observableStore) : observableStore;
  return value;
};


export const defineReactive = <T, S>(store: S, subscribeCache: TSubscribeCache, api: StoreApi<T>, selection?: (state: T) => S, equalityFn?: (a: S, b: S) => boolean) => {
  const keys = Object.keys(store);
  keys.forEach((key) => {
    let value = store[key as keyof S];
    Object.defineProperty(store, key, {
      enumerable: true,
      configurable: true,
      get: () => {
        if (keys.includes(key)) {
          if (!subscribeCache[key]) {
            subscribeCache[key] = api.subscribe((state, prevState) => {
              if(!executeEqualityFn(state, prevState, selection, equalityFn)) return
              //@ts-ignore
              store[key as (keyof S)] = selection ? selection(state)[key as keyof S] : state[key as keyof T];
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