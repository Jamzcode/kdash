<template>
  <div class="input-section">
    <p class="component-name">To do input component</p>
    <section class="input section">
      <h3>Date: mm/dd/yyyy</h3>

      <input type="text" placeholder="Whatcha got to do today?" />
      <button @click="handleInputItem">EMIT INPUT VALUE</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "ToDoInputComponent",
  data() {
    return {};
  },
  methods: {
    handleInputItem() {
      this.$emit("send-list-item", "This is listItem from input to display!");
    },
  },
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