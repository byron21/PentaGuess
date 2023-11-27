<template>
  <div class="play">
    <HeaderComponent></HeaderComponent>
    <!-- <GreetComponent greet-title="Penta Guess"></GreetComponent> -->
    <div class="grid grid-cols-2">
      <GameBoard></GameBoard>

      <SelectionNumbersBoard></SelectionNumbersBoard>
    </div>

    
  </div>
</template>

<script>
// import GreetComponent from "@/components/GreetComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import GameBoard from "@/components/GameBoard.vue";
import SelectionNumbersBoard from "@/components/SelectionNumbersBoard.vue";

export default {
  name: "PlayView",
  components: {
    HeaderComponent,
    GameBoard,
    SelectionNumbersBoard,
  },
};
</script>
