const state={
    urlTeams: "https://api.football-data.org/v2/competitions/CL/teams",
    proxyUrl: "https://cors-anywhere.herokuapp.com/",
    teams: []
},

const getters={
    teams : state => state.teams
},

const actions ={
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
},
    mounted() {
        this.getData(this.proxyUrl + this.urlTeams);
      }
}

const mutations={
    teams : (state, teams) => (state.teams = teams)

};


export default {
    state,
    getters,
    actions,
    mutations
}