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
    <p>Chat Now By Logging In</p>
    <div>
      <b-button variant="danger" id="login" v-on:click="login()">Log in!</b-button>
    </div>

    <div v-if="chatRoom == true">
      <div class="card">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a class="nav-link active" href="#general">General</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#fcbarcelona">FC BARCELONA</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#afcajax">AFC Ajax</a>
            </li>
          </ul>
        </div>

        <div id="posts" class="card-body">
          <h5 class="card-title">Champs Chat</h5>
          <div v-for="post in allPosts" :key="post.id">
            <div class="bg-light">
              {{post.author}}:
              {{post.body}}
            </div>
            <div class="bg-light">
              <p>Date:{{post.date}}</p>
            </div>
          </div>
          <input type="text" placeholder="write here">
          <b-button variant="primary" v-on:click="writeNewPost()">Send</b-button>
        </div>
      </div>
      <!-- <div id="fcbarcelona" class="card-body">
        <h5 class="card-title">Champs Chat</h5>
        <div v-for="post in allPosts" :key="post.id">
          <b-card-text>
            <div class="bg-light">
              {{post.author}}:
              {{post.body}}
            </div>
            <div>Date :{{post.date}}</div>
          </b-card-text>
        </div>
      </div>-->
      <!-- <input type="text" placeholder="write here">
      <b-button variant="primary" v-on:click="writeNewPost()">Send</b-button>-->
      <!-- </div>
      <div id="afcajax" class="card-body">
        <h5 class="card-title">Champs Chat</h5>
        <div v-for="post in allPosts" :key="post.id">
          <b-card-text>
            <div class="bg-light">
              {{post.author}}:
              {{post.body}}
            </div>
            <div>Date :{{post.date}}</div>
          </b-card-text>
        </div>
        <input type="text" placeholder="write here">
        <b-button variant="primary" v-on:click="writeNewPost()">Send</b-button>
      </div> 
      </div>-->

      <!-- <div id="isLogin" class="mt-5">
      <div id="chat">
        <p>In order to begin </p>
      </div>
      </div>-->
      <!-- <div>
      <b-card-group deck>
        <b-card id="posts" header-tag="header" footer-tag="footer">
          <h6 slot="header" class="mb-0">Champs Chat</h6>
          <div v-for="post in allPosts" :key="post.id">
            <b-card-text>
              <div class="bg-light">
                {{post.author}}:
                {{post.body}}
              </div>
              <div>Date :{{post.date}}</div>
            </b-card-text>
          </div>
          <input type="text" placeholder="write here">
          <b-button variant="primary" v-on:click="writeNewPost()">Start Chatting now</b-button>
          <em slot="footer">Footer Slot</em>
        </b-card>
      </b-card-group>
      </div>-->

      <!-- <div id="posts" class="mt-5">
      <div v-for="post in allPosts" :key="post.id">
        <div class="post">
          <div class="bg-light">
            {{post.author}}:
            {{post.body}}
          </div>
          <div>Date :{{post.date}}</div>
        </div>
      </div>
      <div>
        <input type="text" placeholder="write here">
        <b-button variant="primary" v-on:click="writeNewPost()">Start Chatting now</b-button>
      </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import Teambtn from "@/components/Teambtn.vue";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
export default {
  name: "chatpage",
  components: {
    Teambtn
  },
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

// import { mapGetters, mapActions } from "vuex";
// export default {
//   name: "Chatpage",
//   methods: { ...mapActions(["login", "writeNewPost", "getPosts"]) },
//   computed: { ...mapGetters(["getallPosts"]) }
// };
</script>


<style scoped>
#posts {
  background-color: darkblue;
  color: grey;
}
input[type="text"] {
  width: 100%;
  display: inline-block;
  border: none;
  background: #f1f1f1;
  position: fixed;
}

input[type="text"]:focus {
  background-color: #ddd;
  outline: none;
}
#posts {
  background-image: url("../assets/background.jpg");
  width: 100%;
}

.iframe {
  margin: auto;
}

h6,
footer {
  color: white;
  margin: auto;
}
</style>
