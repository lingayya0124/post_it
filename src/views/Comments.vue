<template>
  <div class="container">
    <div class="">
      <h1 class="mt-2 row d-flex justify-content-center">
        {{ title }}
      </h1>
      <br />
      <div
        v-if="thumbnail !== 'self'"
        class="row d-flex justify-content-center"
      >
        <img class="image" :src="imgsrc" alt="" />
        <comment
          class="col-12"
          v-bind:comment="singlecomment"
          v-for="singlecomment in comments"
          :key="singlecomment.index"
        ></comment>
      </div>
    </div>
  </div>
</template>

<script>
import access from "@/access.js";
import comment from "@/components/comment.vue";
export default {
  name: "comments",
  components: {
    comment,
  },

  data() {
    return {
      isOrange: false,
      isSkyblue: false,
      thumbnail: "",
      title: "",
      imgsrc: "",
      comments: [],
      id: "",
    };
  },

  mounted: function () {
    this.id = this.$route.params.id;
    access.reddit_Fetch
      .getSubmission(this.id)
      .expandReplies({ limit: 1, depth: 1 })
      .then((comment_data) => {
        this.title = comment_data.title;
        this.thumbnail = comment_data.thumbnail;
        // this.imgsrc = comment_data.preview.images[0].resolutions[3].url;
        this.imgsrc = comment_data.url;
        console.log(comment_data);
        comment_data.comments
          .forEach((comment_data) => {
            this.comments.push(comment_data);
          })
          .catch((error) => console.log(error));
      });
    console.log(this.comments);
  },
};
</script>
<style scoped>
h1 {
  font-size: 2.5rem;
}
.image {
  width: 400px;
  height: 400px;
}
</style>





