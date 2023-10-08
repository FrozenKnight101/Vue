<template>
  <div>
    <input type="text" v-model="textValue">
    <input v-model.trim="textWithTrim">
  </div>
</template>

<script setup>
import { ref } from 'vue';

const textValue = ref('');
const textWithTrim = ref('');
</script>
