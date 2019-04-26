<template>
  <div>
    <div class="iframe">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/gTzDmjTeV2U?start=111"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <p class="h3 mt-5">Chat With Other Fans</p>
    <p>By Logging In</p>
    <div>
      <b-button variant="danger" id="login" v-on:click="login()">Log in!</b-button>
    </div>
    <div v-if="chatRoom == true">
      <b-tabs content-class="mt-3">
        <b-tab title="General" active>
          <div id="posts" class="card-body">
            <h5 class="card-title">Champs Chat</h5>
            <div class="messages">
              <div v-for="post in allPosts" :key="post.id">
                <div class="bg-light float-right">
                  {{post.author}}:
                  {{post.body}}
                </div>
                <div class="bg-light">
                  <p>Date:{{post.date}}</p>
                </div>
              </div>
            </div>
            <input type="text" placeholder="write here">
            <b-button variant="primary" v-on:click="writeNewPost()">Send</b-button>
          </div>
        </b-tab>
        <b-tab title="FC Barcelona">
          <div id="posts" class="card-body">
            <h5 class="card-title">Champs Chat</h5>
            <div class="messages">
              <div v-for="post in allPosts" :key="post.id">
                <div class="bg-light float-right">
                  {{post.author}}:
                  {{post.body}}
                </div>
                <div class="bg-light">
                  <p>Date:{{post.date}}</p>
                </div>
              </div>
            </div>
            <input type="text" placeholder="write here">
            <b-button variant="primary" v-on:click="writeNewPost()">Send</b-button>
          </div>
        </b-tab>
        <b-tab title="Manchester">
          <div id="posts" class="card-body">
            <h5 class="card-title">Champs Chat</h5>
            <div class="messages">
              <div v-for="post in allPosts" :key="post.id">
                <div class="bg-light float-right">
                  {{post.author}}:
                  {{post.body}}
                </div>
                <div class="bg-light">
                  <p>Date:{{post.date}}</p>
                </div>
              </div>
            </div>
            <input type="text" placeholder="write here">
            <b-button variant="primary" v-on:click="writeNewPost()">Send</b-button>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
export default {
  name: "chatpage",
  data() {
    return {
      userName: "",
      userEmail: "",
      allPosts: {},
      chatRoom: false
    };
  },
  methods: {
    login() {
      let database = firebase.database();
      let provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          // The signed-in user info.
          let user = result.user;
          console.log("Login successful!");
          console.log(user.displayName);
          this.userName = user.displayName;
          console.log(user.email);
          this.userEmail = user.email;
          this.chatRoom = true;
          this.getPosts();
        })

        .catch(err => console.log(err));
      console.log(errorCode, errorMessage);
    },

    writeNewPost() {
      console.log("in write post");
      const userInput = document.querySelector("input").value;

      // A post entry.
      var postData = {
        author: this.userName,
        body: userInput,
        date: new Date().toISOString()
      };

      console.log(postData);

      // Get a key for a new Post.
      var newPostKey = firebase
        .database()
        .ref()
        .child("posts")
        .push().key;

      // Write the new post's data simultaneously in the posts list and the user's post list.
      var updates = {};
      updates["/posts/" + newPostKey] = postData;

      firebase
        .database()
        .ref()
        .update(updates);
    },

    getPosts() {
      const postsDiv = document.querySelector("#posts");
      firebase
        .database()
        .ref("posts")
        .on("value", data => {
          console.log(data.val());
          this.allPosts = data.val();
        });
    }
  }
};
</script>


<style scoped>
#posts {
  background-color: darkblue;
  color: black;
}
input[type="text"] {
  width: 100%;
  height: 100px;
  display: inline-block;
  border: greenyellow;
  background: #f1f1f1;
}

input[type="text"]:focus {
  background-color: #ddd;
  outline: none;
}
#posts {
  background-image: url("../assets/background.jpg");
  width: 100%;
}
.messages {
  height: 400px;
  overflow-y: auto;
}
.iframe {
  margin: auto;
}

h6,
footer,
.card-title {
  color: white;
  margin: auto;
}
</style>
