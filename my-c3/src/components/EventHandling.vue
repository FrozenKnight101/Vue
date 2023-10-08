<template>
  <div ><br>
    <button @click="count += 1">Clicked {{ count }} times (Inline Handler)</button> <br> <br>
    <button @click="incrementCount">Clicked {{ count }} times (Method Handler)</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);

function incrementCount() {
  count.value += 1;
}
</script>
