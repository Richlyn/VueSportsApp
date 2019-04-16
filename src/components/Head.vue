<template>
  <div>
    <div class="container">
      <div class="d-flex flex-row justify-content-around flex-wrap">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <div class="flip-card">
                <h1>&#9819;</h1>
              </div>
              <div class="flip-card-back">
                <p>EUFA</p>
                <p>Champion's League</p>
              </div>
            </div>
          </div>
          <img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "head"
};
</script>

<style>
.flip-card {
  background-color: transparent;
  width: 60px;
  height: 40px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */

.flip-card-front {
  color: black;
}

/* Style the back side */

.flip-card-back {
  background-color: black;
  color: white;
  transform: rotateY(180deg);
}
</style>
