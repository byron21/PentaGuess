<template>
  <div class="play">
    <HeaderComponent></HeaderComponent>




    <transition name="fade">
      <div v-if="isModalVisible">
        <div @click="onToggle" class="absolute bg-black opacity-70 inset-0 z-0"></div>
        <div class="w-full max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
          <div>
            <div class="text-center p-3 flex-auto justify-center leading-6">
              <img src="../assets/icon.png" alt="finishIcon" />
              <h2 class="text-2xl font-bold py-4">20€ Winning Ticket</h2>
              <p class="text-md text-gray-500 px-8">
                Congratulations! You found {{ this.countIdenticalNumbers }} / 5 numbers!
              </p>
            </div>
            <div class="p-3 mt-2 text-center space-x-4 md:block">
              <button
                class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100">
                Save
              </button>
              <button @click="onToggle"
                class="mb-2 md:mb-0 bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>





    <h2 v-show="!hideCountdown" class="font-mono text-6xl font-bold text-orange-400 rounded-full bg-gray-800 p-5 m-5">
      {{ countDown }}
    </h2>

    <div class="grid grid-cols-2">
      <div class="bg-stone-300 rounded-xl shadow border m-5 p-5 grid grid-cols-3 gap-2 place-items-center">Game Numbers
        <h1 class="font-mono text-6xl font-bold text-orange-400 rounded-full bg-gray-800 p-5 m-5">
          {{ systemNumbers }}
        </h1>
      </div>
      <div class="bg-stone-300 rounded-xl shadow border m-5 p-5 grid grid-cols-3 gap-2 place-items-center">Your Numbers
        <h1 class="font-mono text-6xl font-bold text-orange-400 rounded-full bg-gray-800 p-5 m-5">
          {{ selectedNumbers }}
        </h1>
      </div>
    </div>




    <div v-show="hideCountdown">
      <h3>Identical Numbers</h3>
      <p>Count: {{ this.countIdenticalNumbers }}</p>

    </div>






  </div>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: "LiveDraw",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      randomNumberCountDown: 4,
      countDown: 3,
      hideCountdown: false,
      countIdenticalNumbers: 0,
      systemNumbers : [],
      isOpen: false,
    };
  },
  methods: {
    countDownTimer: function () {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      } else {
        this.hideCountdown = true;
        this.startRandomSelection();
      }
    },
    randomNumberTimer: function () {
      if (this.randomNumberCountDown > 0) {
        setTimeout(() => {
          this.randomNumberCountDown -= 1;
          this.randomNumberTimer();
        }, 1000);
      } else {
        console.log("End of random numbers generation!");
      }
    },
    startRandomSelection: function () {


      console.log("Starting random selection of numbers:");
      const availableNumbers = Array.from({ length: 30 }, (_, i) => i + 1);

      for (let i = 0; i < 5; i++) {
        this.randomNumberTimer();
        const randomIndex = Math.floor(Math.random() * availableNumbers.length);
        const selectedNumber = availableNumbers.splice(randomIndex, 1)[0];
        this.systemNumbers.push(selectedNumber);
      }
      console.log("System NUMBERS end:" + this.systemNumbers);

      const intersection = this.systemNumbers.filter(number => this.selectedNumbers.includes(number));
      console.log(intersection);
      this.countIdenticalNumbers = intersection.length;
      this.isOpen = true;
    },
    onToggle() {
      this.isOpen = !this.isOpen;
    }
  },
  computed: {
    selectedNumbers() {
      return this.$store.state.selectedNumbers;
    },
    isModalVisible() {
      return this.isOpen;
    }
  },
  watch: {
    // Watch for changes in selectedNumbers and log the updated value
    selectedNumbers(newSelectedNumbers) {
      console.log("Updated Selected Numbers from Vuex:", newSelectedNumbers);
    },
  },
  mounted() {
    if (this.selectedNumbers.length > 0) {
      this.countDownTimer();
      console.log("Initial Selected Numbers from Vuex:", this.selectedNumbers);
    }
    else {
      this.$router.push({ name: 'play' });
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
</style>
