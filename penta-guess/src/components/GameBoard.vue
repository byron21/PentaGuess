<template>
  <!-- <div class="bg-stone-300 rounded-xl shadow border m-5 grid grid-cols-3 gap-4 place-items-center">
    <div v-for="number in 30" :key="number">
      <BallNumber :number="number"></BallNumber>
    </div>
  </div> -->
  <div class="bg-stone-300 rounded-xl shadow border m-5 p-5 grid grid-cols-3 gap-2 place-items-center">
    <button @click="selectNumber(number)" class="bg-amber-950 hover:bg-gray-400 text-white hover:text-black cursor-pointer rounded-full w-8 h-8 leading-8"
      v-for="number in numbers" :key="number">
      {{ number }}
  </button>
  </div>
</template>
<script>
// import BallNumber from "@/components/BallNumber.vue";
export default {
  name: "GameBoard",
  components: {
    // BallNumber
  },
  data() {
    return {
      numbers: Array.from({ length: 30 }, (_, i) => i + 1),
    };
  },
  methods: {
    selectNumber(number) {
      // this.$emit('select', number);
      console.log('Before addSelectedNumber number - Vuex Store State:', this.$store.state);
      this.$store.commit('addSelectedNumber', number);
      console.log('After addSelectedNumber number - Vuex Store State:', this.$store.state);


      // this.$store.commit('addSelectedNumber', number);
    },
  },
};
</script>