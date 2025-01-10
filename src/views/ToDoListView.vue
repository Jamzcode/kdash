<template>
  <section class="input section">
    <h3>Date: mm/dd/yyyy</h3>
    <input
      type="text"
      class="item-input"
      placeholder="Whatcha gotta do today?"
    />
    <button class="add-item button">Add Item To List</button>
  </section>

  <section class="calendar section">
    <h2>Month: JAN</h2>
    <button class="month-scroll button">prev</button>
    <button class="month-scroll button">next</button>
    <div class="day"></div>
    <div class="day"></div>
    <div class="day"></div>
    <div class="day"></div>
    <div class="day"></div>
    <div class="day"></div>
    <div class="day"></div>
  </section>

  <section class="to-do-list section">
    <div class="list-box">
        <div class="list-item">
            <p >Clean dinosaur cage so dinosaur does not eat me next time I enter the room.</p>
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
            <button class="edit">EDIT</button><button class="remove">REMOVE</button>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ToDoListView",
};
</script>

<style scoped>
body {
  background-color: coral;
}

.section {
  width: 300px;
  height: 300px;
  border: solid black 2px;
}

.button {
  background: royalblue;
  color: aqua;
}

.day {
  border: solid black 1px;
  width: 10px;
  height: 10px;
}

.list-box{
    border: solid black 2px;
    width: 300px;
    height: 300px;
    background: mediumslateblue;

}

.list-item{
    border: solid black 1px;
    height: 70px;
    width: 200px;
    background: lightgray;
    overflow: auto;
}


</style>
