<template>
  <div>
    <b-card class="card-1 mb-2 w-100">
      <b-row>
        <b-col md="left" class="d-flex justify-content-center">
          <div class="d-flex flex-column">
            <div class="d-flex justify-content-center">
              <i
                @click="upvotes()"
                :style="{ color: isOrange ? 'orange' : '' }"
                class="fas fa-caret-up fa-2x"
              ></i>
            </div>

            <div class="d-flex justify-content-center">{{ commentup }}</div>

            <div class="d-flex justify-content-center">
              <i
                @click="downvotes()"
                :style="{ color: isSkyblue ? 'skyblue' : '' }"
                class="fas fa-caret-down fa-2x"
              ></i>
            </div>
          </div>
        </b-col>
        <b-col>
          <b-card-text class="float-left ml-1">
            <p class="mt-4">{{ comment.body }}</p>
          </b-card-text>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import access from "@/access.js";
export default {
  props: ["comment"],
  data() {
    return {
      isOrange: false,
      isSkyblue: false,
      commentup: this.comment.ups,
    };
  },

  methods: {
    upvotes() {
      this.isOrange = !this.isOrange;

      if (this.isOrange == true) {
        this.isSkyblue = false;
        access.reddit_Fetch.getComment(this.comment.id).upvote();
        this.commentup = this.commentup + 1;
        console.log("upvote");
      } else {
        access.reddit_Fetch.getComment(this.comment.id).unvote();
        this.commentup = this.commentup - 1;
        console.log("unvote");
      }
    },
    downvotes() {
      this.isSkyblue = !this.isSkyblue;
      if (this.isSkyblue == true) {
        this.isOrange = false;
        access.reddit_Fetch.getComment(this.comment.id).downvote();
        this.commentup = this.commentup - 1;
      } else {
        access.reddit_Fetch.getComment(this.comment.id).unvote();
        this.commentup = this.commentup + 1;
      }
    },
  },
};
</script>
<style scoped>
</style>