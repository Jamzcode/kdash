<template>
  <section class="todo-list-widget">
    <div class="todo-list">
      <display-list-component />
      <button class="edit-list" @click="goToToDoList">EDIT LIST</button>
    </div>
  </section>
</template>

<script>
import DisplayListComponent from "./DisplayListComponent.vue";

export default {
  components: { DisplayListComponent },
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
  background: lightcyan;
}
</style>
