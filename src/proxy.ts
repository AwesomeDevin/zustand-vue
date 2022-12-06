import { StoreApi } from "zustand/vanilla";
import { reactive } from "vue";
import { ISubscribeCache } from "./vue";

export default function defineProxy<T, S extends object>(store: S, subscribeCache: ISubscribeCache, api: StoreApi<T>, selection: (state: T) => S) {
  const keys = Object.keys(store)
  const reactiveStore = reactive(store);
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