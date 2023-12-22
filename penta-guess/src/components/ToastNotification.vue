<template>
    <div v-if="isVisible" class="toast-cmp" :class="isSuccess ? 'success-color' : 'fail-color'">
      {{ message }}
    </div>
  </template>
  
  <script>
  export default {
    props: {
      message: String,
      duration: {
        type: Number,
        default: 4000,
      }
    },
    data() {
      return {
        isVisible: false,
        isSuccess: false
      };
    },
    mounted() {
      
    },
    methods: {
      show(isSuccessToast) {
        this.isVisible = true;
        this.isSuccess = isSuccessToast;
        setTimeout(() => {
          this.isVisible = false;
        }, this.duration);
      },
    },
  };
  </script>
  
  <style scoped>

  .toast-cmp {
    color: #fff;
    padding: 1rem;
    position: fixed;
    top: 1rem;
    right: 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .success-color {
    background-color: rgb(19, 77, 19);
  }
  .fail-color {
    background-color: gray;
  }
  </style>
  