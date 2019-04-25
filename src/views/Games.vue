<template>
  <div>
    <iframe
      width="100%"
      height="315px"
      src="https://www.youtube.com/embed/gJRsEQg9tbc"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <!--matches-->
    <b-card-group deck>
      <div class="cards" v-for="match in matches" :key="match.id">
        <b-card header>
          {{match.stage}}
          <b-list-group>
            <b-list-group-item>
              {{match.score.fullTime.homeTeam}} -
              {{match.score.fullTime.awayTeam}}
            </b-list-group-item>
            <b-list-group-item href="#">
              {{match.homeTeam.name}}
              vs.
              {{match.awayTeam.name}}
            </b-list-group-item>
            <b-list-group-item href="#">Match Day:{{match.utcDate}}</b-list-group-item>
          </b-list-group>
          <p class="card-text mt-2"></p>
          <p>{{match.currectMatchday}}</p>
          <p>{{match.status}}</p>
          <p>
            Winner:
            {{match.score.winner}}
          </p>
        </b-card>
      </div>
    </b-card-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "games",
  data() {
    return {
      urlMatches: "https://api.football-data.org/v2/competitions/CL/matches",
      proxyUrl: "https://cors-anywhere.herokuapp.com/",
      matches: [],
      teams: []
    };
  },
  methods: {
    ...mapActions(["fetchData"]),
    getData(url) {
      fetch(url, {
        headers: {
          "X-Auth-Token": "f26182bf51aa480087e9c34b04cd7e48",
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          // eslint-disable-next-line
          console.log("hello");
          // eslint-disable-next-line
          console.log(response);
          return response.json();
        })

        .then(data => {
          this.matches = data.matches;
          // eslint-disable-next-line
          console.log("i fetched" + data);
          // eslint-disable-next-line
          console.log("matches", this.matches);
          // eslint-disable-next-line
          console.log("TEAMS", this.teams);
        })
        // eslint-disable-next-line
        .catch(err => console.log(err));
    }
  },
  computed: { ...mapGetters(["getTeams"]) },

  mounted() {
    this.getData(this.proxyUrl + this.urlMatches);
    this.fetchData();
    // }
    //     teamCrest (team) {
    //     this.getDataPlayers(
    //       this.proxyUrl + this.urlMatches + team.id
    //     );
  }
};
</script>
<style scoped>
img {
  display: flex;
  flex-direction: row;
  vertical-align: top;
  font-size: 16px;
  max-width: 50px;
  max-height: 50px;
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
  .leftcolumn {
    float: left;
    width: 75%;
  }
}
</style>
