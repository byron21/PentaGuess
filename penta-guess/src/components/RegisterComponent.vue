<template>
  <div class="register">
    <section class="hero is-dark"></section>
    <div>
      <h2 class="subtitle">PentaGuess game</h2>
      <h1 class="title">Make sure you select 5 of 30 numbers</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "RegisterComponent",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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

.hero {
  text-align: center;
  background-image: url("../assets/logo.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 200px;
}

.title {
  font-size: 20px;
}

.subtitle {
  text-shadow: 18px 18px 18px rgba(0, 0, 0, 0.7);
  font-size: 30px;
}

.button-block {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  position: absolute;
  bottom: -150px;

  .button {
    margin-right: 50px;
    padding-left: 50px;
    padding-right: 50px;
  }

  .welcome {
    width: 400px;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
  }
}

.is-xl {
  font-size: 1.7rem;
}
</style>
