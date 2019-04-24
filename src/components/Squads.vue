<template>
  <div>
    <b-button v-b-toggle.collapse-1 size="sm" v-on:click="getSquads(team)">Players</b-button>
    <div v-for="squad in squads" :key="squad.id">
      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <div class="card-text">
            Position:
            {{squad.position}}
            <p>
              Name:
              {{squad.name}}, ({{squad.shirtNumber}})
              Country of Birth:
              {{squad.countryOfBirth}}
              Shirt Number
            </p>
          </div>
        </b-card>
      </b-collapse>
    </div>
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