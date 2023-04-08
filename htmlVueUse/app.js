const app = Vue.createApp({
  //   template: "<h2>I am the template</h2>",
  data() {
    return {
      url: "https://github.com/lekejosh",
      showBooks: true,
      books: [
        {
          title: "Name of the wind",
          author: "LekeJosh",
          img: "https://raw.githubusercontent.com/iamshaunjp/Vue-3-Firebase/lesson-13/assets/1.jpg",
          isFav: true,
        },
        {
          title: "I am a baboon",
          author: "Portable",
          img: "https://raw.githubusercontent.com/iamshaunjp/Vue-3-Firebase/lesson-13/assets/2.jpg",
          isFav: false,
        },
        {
          title: "Wose",
          author: "Mad o",
          img: "https://raw.githubusercontent.com/iamshaunjp/Vue-3-Firebase/lesson-13/assets/3.jpg",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvents(book) {
      console.log("Clicked");
      book.isFav = !book.isFav;
    },
    // handleMouseMove(e) {
    //   this.x = e.offsetX;
    //   this.y = e.offsetY;
    // },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
