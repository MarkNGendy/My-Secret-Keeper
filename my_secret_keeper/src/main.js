import { createApp } from 'vue'
import App from './App.vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcEVAnqFVhfaDIaJL7tJACzZ8sXOJUGTM",
  authDomain: "my-secret-keeper-dev.firebaseapp.com",
  projectId: "my-secret-keeper-dev",
  storageBucket: "my-secret-keeper-dev.appspot.com",
  messagingSenderId: "129370946291",
  appId: "1:129370946291:web:91c86e38fbafe7999f5586",
  measurementId: "G-1W46232DB7"
};

initializeApp(firebaseConfig);

createApp(App).mount('#app')
