<template>
  <div class="weather-widget">
    <button class="fetch-data" @click="getWeatherFromApi">FETCH WEATHER</button>
    <h2 class="location">{{ location }}</h2>
    <h1 class="current-temp">{{ currentTemp }}</h1>
    <h3 class="current-condition">{{ currentCondition }}</h3>

    <section>
      <!-- TODO: Get Current Time -->
      <h3 class="hour">5PM</h3>
      <!-- TODO: Get Forecast for next two days -->
      <!-- convert JSON object into array to iterate for day and High/Low for following days -->
      <div class="hourly">40</div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "weather component",
  data() {
    return {
      currentTemp: "",
      currentCondition: "",
      location: "",
    };
  },
  methods: {
    async getWeatherFromApi() {
      const response = await axios.get(
        "http://api.weatherapi.com/v1/current.json?key=de51034ece89422183d05652250801 &q=Austin&aqi=no"
      );
      this.currentTemp = response.data.current.temp_f;
      this.currentCondition = response.data.current.condition.text;
      this.location = response.data.location.name;
      console.log(this.currentTemp);
    },
  },
};
</script>

<style scoped>
.weather-widget {
  border: solid gray 2px;
}
</style>
