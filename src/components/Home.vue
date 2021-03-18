<template>
  <div class="home d-flex justify-content-center w-100">
    <post></post>
  </div>
</template>

<script>
import post from "./Posts";
export default {
  components: {
    post,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card1 {
  max-width: 50rem;
  height: 20rem;
}
</style>
