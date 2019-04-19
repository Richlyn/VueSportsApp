<template>
  <div>
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
  name: "players",
  data() {
    return {
      urlTeams: "https://api.football-data.org/v2/competitions/CL/teams",
      urlSquad: "",
      proxyUrl: "https://cors-anywhere.herokuapp.com/",
      squads: []
    };
  },
  methods: {
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
    players(team) {
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
  }
};
</script>

<style>
</style>
