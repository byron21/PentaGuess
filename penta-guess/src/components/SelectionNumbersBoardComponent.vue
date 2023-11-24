<template>
  <div class="bg-red-200 rounded-xl shadow border m-5 grid grid-cols-5 gap-4 place-items-center ...">
   <p>Selected Numbers</p>
  </div>
</template>
<script>
export default {
  name: "SelectionNumbersBoardComponent",
  props: {
    greetTitle: String,
  },
};
</script>