<template>
  <div class="bg-stone-300 rounded-xl shadow border m-5 gap-4 place-items-center">
    <div class="bg-yellow-400 grid grid-cols-4 " v-for="number in selectedNumbers" :key="number">
      <span class="font-bold decoration-red-950 col-span-3">{{ number }}</span>
      <button class="bg-stone-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
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
      this.$router.push({ name: 'live' });

    },
  },
};
</script>