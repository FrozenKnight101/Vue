<!-- App.vue -->
<template>
  <div id="app">
    <nav>
      <router-link to="/template-syntax">Template Syntax</router-link> |
      <router-link to="/methods-reactivity">Methods & Reactivity</router-link> |
      <router-link to="/class-style-bindings">Class & Style Bindings</router-link> |
      <router-link to="/list-rendering">List Rendering</router-link> |
      <router-link to="/event-handling">Event Handling</router-link> |
      <router-link to="/form-input-bindings">Form Input Bindings</router-link> |
      <router-link to="/watchers">Watchers</router-link> |
      <router-link to="/component-props-events-slots">Component Props, Events & Slots</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Global styles if needed */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

nav {
  background-color: #333;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

nav a {
  text-decoration: none;
  margin-right: 10px;
  color: #fff;
  transition: color 0.3s;
}

nav a:hover {
  color: #50b3a2;
}

/* Mobile First Styles for Navigation */
nav a {
  display: block;
  padding: 10px 15px;
  margin: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

nav a:last-child {
  border-bottom: none;
}

/* Styles for larger screens */
@media (min-width: 768px) {
  nav a {
    display: inline-block;
    border-bottom: none;
    padding: 5px 10px;
    margin-right: 15px;
  }
}


body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

nav {
  background-color: #333;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

nav a {
  text-decoration: none;
  margin-right: 10px;
  color: #fff;
  transition: color 0.3s;
}

nav a:hover {
  color: #50b3a2;
}


/* Mobile First Styles for Navigation */
nav a {
  display: block;
  padding: 10px 15px;
  margin: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

nav a:last-child {
  border-bottom: none;
}

/* Styles for larger screens */
@media (min-width: 768px) {
  nav a {
    display: inline-block;
    border-bottom: none;
    padding: 5px 10px;
    margin-right: 15px;
  }
}

/* App.vue (Continue adding to the style section) */

.component-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.button {
  background-color: #50b3a2;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #399482;
}

</style>
