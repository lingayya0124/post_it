<template>
  <div>
    <b-card class="card-1 mb-2">
      <b-row no-gutters>
        <b-col md="left" class="d-flex justify-content-center">
          <div class="icon d-flex flex-column">
            <div class="d-flex justify-content-center">
              <i
                @click="upvotes()"
                :style="{ color: isOrange ? 'orange' : '' }"
                class="fas fa-caret-up fa-2x"
              ></i>
            </div>

            <div class="d-flex justify-content-center">{{ postup }}</div>

            <div class="d-flex justify-content-center">
              <i
                @click="downvotes()"
                :style="{ color: isSkyblue ? 'skyblue' : '' }"
                class="fas fa-caret-down fa-2x"
              ></i>
            </div>
          </div>
        </b-col>
        <b-col md="left" class="ml-3 d-flex justify-content-center">
          <a :href="post.url">
            <img
              v-if="post.thumbnail !== 'self'"
              :src="post.thumbnail"
              @click:href="post.url"
              class="imgThumb"
            />
          </a>
          <img
            class="imgThumb"
            v-if="post.thumbnail == 'self'"
            src="@/assets/d3455a22af5f3ed7565fb5fb71bb8d43-send-message-icon-by-vexels.png"
            alt=""
          />
        </b-col>
        <b-col cols="">
          <b-card-text class="float-left ml-4">
            <a class="title" :href="post.url">{{ post.title }}</a>

            <div class="row ml-1">
              <router-link
                class="link"
                :to="{
                  name: 'comments',
                  params: {
                    id: post.id,
                  },
                }"
              >
                <p>{{ post.num_comments }} comments</p></router-link
              >
              <router-link
                class="ml-2 subreddit"
                :to="{
                  name: 'subreddit',
                  params: {
                    name: post.subreddit.display_name,
                  },
                }"
              >
                <p>Subreddit:{{ post.subreddit_name_prefixed }}</p></router-link
              >
            </div>
          </b-card-text>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script>
import access from "@/access.js";

export default {
  props: ["post"],
  data() {
    return {
      isOrange: false,
      isSkyblue: false,

      postup: this.post.ups,
    };
  },
  methods: {
    upvotes() {
      this.isOrange = !this.isOrange;

      if (this.isOrange == true) {
        this.isSkyblue = false;
        access.reddit_Fetch.getSubmission(this.post.id).upvote();
        this.postup = this.postup + 1;
        console.log("upvote");
      } else {
        access.reddit_Fetch.getSubmission(this.post.id).unvote();
        this.postup = this.postup - 1;
        console.log("unvote");
      }
    },
    downvotes() {
      this.isSkyblue = !this.isSkyblue;
      if (this.isSkyblue == true) {
        this.isOrange = false;
        access.reddit_Fetch.getSubmission(this.post.id).downvote();
        this.postup = this.postup - 1;
      } else {
        access.reddit_Fetch.getSubmission(this.post.id).unvote();
        this.postup = this.postup + 1;

        console.log(this.postup);
      }
    },
  },
};
</script>

<style>
.imgThumb {
  width: 140px;
  height: 100px;
  border-radius: 8px;
}

.link {
  text-decoration: none;

  color: #888;
}
.title {
  font-family: "Times New Roman", Times, serif;
  text-decoration: none;
  color: black;
}
.subreddit {
  text-decoration: none;

  color: #888;
}
</style>