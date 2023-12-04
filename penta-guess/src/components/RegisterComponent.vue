<template>
  <div id="player-registration" class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <div class="flex">
      <img class="w-2/3" src="../assets/icon.png" />
      <h1 class="text-3xl font-bold p-10">Player Registration</h1>
    </div>
    <form class="space-y-6" @submit.prevent="submit" action="submit" method="POST">
      <div>
        <label for="email" class="flex items-center justify-between">Email address</label>
        <div class="mt-2">
          <input v-model="rl_email" id="email" name="email" type="email" autocomplete="email" required=""
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
        </div>
        <div class="mt-2">
          <input v-model="rl_password" id="password" name="password" type="password" autocomplete="current-password"
            required=""
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <button @click="register"
          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register
          Now</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "RegisterComponent",
  props: {
    msg: String,
  },
  data() {
    return {
      rl_email: '',
      rl_password: '',
    }
  },
  methods: {
    register() {
      if (this.rl_email !== '' && this.rl_password !== '') {
        const data = JSON.stringify({
          email: this.rl_email,
          password: this.rl_password,
          returnSecureToken: true,
        });
        let xhr = new XMLHttpRequest();
        // todo hide api key
        xhr.open(
          "POST",
          process.env.VUE_APP_FIREBASE_API_SINGUP_URL+"?key=" + process.env.VUE_APP_FIREBASE_API_KEY
        );
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onload = function () {
          console.log(xhr.response);
          if (this.status == 200) {
            // console.log(this.responseText);
            alert("User registered!");
            var response = {};
            response = JSON.parse(xhr.response);
            // console.log(response);
            // localStorage.setItem("token", json['token'])
            // resolve(JSON.parse(xhr.response));
            localStorage.setItem(
              "refreshToken",
              JSON.stringify(response.refreshToken)
            );
            // console.log(response.refreshToken);
            localStorage.setItem("idToken", JSON.stringify(response.idToken));
            // console.log(localStorage.getItem("refreshToken"));
            window.location.href = "/";
          } else if (this.status == 400) {
            var responseError = {};
            responseError = JSON.parse(xhr.response);
            alert(responseError.message);
          } else {
            console.log("not 200 code");
          }
        };
        xhr.onerror = function () {
          console.log("error!!");
        };
        xhr.send(data);
      }
    },
  },
};
</script>
