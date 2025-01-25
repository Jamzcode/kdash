<template>
  <div class="to-do-list-view">
    <!-- Create component for adding items to to-do-list-display. -->
    <to-do-input-component @send-list-item="handleChildInput" />

    <!-- Create component to render accurate calendar for month of the year. -->
    <calendar-component />

    <!-- Create component that will render list of todos for display in todo view/dash view -->
    <display-list-component :listItem="inputValue" />
  </div>
</template>

<script>
import ToDoInputComponent from "@/components/ToDoInputComponent.vue";
import CalendarComponent from "@/components/CalendarComponent.vue";
import DisplayListComponent from "@/components/DisplayListComponent.vue";
export default {
  name: "ToDoListView",
  data() {
    return {
      inputValue: "",
    };
  },
  components: {
    ToDoInputComponent,
    DisplayListComponent,
    CalendarComponent,
  },
  methods: {
    handleChildInput(payload) {
      this.inputValue = payload;
    },
  },
};
</script>

<style scoped>
body {
  background-color: coral;
}

.section {
  width: 300px;
  height: 300px;
  border: solid black 2px;
}

.button {
  background: royalblue;
  color: aqua;
}

.day {
  border: solid black 1px;
  width: 10px;
  height: 10px;
}

.list-box {
  border: solid black 2px;
  width: 300px;
  height: 300px;
  background: mediumslateblue;
}

.list-item {
  border: solid black 1px;
  height: 70px;
  width: 200px;
  background: lightgray;
  overflow: auto;
}
</style>
