import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "@/assets/styles.css";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// import { firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyaaJAqoYCeHna-4T7kPFNd1SFXhhyK3s",
  authDomain: "pentaguess.firebaseapp.com",
  projectId: "pentaguess",
  storageBucket: "pentaguess.appspot.com",
  messagingSenderId: "21880440146",
  appId: "1:21880440146:web:609eef4178454cdb53668b",
  measurementId: "G-LTFE1Q69GH",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = initializeApp(firebaseConfig);

console.log(app);
console.debug(analytics);
console.debug(auth);

console.log("db instance");
console.log(db);

Vue.config.productionTip = false;
// Vue.use(router);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
