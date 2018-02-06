// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
const styleSheet = require('./assets/styles.css');

Vue.use(VueResource);

if(process.env.NODE_ENV === 'development'){
  Vue.http.options.root  = 'http://localhost:3000/';
}
else{
  Vue.http.options.root  = 'https://unc-lost-and-found.herokuapp.com/';
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
