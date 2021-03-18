<template>
  <div>
    <b-card
      class="card-1 mb-2"
      v-for="post in posts"
      :key="post.index"
      img-top
      tag="article"
    >
      <b-row>
        <b-col md="2">
          <img :src="post.thumbnail" class="imgThumb" />
        </b-col>
        <b-col>
          <b-card-text class="float-left ml-1">
            <a href="">{{ post.title }}</a>
          </b-card-text>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script>
import access from "@/access.js";

export default {
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

<style>
.imgThumb {
  width: 140px;
  height: 100px;
}
</style>