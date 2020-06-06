// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import axios from '/axios'

Vue.use(VueRouter);
// Vue.prototype.$aixos = axios;

import store from './store'
// import Loading from './components/Loading.vue'
import Registration from './components/Registration.vue'
import PasswordRecover from './components/PasswordRecover.vue'
import NewPassword from './components/NewPassword.vue'
import Success from './components/Success.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'loading',
    //   component: Loading
    // },
    {
      path: '/',
      name: 'registration',
      component: Registration
    },
    {
      path: '/sendEmail',
      name: 'sendEmail',
      component: PasswordRecover
    },
    {
      path: '/success',
      name: 'success',
      component: Success
    },
    {
      path: '/resetPassword',
      name: 'resetPassword',
      component: NewPassword
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router, 
  store,
  render: h => h(App),
}).$mount('#app')

