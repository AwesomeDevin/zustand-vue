<template>
  <div class="hello">
    <h3>Form Component</h3>
    <div>
      <input
        @input="handleChange1"
        placeholder="请输入您的名称"
        :value="store.userInfo.name"
      />
    </div>
    <div>
      <input style="width: 50px" :value="value" @input="handleChange2" /><button
        @click="add"
      >
        add
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Store from "../useStore";

const push = Store.useStore((state) => state.push);
// const setName = Store.useStore((state) => state.setName);

export default {
  name: "Form",
  data() {
    return {
      store: Store.useStore(),
      value: "",
      setName: Store.useStore((state) => state.setName),
    };
  },
  methods: {
    handleChange1(e: any) {
      // console.log(this.store.setName);
      // this.store.userInfo.name = e.target.value;
      this.setName(e.target.value);
    },
    handleChange2(e: any) {
      this.value = e.target.value;
      // setName(e.target.value);
    },
    add() {
      // console.log("push", push);
      // this.store.collection.push(this.value);
      push(this.value);
      this.value = "";
    },
  },

  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  margin-left: 20px;
}
</style>
