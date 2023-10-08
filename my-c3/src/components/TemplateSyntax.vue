<template>
  <div>
    <!-- Text Interpolation -->
    <p>Hello, {{ name }}!</p>
  
    <!-- Raw HTML [v-html] -->
    <div v-html="rawHTML"></div>
  
    <!-- Attribute Bindings [v-bind:id] -->
    <div v-bind:id="dynamicID">This div has a dynamic ID!</div>
  
    <!-- JavaScript expressions inside syntax -->
    <p>Total price: ${{ price * quantity }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("Team");
const rawHTML = ref("<span style='color: red;'>This is raw HTML</span>");
const dynamicID = ref("divID123");
const price = ref(10);
const quantity = ref(5);
</script>
