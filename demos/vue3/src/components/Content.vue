<template>
  <div class="hello">
    <h3>{{ title }}</h3>
    <h3>My Name is {{ name }}</h3>
    <h3>userInfo： {{ store.userInfo }}</h3>
    <h3>
    <ul>
      城市列表：
      <li v-for="item in collection" :key="item">{{ item }}</li>
    </ul>
  </h3>
  </div>
</template>
<script>
import Store from "../useStore";

export default {
  name: "Header",
  data() {
    return {
      name: Store.useStore((state) => state.userInfo.name),
      userInfo: Store.useStore((state) => state.userInfo),
      collection: Store.useStore((state) => state.collection),
      store: Store.useStore(),
      title: Store.useStore((state) => state.title),
    };
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
