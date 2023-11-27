<template>
  <!-- <div class="bg-stone-300 rounded-xl shadow border m-5 grid grid-cols-3 gap-4 place-items-center">
    <div v-for="number in 30" :key="number">
      <BallNumber :number="number"></BallNumber>
    </div>
  </div> -->
  <div class="bg-stone-300 rounded-xl shadow border m-5 p-5 grid grid-cols-3 gap-4 place-items-center">
    <div @click="selectNumber(number)" class="bg-amber-950 text-white cursor-pointer rounded-full w-8 h-8 leading-8" v-for="number in numbers" :key="number">
      {{ number }}
    </div>
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
      this.$emit('select', number);
    },
  },
};
</script>