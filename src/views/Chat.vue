<template>
  <div>
    <Chatpage/>
  </div>
</template>

<script>
import Chatpage from "@/components/Chatpage.vue";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
export default {
  name: "Chat",
  components: {
    Chatpage
  }
};
</script>

<style>
</style>
