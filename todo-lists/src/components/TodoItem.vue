<template>
  <li class="todo-item">
    <span :class="{ done: todo.done }">{{ todo.text }}</span>
    <button class="btn-remove" @click="$emit('remove')">Sil</button>
    <button class="btn-toggle" @click="toggleDone">{{ todo.done ? 'Tamamlandı' : 'Tamamlanmadı' }}</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: Object
  },
  methods: {
    toggleDone() {
      this.$emit('toggle-done', this.todo);
    }
  }
}
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.done {
  text-decoration: line-through;
  color: #aaa;
}

.btn-remove,
.btn-toggle {
  background: #ff6b6b;
  border: none;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 5px;
}

.btn-toggle {
  background: #1dd1a1;
}

.btn-remove:hover {
  background: #ff4757;
}

.btn-toggle:hover {
  background: #10ac84;
}
</style>
