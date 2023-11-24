<template>
  <div class="play">
    <HeaderComponent></HeaderComponent>
    <GreetComponent greet-title="Penta Guess"></GreetComponent>
  </div>
</template>

<script>
import GreetComponent from "@/components/GreetComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: "PlayView",
  components: {
    GreetComponent,
    HeaderComponent,
  },
};
</script>
