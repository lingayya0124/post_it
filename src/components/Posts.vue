<template>
  <div>
    <b-card class="card-1 mb-2">
      <b-row>
        <b-col md="2">
          <a :href="post.url">
            <img
              :src="post.thumbnail"
              @click:href="post.url"
              class="imgThumb"
            />
          </a>
        </b-col>
        <b-col>
          <b-card-text class="float-left ml-1">
            <a :href="post.url">{{ post.title }}</a>
          </b-card-text>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script>
export default {
  props: ["post"],

  // data() {
  //   return {
  //     link: `https://old.reddit.com/${this.post.permalink}`,
  //   };
  // },
};
</script>

<style>
.imgThumb {
  width: 140px;
  height: 100px;
}
</style>