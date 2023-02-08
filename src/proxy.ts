import { StoreApi } from "zustand/vanilla";
// @ts-ignore
import * as Vue from "vue";
import { ExtractState, TSubscribeCache, TObject } from "./vue";


export function defineProxy<T, S extends TObject>(store: S, subscribeCache: TSubscribeCache, api: StoreApi<T>, selection?: (state: T) => S) {
  const keys = Object.keys(store)
  const reactiveStore = Vue.reactive(store);
  const val = new Proxy(reactiveStore, {
    get: (obj, prop: string) => {
      if (keys.includes(prop)) {
        if (!subscribeCache[prop]) {
          subscribeCache[prop] = api.subscribe((state) => {
            //@ts-ignore
            reactiveStore[prop as keyof typeof reactiveStore] = selection ? selection(state)[prop as keyof S] : state[prop as keyof T];
          });
        }
      }
      return obj[prop as keyof typeof reactiveStore];
    }
  });
  return val;
};

export  function defineSet<T extends TObject> (
  rootState: T, 
  observableStore: T,
  subscribeCache: TSubscribeCache,
  api:  StoreApi<T>,
  selection: (state: T) => ExtractState<T>
) {
  const keys = Object.keys(rootState);
  if (!observableStore) {
    observableStore = {} as T;
    // @ts-ignore
    // observableStore = new Vue.default({ data: rootState });


    keys.forEach((key) => {
      if(subscribeCache[key]) return 
      
      let value = rootState[key];
      subscribeCache[key] = api.subscribe((state) => {
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


export const defineReactive = <T, S>(store: S, subscribeCache: TSubscribeCache, api: StoreApi<T>, selection?: (state: T) => S) => {
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