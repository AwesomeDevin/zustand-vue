import createStore, { StateCreator, StoreApi } from "zustand/vanilla";
import { reactive, ref } from "vue";


interface ISubscribeCache {
  [key: string]: () => void
}

const defineReactive = <T>(store: T, subscribeCache: ISubscribeCache, api: StoreApi<T>, selection: (state: T) => T) => {
  const keys = Object.keys(store);
  keys.forEach((key) => {
    let value = store[key as keyof T];
    Object.defineProperty(store, key, {
      enumerable: true,
      configurable: true,
      get: () => {
        if (keys.includes(key)) {
          if (!subscribeCache[key]) {
            subscribeCache[key] = api.subscribe((state) => {
              store[key as keyof T] = selection ? selection(state)[key as keyof T] : state[key as keyof T];
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

function create<T extends object>(createState: StateCreator<T, [], [], T>) {
  const subscribeCache: {
    [key: string]: () => void
  } = {};
  const api =
    typeof createState === "function" ? createStore(createState) : createState;
  const useStore = (selection: (state: T) => T) => {
    const externalState = api.getState();
    const store = selection ? selection(externalState) : externalState;
    const isObject = store?.constructor === Object;
    const isFunction = store instanceof Function;
    if (isObject) {
      defineReactive<T>(store, subscribeCache, api, selection);
      return reactive(store);
    } else {
      const res = ref(store);
      api.subscribe((state) => {
        res.value = selection ? selection(state) : state;
      });
      return isFunction ? res.value : res;
    }
  };
  const res = Object.assign({ useStore }, api);
  return res;
};

export {
  createStore,
  StateCreator,
  StoreApi,
  create
}