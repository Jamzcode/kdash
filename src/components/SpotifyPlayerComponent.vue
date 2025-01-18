<template>
  <div class="spotify-widget">
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
.spotify-widget {
  border: solid black 1px;
  background: lightgoldenrodyellow;
}

.album-art {
  width: 60px;
  height: 60px;
  background: lightgray;
}

.player-box {
  border: solid black 1px;
}

.component-name {
  color: green;
}

.album-art {
  border: solid black 1px;
}
</style>