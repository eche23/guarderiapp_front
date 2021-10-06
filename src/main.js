import Vue from 'vue';
import App from './App.vue';
import router from './router'
import store from './store';
import firebase from 'firebase';
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

let firebaseConfig = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  projectId: process.env.VUE_APP_PROJECTID,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_APPID,
};

firebase.initializeApp(firebaseConfig);

console.log(firebaseConfig);

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
