<template>
  <div class="todo-list">
    <h1>Yapılacaklar Listesi</h1>
    <form @submit.prevent="addTodo" class="todo-form">
      <input v-model="newTodoText" placeholder="Yeni görev ekle" class="todo-input">
      <button type="submit" class="btn-add">Ekle</button>
    </form>
    <ul class="todos">
      <todo-item
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
        @remove="removeTodo(index)"
        @toggle-done="toggleDone(index)"
      ></todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  components: {
    TodoItem
  },
  data() {
    return {
      newTodoText: '',
      todos: []
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoText.trim() !== '') {
        this.todos.push({ text: this.newTodoText, done: false });
        this.newTodoText = '';
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    toggleDone(index) {
      this.todos[index].done = !this.todos[index].done;
    }
  }
}
</script>

<style scoped>
.todo-list {
  text-align: center;
}

h1 {
  color: #ff6b6b;
}

.todo-form {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.todo-input {
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 5px;
  width: 70%;
  margin-right: 10px;
  font-size: 16px;
}

.btn-add {
  background: #54a0ff;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-add:hover {
  background: #2e86de;
}

.todos {
  list-style: none;
  padding: 0;
}
</style>
