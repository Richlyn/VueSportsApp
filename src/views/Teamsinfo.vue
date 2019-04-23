<template>
  <div class="teams">
    <div v-for="(team) in getTeams" :key="team.id">
      <b-button v-b-toggle.collapse-1 :src="team.crestUrl">{{team.name}}</b-button>
      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <div class="card-text">
            <img :src="team.crestUrl">
            <a :src="team.website">Team website:{{team.website}}</a>
            <p>Team Stadium:{{team.venue}}</p>
          </div>
          <Squads :team="team"/>
        </b-card>
      </b-collapse>
    </div>
  </div>
</template>

<script>
import Squads from "@/components/Squads.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "teamsinfo",
  components: {
    Squads
  },
  methods: { ...mapActions(["fetchData"]) },
  computed: { ...mapGetters(["getTeams"]) },
  mounted() {
    this.fetchData();
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
.btn-secondary {
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
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