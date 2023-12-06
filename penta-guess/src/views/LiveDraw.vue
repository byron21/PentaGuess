<template>
  <div class="play">
    <HeaderComponent></HeaderComponent>

    <h2 v-show="!hideCountdown" class="font-mono text-6xl font-bold text-white rounded-full bg-gray-800 p-5 m-5 border-4 border-dashed border-white">
      {{ countDown }}
    </h2>
    <h2 v-show="hideCountdown" class="font-mono text-6xl font-bold text-white rounded-full bg-gray-800 p-5 m-5 border-4 border-dashed border-yellow-400">
      Draw is Live
    </h2>

    <div class="grid grid-cols-3">




      <div class=" font-bold rounded-xl shadow border m-3 p-3 grid grid-cols-3 place-items-center">Game Numbers
        <h1 v-for="randomNumber in systemNumbers" :key="randomNumber"
          class="w-16 font-mono text-3xl font-bold text-orange-400 rounded-full bg-gray-800 p-3 m-3">
          {{ randomNumber }}
        </h1>
      </div>


      <div class="  m-3 p-3 place-items-center">
        <h1 v-show="!hideCountdown" class="font-mono text-xl font-bold text-black ">
          Awakening your luck. Be patient...</h1>
      </div>



      <div class=" font-bold rounded-xl shadow border m-3 p-3 grid grid-cols-3  place-items-center">Your Numbers
        <h1 v-for="playerSelectedNumber in userNumbers" :key="playerSelectedNumber"
          class="w-16 font-mono text-3xl font-bold text-orange-400 rounded-full bg-gray-800 p-3 m-3">
          {{ playerSelectedNumber }}
        </h1>
      </div>



    </div>

    <div v-show="hideCountdown">
        <transition name="fade">
          <div>
            <div :class="this.winningBet ? 'border-green-700' : 'border-red-700'"
              class="w-full max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white border-2 border-dashed">
              <div>
                <div class="text-center p-3 flex-auto justify-center leading-6">
                  <img src="../assets/icon.png" alt="finishIcon" />

                  <p v-if="this.winningBet" class="text-2xl font-bold py-4">Winning Ticket</p>
                  <p v-else class="text-2xl font-bold py-4">No win this time!</p>

                  <p v-if="this.winningBet" class="text-md text-gray-500 px-8">
                    Congratulations! You found {{ this.countIdenticalNumbers }} / 5 numbers!
                  </p>
                  <p v-else class="text-md text-gray-500 px-8">
                    You found {{ this.countIdenticalNumbers }} / 5 numbers, try one more time
                  </p>

                </div>
                <div class="p-3 mt-2 text-center space-x-4 md:block">
                  <button @click="saveBet"
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
      </div>





    <!-- Win amount section -->
    <div class="absolute bottom-10 end-10">
      <div class="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700"
        role="alert">
        <div class="p-2 sm:p-4">
          <h3 class="text-xs text-gray-800 font-semibold sm:text-base dark:text-white">
            Ammount Won: {{ winAmmount }}€
          </h3>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import axios from 'axios';

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
      systemNumbers: [],
      isOpen: false,
      winningBet: false,
      winAmmount: 0,
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

      const intersection = this.systemNumbers.filter(number => this.userNumbers.includes(number));
      console.log(intersection);
      this.countIdenticalNumbers = intersection.length;
      if (intersection.length >= 3) {
        this.winningBet = true;
      }
      else {
        this.winningBet = false;
      }
      console.log("System Numbers:", this.systemNumbers);
      console.log("User Numbers:", this.userNumbers);
      console.log("Intersection:", intersection);
      console.log("Winning Bet", this.winningBet);

      this.isOpen = true;

      this.calculateWinAmount(intersection.length);
    },
    calculateWinAmount(matchedNumbers) {
      // if (matchedNumbers == 1) {
      //   this.winAmmount = 1;
      // }
      // else if (matchedNumbers == 2) {
      //   this.winAmmount = 2;
      // }
      if (matchedNumbers == 3) {
        this.winAmmount = 5;
      }
      else if (matchedNumbers == 4) {
        this.winAmmount = 10;
      }
      else if (matchedNumbers == 5) {
        this.winAmmount = 20;
      }
      console.log("Amount won:" + this.winAmmount);
    },
    onToggle() {
      this.isOpen = !this.isOpen;
      this.$store.commit('clearSelectedNumbers');
      this.$router.push({ name: 'play' });

      // window.location.href = "/play";
    },
    saveBet() {
      const userEmail = this.$store.state.userEmail;


      const datePLayed = Date.now() / 1000;
      const betData = JSON.stringify({
        "userName": userEmail,
        "betStatus": 0,
        "userNumbers": this.userNumbers,
        "playedOn": datePLayed,
        "systemNUmbers": this.systemNumbers,
        "amountWon": 0,
      });

      console.log("saved bet for user" + userEmail);
      axios.post(process.env.VUE_APP_FIREBASE_BET_URL, betData)
        .then(function (response) {
          console.log(response);
        }.bind(this)).catch(() => {
          alert("Failed to save bet");
        });

      this.$store.commit('clearSelectedNumbers');

      this.$router.push({ name: 'play' });
    }
  },
  computed: {
    userNumbers() {
      return this.$store.state.selectedNumbers;
    },
    isModalVisible() {
      return this.isOpen;
    }
  },
  watch: {
    // Watch for changes in selectedNumbers and log the updated value
    userNumbers(newSelectedNumbers) {
      console.log("Updated Selected Numbers from Vuex:", newSelectedNumbers);
    },
  },
  mounted() {
    if (this.userNumbers.length > 0) {
      this.countDownTimer();
      console.log("Initial Selected Numbers from Vuex:", this.userNumbers);
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
