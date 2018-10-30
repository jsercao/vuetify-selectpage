import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';
import App from './App.vue';
import VSelectPage from '../dist/vuetify-select-page';
import '../dist/vuetify-select-page.css';

Vue.use(Vuetify);
Vue.use(VSelectPage);

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
});
