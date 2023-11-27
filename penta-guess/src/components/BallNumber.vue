<template>
  <div class="bg-amber-950 text-white rounded-full w-6 h-6">
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