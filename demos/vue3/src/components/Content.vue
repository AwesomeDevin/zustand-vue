<template>
  <div class="hello">
    <h3>{{ title }}</h3>
    <h3>{{ store.subTitle }}</h3>
    <h3>{{store}}</h3>

    <h3>My Name is {{ name }}</h3>
    <h3>userInfo： {{ store.userInfo }}</h3>
    <h3>age: {{age}}</h3>
    <h3>
    <ul>
      城市列表：
      <li v-for="item in collection" :key="item">{{ item }}</li>
    </ul>
  </h3>
  </div>
</template>
<script lang="ts">
import useStore from "../useStore";

const setAge = useStore((state) => state.setAge);

export default {
  name: "Header",
  data() {
    return {
      name: useStore((state) => state.userInfo.name),
      userInfo: useStore((state) => state.userInfo),
      collection: useStore((state) => state.collection),
      store: useStore(),
      age: useStore((state) => state.userInfo.age),
    };
  },
  computed:{
    title(){
      return useStore((state) => state.title)
    },
    subTitle(){
      return useStore((state) => state.subTitle)
    }
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
    subTitle(){
      console.log('subTitle changed')
    }
  },
  mounted() {
    setAge(18)
    console.log('this.store.subTitle',this.store.subTitle)
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
