<template>
  <div>
    <b-card class="card-1 mb-2">
      <b-row>
        <b-col-1 class="d-flex justify-content-center">
          <div class="icon d-flex flex-column">
            <div class="d-flex justify-content-center">
              <i class="fas fa-caret-up fa-2x"></i>
            </div>

            <div class="d-flex justify-content-center">{{ post.ups }}</div>

            <div class="d-flex justify-content-center">
              <i class="fas fa-caret-down fa-2x"></i>
            </div>
          </div>
        </b-col-1>
        <b-col-2 class="ml-3">
          <a :href="post.url">
            <img
              :src="post.thumbnail"
              @click:href="post.url"
              class="imgThumb"
            />
          </a>
        </b-col-2>
        <b-col>
          <b-card-text class="float-left ml-1">
            <a :href="post.url">{{ post.title }}</a>
            <router-link
              class="link"
              @click="setIndex()"
              :to="{ name: 'comments', params: { id: index } }"
            >
              <p>{{ post.num_comments }} comments</p></router-link
            >
          </b-card-text>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script>
export default {
  props: ["post", "index"],

  data() {
    return {};
  },
};
</script>

<style>
.imgThumb {
  width: 140px;
  height: 100px;
}

.link {
  text-decoration: none;
  color: #888;
}
</style>