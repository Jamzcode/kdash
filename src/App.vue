<script setup>
import { RouterLink, RouterView } from 'vue-router'
import DashView from './views/DashView.vue';
</script>

<template>

  <header>
    <nav>
      <RouterLink to="/">Dash</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView />
  </header>

</template>

<style scoped></style>
