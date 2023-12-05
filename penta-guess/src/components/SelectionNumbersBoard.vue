<template>
  <div class="border-solid border-black bg-stone-300 rounded-xl shadow border-2 m-5 gap-4  place-items-center">
    <div class="bg-amber-900 grid grid-cols-4 border-solid border-2 border-stone-200 rounded"
      v-for="number in selectedNumbers" :key="number">
      <span class="font-bold text-white col-span-3 leading-10">{{ number }}</span>
      <button class="bg-stone-200 hover:bg-gray-400 text-gray-800 font-bold" @click="removeNumber(number)">
        <img width="20" height="20" src="../assets/trash.svg" alt="trash--v1" />
      </button>
    </div>
    <div class="relative h-[17rem]">
      <!-- <button type="button" :class="this.selectedNumbers.length !== 5 ? 'cursor-not-allowed' : ''"
        class="rounded-md bg-amber-950  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-900 focus-visible:outline focus-visible:outline-2 disabled:opacity-30 absolute inset-x-0 top-0 h-16 w-20"
        @click="clearNumbers()" :disabled="this.selectedNumbers.length == 0">
        Clear All</button> -->

      <button type="button" :class="this.selectedNumbers.length !== 5 ? 'cursor-not-allowed' : ''"
        class="rounded-md bg-amber-950  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-900 focus-visible:outline focus-visible:outline-2 disabled:opacity-30 absolute inset-x-120 bottom-0 h-16 w-20"
        @click="submitSlip(selectedNumbers)" :disabled="this.selectedNumbers.length !== 5">
        Submit</button>
    </div>

  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: "SelectionNumbersBoard",
  props: {
    greetTitle: String,
  },
  data() {
    return {
      isValidBetslip: false,
    }
  },
  computed: {
    selectedNumbers() {
      return this.$store.state.selectedNumbers;
    },
  },
  methods: {
    removeNumber(number) {
      // Using vuex store
      this.$store.commit('removeSelectedNumber', number);
    },
    clearNumbers() {
      this.$store.commit('clearSelectedNumbers');
    },
    submitSlip(numbers) {
      console.log("selected numbers are:");
      console.log(numbers);
      const userEmail = this.$store.state.userEmail;
      const betData = JSON.stringify({
        "userName": userEmail,
        "betStatus": 0,
        "numbers": numbers,
        "playedOn": 1701431898,
        "drawFinish": true,
        "drawDate": 1701431598
      });

      console.log("saved bet for user" + userEmail);
      axios.post(process.env.VUE_APP_FIREBASE_BET_URL, betData)
        .then(function (response) {
          console.log(response);
        }.bind(this)).catch(() => {
          alert("Failed to save bet");
        });

      this.$router.push({ name: 'live' });
    },
  },
};
</script>