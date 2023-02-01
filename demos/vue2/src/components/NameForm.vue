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
import useStore from "../useStore";

const setName = useStore((state) => state.setName);

export default {
  name: "Form",
  data() {
    return {
      name: useStore((state) => state.userInfo.name),
      store: useStore(),
      value: "",
      setTitle: useStore((state) => state.setTitle),
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
