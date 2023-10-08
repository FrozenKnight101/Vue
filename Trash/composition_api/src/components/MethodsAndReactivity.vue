<template>
  <div>
    <button @click="updateMessage">Click Me</button>
    <p>{{ message }}</p>
    <p>Reversed Message: {{ reversedMessage }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const message = ref("Hello Vue 3!");

function updateMessage() {
  message.value = "You clicked the button!";
}

const reversedMessage = computed(() => {
  return message.value.split('').reverse().join('');
});
</script>
