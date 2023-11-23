<template>
  <div class="home">
    <nav>
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> | -->
      <router-link to="/play">Play</router-link> |
      <router-link to="/history">History</router-link>
    </nav>
    <div class="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10" >

      <p class="text-7xl text-gray-700 font-bold mb-5 ">      <span class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
        Penta<br />
        Guess
      </span></p>
      <p class="text-gray-500 text-lg">Login to play your favourite game</p>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div><img alt="Vue logo" src="../assets/logo.jpg" /></div>
      <div><Login msg="PentaGame" /></div>
    </div>
    <footer class="mt-16 text-center">
      <p>
        Created by
        <a class="text-blue-500 font-medium" href="https://github.com/byron21" target="_blank">Byron Gavras</a>
      </p>
      <small>
        Made with ♡ and a cup of coffee
      </small>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/LoginComponent.vue";

export default {
  name: "HomeView",
  components: {
    Login
  },
};
</script>
