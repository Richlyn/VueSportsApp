<template>
  <div>
    <p class="h3 mt-5">Join The Chat Now By Logging In</p>
    <div>
      <b-button variant="danger" id="login" v-on:click="login()">Log in!</b-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
export default {
  name: "Log",
  methods: { ...mapActions(["login", "writeNewPost", "getPosts"]) },
  computed: { ...mapGetters(["getallPosts"]) }
};
</script>

<style>
</style>
