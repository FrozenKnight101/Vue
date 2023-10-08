<template>
  <div class="todo-app">
    <h1>My To-Do List</h1>
    
    <div class="input-section">
      <input v-model="newTask" @keyup.enter="addTask" placeholder="Enter new task" />
      <button @click="addTask">Add</button>
    </div>

    <ul class="tasks-list">
      <li v-for="task in activeTasks" :key="task.id" class="task">
        <input type="checkbox" v-model="task.completed" />
        {{ task.text }}
        <button @click="deleteTask(task)">Delete</button>
      </li>
    </ul>

    <div v-if="completedTasks.length">
      <h2>Completed Tasks</h2>
      <ul class="completed-tasks">
        <li v-for="task in completedTasks" :key="task.id" class="task">{{ task.text }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: []
    };
  },
  computed: {
    activeTasks() {
      return this.tasks.filter(task => !task.completed);
    },
    completedTasks() {
      return this.tasks.filter(task => task.completed);
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({
          id: Date.now(),
          text: this.newTask,
          completed: false
        });
        this.newTask = '';
      }
    },
    deleteTask(task) {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    }
  }
};
</script>

<style scoped>
.todo-app {
  max-width: 600px;
  margin: 50px auto;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #f5f5f5;
}

h1, h2 {
  text-align: center;
  color: #333;
}

.input-section {
  display: flex;
  margin-bottom: 20px;
}

input[type="text"] {
  flex-grow: 1;
  padding: 10px 15px;
  margin-right: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

button {
  background-color: #007BFF;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.tasks-list, .completed-tasks {
  list-style: none;
  padding: 0;
}

.task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: white;
  border-radius: 5px;
}

input[type="checkbox"] {
  margin-right: 10px;
}
</style>
