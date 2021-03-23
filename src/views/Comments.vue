<template>
  <div class="container d-flex justify-content-center">
    <div class="">
      <h1 class="mt-2 row d-flex justify-content-center">{{ title }}</h1>
      <br />
      <div class="row d-flex justify-content-center">
        <img class="image" :src="imgsrc" />
      </div>

      <b-card
        class="card-1 mb-2 w-100"
        v-for="comment in comments"
        :key="comment.index"
      >
        <b-row>
          <b-col-1 class="d-flex justify-content-center">
            <div class="d-flex flex-column">
              <div class="d-flex justify-content-center">
                <i class="fas fa-caret-up fa-2x"></i>
              </div>

              <div class="d-flex justify-content-center">{{ comment.ups }}</div>

              <div class="d-flex justify-content-center">
                <i class="fas fa-caret-down fa-2x"></i>
              </div>
            </div>
          </b-col-1>
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
      title: "",
      imgsrc: "",
      comments: [],
      id: null,
      indexid: this.$route.params.id,
    };
  },

  mounted: function () {
    console.log(this.indexid);

    access.reddit_Fetch.getHot().then((data) => {
      this.id = data[this.indexid].id;

      this.title = data[this.indexid].title;
      this.imgsrc = data[this.indexid].url;
      access.reddit_Fetch
        .getSubmission(this.id)
        .expandReplies({ limit: 1, depth: 1 })
        .then((comment_data) => {
          comment_data.comments.forEach((comment_data) => {
            this.comments.push(comment_data);
          });
        });
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
/* .icon {
  width: 100px;
  height: 69px;
} */
</style>





