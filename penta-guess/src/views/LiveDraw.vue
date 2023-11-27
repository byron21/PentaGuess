<template>
  <div class="play">
    <HeaderComponent></HeaderComponent>
    <h2 v-show="!hideCountdown" class="font-mono text-6xl font-bold text-orange-400 rounded-full bg-gray-800 p-5 m-5">
      {{ countDown }}
    </h2>
    <GameBoard v-show="hideCountdown"></GameBoard>
  </div>
</template>

<script>
// import GreetComponent from "@/components/GreetComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import GameBoard from "@/components/GameBoard.vue";

export default {
  name: "LiveDraw",
  components: {
    HeaderComponent,
    GameBoard,
  },
  data() {
    return {
      countDown: 10,
      hideCountdown: false
    }
  },
  methods: {
    countDownTimer: function () {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1
          this.countDownTimer()
          console.log("countdown..."+this.countDown);
        }, 1000)
      }
      else{
        this.hideCountdown = true;
        this.startRandomSelection();
      }
    },
    startRandomSelection: function () {
      console.log("Random select numbers:");
    },
  },
  created() {
    this.countDownTimer();
  }
};
</script>
