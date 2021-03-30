<template>
  <div class="home row d-flex justify-content-center">
    <div class="container">
      <br />
      <post
        class="col-12 post"
        v-bind:post="singlepost"
        v-for="singlepost in posts"
        :key="singlepost.index"
      >
      </post>

      <br />
    </div>
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
        console.log(data);
      });
  },
};
</script>


<style scoped>
@import "https://use.fontawesome.com/releases/v5.5.0/css/all.css";
.home {
  font-family: verdana, arial, helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

.card {
  background-color: rgb(199, 215, 230);
}
</style>
