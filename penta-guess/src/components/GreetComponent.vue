<template>
  <div class="flex bg-gray-200 rounded-xl shadow border p-8 m-10">
    <img class="mx-auto h-40 w-auto" src="../assets/logo.jpg" alt="logo_img">
    <p class="text-7xl text-gray-700 font-bold mb-5 "> <span
        class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
        {{ greetTitle }}
      </span></p>
  </div>
</template>
<script>
export default {
  name: "GreedComponent",
  props: {
    greetTitle: String,
  },
};
</script>