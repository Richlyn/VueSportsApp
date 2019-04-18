<template>
  <div>
    <div v-for="team in teams" :key="team.id">
      <b-button v-b-toggle.collapse-1 variant="primary">{{team.name}}</b-button>
      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <p class="card-text">
            <img :src="team.crestUrl">
            Team website:{{team.website}},
            Team Stadium:{{team.venue}}
          </p>
          <b-button v-b-toggle.collapse-1-inner size="sm" v-on:click="players()">Players</b-button>
          <b-collapse id="collapse-1-inner" class="mt-2">
            <b-card v-for="squad in squad" :key="squad.id">
              Name:
              {{squad.id}}
              Position:
              {{squad.position}}
              Country of Birth:
              {{squad.countryOfBirth}}
            </b-card>
          </b-collapse>
        </b-card>
      </b-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: "teamsinfo",
  data() {
    return {
      urlTeams: "https://api.football-data.org/v2/competitions/CL/teams",
      urlSquad: "https://api.football-data.org/v2/teams/",
      proxyUrl: "https://cors-anywhere.herokuapp.com/",
      teams: [],
      id_teams: null,
      squad: []
    };
  },
  methods: {
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
          this.teams = data.teams; //pulls the match with index 0
          //    this.squad = data.squad;
          // eslint-disable-next-line
          console.log("i fetched" + data);
          // eslint-disable-next-line
          console.log("teams", this.teams);
          // eslint-disable-next-line
          //    console.log("squad", this.squad);
        })
        // eslint-disable-next-line
        .catch(err => console.log(err));
    },

    getDataPlayers: url => {
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
          // eslint-disable-next-line
          console.log(data);
          this.players(this.proxyUrl + this.urlSquad);
        })
        // eslint-disable-next-line
        .catch(err => console.log(err));
    },
    players: team => {
      return (this.id_team = this.teams.id);
      // eslint-disable-next-line
      console.log(team.id);
      // this.id_teams = team.id;
    }
  },
  mounted() {
    this.getData(this.proxyUrl + this.urlTeams);

    //this.getDataPlayers(this.urlSquad + team.id);
  }
};
</script>

<style>
img {
  width: 95%;
}
</style>