<template>
  <section class="todo-list-widget">
    <div class="todo-list">
      <ol>
        <li class="item">item: 1</li>
        <li class="item">item: 2</li>
        <li class="item">item: 3</li>
        <li class="item">item: 4</li>
        <li class="item">item: 5</li>
      </ol>
      <button class="edit-list" @click="goToToDoList">EDIT LIST</button>
    </div>
  </section>
</template>

<script>
export default {
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
