<template>
  <div class="list-display">
    To Do List Display
    <ol>
      <li class="item">item: 1</li>
      <li class="item">item: 2</li>
      <li class="item">item: 3</li>
      <li class="item">item: 4</li>
      <li class="item">item: 5</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "listDisplayComponent",
};
</script>

<style scoped>
.list-display {
  border: solid purple 2px;
  height: auto;
  width: 150px;
  background: pink;
}
</style>