<template>
  <div id="app" class="justify-content-center">
    <!-- <div class="nav bg-dark">
      <router-link class="link" to="/">
        <h1>Postit</h1>
      </router-link>
    </div> -->

    <nav class="navbar navbar-dark bg-dark">
      <span class="navbar-brand"
        ><router-link to="/"> Postit </router-link></span
      >
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
/* .nav {
  width: 100%;
  height: 50px;
} */
#app {
  background-color: rgb(199, 215, 230);
}
</style>