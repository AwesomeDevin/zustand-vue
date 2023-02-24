import { create } from 'zustand-vue';
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



export default create<IState & IAction>((set, get) => ({
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
}));
