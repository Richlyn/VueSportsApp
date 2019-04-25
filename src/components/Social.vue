<template>
  <div>
    <mdb-btn tag="a" size="lg" floating class="btn-fb" icon="facebook-f" fab></mdb-btn>
    <mdb-btn tag="a" size="lg" floating class="btn-yt" icon="youtube" fab></mdb-btn>
    <mdb-btn tag="a" size="lg" floating class="btn-ins" icon="instagram" fab></mdb-btn>
  </div>
</template>

<script>
import { mdbBtn } from "mdbvue";
export default {
  name: "ButtonsSocial",
  components: {
    mdbBtn
  }
};
</script>

<style>
</style>
