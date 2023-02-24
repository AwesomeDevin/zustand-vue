<template>
  <div>
    <h3>ListForm Component</h3>
    <select style="margin-right: 10px; width: 100px" v-model="value" placeholder="请选择城市" >
      <option value="广州">广州</option>
      <option value="北京">北京</option>
      <option value="香港">香港</option>
    </select>

    <button
      @click="add"
    >
    添加到城市列表
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useStore from "../useStore";
export default defineComponent({
  setup(){
    const push = useStore((state) => state.push);
    const value = ref('')

    function add() {
      push(value.value);
      value.value = ''
    }
    return {
      value, add
    }
  }

})
</script>