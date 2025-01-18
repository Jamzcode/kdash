<template>
  <div class="current-conditions-display">
    <p class="component-name">Current conditions component</p>
    <button class="fetch-data" @click="getWeatherFromApi">FETCH WEATHER</button>
    <button @click="getDateTime">GET DATE</button>
    <button @click="getFiveHourForecast">GET 5 HOUR FORECAST</button>

    <div class="current-condition">
      <h2 class="location data">{{ location }}</h2>
      <h2 class="temp data">{{ currentTemp }}</h2>
      <h3 class="condition data">{{ currentCondition }}</h3>
    </div>

    <div class="date">
      <h3 class="data">{{ day }}</h3>
    </div>

    <!-- TODO: Get Forecast for next two days -->
    <!-- convert JSON object into array to iterate for day and High/Low for following days -->

    <div class="time">
      <h3 class="data">{{ time }}</h3>
    </div>

    <p class="5-hour-forecast">5-hour forecast:</p>

    <div class="hourly data">{{ forecastTemp }}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CurrentConditionsComponent",
  data() {
    return {
      currentTemp: "",
      currentCondition: "",
      location: "",
      day: "",
      time: "",
      forecastTemp: [],
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
    async getFiveHourForecast() {
      const response = await axios.get(
        "http://api.weatherapi.com/v1/forecast.json?key=de51034ece89422183d05652250801&q=Austin&days=5&aqi=no&alerts=yes"
      );

      let test = response.data;
      let forecastDay = test.forecast.forecastday;

      for (let i = 0; i < 6; i++) {
        const averageTemp = forecastDay[i].day.avgtemp_f;
        const result = Math.floor(averageTemp);
        this.forecastTemp.push(result);
      }
      //Call Api to retrieve data for current day

      //Create loop to iterate through hour[] objects

      //Focus on 'temp_f' for each of 5 hour array
    },
  },
};
</script>

<style scoped>
.current-conditions-display {
  border: solid red 2px;
}

.component-name {
  color: green;
}
</style>