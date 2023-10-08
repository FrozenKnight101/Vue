<template>
  <div>
    <div v-bind:class="classObject">Class Binding Demo</div>
    <div v-bind:style="styleObject">Style Binding Demo</div>
    <button @click="toggleIsActive">Toggle isActive</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const isActive = ref(false);

const classObject = computed(() => ({
  active: isActive.value,
  'text-muted': !isActive.value
}));

const styleObject = ref({
  color: 'blue',
  fontSize: '14px'
});

function toggleIsActive() {
  isActive.value = !isActive.value;
}
</script>
