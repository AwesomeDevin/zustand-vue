<template>
  <div class="hello">
    <h3>Content Component</h3>
    <h3>My Name is {{ name }}</h3>
    <ul>
      <li v-for="item in collection" :key="item">{{ item }}</li>
    </ul>
    {{ store.userInfo }}
  </div>
</template>

<script lang="ts">
import Store from "../useStore";

export default {
  name: "Header",
  data() {
    return {
      name: Store.useStore((state) => state.userInfo.name),
      collection: Store.useStore((state) => state.collection),
      store: Store.useStore(),
    };
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
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
