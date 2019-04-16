<template>
  <div class="home">
    <div class="jumbotron">
      <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
        <template slot="header">Keep Up With European Championship</template>
        <template slot="lead">Find out more about your teams, matches and chat with fellow fanatics.</template>
        <!-- ideally want this as an alert as well ; look for slide in alerts and pop ups; potentially timed one are also good  -->
        <!-- <div class="d-flex justify-content-center">

          <div>
            <b-button v-b-modal.modal-multi-1>
              Log in
              <Input:datetime></Input:datetime>
            </b-button>

            <b-modal
              id="modal-multi-1"
              size="lg"
              title="First Modal"
              ok-only
              no-stacking
              class="m-1"
            >
              <b-button v-b-modal.modal-multi-2>Sign Up</b-button>
              <p>why is there no writing</p>
            </b-modal>

            <b-modal id="modal-multi-2" title="Second Modal" ok-only>
              <p class="my-2">Sign Up</p>
              <b-button v-b-modal.modal-multi-3 size="sm">Register</b-button>
            </b-modal>
            <b-modal id="modal-multi-3" size="sm" title="Third Modal" ok-only>
              <p class="my-1">Thank you</p>
            </b-modal>
        </div>-->
        <!-- Modal Buttons -->
        <b-button @click="modalShow = !modalShow" class="m-1">Join Now</b-button>
        <b-button @click="modalShow = !modalShow" class="m-1">Log In</b-button>
        <!-- model body-->
        <b-modal v-model="modalShow">
          <div class="dropdown-menu">
            <!-- form-->
            <form class="px-4 py-3">
              <div class="form-group">
                <label for="exampleDropdownFormEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleDropdownFormEmail1"
                  placeholder="email@example.com"
                >
              </div>
              <div class="form-group">
                <label for="exampleDropdownFormPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleDropdownFormPassword1"
                  placeholder="Password"
                >
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck">
                <label class="form-check-label" for="dropdownCheck">Remember me</label>
              </div>
              <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">New around here? Sign up</a>
            <a class="dropdown-item" href="#">Forgot password?</a>
          </div>
        </b-modal>
        <hr class="my-4">
        <!-- youtube highlight-->
        <iframe
          width="100%"
          height="315px"
          src="https://www.youtube.com/embed/DdTuygoDoSA"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </b-jumbotron>
    </div>
  </div>
</template>

 <script>
export default {
  name: "home",
  data() {
    return {
      modalShow: false
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    }
  }
};
</script>

<style>
</style>