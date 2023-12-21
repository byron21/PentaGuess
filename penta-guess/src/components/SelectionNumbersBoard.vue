<template>
  <!-- <div class="container border-solid  bg-stone-300 rounded-xl shadow border-2 m-5 gap-4  place-items-center">
    <div class="bg-cyan-600 grid grid-cols-4 border-solid border-2 border-stone-200 rounded-xl"
      v-for="number in selectedNumbers" :key="number">
      <span class="font-bold text-white col-span-3 leading-10">{{ number }}</span>
      <button class="bg-stone-200 hover:bg-gray-400 text-gray-800 font-bold" @click="removeNumber(number)">
        <img width="20" height="20" src="../assets/trash.svg" alt="trash--v1" />
      </button>
    </div>
    <div>
      <button type="button" :class="this.selectedNumbers.length !== 5 ? 'cursor-not-allowed' : ''"
        class="copyright rounded-md bg-cyan-700  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-600   focus-visible:outline focus-visible:outline-2 disabled:opacity-30 inset-x-120 bottom-0 h-16 w-200"
        @click="clearNumbers()" :disabled="this.selectedNumbers.length == 0">
        Clear All</button>

      <button type="button" :class="this.selectedNumbers.length !== 5 ? 'cursor-not-allowed' : ''"
        class="copyright rounded-md bg-cyan-700  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-600   focus-visible:outline focus-visible:outline-2 disabled:opacity-30 inset-x-120 bottom-0 h-16 w-20"
        @click="submitSlip()" :disabled="this.selectedNumbers.length !== 5">
        Submit</button>
    </div>
  </div> -->

  <!-- <div id="container">
    <div style="height: 100%;" class="bg-stone-300 rounded-xl shadow border-2 m-5 gap-4">
      <div class=" border-solid  shadow border-2 m-5 gap-4  place-items-center">
        <div class="bg-cyan-600 grid grid-cols-4 border-solid border-2 border-stone-200 rounded-xl"
          v-for="number in selectedNumbers" :key="number">
          <span class="font-bold text-white col-span-3 leading-10">{{ number }}</span>
          <button class="bg-stone-200 hover:bg-gray-400 text-gray-800 font-bold" @click="removeNumber(number)">
            <img width="20" height="20" src="../assets/trash.svg" alt="trash--v1" />
          </button>
        </div>
        <div>

        </div>
      </div>
    </div>
    <div id="copyright" style="position:relative;top:-100px">
    

      <button type="button" :class="this.selectedNumbers.length !== 5 ? 'cursor-not-allowed' : ''"
        class="copyright rounded-md bg-cyan-700  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-600   focus-visible:outline focus-visible:outline-2 disabled:opacity-30 inset-x-120 bottom-0 h-16 w-20"
        @click="submitSlip()" :disabled="this.selectedNumbers.length !== 5">
        Submit</button>
    </div>
  </div> -->


  <div class="selection-container border-solid  bg-stone-300 rounded-xl shadow border-2 m-5 gap-4 ">
    <div class="bg-cyan-600 grid grid-cols-4 border-solid border-2 border-stone-200 rounded-xl"
      v-for="number in selectedNumbers" :key="number">
      <span class="font-bold text-white col-span-3 leading-10">{{ number }}</span>
      <button class="bg-stone-200 hover:bg-gray-400 text-gray-800 font-bold m-auto" @click="removeNumber(number)">
        <img width="20" height="20" src="../assets/trash.svg" alt="trash-v1" />
      </button>
    </div>
    <div class="submit-button">
      <button type="button" :class="this.selectedNumbers.length !== 5 ? 'cursor-not-allowed' : ''"
        class="rounded-md bg-cyan-700 text-white hover:bg-cyan-600 disabled:opacity-30 h-16 w-32"
        @click="submitSlip()" :disabled="this.selectedNumbers.length !== 5">
        Submit</button>
    </div>
  </div>
</template>


<style>
.selection-container {
  position: relative;

}

.submit-button {
  position: absolute;
  bottom: 0;
  left: 44%;
}
</style>
<script>

export default {
  name: "SelectionNumbersBoard",
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
    submitSlip() {
      this.$router.push({ name: 'live' });
    },
  },
};
</script>