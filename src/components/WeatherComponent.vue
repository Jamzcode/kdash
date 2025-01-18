<template>
  <div class="weather-widget">
    <!-- create current condition module to embed in weather component -->
    <current-conditions-component />
  </div>
</template>

<script>
import CurrentConditionsComponent from "./CurrentConditionsComponent.vue";

export default {
  name: "weather component",
  components: {
    CurrentConditionsComponent,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.weather-widget {
  border: solid gray 2px;
}

.temp {
  font-size: 50px;
}
</style>
