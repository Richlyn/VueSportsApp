<template>
  <div>
<div role="tablist">
    <b-card no-body class="mb-1" v-for="team in teams" :key="team.id>
      <b-card-header  role="tab">
        <b-button  variant="info">{{team.name}}</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><img :src="team.crestUrl">
            {{team.website}},
            {{team.venue}}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </div>
  </div>

  
</template>

<script>
export default {
  name: "teamsinfo",
  data() {
    return {
      urlTeams: "https://api.football-data.org/v2/competitions/2018/teams/",
      proxyUrl: "https://cors-anywhere.herokuapp.com/",
      teams: []
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
          console.log(response);
          return response.json();
        })

        .then(data => {
          this.teams = data.teams; //pulls the match with index 0
          // eslint-disable-next-line
          console.log("i fetched" + data);
          console.log("teams", this.teams);
        })
        // eslint-disable-next-line
        .catch(err => console.log(err));
    }
  },
  //find way to join mounting using ( includes & titles )
  mounted() {
    this.getData(this.proxyUrl + this.urlTeams);
  }
};
</script>

<style>
img {
  width: 95%;
}
.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
  display: none;
}
</style>