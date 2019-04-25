<template>
  <div>
    <!-- <Log/>
    <Teambtn/>-->
    <Chatpage/>
  </div>
</template>

<script>
// import Log from "@/components/Log.vue";
// import Teambtn from "@/components/Teambtn.vue";
import Chatpage from "@/components/Chatpage.vue";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
export default {
  name: "Chat",
  components: {
    // Log,
    // Teambtn,
    Chatpage
  }
};
</script>

<style>
</style>
