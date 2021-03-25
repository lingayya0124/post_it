<template>
  <div id="app">
    <div class="nav bg-dark">
      <router-link class="link" to="/">
        <h1>Postit</h1>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.nav {
  width: 100%;
  height: 50px;
}
</style>