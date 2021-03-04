import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'



import VueTextareaAutosize from 'vue-textarea-autosize';
Vue.use(VueTextareaAutosize);

import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoNHvhR0fRmf40nTwIaEqsxvd1LPbbT3A",
  authDomain: "vue-calendario-82bed.firebaseapp.com",
  projectId: "vue-calendario-82bed",
  storageBucket: "vue-calendario-82bed.appspot.com",
  messagingSenderId: "514248796828",
  appId: "1:514248796828:web:99eae4898ed2ed94e6db59"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
