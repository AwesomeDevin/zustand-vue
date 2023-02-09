<template>
  <div class="hello">
    <h3>NameForm Component</h3>
    <div>
      <input
        @input="handleChange1"
        placeholder="请输入您的名称"
        v-model="store.userInfo.name"
      />
    </div>
  </div>
</template>

<script>
import useStore from "../useStore";

const setName = useStore((state) => state.setName);
const setTitle = useStore((state) => state.setTitle)

export default {
  name: "Form",
  data() {
    return {
      store: useStore(),
      value: "",
    };
  },
  computed:{
    name(){
      return this.store.userInfo.name
    },
  },
  methods: {
    handleChange1(e) {
      setName(e.target.value);
    },
    handleChange2(e) {
      this.value = e.target.value;
    },
  },

  mounted() {
    setTitle("Demo");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  margin-left: 20px;
}
</style>
