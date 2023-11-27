<template>
  <div class="bg-blue-300 rounded-full w-6 h-6">
   {{ number }}
  </div>
</template>
<script>
export default {
  name: "BallComponent",
  props: {
    number: String,
  },
};
</script>