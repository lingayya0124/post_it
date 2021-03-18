<template>
  <div class="home row d-flex justify-content-center w-100">
    <post
      class="col-12"
      v-bind:post="singlepost"
      v-for="singlepost in posts"
      :key="singlepost.index"
    >
    </post>
    <br />
  </div>
</template>

<script>
import post from "./Posts";
import access from "@/access.js";
export default {
  components: {
    post,
  },
  data() {
    return {
      posts: [],
    };
  },
  mounted: function () {
    access.reddit_Fetch
      .getHot()
      .map((get) => get)
      .then((data) => {
        data.forEach((data) => {
          this.posts.push(data);
        });
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card1 {
  max-width: 50rem;
  height: 20rem;
}
</style>
