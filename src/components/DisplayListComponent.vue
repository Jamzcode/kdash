<template>
  <div class="display-list">
    <p class="component-name">Display list component</p>

    <section>
      <div class="list-box">
        <div class="list-item">
          <p>
            Clean dinosaur cage so dinosaur does not eat me next time I enter
            the room.
          </p>
        </div>
        <div class="list-item">
          <p>Purchase Dino Peppers for dinosaur</p>
        </div>
        <div class="list-item">
          <p>Buy Porsche SUV to hold dinosaur cage</p>
        </div>
        <div class="list-item">
          <p>Get developer job to pay for dinosaur</p>
        </div>

        <div class="button-box">
          <button class="edit">EDIT</button
          ><button class="remove">REMOVE</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "displayListComponent",
};
</script>

<style scoped>
.display-list {
  border: solid black 2px;
  background: lightcyan;
}

.component-name {
  color: green;
}

.list-item {
  border: solid black 1px;
  background: lightpink;
}
</style>