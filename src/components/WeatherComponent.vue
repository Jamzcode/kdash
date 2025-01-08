<template>
  <div class="weather-widget">
    <button class="fetch-data" @click="getWeatherFromApi">FETCH WEATHER</button>
    <h2 class="location">{{ location }}</h2>
    <h1 class="current-temp">{{ currentTemp }}</h1>
    <h3 class="current-condition">{{ currentCondition }}</h3>

    <button @click="getDateTime">GET DATE</button>

    <section>
      <!-- TODO: Get Current Time -->
      <h2 class="date">Date: {{ day }}</h2>
      <!-- TODO: Get Forecast for next two days -->
      <!-- convert JSON object into array to iterate for day and High/Low for following days -->
      <h2 class="time">Time: {{ time }}</h2>

      <div class="three-day-forecast">Three Day Forecast:</div>
      <div class="hourly">40 | 40 | 40</div>
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
      day: "",
      time: "",
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
    },
    getDateTime() {
      const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      let date = new Date();
      this.day = weekday[date.getDay()];
      this.time = date.toLocaleDateString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    },
  },
};
</script>

<style scoped>
.weather-widget {
  border: solid gray 2px;
}
</style>
