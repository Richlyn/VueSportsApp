<template>
  <div>
    <div class="filter">
      <div>
        <b-dropdown split text="Teams" id="dropdown" class="m-2">
          <b-dropdown-item href="#">teams</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
    <!--search bar-->
    <div id="search" class="d-flex justify-content-end p-5">
      <label style="height:0rem">
        Search here:
        <input type="text" v-model="search">
      </label>
    </div>
    <!--Table-->
    <div class="table">
      <div class="overflow-auto">
        <div>
          <b-table
            v-for="match in matches"
            :key="match.id"
            {{match.homeTeam}}
            {{match.awayTeam}}
            id="my-table"
            :per-page="perPage"
            :current-page="currentPage"
            small
          ></b-table>:matches="matches"
          <p class="mt-3">Current Page: {{ currentPage }}</p>
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
          ></b-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "games",
  data() {
    return {
      urlMatches: "https://api.football-data.org/v2/competitions/2018/matches/",
      proxyUrl: "https://cors-anywhere.herokuapp.com/",
      matches: [],
      homeTeam: [],
      awayTeam: [],
      rows: 100,
      perPage: 20,
      currentPage: 1,
      search: ""
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
          this.matches = data.matches; //pulls the match with index 0
          // eslint-disable-next-line
          console.log("i fetched" + data);
          console.log("matches", this.matches);
          console.log("Home Team", this.homeTeam);
          console.log("Away Team", this.awayTeam);
        })
        // eslint-disable-next-line
        .catch(err => console.log(err));
    }
  },

  //find way to join mounting using ( includes & titles )
  mounted() {
    this.getData(this.proxyUrl + this.urlMatches);
    this.$root.$on("bv::dropdown::show", bvEvent => {
      console.log("Dropdown is about to be shown", bvEvent);
    });
  },
  computed: {
    rows() {
      return this.matches;
    }
  }
};
</script>


<style>
#dropdown {
  width: 10%;
  display: flex;
  justify-items: end;
}
#search input[type="text"] {
  width: 100%;

  display: inline-block;
  border: none;
  background: #f1f1f1;
}

#search input[type="text"]:focus {
  background-color: #ddd;
  outline: none;
}
</style>
