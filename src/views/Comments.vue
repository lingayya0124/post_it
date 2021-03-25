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
      </div>

      <b-card
        class="card-1 mb-2 w-100"
        v-for="comment in comments"
        :key="comment.index"
      >
        <b-row>
          <b-col md="left" class="d-flex justify-content-center">
            <div class="d-flex flex-column">
              <div class="d-flex justify-content-center">
                <i class="fas fa-caret-up fa-2x"></i>
              </div>

              <div class="d-flex justify-content-center">{{ comment.ups }}</div>

              <div class="d-flex justify-content-center">
                <i class="fas fa-caret-down fa-2x"></i>
              </div>
            </div>
          </b-col>
          <b-col>
            <b-card-text class="float-left ml-1">
              {{ comment.body }}
            </b-card-text>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
import access from "@/access.js";

export default {
  name: "comments",

  data() {
    return {
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
        this.imgsrc = comment_data.preview.images[0].resolutions[3].url;
        console.log(comment_data);
        comment_data.comments
          .forEach((comment_data) => {
            this.comments.push(comment_data);
          })
          .catch((error) => console.log(error));
      });
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





