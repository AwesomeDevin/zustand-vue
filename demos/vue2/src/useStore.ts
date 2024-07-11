import { create } from 'zustand-vue';
// import { create } from '../../../build/index.es.js';


interface IState {
  userInfo: {
    name: string
    tel: string
    age?: number
  }
  collection: string[]
  title: string
  subTitle?: string
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
  title: ''
};

const userStore = (set, get) => ({
  ...state,
  setName: (val: string) => {
    set((origin: IState) => ({
      userInfo: {
        ...origin.userInfo,
        name: val,
      }
    }));
  },
  setAge: (val: number) => {
    set((origin: IState) => ({
      userInfo: {
        ...origin.userInfo,
        age: val,
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
      title,
      subTitle: `sub${title}`
    }));
  }
});


export default create<IState & IAction>(userStore);
