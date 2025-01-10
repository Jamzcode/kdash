<template>
  <div>
    <h1>DASH VIEW</h1>
    <h3>Today's Date and Time</h3>
    <weather-component />
    <idol-quote-component />
    <spotify-player-component />
    <idol-image-component />
    <to-do-list-component />
  </div>
</template>

<script>
import WeatherComponent from "@/components/WeatherComponent.vue";
import IdolQuoteComponent from "@/components/IdolQuoteComponent.vue";
import SpotifyPlayerComponent from "@/components/SpotifyPlayerComponent.vue";
import IdolImageComponent from "@/components/IdolImageComponent.vue";
import ToDoListComponent from "@/components/ToDoListComponent.vue";

export default {
  name: "DashView",
  components: {
    WeatherComponent,
    IdolImageComponent,
    IdolQuoteComponent,
    SpotifyPlayerComponent,
    ToDoListComponent,
  },
};
</script>

<style scoped>
.component {
  border: solid 2px black;
}
</style>
