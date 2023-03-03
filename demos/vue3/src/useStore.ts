import { create } from 'zustand-vue';
import { devtools, persist } from 'zustand/middleware'
// import { create } from '../../../build/index.es.js';


interface IState {
  userInfo: {
    name: string
    tel: string
  }
  collection: string[]
  title: string
}

interface IAction {
  setName: (val: string) => void
  push: (val: string) => void
  setTitle: (val: string) => void
}

const state: IState = {
  userInfo: {
    name: "Devin",
    tel: 'xxxxxx'
  },
  collection: ['上海'],
  title: 'Demo'
};


// Log every time state is changed
const log = (config) => (set, get, api) =>
  config(
    (...args) => {
      console.log('  applying', args)
      set(...args)
      console.log('  new state', get())
    },
    get,
    api
  )



export default create<IState & IAction,[
  ['zustand/devtools', IState & IAction]
]>(
  devtools((set) => ({
    ...state,
    setName: (val: string) => {
      set((origin) => ({
        userInfo: {
          ...origin.userInfo,
          name: val,
        }
      }));
    },
    push: (val: string) => {
      set((state: IState) => {
        return {
          collection: state.collection.concat([val])
        };
      });
    },
    setTitle: (title: string) => {
      set(() => ({
        title
      }));
    }
  }),{
    name: "MyStore"
  })
);



