<template>
  <div class="calendar">
    <div class="calendar-current-date">{{ currentMonthYear }}</div>
    <div class="calendar-navigation">
      <span id="calendar-prev" @click="navigate(-1)">&#8592;</span>
      <span id="calendar-next" @click="navigate(1)">&#8594;</span>
    </div>

    <div class="days-of-the-week">
      <div class="day">Sun</div>
      <div class="day">Mon</div>
      <div class="day">Tue</div>
      <div class="day">Wed</div>
      <div class="day">Thu</div>
      <div class="day">Fri</div>
      <div class="day">Sat</div>
    </div>

    <ul class="calendar-dates">
      <li
        v-for="(date, index) in dates"
        :key="index"
        :class="date.isToday ? 'active' : date.isActive ? 'inactive' : ''"
      >
        {{ date.value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "calendarComponent",
  data() {
    return {
      date: new Date(),
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      dates: [],
    };
  },
  computed: {
    currentMonthYear() {
      return `${this.months[this.month]} ${this.year}`;
    },
  },
  methods: {
    generateCalendar() {
      const dayOne = new Date(this.year, this.month, 1).getDay();
      const lastDate = new Date(this.year, this.month + 1, 0).getDate();
      const dayEnd = new Date(this.year, this.month, lastDate).getDay();
      const prevMonthLastDate = new Date(this.year, this.month, 0).getDate();

      const datesArray = [];

      //Add dates from the previous month
      for (let i = dayOne; i > 0; i--) {
        datesArray.push({
          value: prevMonthLastDate - i + 1,
          isInactive: true,
        });
      }

      //Add dates from the current month
      for (let i = 1; i <= lastDate; i++) {
        datesArray.push({
          value: i,
          isToday:
            i === this.date.getDate() &&
            this.month === new Date().getMonth() &&
            this.year === new Date().getFullYear(),
          isInactive: false,
        });
      }

      //Add dates from the next month
      for (let i = dayEnd; i < 6; i++) {
        datesArray.push({
          value: i - dayEnd + 1,
          isInactive: true,
        });
      }
      this.dates = datesArray;
    },
    navigate(direction) {
      this.month += direction;

      if (this.month < 0 || this.month > 11) {
        this.date = new Date(this.year, this.month);
        this.year = this.date.getFullYear();
        this.month = this.date.getMonth();
      } else {
        this.date = new Date();
      }

      this.generateCalendar();
    },
  },
  mounted() {
    this.generateCalendar();
  },
};
</script>

<style scoped>
.days-of-the-week {
  display: flex;
  width: 100%;
  justify-content: space-around;
  border: solid red 2px;
}

li {
  border: solid black 1px;
}

.calendar {
  font-family: Arial, sans-serif;
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
}
.calendar-navigation {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.calendar-current-date {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 10px;
}
.calendar-dates {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
}
.calendar-dates li {
  width: calc(100% / 7.4); /* 7 days in a week */
  text-align: center;
  padding: 5px 0;
}
.calendar-dates .inactive {
  color: #ccc;
}
.calendar-dates .active {
  background-color: #007bff;
  color: white;
  border-radius: 50%;
}
</style>