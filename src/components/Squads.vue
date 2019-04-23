<template>
  <div>
    <b-button v-b-toggle.collapse-1-inner size="sm" v-on:click="getSquads(team)">Players</b-button>
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
  props: ["team"],
  data() {
    return {
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
    getSquads(team) {
      this.getDataPlayers(
        this.proxyUrl + "https://api.football-data.org/v2/teams/" + team.id
      );
    }
  }
};
</script>

<style>
@media (min-width: 30em) and (orientation: landscape) {
  .teams {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>