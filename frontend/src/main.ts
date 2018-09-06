



import { Constants } from './Constants';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueGtm from 'vue-gtm';
import store from './store';
import './registerServiceWorker';

const disableStr = `ga-disable-${Constants.GA_ID}`;
if (document.cookie.indexOf(disableStr + '=true') > -1) {
  (window as any)[disableStr] = true;
}

Vue.config.productionTip = false;

Vue.use(VueGtm, {
  id: Constants.GTM_ID, // Your GTM ID
  debug: true,          // Whether or not display console logs debugs (optional)
  vueRouter: router,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');



