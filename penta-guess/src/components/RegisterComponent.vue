<template>
  <div id="player-registration" class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    
    <div class="flex">
      <img @click="goHome" class="w-48 cursor-pointer" src="../assets/icon.png" />
      <h1 class="text-3xl font-bold p-10">Player Registration</h1>
    </div>
    <!-- <form class="space-y-6" @submit.prevent="submit" action="submit" method="POST"> -->
      <div>
        <label for="email" class="flex items-center justify-between">Email address</label>
        <div class="mt-2">
          <input v-model="form.email" id="email" name="email" type="email" autocomplete="email" required=""
            class="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div class="mt-2">
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
        </div>
        <div class="mt-2">
          <input v-model="form.password" id="password" name="password" type="password" autocomplete="current-password"
            required=""
            class="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <button @click="register"
          class="mt-4 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register
          Now</button>
      </div>
    <!-- </form> -->

    <ToastNotification ref="toast" :message="toastMessage" :duration="toastDuration" />

  </div>
</template>
<script>
import axios from 'axios';
import ToastNotification from './ToastNotification.vue';

export default {
  name: "RegisterComponent",
  props: {
    msg: String,
  },
  components : {
    ToastNotification
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
        returnSecureToken: true,
      },
      toastMessage: '',
      toastDuration: 6000,
    }
  },
  methods: {
    register() {
      if (this.form.email !== '' && this.form.password !== '') {
        axios.post( process.env.VUE_APP_FIREBASE_API_SINGUP_URL+"?key=" + process.env.VUE_APP_FIREBASE_API_KEY, this.form)
          .then(function (response) {
            localStorage.setItem(
              "refreshToken",
              JSON.stringify(response.refreshToken)
            );
            localStorage.setItem("idToken", JSON.stringify(response.idToken));
            // window.location.href = "/";
            this.$router.push({ name: 'login', params: {showToastSuccess: true } });
          }.bind(this)).catch((error) => {
            
            // console.log("error on register call");
            // console.log(error.response.status);
            // console.log(error.response);
            // console.log(error.response.data.error.message);

            this.toastMessage = error?.response?.data?.error?.message;
            this.$refs.toast.show(false);
          });
      }
    },
    goHome(){
      this.$router.push({ name: 'login' });
    }
  },
};
</script>
