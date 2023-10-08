<template>
  <div>
    <p>{{ childMessage }}</p>
    <button @click="emitToParent">Send to Parent</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const childMessage = defineProps().childMessage;

// Explicitly define the emitted events
const emit = defineEmits({
  childEvent: null
});

function emitToParent() {
  emit('childEvent', 'Hello from ChildComponent!');
}
</script>

<style scoped>
/* Add styles specific to this component if needed */
</style>
