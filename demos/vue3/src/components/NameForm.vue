<template>
  <div class="hello">
    <h3>NameForm Component</h3>
    <div>
      <input
        @input="handleChange1"
        placeholder="请输入您的名称"
        v-model="name"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useStore from "../useStore";


const setName = useStore((state) => state.setName);
const name = useStore((state) => state.userInfo.name)
const setTitle = useStore(state=>state.setTitle)
const store = useStore()
const value= ref('')

const handleChange1 = (e) => {
  setName(e.target.value);
}

const handleChange2 = (e) => {
  value = e.target.value
}

console.log(setTitle)
setTitle('Demo1')
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  margin-left: 20px;
}
</style>
