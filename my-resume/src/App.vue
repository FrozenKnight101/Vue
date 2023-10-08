<template>


  <div id="app">

    <button class="theme-toggle-button" @click="toggleTheme">
     Switch to {{ theme === 'light' ? 'Dark' : 'Light' }} Theme
    </button>

    <header>
      <h1>Avinash Maurya</h1>
      <p>Email: mauryaa@deakin.edu.au | Phone: 0403023xxx</p>
    </header>

    <router-view></router-view>
  

  </div>
</template>

<script>
export default {
  name: 'App',
  
  data() {
    return {
      theme: 'light'
    };
  },
  
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', this.theme);
    }
  }
}
</script>


<style>
body {
    font-family: 'Open Sans', sans-serif;
    background-color: var(--body-bg-color);
    color: var(--primary-text-color);
}

#app {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: var(--app-bg-color);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

header {
    text-align: center;
    border-bottom: 2px solid var(--border-color);
    padding-bottom: 20px;
}

h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
    color: var(--highlight-color);
}

h2 {
    color: var(--secondary-text-color);
}

#experience ul {
    list-style-type: none;
    padding: 0;
}

#experience li {
    border-bottom: 1px solid var(--light-border-color);
    padding: 10px 0;
}

@media (max-width: 600px) {
    #app {
        padding: 10px;
    }

    header, #about, #experience {
        text-align: center;
    }
}

.theme-toggle-button {
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: var(--highlight-color);
  color: var(--primary-bg-color);
  outline: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.theme-toggle-button:hover {
  background-color: darken(var(--highlight-color), 10%); /* Darken by 10% on hover */
}

.theme-toggle-button:active {
  transform: scale(0.98); /* Slightly scale down when active (clicked) */
}


/* Default theme (light) */
:root {
  --primary-bg-color: #ffffff;
  --primary-text-color: #333333;
  --secondary-text-color: #444;
  --border-color: #333;
  --light-border-color: #ddd;
  --highlight-color: #5c6ac4;
  --app-bg-color: #fff;
  --body-bg-color: #f4f5f7;
}

/* Dark theme */
[data-theme='dark'] {
  --primary-bg-color: #333333;
  --primary-text-color: #ffffff;
  --secondary-text-color: #bbb;
  --border-color: #888;
  --light-border-color: #444;
  --highlight-color: #8888aa;
  --app-bg-color: #444444;
  --body-bg-color: #222222;
}


a {
  color: var(--link-color);
}


</style>
