<template>
  <div id="app" class="app-container">
    <FormulaEditor />
  </div>
</template>

<script>
import FormulaEditor from './components/FormulaEditor.vue';

export default {
  components: {
    FormulaEditor,
  },
};
</script>

<style scoped>
.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5; /* Light grey background color */
}
</style>
