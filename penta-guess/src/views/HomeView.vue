<template>
  <div class="home">
    <Login msg="PentaGame" />
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/LoginComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "HomeView",
  components: {
    Login,
    FooterComponent
  },
};
</script>
