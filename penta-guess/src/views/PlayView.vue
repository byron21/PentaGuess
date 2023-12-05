<template>
  <div class="play">
    <HeaderComponent></HeaderComponent>
    <!-- <GreetComponent greet-title="Penta Guess"></GreetComponent> -->
    <div class="grid grid-cols-2">
      <GameBoard @select="addSelectedNumber"></GameBoard>

      <SelectionNumbersBoard  @remove="removeSelectedNumber"></SelectionNumbersBoard>
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
  data() {
    return {
      selectedNumbers: [],
    };
  },
  methods: {
    addSelectedNumber(number) {
      if (this.selectedNumbers.length < 5 && !this.selectedNumbers.includes(number)) {
        this.selectedNumbers.push(number);
      }
    },
    removeSelectedNumber(number) {
      const index = this.selectedNumbers.indexOf(number);
      if (index !== -1) {
        this.selectedNumbers.splice(index, 1);
      }
    },
  },
  mounted(){
    console.log("mounted email value:");
    if(this.$store.state.userEmail === ""){
      this.$router.push({ name: 'home' });
    }
  }
};
</script>
