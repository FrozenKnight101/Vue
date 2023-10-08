<template>
  <div id="app">
    <h1 class="title">Vue 3 Experiment</h1>

    <!-- Conditional Rendering Component -->
    <div class="component-container">
      <h2 class="component-title">Conditional Rendering Activity</h2>

      <!-- Conditional Rendering with v-if -->
      <div class="message-container">
        <p v-if="showHello" class="show-message primary-text">Hello, Team!</p>
        <p v-else-if="showGoodbye" class="show-message primary-text">Goodbye, Team!</p>
        <p v-else class="hide-message primary-text">The team is not here.</p>
      </div>

      

      <!-- Conditional Rendering with v-show -->
      <p v-show="showMessage" class="show-message primary-text">This message is shown with v-show.</p>

      <!-- Looping with v-for -->
      <ul class="list">
        <li v-for="(item, index) in items" :key="index" class="list-item primary-text">{{ item }}</li>
      </ul>

      <!-- Conditional Rendering with v-if and v-for -->
      <ul class="list">
        <li v-for="person in people" :key="person.id" class="list-item primary-text">
          <span v-if="person.age >= 18">{{ person.name }} (Adult)</span>
          <span v-else>{{ person.name }} (Child)</span>
        </li>
      </ul>

      <!-- Conditional Rendering with computed property -->
      <div class="computed-message">
        <p class="primary-text">{{ greeting }}</p>
      </div>
    </div>

    <!-- Form Input Handling Component -->
    <div class="component-container">
      <h2 class="component-title">Form Input Handling Activity</h2>

      <!-- Input field with v-model -->
      <div class="form-group">
        <label for="textInput" class="label-text primary-text">Text Input:</label>
        <input type="text" id="textInput" v-model="inputText" class="form-input" placeholder="Enter text">
        <p class="input-result primary-text">You entered: {{ inputText }}</p>
      </div>

      <!-- Textarea with v-model -->
      <div class="form-group">
        <label for="textareaInput" class="label-text primary-text">Text Area:</label>
        <textarea id="textareaInput" v-model="textareaText" class="form-input" placeholder="Enter text"></textarea>
        <p class="input-result primary-text">You entered: {{ textareaText }}</p>
      </div>

      <!-- Radio buttons with v-model -->
      <div class="form-group">
        <p class="primary-text">Select your favorite color:</p>
        <label class="radio-label primary-text">
          <input type="radio" v-model="selectedColor" value="Red" class="radio-input"> Red
        </label>
        <label class="radio-label primary-text">
          <input type="radio" v-model="selectedColor" value="Blue" class="radio-input"> Blue
        </label>
        <label class="radio-label primary-text">
          <input type="radio" v-model="selectedColor" value="Green" class="radio-input"> Green
        </label>
        <p class="input-result primary-text">Your favorite color is: {{ selectedColor }}</p>
      </div>

      <!-- Checkbox with v-model -->
      <div class="form-group">
        <label for="checkBoxInput" class="label-text primary-text">Agree to the terms:</label>
        <input type="checkbox" id="checkBoxInput" v-model="agreeTerms" class="checkbox-input">
        <p class="input-result primary-text" v-if="agreeTerms">You agreed to the terms.</p>
        <p class="input-result primary-text" v-else>Please agree to the terms.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showHello: true,
      showGoodbye: false,
      showMessage: true,
      items: ['Item 1', 'Item 2', 'Item 3'],
      people: [
        { id: 1, name: 'Ronaldo', age: 25 },
        { id: 2, name: 'Messi', age: 17 },
        { id: 3, name: 'Kane', age: 30 },
      ],
      inputText: '',
      textareaText: '',
      selectedColor: '',
      agreeTerms: false,
    };
  },
  computed: {
    greeting() {
      if (this.showHello) {
        return 'Hello, Team!';
      } else if (this.showGoodbye) {
        return 'Goodbye, Team!';
      } else {
        return 'The team is not here.';
      }
    },
  },
};
</script>

<style scoped>
/* CSS styles for App.vue */
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 20px;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.component-container {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

.component-title {
  font-size: 22px;
  margin-bottom: 12px;
  color: #333;
}

.message-container {
  margin: 20px 0;
}

.show-message {
  color: #2ecc71;
  font-weight: bold;
}

.hide-message {
  color: #e74c3c;
  font-weight: bold;
}

.list {
  list-style: none;
  padding: 0;
  margin: 10px 0;
}

.list-item {
  margin: 5px 0;
  font-size: 18px;
}

.form-group {
  margin: 20px 0;
}

.label-text {
  font-size: 18px;
  color: #333;
}

.form-input {
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: #333;
}

.radio-label {
  display: block;
  margin-bottom: 10px;
  color: #333;
}

.radio-input {
  margin-right: 5px;
}

.checkbox-input {
  margin-right: 5px;
}

.input-result {
  font-size: 16px;
  color: #555;
  margin-top: 8px;
}

/* Responsive design styles */
@media screen and (max-width: 768px) {
  .component-container {
    padding: 15px;
  }

  .component-title {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .form-input {
    font-size: 14px;
  }
}
</style>
