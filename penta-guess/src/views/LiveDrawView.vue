<template>
  <div class="play">
    <HeaderComponent></HeaderComponent>
    <GameBoard></GameBoard>
  </div>
</template>

<script>
// import GreetComponent from "@/components/GreetComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import GameBoard from "@/components/GameBoard.vue";

export default {
  name: "LiveDrawView",
  components: {
    HeaderComponent,
    GameBoard,
  },
};
</script>
