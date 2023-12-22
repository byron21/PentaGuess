<template>
  <div class="bg-cyan-600 text-white rounded-full w-6 h-6">
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