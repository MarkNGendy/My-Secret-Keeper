import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCcEVAnqFVhfaDIaJL7tJACzZ8sXOJUGTM",
  authDomain: "my-secret-keeper-dev.firebaseapp.com",
  projectId: "my-secret-keeper-dev",
  storageBucket: "my-secret-keeper-dev.appspot.com",
  messagingSenderId: "129370946291",
  appId: "1:129370946291:web:91c86e38fbafe7999f5586",
  measurementId: "G-1W46232DB7",
};

initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
