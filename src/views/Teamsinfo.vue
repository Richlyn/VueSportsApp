<template>
  <div>
    <div v-for="team in teams" :key="team.id">
      <b-button v-b-toggle.collapse-1 variant="primary">{{team.name}}</b-button>
      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <div class="card-text">
            <img :src="team.crestUrl">
            <a :src="team.website">Team website:{{team.website}}</a>
            <p>Team Stadium:{{team.venue}}</p>
          </div>
          <!-- <Squads/> -->
        </b-card>
      </b-collapse>
    </div>
  </div>
</template>

<script>
// import Squads from "@/components/Squads.vue";
import { mapActions } from "vuex";

export default {
  name: "teamsinfo",
  // components: {
  //   Squads
  // },

  methods: {
    ...mapActions(["teams"])
  }
};
</script>

<style>
img {
  width: 95%;
}
b-list-group-item {
  text-align: center;
}
</style>