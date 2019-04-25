<template>
  <div class="home">
    <div class="header">
      <h2>Champions League</h2>
    </div>

    <div class="jumbotron">
      <b-jumbotron text-variant="white" border-variant="light">
        <template slot="header">Don't Miss A Moment</template>
        <template slot="lead">Get The Latest Here</template>

        <hr class="my-4">
        <!-- youtube highlight-->
        <iframe
          width="100%"
          height="600px"
          src="https://www.youtube.com/embed/DdTuygoDoSA"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </b-jumbotron>
    </div>
    <div class="row">
      <div class="leftcolumn">
        <div class="card">
          <h2>Keep Up With Champions League</h2>
          <h5>Here is where you keep up to date, Dec 7, 2018</h5>
          <img class="action" src="../assets/action2.jpg">
          <p>Find out more about your teams, matches and chat with fellow fanatics.</p>
        </div>
        <div class="card">
          <h2>Introduced in 1955</h2>
          <h5>From Euro Cup to Champions Club, April 7, 2018</h5>
          <img class="action" src="../assets/action3.jpg">
          <p>
            ...as the European Champion Clubs' Cup, more commonly known as the
            European Cup, it was initially a straight knockout tournament open only to the champion
            club of each national championship. The competition took on its current name in 1992,
            adding a round-robin group stage and allowing multiple entrants from certain countries.
            It has since been expanded, and while most of Europe's national leagues can still only enter their champion,
            the strongest leagues now provide up to five teams.Clubs that finish next-in-line
            in their national league, having not qualified for the Champions League, are eligible for the second-tier UEFA Europa League competition.
          </p>
        </div>
      </div>

      <div class="rightcolumn">
        <div class="card">
          <h2>About Champions League</h2>
          <img class="logo" src="../assets/uefa.png">
          <p>
            The UEFA Champions League (abbreviated as UCL) is an annual club football
            competition organised by the Union of European Football Associations (UEFA)
            and contested by top-division European clubs. It is one of the most prestigious
            tournaments in the world and the most prestigious club competition in European
            football, played by the national league champions (and, for some nations, one or
            more runners-up) of the strongest UEFA national associations.
          </p>
        </div>
        <div class="card">
          <h3>Highlights</h3>
          <div>
            <iframe
              width="200"
              height="200"
              src="https://www.youtube.com/embed/RAOlAAsaSkQ?start=40"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>Barcelona vs Chelsea 2-2</p>
          </div>
          <br>
          <div>
            <iframe
              width="200"
              height="200"
              src="https://www.youtube.com/embed/2TQWbxxyJUA"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>Real Madrid vs Liverpool 3-1</p>
          </div>
          <br>
          <div>
            <iframe
              width="200"
              height="200"
              src="https://www.youtube.com/embed/iBINYZvM6Eo"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>BARCELONA 2-0 INTER</p>
          </div>
        </div>
        <div class="card">
          <h3>Follow Us</h3>
          <Social/>
        </div>
      </div>
    </div>
  </div>
</template>

 <script>
import Social from "@/components/Social.vue";
export default {
  name: "home",
  components: {
    Social
  },
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

<style scoped>
body {
  font-family: Arial;
  padding: 20px;
  background: #f1f1f1;
}
.jumbotron {
  background-color: #191970;

  border-color: white;
}

/* Header/Blog Title */
.header {
  padding: 30px;
  font-size: 40px;
  text-align: center;
  background: white;
}
.logo {
  width: 100px;
  margin: auto;
}
/* Create two unequal columns that floats next to each other */
/* Left column */
.leftcolumn {
  float: left;
  width: 75%;
}

/* Right column */
.rightcolumn {
  float: left;
  width: 25%;
  padding-left: 20px;
}

/* Fake image */
.action {
  background-color: black;
  width: 100%;
  padding: 20px;
}

/* Add a card effect for articles */
.card {
  background-color: white;
  padding: 20px;
  margin-top: 20px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Footer */
.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
  margin-top: 20px;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 800px) {
  .leftcolumn,
  .rightcolumn {
    width: 100%;
    padding: 0;
  }
}
</style>