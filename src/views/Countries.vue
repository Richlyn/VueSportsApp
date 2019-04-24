<template>
  <div>
    <iframe
      src="https://www.google.com/maps/d/u/0/embed?mid=19GHfnAWYGHuNlK8yN-YhD5clAlfTXNE1"
      width="100%"
      height="480"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "countries"
};
</script>

<style>
/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (min-width: 700px) {
  iframe {
    max-width: 80%;
    max-height: 80%;
  }
}
</style>
