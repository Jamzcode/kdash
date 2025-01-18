<template>
  <div class="player-box">
    <p class="component-name">Spotify Component</p>

    <div class="album-art"></div>
    <p class="title">WHAT IS LOVE? - Twice</p>
  </div>
</template>

<script>
export default {
  name: "SpotifyPlayerComponent",
};
</script>

<style scoped>
.album-art {
  width: 60px;
  height: 60px;
  background: lightgray;
}

.player-box {
  border: solid black 2px;
}

.component-name {
  color: green;
}
</style>