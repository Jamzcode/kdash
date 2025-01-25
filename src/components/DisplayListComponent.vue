<template>
  <div class="display-list-box">
    <p class="component-name">Display list component
      <ul class="list">
        <li class="list-item">{{ listItem }}</li>
      </ul></p>
  </div>
</template>

<script>
export default {
  name: "displayListComponent",
  props: { listItem: String },
};
</script>

<style scoped>
.display-list-box {
  border: solid black 2px;
  background: lightcyan;
}

.list {
  background: lightgray;
}
.list-item {
  background: white;
}

.component-name {
  color: green;
}

.list-item {
  border: solid black 1px;
  background: lightpink;
}
</style>