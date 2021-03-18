<template>
  <div>
    <b-card class="card-1 mb-2">
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
export default {
  props: ["post"],
};
</script>

<style>
.imgThumb {
  width: 140px;
  height: 100px;
}
</style>