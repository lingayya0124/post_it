<template>
  <div class="home row d-flex justify-content-center w-100">
    <div class="container">
      <br />

      <subreddit-post
        class="col-12"
        v-bind:post="singlepost"
        v-for="singlepost in posts"
        :key="singlepost.index"
      ></subreddit-post>

      <br />
    </div>
  </div>
</template>

<script>
import SubredditPost from "./SubredditPost.vue";
import access from "@/access.js";
export default {
  components: {
    SubredditPost,
  },
  data() {
    return {
      name: this.$route.params.name,
      posts: [],
    };
  },
  mounted: function () {
    access.reddit_Fetch
      .getHot(this.name)
      .map((get) => get)
      .then((data) => {
        data.forEach((data) => {
          this.posts.push(data);
        });
      });
  },
};
</script>
<style scoped>
@import "https://use.fontawesome.com/releases/v5.5.0/css/all.css";
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
