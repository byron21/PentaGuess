<template>
  <div id="pl" class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">

      <h1 class="text-5xl">🅿🅴🅽🆃🅰 🅶🆄🅴🆂🆂</h1>
      <img class="mx-auto h-40 w-auto" src="@/assets/icon.png" alt="pentaguessLogo" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <!-- <form class="space-y-6" @submit.prevent="submit" action="submit" method="POST"> -->
      <div>
        <label for="email" class="flex items-center justify-between">Email address</label>
        <div class="mt-2">
          <input v-model="form.email" id="email" name="email" type="email" autocomplete="email" required=""
            class="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

          <!-- <div>
              Email is {{ isValidEmail ? 'valid' : 'invalid' }}
            </div> -->

        </div>
      </div>

      <ToastNotification ref="toast" :message="toastMessage" :duration="toastDuration" />

      <div class="mt-4">
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
        <button @click="login"
          class="mt-4 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
          in</button>
      </div>
      <!-- </form> -->

      <p class="mt-10 text-center text-sm text-gray-500">
        No account?
        <a href="/register" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register now</a>
      </p>
    </div>

    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import axios from 'axios';
import ToastNotification from './ToastNotification.vue';
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "LoginComponent",
  props: {
    showToastSuccess: Boolean,
  },
  components: {
    ToastNotification,
    FooterComponent
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
  computed: {
    isValidEmail() {
      return /^[^@]+@\w+(\.\w+)+\w$/.test(this.form.email);
    }
  },
  methods: {
    async login() {
      if (this.form.email != '' && this.form.password != '' && this.isValidEmail) {
        axios.post(process.env.VUE_APP_FIREBASE_API_LOGIN_URL + "?key=" + process.env.VUE_APP_FIREBASE_API_KEY, this.form)
          .then(function (response) {
            localStorage.setItem(
              "refreshToken",
              JSON.stringify(response.refreshToken)
            );
            this.$store.commit('saveUserEmail', this.form.email);
            this.$store.commit('loginUser', true);
            this.$router.push({ name: 'play' }).catch(() => { });
          }.bind(this)).catch((error) => {
            this.showToastError(error);
          });
      }
    },
    showToastError(error) {
      this.toastMessage = error?.response?.data?.error?.message;
      this.$refs.toast.show(false);
    }
  },
  mounted() {
    if(this.showToastSuccess){
      this.toastMessage = 'User registered';
      this.$refs.toast.show(true);
    }
    if (this.$store.state.userEmail !== "") {
      this.$router.push({ name: 'play' }).catch(() => { });
    }
  },
};
</script>
