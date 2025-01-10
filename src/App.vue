<script setup>
import { RouterLink, RouterView } from 'vue-router'
import DashView from './views/DashView.vue';
</script>

<template>

  <header>
    <nav>
      <RouterLink to="/">Dash</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/to-do-list">To-Do List</RouterLink>
    </nav>
    <RouterView />
  </header>

</template>

<style scoped>
nav{
  background: lightgray;
}
</style>
