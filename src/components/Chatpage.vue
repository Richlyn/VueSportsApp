<template>
  <div>
    <p class="h3 mt-5">Join The Chat Now</p>

    <div>
      <b-button variant="danger" id="login" v-on:click="login()">Log in!</b-button>
    </div>

    <div id="isLogin" class="mt-5">
      <div id="chat">
        <p>Write Your Post Here:</p>
        <input type="text">
        <b-button variant="outline-primary" v-on:click="writeNewPost()">Send post</b-button>
      </div>
    </div>
    <div id="posts" class="mt-5">
      <div v-for="post in allPosts" :key="post.id">
        Author: {{post.author}}
        Message: {{post.body}}
        Date: {{post.date}}
      </div>
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
      allPosts: {}
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


<style>
input[type="text"] {
  width: 100%;

  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus {
  background-color: #ddd;
  outline: none;
}
</style>
