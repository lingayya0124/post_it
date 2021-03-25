<template>
  <div>
    <b-card class="card-1 mb-2">
      <b-row no-gutters>
        <b-col md="left" class="d-flex justify-content-center">
          <div class="icon d-flex flex-column">
            <div class="d-flex justify-content-center">
              <i class="fas fa-caret-up fa-2x"></i>
            </div>

            <div class="d-flex justify-content-center">{{ post.ups }}</div>

            <div class="d-flex justify-content-center">
              <i class="fas fa-caret-down fa-2x"></i>
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
          <b-card-text class="float-left ml-1">
            <a :href="post.url">{{ post.title }}</a>
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
          </b-card-text>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script>
export default {
  props: ["post"],
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