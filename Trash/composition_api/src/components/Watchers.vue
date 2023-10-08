<template>
  <div>
    <!-- Placeholder to show reactivity -->
    {{ watchedValue }}
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const someValue = ref('Initial Value');
const watchedValue = ref('');

watch(someValue, (newValue, oldValue) => {
  watchedValue.value = `Value changed from ${oldValue} to ${newValue}`;
});

// Simulate change after 2 seconds
setTimeout(() => {
  someValue.value = 'New Value';
}, 2000);
</script>
