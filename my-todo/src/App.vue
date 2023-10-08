<template>
  <div id="app">
    <TrelloBoard />
  </div>
</template>

<script>
import TrelloBoard from './components/TrelloBoard.vue';

export default {
  components: {
    TrelloBoard
  }
};
</script>

<style>
/* Global styles can go here */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f0f2f5;
}
</style>
