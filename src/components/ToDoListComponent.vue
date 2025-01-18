<template>
  <section class="todo-list-widget">
    <div class="todo-list">
      <list-display-component />
      <button class="edit-list" @click="goToToDoList">EDIT LIST</button>
    </div>
  </section>
</template>

<script>
import ListDisplayComponent from "./ListDisplayComponent.vue";

export default {
  components: { ListDisplayComponent },
  name: "ToDoListComponent",
  methods: {
    goToToDoList() {
      this.$router.push("/to-do-list");
    },
  },
};
</script>

<style>
.todo-list-widget {
  border: solid black 1px;
}
</style>
