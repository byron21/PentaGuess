<template>
  <div class="bg-gray-200 rounded-xl shadow border m-5 grid grid-cols-3 gap-4 place-items-center ...">
    <div v-for="n in 30" :key="n">
      <BallNumber :number="n"></BallNumber>
    </div>
  </div>
</template>
<script>
import BallNumber from "@/components/BallNumber.vue";
export default {
  name: "GameBoard",
  components: {
    BallNumber
  },
};
</script>