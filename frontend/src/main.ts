import { Constants } from './Constants';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import VueTagManager from 'vue-tag-manager';

const disableStr = `ga-disable-${Constants.GA_ID}`;
if (document.cookie.indexOf(disableStr + '=true') > -1) {
  (window as any)[disableStr] = true;
}

// TURN THIS OFF IN PRODUCTION
Vue.config.productionTip = true;

Vue.use(VueTagManager, {
    gtmId: Constants.GTM_ID,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');



