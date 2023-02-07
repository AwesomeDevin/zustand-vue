<template>
  <div class="hello">
    <h3>{{ title }}</h3>
    <h3>My Name is {{ name }}</h3>
    <h3>userInfo： {{ store.userInfo }}</h3>
    <h3>bears:{{bears}}</h3>
    <h3>fishes:{{fishes}}</h3>
    <div><button>Add Bears</button> &nbsp;&nbsp; <button>Add Bears</button></div>

    <h3>
    <ul>
      城市列表：
      <li v-for="item in collection" :key="item">{{ item }}</li>
    </ul>
  </h3>
  </div>
</template>
<script>
import useStore from "../useStore";
import { useBoundStore } from '../combineStore'

const addBear = useBoundStore(state=>state.addBear)
const addBearAndFish = useBoundStore(state=>state.addBearAndFish)

export default {
  name: "Header",
  data() {
    return {
      store: useStore(),
      boundStore: useBoundStore()
    };
  },
  computed:{
    bears(){
      return this.boundStore.bears
    },
    fishes(){
      return this.boundStore.fishes
    },
    name(){
      return this.store.userInfo.name
    },
    userInfo(){
      return this.store.userInfo
    },
    collection(){
      return  this.store.collection
    },
    title(){
      return this.store.title
    }
  },
  methods:{
    addBear,
    addBearAndFish,
  },
  watch: {
    name() {
      console.log("name changed");
    },
    userInfo() {
      console.log("userInfo changed");
    },
    collection() {
      console.log("collection changed");
    },
  },
  mounted() {
    console.log(this.collection, this.name, this.store.userInfo);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  color : #fff;
}
ul {
  padding: 0;
  display: flex;
  flex-direction: column;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
