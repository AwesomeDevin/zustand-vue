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
            console.log('subscribe',reactiveStore, state)
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
      let value = rootState[key];

      subscribeCache[key] = api.subscribe((state) => {
        if (state[key] === observableStore[key]) return;
        const isArray = state[key] instanceof Array;
        if (isArray) {
          // @ts-ignore
          if (!observableStore[key]) observableStore[key] = [];
          observableStore[key].splice(
            0,
            observableStore[key].length,
            ...state[key]
          );
        } else if (!(state[key] instanceof Object)) {
          observableStore[key  as keyof T] = state[key];
        } else {
          // @ts-ignore
          const set = Vue.set || Vue.default?.set
          if(set){
            set(observableStore, key, state[key]);
          }else{
            console.error('Vue.set Not Fount', Vue)
          }
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