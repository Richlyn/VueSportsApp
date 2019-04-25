<template>
  <div>
    <div class="cards" v-for="(team) in getTeams" :key="team.id">
      <b-button v-b-toggle.collapse-1 size="sm" v-on:click="fetchData()">{{team.name}}</b-button>
      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <b-card-text>
            <Chatpage/>
          </b-card-text>
        </b-card>
      </b-collapse>
    </div>
  </div>
</template>

<script>
import Chatpage from "@/components/Chatpage.vue";
import { mapGetters, mapActions } from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
export default {
  name: "Teambtn",
  components: {
    Chatpage
  },
  methods: { ...mapActions(["fetchData"]) },
  computed: { ...mapGetters(["getTeams"]) },
  mounted() {
    this.fetchData();
  }
};
</script>

<style>
</style>
