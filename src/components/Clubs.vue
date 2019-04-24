<template>
  <div>
    <div v-for="(team) in getTeams" :key="team.id">
      <!-- <button :src="team.crestUrl" v-b-toggle.collapse-1>{{team.name}}</button>
      <!-- <b-button v-b-toggle.collapse-1 :src="team.crestUrl">{{team.name}}</b-button>-->
      <!--  <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <div class="card-text">
            <img :src="team.crestUrl">
            <a :src="team.website">Team website:{{team.website}}</a>
            <p>Team Stadium:{{team.venue}}</p>
          </div>
          <Squads :team="team"/>
        </b-card>
      </b-collapse>-->

      <div class="row">
        <div class="column">
          <img :src="team.crestUrl">
          {{team.name}}
        </div>
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
