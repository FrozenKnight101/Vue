<template>
  <div>
    <ChildComponent :parentData="data" @childEvent="handleChildEvent">
      <template #default>
        Default slot content.
      </template>
    </ChildComponent>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue';

const data = ref("Data from parent");

const handleChildEvent = (payload) => {
  console.log("Received event with payload:", payload);
};
</script>
