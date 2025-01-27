<template>
  <div class="display-list-box">
    <p class="component-name">Display list component</p>
    <ol class="list">
      <li
        class="list-item"
        v-for="(arrayItem, index) in itemsArray"
        :key="index"
      >
        {{ arrayItem }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "displayListComponent",
  props: { listItem: String },
  data() {
    return {
      itemsArray: [
        "Make tacos",
        "Eat tacos",
        "Make more tacos",
        "Feed Beeps a taco diet",
        "Make even more tacos",
      ],
    };
  },
  methods: {
    setArrayItem() {
      //Set listItem to add onto itemsArray. From here, items are rendered as <li> items in the DOM.
    },
  },
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