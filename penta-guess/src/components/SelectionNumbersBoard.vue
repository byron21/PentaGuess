<template>
  <div class="bg-stone-300 rounded-xl shadow border m-5 gap-4 place-items-center">
    <div v-for="number in selectedNumbers" :key="number">
      <span>{{ number }}</span>
      <button
        class="rounded-md bg-amber-950 ml-6 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-900 focus-visible:outline focus-visible:outline-2"
        @click="removeNumber(number)">
        Remove</button>
    </div>

    <!-- :disabled="selectedNumbers.length !== 5" -->
    <button type="button" :class="this.selectedNumbers.length !== 5 ? 'cursor-not-allowed' : ''"
      class="rounded-md bg-amber-950 ml-6 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-900 focus-visible:outline focus-visible:outline-2 submit-custom disabled:opacity-30"
      @click="submitSlip(selectedNumbers)" :disabled="this.selectedNumbers.length !== 5">
      Submit</button>
  </div>
</template>
<script>

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faRandom as fasRandom } from '@fortawesome/free-solid-svg-icons';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
// library.add(faTrash);
// library.add(fasRandom);

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
      // before using vuex store
      // this.$emit('remove', number);

      // Using vuex store
      this.$store.commit('removeSelectedNumber', number);

    },
    clearNumbers() {
      // Dispatch an action to commit the mutation
      this.$store.commit('clearSelectedNumbers');
    },
    submitSlip(numbers) {
      console.log("selected numbers are:");
      console.log(numbers);
      // this.$emit('remove', number);
      window.location.href = "/live?numbers=" + this.selectedNumbers;
      localStorage.setItem(
        "betslipNumbers",
        JSON.stringify(this.selectedNumbers)
      );
    },
  },
};
</script>

<style>
.submit-custom {
  display: block;
  position: relative;
  bottom: -150px;
  left: 200px;

  /* tailwind css */
  /* @apply rounded-md bg-amber-950 ml-6 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-900 focus-visible:outline focus-visible:outline-2; */
}
</style>