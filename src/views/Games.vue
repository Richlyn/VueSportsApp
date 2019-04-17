<template>
  <div>
    <div class="filter">
      <!-- <div>
          <b-dropdown split text="Teams" id="dropdown" class="m-2">
            <b-dropdown-item href="#">teams</b-dropdown-item>
          </b-dropdown>
      </div>-->
    </div>
    <!--search bar-->
    <div id="search" class="d-flex justify-content-end p-5">
      <label style="height:0rem">
        Search here:
        <input type="text" v-model="search">
      </label>
    </div>
    <div>
      <div v-for="match in matches" :key="match.id">
        <b-button v-b-toggle.collapse-1 variant="primary">{{match.group}}</b-button>
        <b-collapse id="collapse-1" class="mt-2">
          <b-card class="text-center">
            <div class="card-text">
              <div v-for="team in teams" :key="team.id">
                <img :src="team.crestUrl">
              </div>
              <p>
                Home {{match.homeTeam.name}} vs.
                {{match.awayTeam.name}} Away
              </p>
              <div v-for="team in teams" :key="team.id">
                <img :src="team.crestUrl">
              </div>
            </div>
            <p>Match Day:{{match.utcDate}},</p>
            <p>{{match.currectMatchday}}</p>
            <p>{{match.status}}</p>
            <b-button v-b-toggle.collapse-1-inner size="sm">Score</b-button>
            <b-collapse id="collapse-1-inner" class="mt-2">
              <b-card>
                <p>Score:{{match.score.fullTime.homeTeam}}-{{match.score.fullTime.awayTeam}}</p>
                <p>
                  Winner:
                  {{match.score.winner}}
                </p>
              </b-card>
            </b-collapse>
          </b-card>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "games",
  data() {
    return {
      urlMatches: "https://api.football-data.org/v2/competitions/2018/matches/",
      urlTeams: "https://api.football-data.org/v2/competitions/2018/teams",
      proxyUrl: "https://cors-anywhere.herokuapp.com/",
      matches: [],
      teams: [],
      search: ""
    };
  },
  methods: {
    getData(url) {
      fetch(url, {
        headers: {
          "X-Auth-Token": "f26182bf51aa480087e9c34b04cd7e48",
          "Content-Type": "application/json"
        }
        // mode: "no-cors"
      })
        .then(response => {
          // eslint-disable-next-line
          console.log("hello");
          // eslint-disable-next-line
          console.log(response);
          return response.json();
        })

        .then(data => {
          this.matches = data.matches; //pulls the match with index 0
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

  //find way to join mounting using ( includes & titles )
  mounted() {
    this.getData(this.proxyUrl + this.urlMatches);
    this.getData(this.proxyUrl + this.urlTeams);

    this.$root.$on("bv::dropdown::show", bvEvent => {
      console.log("Dropdown is about to be shown", bvEvent);
    });
  }
};
</script>
<style>
#dropdown {
  width: 10%;
  display: flex;
  justify-items: end;
}
#search input[type="text"] {
  width: 100%;

  display: inline-block;
  border: none;
  background: #f1f1f1;
}

#search input[type="text"]:focus {
  background-color: #ddd;
  outline: none;
}
</style>
