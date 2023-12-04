<template>
  <div class="border-solid border-black bg-stone-300 rounded-xl shadow border-2 m-5 gap-4  place-items-center">
    <div class="bg-amber-900 grid grid-cols-4 border-solid border-2 border-stone-200 rounded" v-for="number in selectedNumbers" :key="number">
      <span class="font-bold text-white col-span-3 leading-10">{{ number }}</span>
      <button class="bg-stone-200 hover:bg-gray-400 text-gray-800 font-bold"
        @click="removeNumber(number)">
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

      const betData = JSON.stringify({
        "userName": "byron2@arx.net",
        "betStatus": 0,
        "numbers": numbers,
        "playedOn" : 1701431898,
        "drawFinish" : true,
        "drawDate" : 1701431598
      });
      this.$router.push({ name: 'live' });
      let xhr = new XMLHttpRequest();
        xhr.open(
          "POST",
          process.env.VUE_APP_FIREBASE_BET_URL
        );
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onload = function () {
          if (this.status == 200) {
            var response = {};
            response = JSON.parse(xhr.response);
            console.log(response);
          } else if (this.status == 400) {
            alert("Wrong data");
          } else {
            console.log("not 200 code");
          }
        };
        xhr.onerror = function () {
          console.log("xhr error!!");
        };
        xhr.send(betData);

    },
  },
};
</script>