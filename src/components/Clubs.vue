<template>
  <div>
    <div class="leftcolumn">
      <div class="text-center">
        <b-spinner v-if="loading" label="Loading..."></b-spinner>
      </div>
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

    <div class="rightcolumn">
      <div class="card">
        <h3>Past Winners</h3>
        <div>
          <p>Real Madrid C.F. 2018</p>
        </div>
        <br>
        <div>
          <p>Real Madrid C.F. 2017</p>
        </div>
        <br>
        <div>
          <p>Real Madrid C.F. 2016</p>
        </div>
        <br>
        <div>
          <p>FC Barcelona 2015</p>
        </div>
        <br>
        <div>
          <p>Real Madrid C.F. 2014</p>
        </div>
        <br>
        <div>
          <p>FC Bayern Munich 2013</p>
        </div>
        <br>
        <div>
          <p>Chelsea FC 2012</p>
        </div>
        <br>
        <div>
          <p>FC Barcelona 2011</p>
        </div>
        <br>
        <div>
          <p>Inter Milan 2010</p>
        </div>
        <br>
        <div>
          <p>FC Barcelona 2009</p>
        </div>
        <br>
        <div>
          <p>Manchester United FC 2008</p>
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
  data() {
    return {
      loading: true
    };
  },
  methods: {
    ...mapActions(["fetchData"])
  },
  computed: { ...mapGetters(["getTeams"]) },
  mounted() {
    this.fetchData();
    this.loading = false;
  }
};
</script>

<style>
.spinner {
  text-align: center;
  margin: auto;
}

img {
  vertical-align: top;
  font-size: 16px;
  max-width: 124px;
  max-height: 124px;
}
.card-body {
  margin: auto;
}
.cards {
  width: 100%;
}
@media screen and (max-width: 767px) {
  .cards {
    align-content: space-around;
    width: 100%;
  }
}

@media screen and (min-width: 768px) {
  .leftcolumn {
    float: left;
    width: 75%;
  }
  /* Right column */
  .rightcolumn {
    float: left;
    width: 25%;
    padding-left: 20px;
    text-align: center;
  }
}
</style>
