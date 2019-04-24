<template>
  <div>
    <Clubs :team="team"/>
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
@media (min-width: 30em) and (orientation: landscape) {
  body {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (min-width: 30em) and (orientation: landscape) {
    body {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
}
</style>