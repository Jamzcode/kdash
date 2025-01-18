<template>
  <div class="dash-board">
    <h3>DASH BOARD</h3>
    <weather-component />
    <idol-quote-component />
    <spotify-player-component />
    <idol-image-component />
    <display-list-component />
    <button @click="goToToDoListView">Edit List</button>
  </div>
</template>

<script>
import WeatherComponent from "@/components/WeatherComponent.vue";
import IdolQuoteComponent from "@/components/IdolQuoteComponent.vue";
import SpotifyPlayerComponent from "@/components/SpotifyPlayerComponent.vue";
import IdolImageComponent from "@/components/IdolImageComponent.vue";
import DisplayListComponent from "@/components/DisplayListComponent.vue";

export default {
  name: "DashView",
  components: {
    WeatherComponent,
    IdolImageComponent,
    IdolQuoteComponent,
    SpotifyPlayerComponent,
    DisplayListComponent,
  },
  methods: {
    goToToDoListView() {
      this.$router.push("/to-do-list");
    },
  },
};
</script>

<style scoped>
.dash-board {
  background: lightgrey;
}
</style>
