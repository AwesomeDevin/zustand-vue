<template>
  <div class="hello">
    <h3>NameForm Component</h3>
    <div>
      <input
        @input="handleChange1"
        placeholder="请输入您的名称"
        :value="name"
      />
    </div>
  </div>
</template>

<script>
import Store from "../useStore";


const setName = Store.useStore((state) => state.setName);

export default {
  name: "Form",
  data() {
    return {
      name: Store.useStore((state) => state.userInfo.name),
      store: Store.useStore(),
      value: "",
      setTitle: Store.useStore((state) => state.setTitle),
    };
  },

  methods: {
    handleChange1(e) {
      // this.name = e.target.value; // not working
      this.store.setName(e.target.value);
    },
    handleChange2(e) {
      this.value = e.target.value;
    },
  },

  mounted() {
    this.setTitle("Demo");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  margin-left: 20px;
}
</style>
