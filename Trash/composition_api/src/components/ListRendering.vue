<template>
  <div>
    <!-- Using v-for on an object -->
    <div v-for="(value, key) in objectData" :key="key">
      {{ key }}: {{ value }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const objectData = ref({
  name: 'John',
  age: 30,
  city: 'New York'
});
</script>
