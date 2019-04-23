<template>
  <div>
    <b-button v-b-toggle.collapse-1-inner size="sm" v-on:click="squads(team)">Players</b-button>
    <b-card v-for="squad in squads" :key="squad.id">
      <b-list-group>
        <b-list-group-item button>
          Name:
          {{squad.name}}, ({{squad.shirtNumber}})
        </b-list-group-item>
        <b-list-group-item button>
          Position:
          {{squad.position}}
        </b-list-group-item>
        <b-list-group-item button disabled>
          Country of Birth:
          {{squad.countryOfBirth}}
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "squads",
  data() {
    return {
      urlTeams: "https://api.football-data.org/v2/competitions/CL/teams",
      urlSquad: "",
      proxyUrl: "https://cors-anywhere.herokuapp.com/",
      teams: [],
      squads: []
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
          // eslint-disable-next-line
          console.log("i fetched" + data);
          // eslint-disable-next-line
          console.log("teams", this.teams);
          // eslint-disable-next-line
          //    console.log("squad", this.squad);
        })
        // eslint-disable-next-line
        .catch(err => console.log(err));
      this.getData(this.proxyUrl + this.urlTeams);
    },

    getDataPlayers(url) {
      fetch(url, {
        headers: {
          "X-Auth-Token": "f26182bf51aa480087e9c34b04cd7e48",
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          // eslint-disable-next-line
          console.log("hello 1");
          // eslint-disable-next-line
          console.log(response);
          return response.json();
        })

        .then(data => {
          // eslint-disable-next-line
          console.log(data);
          this.squads = data.squad;
        })
        // eslint-disable-next-line
        .catch(err => console.log(err));
    },
    squads(team) {
      // eslint-disable-next-line
      console.log(team);
      // eslint-disable-next-line
      console.log(team.id);
      this.getDataPlayers(
        this.proxyUrl + "https://api.football-data.org/v2/teams/" + team.id
      );
      // eslint-disable-next-line
      console.log(this.urlSquad);
    }
  },
  mounted() {
    this.getData(this.proxyUrl + this.urlTeams);
  }
};
</script>

<style>
</style>
