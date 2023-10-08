<template>
  <div class="board-app">
    <h1>My Trello-like Board</h1>
    
    <div class="boards" @dragover.prevent @drop="dropTask">
      <div v-for="board in boards" :key="board.id" class="board" :data-board-id="board.id">
        <h3>{{ board.name }}</h3>
        <ul v-for="task in board.tasks" :key="task.id" draggable="true" @dragstart="dragTask(task)">
          <li class="task-card">
            <strong>{{ task.name }}</strong>
            <p>{{ task.description }}</p>
            
            <p v-if="board.name === 'In Progress' && task.inProgressTimestamp">Started: {{ task.inProgressTimestamp }}</p>
            <p v-if="board.name === 'Done' && task.completedTimestamp">Completed: {{ task.completedTimestamp }}</p>
            <ul v-if="board.name === 'In Progress' && task.updates">
              <li v-for="(update, index) in task.updates" :key="index">{{ update }}</li>
            </ul>
            <div v-if="board.name === 'In Progress'" class="task-update-section">
              <input v-model="task.newUpdate" @keyup.enter="addUpdate(task)" placeholder="Add update" />
              <button @click="addUpdate(task)">Update</button>
              
              <button class="delete-button" @click="deleteTask(task, board)">X</button>
            </div>
          </li>
        </ul>
        <div v-if="board.name === 'To Do'" class="task-input-section">
          <input v-model="board.newTaskName" @keyup.enter="addTask(board)" placeholder="Task name" />
          <textarea v-model="board.newTaskDescription" @keyup.enter="addTask(board)" placeholder="Task description"></textarea>
          
           <button @click="addTask(board)">Add Task</button>
         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boards: [
        { id: 1, name: 'To Do', tasks: [], newTaskName: '', newTaskDescription: '' },
        { id: 2, name: 'In Progress', tasks: [] },
        { id: 3, name: 'Done', tasks: [] },
        { id: 4, name: 'Overdue', tasks: [] }
      ],
      draggedTask: null
    };
  },
  methods: {
    addTask(board) {
      if (board.newTaskName.trim() !== '') {
        board.tasks.push({
          id: Date.now(),
          name: board.newTaskName,
          description: board.newTaskDescription,
          updates: [],
          newUpdate: '',
          inProgressTimestamp: null,
          completedTimestamp: null
        });
        board.newTaskName = '';
        board.newTaskDescription = '';
      }
    },
    dragTask(task) {
      this.draggedTask = task;
    },
    dropTask(event) {
      const boardId = event.target.closest('.board').getAttribute('data-board-id');
      const board = this.boards.find(b => b.id === parseInt(boardId));

      if (board && this.draggedTask) {
        const originBoard = this.boards.find(b => b.tasks.includes(this.draggedTask));
        originBoard.tasks = originBoard.tasks.filter(t => t !== this.draggedTask);
        
        if (board.name === 'In Progress') {
          this.draggedTask.inProgressTimestamp = new Date().toLocaleString();
        } else if (board.name === 'Done') {
          this.draggedTask.completedTimestamp = new Date().toLocaleString();
        }

        board.tasks.push(this.draggedTask);
      }
    },
    addUpdate(task) {
      if (task.newUpdate.trim() !== '') {
        task.updates.push(task.newUpdate);
        task.newUpdate = '';
      }
    },

    deleteTask(task, board) {
  board.tasks = board.tasks.filter(t => t !== task);
}
  }
};
</script>

<style scoped>
.board-app {
  font-family: 'Arial', sans-serif;
  background-color: #f0f2f5;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.board {
  background-color: #e0e7ff; /* Light blue background */
  padding: 20px;
  margin: 10px;
  border-radius: 10px; /* Rounded edges */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* subtle shadow */
  min-width: 200px;
}

.board h3 {
  background-color: #a0a7e6; /* Darker blue background */
  padding: 10px;
  border-radius: 5px;
  color: white;
}

.task-card {
  background-color: white;
  padding: 15px;
  margin: 10px 0;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* subtle shadow */
  transition: box-shadow 0.3s; /* Smooth transition for hover effect */
}

.task-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Deeper shadow on hover */
}

.delete-button {
  background-color: #f44336; /* Red color */
  color: white;
  border: none;
  border-radius: 50%; /* Makes it oval/circular */
  width: 20px;
  height: 20px;
  font-size: 12px;
  line-height: 20px; /* This should vertically center the X */
  text-align: center; /* This should horizontally center the X */
  cursor: pointer;
  margin-left: 10px; /* Spacing it from the adjacent button */
  display: inline-flex; /* To help with centering */
  justify-content: center; /* Horizontally center with flexbox */
  align-items: center; /* Vertically center with flexbox */
  background-color: #ff4d4f; /* Red color */
}

.task-input-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f7f7f7;
}


.task-input-section input,
.task-input-section textarea {
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.task-input-section button {
  align-self: flex-start;
  padding: 8px 15px;
  background-color: #a0a7e6;
  color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.task-input-section button:hover {
  background-color: #8f8fd6;
}

/* Board colors */
.board[data-board-id='1'] {
  background-color: #a0a7e6; /* Purple for To Do */
}

.board[data-board-id='2'] {
  background-color: #B0E0E6; /* Powder Blue for In Progress */
}

.board[data-board-id='3'] {
  background-color: #98FB98; /* Green for Done */
}

.board[data-board-id='4'] {
  background-color: #ff4d4f; /* Red for Overdue */
}

.board h3 {
  padding: 10px;
  border-radius: 5px;
  color: white;
}

.board[data-board-id='1'] h3 {
  background-color: #7f7fd6; /* Darker Purple */
}

.board[data-board-id='2'] h3 {
  background-color: #90C3D4; /* Darker Powder Blue */
}

.board[data-board-id='3'] h3 {
  background-color: #7CD38D; /* Darker Green */
}

.board[data-board-id='4'] h3 {
  background-color: #d43f3f; /* Darker Red */
}


button {
  cursor: pointer;
  transition: background-color 0.3s; /* Transition effect on hover */
}

button:hover {
  background-color: #ced4da; /* Slight grey on hover */
}

</style>
