<template>
  <div class="bg-gray-200 rounded-xl shadow border m-5 grid grid-cols-5 gap-4 place-items-center ...">
    <div v-for="n in 30" :key="n">
      <div>{{ n }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GameBoardComponent",
  props: {
    greetTitle: String,
  },
};
</script>