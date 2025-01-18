<template>
  <div class="player-box">
    Spotify player
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
  width: 30px;
  height: 30px;
  background: lightgray;
}

.player-box {
  border: solid black 2px;
}
</style>