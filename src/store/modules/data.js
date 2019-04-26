const state = {
  urlTeams: "https://api.football-data.org/v2/competitions/CL/teams",
  proxyUrl: "https://cors-anywhere.herokuapp.com/",
  url:
    "https://cors-anywhere.herokuapp.com/https://api.football-data.org/v2/competitions/CL/teams",
  teams: [],
  loading: true
};

const getters = {
  getTeams: state => state.teams
};

const actions = {
  fetchData({ commit }) {
    fetch(state.url, {
      headers: {
        "X-Auth-Token": "f26182bf51aa480087e9c34b04cd7e48",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.teams = data.teams;
        commit("teams", data.teams);
        this.loading = false;
      })
      // eslint-disable-next-line
      .catch(err => console.log(err));
    this.loading = true;
  }
};

const mutations = {
  teams: (state, teams) => (state.teams = teams)
};

export default {
  state,
  getters,
  actions,
  mutations
};
