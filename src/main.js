import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import './app.css'

Vue.config.productionTip = false

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAAtfjtXDqIalR4IRCiPODjTCv6mYuw0MQ",
    authDomain: "chat-app-7923c.firebaseapp.com",
    databaseURL: "https://chat-app-7923c.firebaseio.com",
    projectId: "chat-app-7923c",
    storageBucket: "chat-app-7923c.appspot.com",
    messagingSenderId: "614030290400",
    appId: "1:614030290400:web:88191511cac1323a1ccf85",
    measurementId: "G-29E2NFFDR9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

new Vue({
  render: h => h(App),
}).$mount('#app')
