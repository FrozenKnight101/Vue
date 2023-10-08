<template>
  <div>
    <!-- Using v-for on an object -->
    <div v-for="(value, key) in objectData" :key="key"> <br>
      {{ key }}: {{ value }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const objectData = ref({
  Name: 'Ronaldo',
  Age: 39,
  City: 'New York'
});
</script>
