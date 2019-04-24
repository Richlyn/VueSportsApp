<template>
  <div>
    <Clubs/>
  </div>
</template>

<script>
import Clubs from "@/components/Clubs.vue";
export default {
  name: "teamsinfo",
  components: {
    Clubs
  }
};
</script>

<style scoped>
img {
  width: 95%;
}
b-list-group-item {
  text-align: center;
}
.btn-secondary {
  border: black;
  color: white;
  cursor: pointer;
}
@media (min-width: 30em) and (orientation: landscape) {
  .teams {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (min-width: 30em) and (orientation: landscape) {
    .card {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin: 10px;
      width: 400px;
    }
  }
}
</style>