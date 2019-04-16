<template>
  <div>
    <div>
      <b-button v-b-toggle.collapse-1 variant="primary">{{team.name}}</b-button>
      <b-collapse id="collapse-1" class="mt-2">
        <b-card v-for="team in teams" :key="team.id">
          <p class="card-text">
            <img :src="team.crestUrl">
            Team website: {{team.website}},
            Team Stadium:{{team.venue}}
          </p>
          <b-button v-b-toggle.collapse-1-inner size="sm">Players</b-button>
          <b-collapse id="collapse-1-inner" class="mt-2">
            <b-card v-for="squad in teams" :key="squad.id">
              <label>Name:</label>
              {{squad.id}}
              <label>Position:</label>
              {{squad.position}}
              <label>Country of Birth:</label>
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
      urlTeams: "https://api.football-data.org/v2/competitions/2018/teams/",
      urlSquad: "https://api.football-data.org/v2/teams/759",
      proxyUrl: "https://cors-anywhere.herokuapp.com/",
      teams: [],
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
          this.squad = data.squad;
          // eslint-disable-next-line
          console.log("i fetched" + data);
          // eslint-disable-next-line
          console.log("teams", this.teams);
          // eslint-disable-next-line
          console.log("squad", this.squad);
        })
        // eslint-disable-next-line
        .catch(err => console.log(err));
    }
  },
  //find way to join mounting using ( includes & titles )
  mounted() {
    this.getData(this.proxyUrl + this.urlTeams);
    this.getData(this.proxyUrl + this.urlSquad);
  }
};
</script>

<style>
img {
  width: 95%;
}
</style>