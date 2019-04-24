<template>
  <div>
    <div class="crests" v-for="(team) in getTeams" :key="team.id">
      <div>
        <b-card img-top tag="article" style="max-width: 20rem;" class="mb-2">
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
  display: flex;
  flex-direction: row;
  /* text-align: center; */
  /* padding: 30px; */
  vertical-align: top;
  font-size: 16px;
  max-width: 124px;
  max-height: 124px;
}
.crests {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 125px;
}
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 700px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 420px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}
</style>
