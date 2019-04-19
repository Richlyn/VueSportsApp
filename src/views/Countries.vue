<template>
  <div>
    <iframe
      src="https://www.google.com/maps/d/u/0/embed?mid=19GHfnAWYGHuNlK8yN-YhD5clAlfTXNE1"
      width="100%"
      height="480"
    ></iframe>
    <h4>List of Countries</h4>
    <div v-for="team in teams" :key="team.id">
      <li>
        <img class="crest" :src="team.crestUrl">
        {{team.name}} - {{team.venue}}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "countries",
  data() {
    return {
      urlTeams: "https://api.football-data.org/v2/competitions/CL/teams",
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
    }
  },
  mounted() {
    this.getData(this.proxyUrl + this.urlTeams);
    // this.players();
  }
};
</script>

<style>
.crest {
  width: 5%;
}
li {
  text-decoration: none;
}
</style>
