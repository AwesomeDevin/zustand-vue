
<script setup lang="ts">
import NameForm from './NameForm.vue'
import ListForm from './ListForm.vue'

import Content from './Content.vue'
</script>

<template>
  <div>
    <Content />
    <div class="border" />
    <NameForm />
    <ListForm />
  </div>
</template>


<style>

.border {
  width: 100%;
  height: 1px;
  margin: 20px;
  background-color: #ccc;
}
</style>