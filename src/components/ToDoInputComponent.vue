<template>
  <div class="input-section">
    <p class="component-name">To do input component</p>
    <section class="input section">
      <h3>Date: mm/dd/yyyy</h3>

      <input
        type="text"
        placeholder="Whatcha got to do today?"
        id="input-box"
      />
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
      let input = document.getElementById("input-box").value;
      this.$emit("send-list-item", input);
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