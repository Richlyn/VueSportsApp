<template>
  <div>
    <div class="cards" v-for="(team) in getTeams" :key="team.id">
      <b-card img-top tag="article">
        <p>{{team.name}}</p>
        <img :src="team.crestUrl">
        <b-card-text>
          <a :src="team.website">Team website:{{team.website}}</a>
          <p>Team Stadium:{{team.venue}}</p>
        </b-card-text>
        <Squads :team="team"/>
      </b-card>
    </div>
  </div>
</template>

<script>
import Squads from "@/components/Squads.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "clubs",
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
  vertical-align: top;
  font-size: 16px;
  max-width: 124px;
  max-height: 124px;
}
.card-body {
  margin: auto;
}
@media screen and (max-width: 767px) {
  .cards {
    margin: auto;
    display: flex;
    flex-direction: row;
    align-content: space-around;
    width: 100%;
  }
}

@media screen and (min-width: 768px) {
  .cards {
    width: 50%;
  }
}
</style>
