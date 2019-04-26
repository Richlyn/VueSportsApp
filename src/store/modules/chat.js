const state = {
  userName: "",
  userEmail: "",
  allPosts: {}
};

const getters = {
  getallPosts: state => state.allPosts
};

const actions = {
  login() {
    let database = firebase.database();
    let provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        // The signed-in user info.
        let user = result.user;

        this.userName = user.displayName;

        this.userEmail = user.email;
        commit(this.getPosts());
      })

      .catch(err => console.log(err));
    console.log(errorCode, errorMessage);
  },

  writeNewPost() {
    const userInput = document.querySelector("input").value;

    // A post entry.
    var postData = {
      author: this.userName,
      body: userInput,
      date: new Date().toISOString()
    };

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
        this.allPosts = data.val();
      });
  }
};

const mutations = {
  allPosts: (state, allPosts) => (state.allPosts = allPosts)
};

export default {
  state,
  getters,
  actions,
  mutations
};
