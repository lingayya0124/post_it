<template>
  <div class="home d-flex justify-content-center w-100">
    <div>
      <b-card
        class="card-1 mb-2"
        v-for="post in posts"
        :key="post.index"
        img-top
        tag="article"
      >
        <b-card-text>
          {{ post.title }}
        </b-card-text>
        <img :src="post.thumbnail" alt="" />
      </b-card>
    </div>
  </div>
</template>

<script>
import access from "@/access.js";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
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
  text-align: center;
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
