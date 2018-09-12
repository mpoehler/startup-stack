import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store/store';
import './registerServiceWorker';
import * as firebase from 'firebase/app';
import '@firebase/firestore';
import { firebaseConfig } from './Constants';

Vue.config.productionTip = true;

// init firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

// Initialize Vuex-Module to Firebase mappings here
// tslint:disable-next-line
store.dispatch('testData/openDBChannel').then(console.log).catch(console.error);
