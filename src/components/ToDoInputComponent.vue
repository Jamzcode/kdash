<template>
  <div class="input-section">
    <p class="component-name">To do input component</p>
    <section class="input section">
      <h3>Date: mm/dd/yyyy</h3>
      <input
        type="text"
        class="item-input"
        placeholder="Whatcha gotta do today?"
      />
      <button class="add-item button">Add Item To List</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "ToDoInputComponent",
};
</script>

<style scoped>
.input-section {
  border: solid black 1px;
  background: lightgreen;
}

.component-name {
  color: green;
}
</style>