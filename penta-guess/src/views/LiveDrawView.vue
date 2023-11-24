<template>
  <div class="play">
    <HeaderComponent></HeaderComponent>
    <GameBoardComponent></GameBoardComponent>
  </div>
</template>

<script>
// import GreetComponent from "@/components/GreetComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import GameBoardComponent from "@/components/GameBoardComponent.vue";

export default {
  name: "LiveDrawView",
  components: {
    HeaderComponent,
    GameBoardComponent,
  },
};
</script>
