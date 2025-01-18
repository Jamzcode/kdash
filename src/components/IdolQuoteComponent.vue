<template>
  <div class="idol-quote-widget">
    <p class="component-name">Idol Quote Component</p>

    <p class="idol-quote">
      "Cheer up baby, give it a little more. A girl shouldn't give her heart
      away so easily"
    </p>
    <div class="author">-TWICE</div>
  </div>
</template>

<script>
export default {
  name: "IdolQuoteComponent",
};
</script>

<style scoped>
.idol-quote-widget {
  border: solid black 1px;
}

.component-name {
  color: green;
}
</style>