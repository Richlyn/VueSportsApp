const state={
    
    comps:[]
},

const getters={},

const actions = {

      data() {
        return {
          urlComps: "http://api.football-data.org/v2/competitions",
          comps: [],
          search: ""
        };
      },
    //   computed: {
    //     filteredBooks: function() {
    //       if (this.search === "") {
    //         return this.books;
    //       }
    //       return this.books.filter(book => {
    //         return (
    //           book.titulo.toLowerCase().includes(this.search.toLowerCase()) ||
    //           book.descripcion.toLowerCase().includes(this.search.toLowerCase())
    //         );
    //       });
    //     }
    //   },
      methods: {
        getData(url) {
          fetch(url, {
            headers: {
              "Content-Type": "application/json"
            },
            mode: "cors"
          })
            .then(response => {
              //console.log(2);
              return response.json();
            })
    
            .then(data => {
              // console.log(3);
              this.books = data.books; //pulls the book with index 0
              // eslint-disable-next-line
              console.log("books", this.books);
            })
            // eslint-disable-next-line
            .catch(err => console.log(err));
        }
      },
    
      //find way to join mounting using ( includes & titles )
      mounted() {
        this.getData(this.urlComps);
      }
    };



const mutations={};


export default {
    state,
    getters,
    actions,
    mutations
}