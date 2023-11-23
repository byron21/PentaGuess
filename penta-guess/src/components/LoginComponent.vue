<template>
  <div class="login">
    <div class="w-full max-w-md">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Username">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" placeholder="******************">
        </div>
        <div class="flex items-center justify-between">
          <button
            class="btn btn-blue m-2 bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..." 
            type="button" @click="login">Login
          </button>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="btn btn-blue m-2 bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
            type="button" @click="register">Register
          </button>
        </div>
      </form>
    </div>

    <!-- <div>
      <h2>No account ?</h2>
      <button class="btn btn-blue rounded-full" on-click="register()">Register</button>
    </div> -->

    <!-- <button class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Button
    </button> -->
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  props: {
    msg: String,
  },
  methods: {
    login() {
      const data = JSON.stringify({
        email: "byron@arx.net",
        password: "byron123",
        returnSecureToken: true,
      });
      console.log("login pressed");
      let xhr = new XMLHttpRequest();
      xhr.open(
        "POST",
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDyaaJAqoYCeHna-4T7kPFNd1SFXhhyK3s"
      );
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      xhr.onload = function () {
        if (this.status == 200) {
          console.log(this.responseText);
          alert("you are in!");
          var response = {};
          response = JSON.parse(xhr.response);
          console.log(response);
          // localStorage.setItem("token", json['token'])
          // resolve(JSON.parse(xhr.response));
          localStorage.setItem(
            "refreshToken",
            JSON.stringify(response.refreshToken)
          );
          console.log(response.refreshToken);
          localStorage.setItem("idToken", JSON.stringify(response.idToken));

          alert(localStorage.getItem("refreshToken"));
        } else if (this.status == 400) {
          alert(this.tostr);
        } else {
          console.log("not 200 code");
        }
      };
      xhr.onerror = function () {
        console.log("error!!");
        // reject({
        //   status: this.status,
        //   statusText: xhr.statusText,
        //   errorCode: 500,
        // });
      };
      xhr.send(data);
    },
    register() { },
  },
};
</script>
