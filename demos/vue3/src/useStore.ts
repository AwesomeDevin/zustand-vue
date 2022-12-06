import { create } from 'zustand-vue';
// import { create } from '../../../build/index.es.js';


interface IState {
  userInfo: {
    name: string
  }
  collection: string[]
}

interface IAction {
  setName: (val: string) => void
  push: (val: string) => void
}

const state: IState = {
  userInfo: {
    name: "Devin"
  },
  collection: []
};

const userStore = (set: any, get: any) => ({
  ...state,
  setName: (val: string) => {
    set(() => ({
      userInfo: {
        name: val
      }
    }));
  },
  push: (val: string) => {
    set((state: IState) => {
      return {
        collection: state.collection.concat([val])
      };
    });
  }
});

console.log(create)

export default create<IState & IAction>(userStore);
